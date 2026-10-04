"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">

      {/* Top Logo */}
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          <span className="text-violet-400">VirtualFit</span>{" "}
          <span className="text-white">AI</span>
        </Link>
      </div>

      {/* Signup Card */}
      <div className="flex min-h-[calc(100vh-100px)] items-center justify-center">

        <div className="w-full max-w-md">

          {/* Heading */}
          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
              Create your account
            </p>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Start your free trial
            </h1>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Create your account and start exploring
              VirtualFit AI for 7 days.
            </p>

          </div>

          {/* Card */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/80 p-7 shadow-2xl shadow-black/20 backdrop-blur sm:p-8">

            <div className="space-y-5">

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Full name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 pr-16 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500 transition hover:text-violet-400"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>

                <p className="mt-2 text-xs text-slate-600">
                  Use at least 8 characters.
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Confirm password
                </label>

                <div className="relative">

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 pr-16 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500 transition hover:text-violet-400"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>

                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">

                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-950 accent-violet-600"
                />

                <p className="text-xs leading-5 text-slate-500">
                  I agree to the{" "}
                  <Link
                    href="#"
                    className="text-violet-400 hover:text-violet-300"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    className="text-violet-400 hover:text-violet-300"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>

              </div>

              {/* Create Account */}
              <button
                type="button"
                className="w-full rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20"
              >
                Create Account
              </button>

            </div>

            {/* Login */}
            <div className="mt-7 border-t border-white/10 pt-6 text-center">

              <p className="text-sm text-slate-500">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-violet-400 transition hover:text-violet-300"
                >
                  Log in
                </Link>
              </p>

            </div>

          </div>

          {/* Trial Note */}
          <p className="mt-6 text-center text-xs text-slate-600">
            7-day free trial · No payment required
          </p>

          {/* Back Home */}
          <div className="mt-4 text-center">

            <Link
              href="/"
              className="text-xs text-slate-600 transition hover:text-slate-400"
            >
              ← Back to VirtualFit AI
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}