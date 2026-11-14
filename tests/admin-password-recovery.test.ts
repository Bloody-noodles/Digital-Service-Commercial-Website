import assert from "node:assert/strict";
import test from "node:test";
import { clearRequestSupabaseSessionCookies } from "../src/lib/supabase/auth.ts";
import {
  attemptRecoveryEmail,
  categorizeRecoveryEmailError,
  completePasswordRecovery,
  RECOVERY_REQUEST_RECEIPT,
  handleRecoveryEmailRequest,
  RecoveryEmailRequestError,
  type RecoveryCleanupFailureCategory,
  type RecoveryOperations,
} from "../src/lib/supabase/password-recovery.ts";

const PASSWORD = "a sufficiently long test password";

function makeOperations(options?: {
  exchangedUserId?: string;
  exchangeError?: unknown;
  staffUserId?: string;
  staffLookupThrows?: boolean;
  updateError?: unknown;
  updateThrows?: boolean;
  signOutError?: unknown;
  signOutThrows?: boolean;
  cookieClearFails?: boolean;
}) {
  type RecoverySession = { userId: string; sessionId: string };
  let activeSession: RecoverySession | null = null;
  const consumedCodes = new Set<string>();
  const updates: Array<{ password: string; session: RecoverySession | null }> =
    [];
  const cleanupFailures: RecoveryCleanupFailureCategory[] = [];
  let signOutCalls = 0;
  let localCookieClearCalls = 0;

  const operations: RecoveryOperations = {
    async exchangeCodeForSession(code) {
      if (consumedCodes.has(code)) {
        return { error: { code: "invalid_grant" } };
      }
      consumedCodes.add(code);
      if (options?.exchangeError) return { error: options.exchangeError };
      activeSession = {
        userId: options?.exchangedUserId ?? "staff-user",
        sessionId: "recovery-session",
      };
      return { error: null };
    },
    async verifyActiveStaff() {
      if (options?.staffLookupThrows) throw new Error("private lookup detail");
      return Boolean(
        activeSession &&
        activeSession.userId === (options?.staffUserId ?? "staff-user"),
      );
    },
    async updatePassword(password) {
      updates.push({ password, session: activeSession });
      if (options?.updateThrows) throw new Error("private update detail");
      return { error: options?.updateError ?? null };
    },
    async signOut() {
      signOutCalls += 1;
      if (options?.signOutThrows) throw new Error("private sign-out detail");
      if (options?.signOutError) return { error: options.signOutError };
      activeSession = null;
      return { error: null };
    },
    async clearLocalSession() {
      localCookieClearCalls += 1;
      if (options?.cookieClearFails) return false;
      activeSession = null;
      return true;
    },
    logCleanupFailure(category) {
      cleanupFailures.push(category);
    },
  };

  return {
    operations,
    updates,
    consumedCodes,
    cleanupFailures,
    get signOutCalls() {
      return signOutCalls;
    },
    get localCookieClearCalls() {
      return localCookieClearCalls;
    },
    get activeSession() {
      return activeSession;
    },
  };
}

test("recovery update uses the same exchanged user and session", async () => {
  const fixture = makeOperations();
  const result = await completePasswordRecovery(
    fixture.operations,
    "single-use-code",
    PASSWORD,
  );

  assert.equal(result, "success");
  assert.equal(fixture.updates.length, 1);
  assert.deepEqual(fixture.updates[0].session, {
    userId: "staff-user",
    sessionId: "recovery-session",
  });
  assert.equal(fixture.activeSession, null);
  assert.equal(fixture.localCookieClearCalls, 1);
});

test("a different user's recovery session is rejected before password update", async () => {
  const fixture = makeOperations({
    exchangedUserId: "other-user",
    staffUserId: "staff-user",
  });
  const result = await completePasswordRecovery(
    fixture.operations,
    "other-users-code",
    PASSWORD,
  );

  assert.equal(result, "not_active_staff");
  assert.equal(fixture.updates.length, 0);
  assert.equal(fixture.activeSession, null);
  assert.equal(fixture.localCookieClearCalls, 1);
});

test("expired recovery code is rejected", async () => {
  const fixture = makeOperations({
    exchangeError: { code: "otp_expired" },
  });
  const result = await completePasswordRecovery(
    fixture.operations,
    "expired-code",
    PASSWORD,
  );

  assert.equal(result, "invalid_or_expired_code");
  assert.equal(fixture.updates.length, 0);
  assert.equal(fixture.localCookieClearCalls, 0);
});

