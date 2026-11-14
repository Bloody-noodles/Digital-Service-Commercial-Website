export type RecoveryEmailErrorCategory =
  | "rate_limited"
  | "redirect_rejected"
  | "configuration_unavailable"
  | "provider_unavailable"
  | "request_failed";

export type RecoveryEmailAttempt =
  | { accepted: true }
  | { accepted: false; category: RecoveryEmailErrorCategory };

export const RECOVERY_REQUEST_RECEIPT =
  "We received your request. If the address belongs to an eligible account and the request can be processed, password-reset instructions will be sent.";

export class RecoveryEmailRequestError extends Error {
  readonly category: RecoveryEmailErrorCategory;

  constructor(category: RecoveryEmailErrorCategory) {
    super("Password recovery request could not be processed.");
    this.name = "RecoveryEmailRequestError";
    this.category = category;
  }
}

function createRecoveryReceipt(): Response {
  return new Response(JSON.stringify({ message: RECOVERY_REQUEST_RECEIPT }), {
    status: 202,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export async function handleRecoveryEmailRequest(
  send: () => Promise<RecoveryEmailAttempt>,
  logFailure: (category: RecoveryEmailErrorCategory) => void = (category) => {
    console.warn("ADMIN_PASSWORD_RECOVERY_EMAIL_FAILED", { category });
  },
): Promise<Response> {
  let failureCategory: RecoveryEmailErrorCategory | undefined;
  try {
    const result = await send();
    if (!result.accepted) failureCategory = result.category;
  } catch (error) {
    failureCategory =
      error instanceof RecoveryEmailRequestError
        ? error.category
        : "request_failed";
  }

  if (failureCategory) {
    try {
      logFailure(failureCategory);
    } catch {
      // Logging failure must not change the generic response.
    }
  }

  return createRecoveryReceipt();
}

function errorMetadata(error: unknown): { code?: string; status?: number } {
  if (!error || typeof error !== "object") return {};
  const candidate = error as { code?: unknown; status?: unknown };
  const code = typeof candidate.code === "string" ? candidate.code : undefined;
  const status =
    typeof candidate.status === "number" ? candidate.status : undefined;
  return { code, status };
}

export function categorizeRecoveryEmailError(
  error: unknown,
): RecoveryEmailErrorCategory {
  const { code, status } = errorMetadata(error);
  if (status === 429 || code === "over_email_send_rate_limit") {
    return "rate_limited";
  }
  if (code === "redirect_to_not_allowed") {
    return "redirect_rejected";
  }
  if (status !== undefined && status >= 500) {
    return "provider_unavailable";
  }
  return "request_failed";
}

export async function attemptRecoveryEmail(
  send: () => Promise<{ error: unknown | null }>,
): Promise<RecoveryEmailAttempt> {
  try {
    const { error } = await send();
    return error
      ? { accepted: false, category: categorizeRecoveryEmailError(error) }
      : { accepted: true };
  } catch (error) {
    return {
      accepted: false,
      category: categorizeRecoveryEmailError(error),
    };
  }
}

export type RecoveryCleanupFailureCategory =
  "supabase_signout_failed" | "local_cookie_cleanup_failed";

export type RecoveryCompletionResult =
  | "invalid_or_expired_code"
  | "staff_verification_failed"
  | "not_active_staff"
  | "password_update_failed"
  | "session_cleanup_failed"
  | "password_updated_session_cleanup_failed"
  | "success"
  | "success_remote_revocation_failed";

export type RecoveryOperations = {
  exchangeCodeForSession: (
    code: string,
    flowId?: string,
  ) => Promise<{ error: unknown | null }>;
  verifyActiveStaff: () => Promise<boolean>;
  updatePassword: (password: string) => Promise<{ error: unknown | null }>;
  signOut: () => Promise<{ error: unknown | null }>;
  clearLocalSession: () => boolean | Promise<boolean>;
  logCleanupFailure?: (category: RecoveryCleanupFailureCategory) => void;
};

type SessionCleanupResult = {
  localSessionCleared: boolean;
  remoteSessionsRevoked: boolean;
};

function reportCleanupFailure(
  operations: RecoveryOperations,
  category: RecoveryCleanupFailureCategory,
): void {
  try {
    (
      operations.logCleanupFailure ??
      ((failureCategory) => {
        console.warn("ADMIN_PASSWORD_RECOVERY_CLEANUP_FAILED", {
          category: failureCategory,
        });
      })
    )(category);
  } catch {
    // A logging failure must not prevent the cookie cleanup attempt.
  }
}

async function clearSession(
  operations: RecoveryOperations,
): Promise<SessionCleanupResult> {
  let remoteSessionsRevoked = false;
  try {
    const { error } = await operations.signOut();
    remoteSessionsRevoked = !error;
    if (error) {
      reportCleanupFailure(operations, "supabase_signout_failed");
    }
  } catch {
    reportCleanupFailure(operations, "supabase_signout_failed");
  }

  let localSessionCleared = false;
  try {
    localSessionCleared = await operations.clearLocalSession();
  } catch {
    localSessionCleared = false;
  }
  if (!localSessionCleared) {
    reportCleanupFailure(operations, "local_cookie_cleanup_failed");
  }

  return { localSessionCleared, remoteSessionsRevoked };
}

async function finishFailure(
  operations: RecoveryOperations,
  result:
    "staff_verification_failed" | "not_active_staff" | "password_update_failed",
): Promise<RecoveryCompletionResult> {
  const cleanup = await clearSession(operations);
  return cleanup.localSessionCleared ? result : "session_cleanup_failed";
}

export async function completePasswordRecovery(
  operations: RecoveryOperations,
  code: string,
  password: string,
  flowId?: string,
): Promise<RecoveryCompletionResult> {
  try {
    const { error } = await operations.exchangeCodeForSession(code, flowId);
    if (error) return "invalid_or_expired_code";
  } catch {
    return "invalid_or_expired_code";
  }

  let activeStaff: boolean;
  try {
    activeStaff = await operations.verifyActiveStaff();
  } catch {
    return finishFailure(operations, "staff_verification_failed");
  }

  if (!activeStaff) {
    return finishFailure(operations, "not_active_staff");
  }

  try {
    const { error } = await operations.updatePassword(password);
    if (error) {
      return finishFailure(operations, "password_update_failed");
    }
  } catch {
    return finishFailure(operations, "password_update_failed");
  }

  const cleanup = await clearSession(operations);
  if (!cleanup.localSessionCleared) {
    return "password_updated_session_cleanup_failed";
  }
  return cleanup.remoteSessionsRevoked
    ? "success"
    : "success_remote_revocation_failed";
}
