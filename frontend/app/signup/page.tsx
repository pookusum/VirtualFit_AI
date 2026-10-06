"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const supabase = createClient();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignup = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    // Validate full name
    if (!fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    // Validate password
    if (password.length < 8) {
      setErrorMessage(
        "Password must be at least 8 characters."
      );
      return;
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Validate terms
    if (!agreedToTerms) {
      setErrorMessage(
        "Please agree to the Terms of Service and Privacy Policy."
      );
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            full_name: fullName.trim(),
          },
        },
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      console.log("Signup data:", data);

      setSuccessMessage(
        "Account created successfully! Please check your email to verify your account."
      );

      // Clear form
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAgreedToTerms(false);

    } catch (error) {
      console.error(error);

      setErrorMessage(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">

      {/* Logo */}
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          <span className="text-violet-400">
            VirtualFit
          </span>{" "}
          <span className="text-white">AI</span>
        </Link>
      </div>

      {/* Signup */}
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
          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/80 p-7 shadow-2xl shadow-black/20 sm:p-8">

            <form
              onSubmit={handleSignup}
              className="space-y-5"
            >

              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Full name
                </label>

                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) =>
                    setFullName(e.target.value)
                  }
                  placeholder="Enter your full name"
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

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
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Password
                </label>

                <div className="relative">

                  <input
                    id="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    placeholder="Create a password"
                    autoComplete="new-password"
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 pr-16 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500 transition hover:text-violet-400"
                  >
                    {showPassword
                      ? "Hide"
                      : "Show"}
                  </button>

                </div>

                <p className="mt-2 text-xs text-slate-600">
                  Use at least 8 characters.
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Confirm password
                </label>

                <div className="relative">

                  <input
                    id="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(
                        e.target.value
                      )
                    }
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 pr-16 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500 transition hover:text-violet-400"
                  >
                    {showConfirmPassword
                      ? "Hide"
                      : "Show"}
                  </button>

                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">

                <input
                  id="terms"
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) =>
                    setAgreedToTerms(
                      e.target.checked
                    )
                  }
                  className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-950 accent-violet-600"
                />

                <label
                  htmlFor="terms"
                  className="text-xs leading-5 text-slate-500"
                >
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
                </label>

              </div>

              {/* Error */}
              {errorMessage && (
                <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {errorMessage}
                </div>
              )}

              {/* Success */}
              {successMessage && (
                <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm leading-6 text-green-400">
                  {successMessage}
                </div>
              )}

              {/* Create Account */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading
                  ? "Creating account..."
                  : "Create Account"}
              </button>

            </form>

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

          {/* Trial */}
          <p className="mt-6 text-center text-xs text-slate-600">
            7-day free trial · No payment required
          </p>

        </div>

      </div>

    </main>
  );
}