test("a recovery code cannot be replayed", async () => {
  const fixture = makeOperations();
  const first = await completePasswordRecovery(
    fixture.operations,
    "one-time-code",
    PASSWORD,
  );
  const replay = await completePasswordRecovery(
    fixture.operations,
    "one-time-code",
    PASSWORD,
  );

  assert.equal(first, "success");
  assert.equal(replay, "invalid_or_expired_code");
  assert.equal(fixture.updates.length, 1);
});

test("invalid recovery session fails closed", async () => {
  const fixture = makeOperations({
    exchangeError: { code: "pkce_verifier_not_found" },
  });
  const result = await completePasswordRecovery(
    fixture.operations,
    "code-without-verifier",
    PASSWORD,
  );

  assert.equal(result, "invalid_or_expired_code");
  assert.equal(fixture.updates.length, 0);
});

test("inactive staff profile is rejected before password update", async () => {
  const fixture = makeOperations({ staffUserId: "inactive" });
  const result = await completePasswordRecovery(
    fixture.operations,
    "inactive-staff-code",
    PASSWORD,
  );

  assert.equal(result, "not_active_staff");
  assert.equal(fixture.updates.length, 0);
  assert.equal(fixture.activeSession, null);
});

test("staff verification failure clears the local session after sign-out read failure", async () => {
  const fixture = makeOperations({
    staffLookupThrows: true,
    signOutError: {
      name: "AuthSessionMissingError",
      message: "private session-read detail",
    },
  });
  const result = await completePasswordRecovery(
    fixture.operations,
    "staff-lookup-failure-code",
    PASSWORD,
  );

  assert.equal(result, "staff_verification_failed");
  assert.equal(fixture.updates.length, 0);
  assert.equal(fixture.localCookieClearCalls, 1);
  assert.equal(fixture.activeSession, null);
  assert.deepEqual(fixture.cleanupFailures, ["supabase_signout_failed"]);
  assert.equal(
    JSON.stringify(fixture.cleanupFailures).includes("private"),
    false,
  );
});

test("password update failure clears the local session when sign-out throws", async () => {
  const fixture = makeOperations({
    updateError: { code: "weak_password" },
    signOutThrows: true,
  });
  const result = await completePasswordRecovery(
    fixture.operations,
    "update-error-code",
    PASSWORD,
  );

  assert.equal(result, "password_update_failed");
  assert.equal(fixture.updates.length, 1);
  assert.equal(fixture.signOutCalls, 1);
  assert.equal(fixture.localCookieClearCalls, 1);
  assert.equal(fixture.activeSession, null);
  assert.deepEqual(fixture.cleanupFailures, ["supabase_signout_failed"]);
});

test("a successful password update reports unconfirmed remote revocation honestly", async () => {
  const fixture = makeOperations({
    signOutError: { message: "private provider detail" },
  });
  const result = await completePasswordRecovery(
    fixture.operations,
    "remote-revocation-error-code",
    PASSWORD,
  );

  assert.equal(result, "success_remote_revocation_failed");
  assert.equal(fixture.activeSession, null);
  assert.deepEqual(fixture.cleanupFailures, ["supabase_signout_failed"]);
});

test("password success is not reported when local cookie cleanup fails", async () => {
  const fixture = makeOperations({ cookieClearFails: true });
  const result = await completePasswordRecovery(
    fixture.operations,
    "cookie-clear-error-code",
    PASSWORD,
  );

  assert.equal(result, "password_updated_session_cleanup_failed");
  assert.deepEqual(fixture.cleanupFailures, ["local_cookie_cleanup_failed"]);
});

test("staff rejection reports cleanup failure instead of claiming a cleared session", async () => {
  const fixture = makeOperations({
    staffUserId: "inactive",
    cookieClearFails: true,
  });
  const result = await completePasswordRecovery(
    fixture.operations,
    "staff-cookie-clear-error-code",
    PASSWORD,
  );

  assert.equal(result, "session_cleanup_failed");
  assert.equal(fixture.updates.length, 0);
  assert.deepEqual(fixture.cleanupFailures, ["local_cookie_cleanup_failed"]);
});

