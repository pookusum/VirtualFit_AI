
import { createClient } from "@/lib/supabase/client";

const API_BASE_URL = "http://127.0.0.1:8000";

export async function getAuthenticatedBackendUser() {
  const supabase = createClient();

  // Get the current Supabase session
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    throw new Error(sessionError.message);
  }

  const accessToken = sessionData.session?.access_token;

  if (!accessToken) {
    throw new Error("You must be logged in to access the backend.");
  }

  // Send the access token to FastAPI
  const response = await fetch(`${API_BASE_URL}/api/v1/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.detail || "Backend request failed.");
  }

  return result;
}
