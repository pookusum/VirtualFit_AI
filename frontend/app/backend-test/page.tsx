"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { getAuthenticatedBackendUser } from "@/lib/api";

export default function BackendTestPage() {
  const [authStatus, setAuthStatus] = useState("Not checked");
  const [sessionInfo, setSessionInfo] = useState("");
  const [backendResult, setBackendResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTest = async () => {
    setLoading(true);
    setError("");
    setBackendResult("");
    setSessionInfo("");

    const supabase = createClient();

    try {
      // First, check Supabase session directly
      const { data, error: sessionError } =
        await supabase.auth.getSession();

      if (sessionError) {
        throw new Error(
          `Session error: ${sessionError.message}`
        );
      }

      const session = data.session;

      if (!session) {
        setAuthStatus("No active session found");
        setSessionInfo(
          "Supabase returned no active session."
        );
        return;
      }

      setAuthStatus("Session found ✅");
      setSessionInfo(
        `Email: ${session.user.email}\nUser ID: ${session.user.id}`
      );

      // Now test the authenticated backend request
      const result = await getAuthenticatedBackendUser();

      setBackendResult(JSON.stringify(result, null, 2));
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An unknown error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">
          Frontend ↔ Backend Diagnostic
        </h1>

        <p className="mt-3 text-slate-400">
          Checking Supabase session and FastAPI authentication.
        </p>

        <button
          onClick={handleTest}
          disabled={loading}
          className="mt-8 rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-500 disabled:opacity-50"
        >
          {loading ? "Checking..." : "Run Diagnostic"}
        </button>

        <div className="mt-6 rounded-xl border border-white/10 bg-slate-900 p-5">
          <h2 className="font-semibold">1. Supabase Session</h2>
          <p className="mt-2">{authStatus}</p>

          {sessionInfo && (
            <pre className="mt-3 whitespace-pre-wrap text-sm text-slate-300">
              {sessionInfo}
            </pre>
          )}
        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-5 text-red-300">
            <h2 className="font-semibold">Error</h2>
            <p className="mt-2">{error}</p>
          </div>
        )}

        {backendResult && (
          <div className="mt-6 rounded-xl border border-green-500/30 bg-green-500/10 p-5">
            <h2 className="font-semibold text-green-400">
              2. Backend authentication successful 🎉
            </h2>

            <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-sm">
              {backendResult}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}