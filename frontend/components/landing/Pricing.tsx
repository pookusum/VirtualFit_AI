
"use client";

import { useState } from "react";
import Link from "next/link";

type BillingCycle = "monthly" | "yearly";

export default function Pricing() {
  const [billingCycle, setBillingCycle] =
    useState<BillingCycle>("monthly");

  return (
    <section
      id="pricing"
      className="scroll-mt-24 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            VirtualFit AI
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Start with a 7-day free trial
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Explore AI-powered virtual fashion for 7 days,
            then choose the plan that works for you.
          </p>
        </div>

        {/* Free Trial Card */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-slate-900 p-8 text-center shadow-lg shadow-violet-500/5">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/15 text-2xl">
            ✨
          </div>

          <h3 className="mt-5 text-2xl font-bold text-white">
            Your first 7 days are free
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Try virtual outfit visualization, upload your own
            outfits, and explore the VirtualFit AI experience
            before choosing a subscription.
          </p>

          {/* Trial Features */}
          <div className="mx-auto mt-6 grid max-w-xl gap-3 text-left sm:grid-cols-2">

            <div className="flex items-center gap-3 text-sm text-slate-300">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-violet-400">
                ✓
              </span>
              Virtual try-ons
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-300">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-violet-400">
                ✓
              </span>
              Choose your outfits
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-300">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-violet-400">
                ✓
              </span>
              Upload custom outfits
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-300">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-violet-400">
                ✓
              </span>
              Preview your virtual look
            </div>

          </div>

          <Link
            href="/signup"
            className="mt-8 inline-flex rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white transition hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20"
>
            Start 7-Day Free Trial →
          </Link>

          <p className="mt-3 text-xs text-slate-500">
            No payment required to start your trial.
          </p>

        </div>

        {/* Subscription Heading */}
        <div className="mt-16 text-center">

          <h3 className="text-2xl font-bold text-white">
            Continue after your trial
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Choose monthly flexibility or save with yearly billing.
          </p>

        </div>

        {/* Billing Toggle */}
        <div className="mt-6 flex justify-center">
          <div className="flex rounded-xl border border-white/10 bg-slate-900 p-1">

            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-lg px-5 py-2 text-sm font-medium transition ${
                billingCycle === "monthly"
                  ? "bg-violet-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              className={`rounded-lg px-5 py-2 text-sm font-medium transition ${
                billingCycle === "yearly"
                  ? "bg-violet-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Yearly
            </button>

          </div>
        </div>

        {/* Subscription Cards */}
        <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">

          {/* Monthly */}
          <div
            className={`rounded-2xl border p-7 transition ${
              billingCycle === "monthly"
                ? "border-violet-500/50 bg-violet-500/5 shadow-lg shadow-violet-500/5"
                : "border-white/10 bg-slate-900/60"
            }`}
          >

            <p className="text-sm font-medium text-violet-400">
              MONTHLY
            </p>

            <div className="mt-3">
              <span className="text-4xl font-bold text-white">
                ₹499
              </span>

              <span className="ml-1 text-sm text-slate-500">
                / month
              </span>
            </div>

            <p className="mt-3 text-sm text-slate-400">
              Flexible access without a long-term commitment.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>✓ Unlimited virtual try-ons</li>
              <li>✓ Upload custom outfits</li>
              <li>✓ Save your favorite looks</li>
              <li>✓ AI-powered outfit visualization</li>
            </ul>

            <button
              type="button"
              className="mt-8 w-full rounded-xl border border-violet-500/50 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500/10"
            >
              Choose Monthly
            </button>

          </div>

          {/* Yearly */}
          <div
            className={`relative rounded-2xl border p-7 transition ${
              billingCycle === "yearly"
                ? "border-violet-500 bg-violet-500/5 shadow-lg shadow-violet-500/10"
                : "border-white/10 bg-slate-900/60"
            }`}
          >

            <span className="absolute right-5 top-5 rounded-full bg-violet-500/15 px-3 py-1 text-xs font-medium text-violet-300">
              Save with yearly
            </span>

            <p className="text-sm font-medium text-violet-400">
              YEARLY
            </p>

            <div className="mt-3">
              <span className="text-4xl font-bold text-white">
                ₹4,999
              </span>

              <span className="ml-1 text-sm text-slate-500">
                / year
              </span>
            </div>

            <p className="mt-3 text-sm text-slate-400">
              One yearly plan for uninterrupted virtual fashion.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>✓ Everything in Monthly</li>
              <li>✓ Unlimited virtual try-ons</li>
              <li>✓ Saved looks & history</li>
              <li>✓ Priority AI processing</li>
            </ul>

            <button
              type="button"
              className="mt-8 w-full rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              Choose Yearly
            </button>

          </div>

        </div>

        {/* Footer Note */}
        <p className="mt-8 text-center text-xs text-slate-500">
          Subscription billing is planned for a future version of
          VirtualFit AI.
        </p>

      </div>
    </section>
  );
}