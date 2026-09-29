"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">

        {/* Left Branding Section */}
        <div className="relative hidden overflow-hidden lg:flex lg:w-1/2">
          {/* Background Glow */}
          <div className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-violet-600/20 blur-3xl" />

          <div className="absolute bottom-[-100px] right-[-100px] h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">

            {/* Logo */}
            <Link href="/" className="text-xl font-bold tracking-wide">
              <span className="text-violet-400">VirtualFit</span>
              <span className="text-white"> AI</span>
            </Link>

            {/* Main Text */}
            <div className="max-w-lg">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
                Virtual Fashion
              </p>

              <h1 className="mt-5 text-4xl font-bold leading-tight xl:text-5xl">
                Discover how your
                <span className="text-violet-400"> style </span>
                looks before you wear it.
              </h1>

              <p className="mt-6 text-base leading-7 text-slate-400">
                Create your VirtualFit AI account and explore AI-powered
                virtual try-ons, personalized outfits, and your digital
                wardrobe.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
                    ✓
                  </div>

                  <span className="text-sm text-slate-300">
                    AI-powered virtual try-ons
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
                    ✓
                  </div>

                  <span className="text-sm text-slate-300">
                    Upload and explore your own outfits
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
                    ✓
                  </div>

                  <span className="text-sm text-slate-300">
                    Save and manage your favorite looks
                  </span>
                </div>

              </div>
            </div>

            {/* Bottom */}
            <p className="text-xs text-slate-600">
              © 2026 VirtualFit AI. All rights reserved.
            </p>

          </div>
        </div>

        {/* Right Signup Section */}
        <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="mb-8 text-center lg:hidden">
              <Link href="/" className="text-xl font-bold">
                <span className="text-violet-400">VirtualFit</span>
                <span className="text-white"> AI</span>
              </Link>
            </div>

            {/* Heading */}
            <div className="text-center">

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
                Create your account
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Start your free trial
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Create your account and explore VirtualFit AI
                for 7 days.
              </p>

            </div>

            {/* Form */}
            <div className="mt-8 space-y-5">

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Full name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
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
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
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
                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3.5 pr-20 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500 transition hover:text-violet-400"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>
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
                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3.5 pr-20 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
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
                  className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 accent-violet-600"
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
            <div className="mt-7 text-center">

              <p className="text-sm text-slate-500">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-violet-400 transition hover:text-violet-300"
                >
                  Log in
                </Link>
              </p>

            </div>

            {/* Trial Information */}
            <div className="mt-8 border-t border-white/10 pt-6 text-center">

              <p className="text-xs text-slate-600">
                7-day free trial · No payment required
              </p>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}