test("Supabase cleanup expires session chunks and PKCE cookies without touching unrelated cookies", () => {
  const originalUrl = process.env.PUBLIC_SUPABASE_URL;
  const originalSiteUrl = process.env.PUBLIC_SITE_URL;
  process.env.PUBLIC_SUPABASE_URL = "https://audit-project.supabase.co";
  process.env.PUBLIC_SITE_URL = "https://business.example";

  try {
    const written: Array<{ name: string; value: string; options?: unknown }> =
      [];
    const cookies = {
      get: () => undefined,
      set: (name: string, value: string, options?: unknown) => {
        written.push({ name, value, options });
      },
    };
    const request = new Request(
      "https://business.example/api/admin/reset-password",
      {
        headers: {
          cookie:
            "sb-audit-project-auth-token.0=opaque; sb-audit-project-auth-token-flow-abc12345-code-verifier=opaque; unrelated=value",
        },
      },
    );
    const cleared = clearRequestSupabaseSessionCookies(request, cookies, [
      "sb-audit-project-auth-token.1",
    ]);

    assert.equal(cleared, true);
    assert.deepEqual(
      written.map(({ name }) => name).sort(),
      [
        "sb-audit-project-auth-token",
        "sb-audit-project-auth-token-code-verifier",
        "sb-audit-project-auth-token-flow-abc12345-code-verifier",
        "sb-audit-project-auth-token-flows-code-verifier",
        "sb-audit-project-auth-token.0",
        "sb-audit-project-auth-token.1",
      ].sort(),
    );
    assert.ok(written.every(({ value }) => value === ""));
    assert.ok(
      written.every(
        ({ options }) =>
          typeof options === "object" &&
          options !== null &&
          "maxAge" in options &&
          options.maxAge === 0 &&
          "httpOnly" in options &&
          options.httpOnly === true &&
          "secure" in options &&
          options.secure === true,
      ),
    );
  } finally {
    if (originalUrl === undefined) delete process.env.PUBLIC_SUPABASE_URL;
    else process.env.PUBLIC_SUPABASE_URL = originalUrl;
    if (originalSiteUrl === undefined) delete process.env.PUBLIC_SITE_URL;
    else process.env.PUBLIC_SITE_URL = originalSiteUrl;
  }
});

test("recovery email errors are categorized without retaining error details", async () => {
  const rateLimit = await attemptRecoveryEmail(async () => ({
    error: {
      code: "over_email_send_rate_limit",
      message: "sensitive provider detail",
      status: 429,
    },
  }));
  const providerFailure = await attemptRecoveryEmail(async () => ({
    error: { status: 503, message: "sensitive provider detail" },
  }));

  assert.deepEqual(rateLimit, { accepted: false, category: "rate_limited" });
  assert.deepEqual(providerFailure, {
    accepted: false,
    category: "provider_unavailable",
  });
  assert.equal(categorizeRecoveryEmailError("private error"), "request_failed");
  assert.equal(
    JSON.stringify([rateLimit, providerFailure]).includes("sensitive"),
    false,
  );
});

test("unexpected Supabase client construction errors return the same 202 receipt", async () => {
  const categories: string[] = [];
  const response = await handleRecoveryEmailRequest(
    async () => {
      throw new TypeError("private URL and email details");
    },
    (category) => categories.push(category),
  );

  assert.equal(response.status, 202);
  assert.equal(response.headers.get("Cache-Control"), "no-store");
  assert.deepEqual(await response.json(), {
    message: RECOVERY_REQUEST_RECEIPT,
  });
  assert.deepEqual(categories, ["request_failed"]);
  assert.equal(JSON.stringify(categories).includes("private"), false);
});

test("configuration, provider, and accepted requests return identical 202 receipts", async () => {
  const categories: string[] = [];
  const accepted = await handleRecoveryEmailRequest(
    async () => ({ accepted: true }),
    (category) => categories.push(category),
  );
  const providerFailure = await handleRecoveryEmailRequest(
    async () => ({ accepted: false, category: "provider_unavailable" }),
    (category) => categories.push(category),
  );
  const configurationFailure = await handleRecoveryEmailRequest(
    async () => {
      throw new RecoveryEmailRequestError("configuration_unavailable");
    },
    (category) => categories.push(category),
  );
  const redirectFailure = await handleRecoveryEmailRequest(
    async () => {
      throw new RecoveryEmailRequestError("redirect_rejected");
    },
    (category) => categories.push(category),
  );

  const acceptedBody = await accepted.text();
  assert.equal(accepted.status, 202);
  assert.equal(providerFailure.status, 202);
  assert.equal(configurationFailure.status, 202);
  assert.equal(redirectFailure.status, 202);
  assert.equal(await providerFailure.text(), acceptedBody);
  assert.equal(await configurationFailure.text(), acceptedBody);
  assert.equal(await redirectFailure.text(), acceptedBody);
  assert.deepEqual(categories, [
    "provider_unavailable",
    "configuration_unavailable",
    "redirect_rejected",
  ]);
  assert.match(
    RECOVERY_REQUEST_RECEIPT,
    /If the address belongs to an eligible account/,
  );
  assert.doesNotMatch(RECOVERY_REQUEST_RECEIPT, /email|account exists/i);
});
