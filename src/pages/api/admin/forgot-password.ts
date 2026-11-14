import type { APIRoute } from "astro";
import { z } from "zod";
import {
  AuthConfigurationError,
  createRequestSupabaseClient,
  isSameOriginRequest,
} from "@/lib/supabase/auth";
import {
  attemptRecoveryEmail,
  handleRecoveryEmailRequest,
  RecoveryEmailRequestError,
} from "@/lib/supabase/password-recovery";

export const prerender = false;

const emailSchema = z.object({ email: z.email().max(254) }).strict();

function json(status: number, body: Record<string, string>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export const POST: APIRoute = async ({ request, cookies, site }) => {
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
      return json(400, { error: "Enter a valid email address." });
    }
    throw error;
  }
  const parsed = emailSchema.safeParse(body);
  if (!parsed.success) {
    return json(400, { error: "Enter a valid email address." });
  }

  return handleRecoveryEmailRequest(async () => {
    let supabase;
    try {
      supabase = createRequestSupabaseClient(request, cookies);
    } catch (error) {
      if (error instanceof AuthConfigurationError) {
        throw new RecoveryEmailRequestError("configuration_unavailable");
      }
      throw error;
    }

    const configuredSiteUrl =
      process.env.PUBLIC_SITE_URL ||
      import.meta.env.PUBLIC_SITE_URL ||
      import.meta.env.SITE ||
      site?.href ||
      new URL(request.url).origin;
    let redirectTo: string;
    try {
      redirectTo = new URL(
        "/admin/reset-password",
        configuredSiteUrl,
      ).toString();
    } catch {
      throw new RecoveryEmailRequestError("redirect_rejected");
    }

    return attemptRecoveryEmail(() =>
      supabase.auth.resetPasswordForEmail(parsed.data.email, { redirectTo }),
    );
  });
};
