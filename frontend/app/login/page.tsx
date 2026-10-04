
"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-8 text-white sm:px-6">
      {/* Logo */}
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          <span className="text-violet-400">VirtualFit</span> AI
        </Link>
      </div>

      {/* Centered login card */}
      <div className="flex min-h-[calc(100vh-100px)] items-center justify-center py-10">
        <div className="w-full max-w-md">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
              Welcome back
            </p>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Log in to your account
            </h1>

            <p className="mt-3 text-sm text-slate-400">
              Continue your journey with VirtualFit AI.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-slate-300"
                  >
                    Password
                  </label>

                  <span className="text-xs text-slate-500">
                    Password recovery coming soon
                  </span>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 pr-12 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-violet-400"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-500"
              >
                Log In
              </button>
            </form>

            <div className="mt-7 border-t border-white/10 pt-6 text-center">
              <p className="text-sm text-slate-400">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="font-semibold text-violet-400 hover:text-violet-300"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-slate-500 transition hover:text-white"
            >
              ← Back to VirtualFit AI
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
