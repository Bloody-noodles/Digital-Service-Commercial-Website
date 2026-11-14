import type { APIRoute } from "astro";
import { z } from "zod";
import {
  AuthConfigurationError,
  clearRequestSupabaseSessionCookies,
  createRequestSupabaseClient,
  getActiveStaff,
  isSameOriginRequest,
} from "@/lib/supabase/auth";
import { completePasswordRecovery } from "@/lib/supabase/password-recovery";

export const prerender = false;

const passwordSchema = z
  .object({
    code: z.string().min(1).max(4096),
    flowId: z.string().min(1).max(128).optional(),
    newPassword: z.string().min(12).max(256),
    confirmPassword: z.string().max(256),
  })
  .strict()
  .refine((value) => value.newPassword === value.confirmPassword, {
    path: ["confirmPassword"],
  });

function json(status: number, body: Record<string, string | boolean>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!isSameOriginRequest(request)) {
    return json(403, { error: "Request origin could not be verified." });
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return json(415, { error: "Use a JSON request body." });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch (error) {
    if (error instanceof SyntaxError) {
      return json(400, { error: "Enter and confirm your new password." });
    }
    throw error;
  }
  const parsed = passwordSchema.safeParse(body);
  if (!parsed.success) {
    return json(400, {
      error:
        "Use a valid recovery link, a password with at least 12 characters, and matching password entries.",
    });
  }

  const writtenCookieNames = new Set<string>();
  let supabase;
  try {
    supabase = createRequestSupabaseClient(request, cookies, (name) => {
      writtenCookieNames.add(name);
    });
  } catch (error) {
    if (error instanceof AuthConfigurationError) {
      return json(503, {
        error:
          "Password recovery is temporarily unavailable. Please try again later.",
      });
    }
    throw error;
  }

  const result = await completePasswordRecovery(
    {
      exchangeCodeForSession: (code, flowId) =>
        supabase.auth.exchangeCodeForSession(
          code,
          flowId ? { flowId } : undefined,
        ),
      verifyActiveStaff: async () => Boolean(await getActiveStaff(supabase)),
      updatePassword: (password) => supabase.auth.updateUser({ password }),
      signOut: () => supabase.auth.signOut(),
      clearLocalSession: () =>
        clearRequestSupabaseSessionCookies(
          request,
          cookies,
          writtenCookieNames,
        ),
      logCleanupFailure: (category) =>
        console.warn("ADMIN_PASSWORD_RECOVERY_CLEANUP_FAILED", { category }),
    },
    parsed.data.code,
    parsed.data.newPassword,
    parsed.data.flowId,
  );

  switch (result) {
    case "invalid_or_expired_code":
      return json(401, {
        error:
          "This recovery link is invalid, expired, or already used. Request a new link.",
      });
    case "staff_verification_failed":
      return json(503, {
        error:
          "Staff access could not be verified. Please request a new recovery link.",
      });
    case "not_active_staff":
      return json(403, {
        error: "This account is not authorized for staff access.",
      });
    case "password_update_failed":
      return json(400, {
        error:
          "Password could not be updated. Request a new recovery link and try again.",
      });
    case "success_remote_revocation_failed":
      return json(200, {
        message:
          "Your password was updated and this browser session was cleared. Sign-out on other devices could not be confirmed; please sign out of those sessions manually.",
        redirect: "/admin/login",
        remoteRevocationFailed: true,
      });
    case "password_updated_session_cleanup_failed":
      return json(503, {
        error:
          "Your password was updated, but this browser session could not be cleared. Close this browser tab and contact support before continuing.",
      });
    case "session_cleanup_failed":
      return json(503, {
        error:
          "This recovery session could not be cleared. Close this browser tab and contact support before signing in.",
      });
    case "success":
      return json(200, {
        message:
          "Your password has been updated. Sign in with your new password.",
        redirect: "/admin/login",
      });
  }
};
