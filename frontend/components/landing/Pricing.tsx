"use client";

import { useState } from "react";

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
            Choose your experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Start with a 7-day free trial and explore AI-powered
            virtual fashion.
          </p>

        </div>

        {/* Billing Toggle */}
        <div className="mt-8 flex justify-center">
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

        {/* Free Trial */}
        <div className="mx-auto mt-6 max-w-md text-center">
          <p className="text-sm text-slate-400">
            🎉 7-day free trial included with every plan
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {/* Free Trial */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-7">

            <p className="text-sm font-medium text-violet-400">
              FREE TRIAL
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              7 Days
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Experience VirtualFit AI before choosing a plan.
            </p>

            <div className="mt-6">
              <span className="text-3xl font-bold text-white">
                ₹0
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>✓ 10 virtual try-ons</li>
              <li>✓ Outfit selection</li>
              <li>✓ Upload your own outfit</li>
              <li>✓ Basic AI processing</li>
            </ul>

            <a
              href="/try-on"
              className="mt-8 block rounded-xl border border-white/10 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-violet-500 hover:bg-violet-500/10"
            >
              Start Free Trial
            </a>

          </div>

          {/* Monthly */}
          <div className="rounded-2xl border border-violet-500/50 bg-violet-500/5 p-7 shadow-lg shadow-violet-500/10">

            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-violet-400">
                MONTHLY
              </p>

              <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs text-violet-300">
                Popular
              </span>
            </div>

            <h3 className="mt-3 text-2xl font-bold text-white">
              ₹499
              <span className="text-sm font-normal text-slate-400">
                /month
              </span>
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              For users who want flexible access.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>✓ Unlimited virtual try-ons</li>
              <li>✓ AI outfit visualization</li>
              <li>✓ Upload custom outfits</li>
              <li>✓ Save your looks</li>
            </ul>

            <button
              type="button"
              className="mt-8 w-full rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              Start 7-Day Trial
            </button>

          </div>

          {/* Yearly */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-7">

            <p className="text-sm font-medium text-violet-400">
              YEARLY
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              ₹4,999
              <span className="text-sm font-normal text-slate-400">
                /year
              </span>
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Best value for regular fashion exploration.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>✓ Everything in Monthly</li>
              <li>✓ Unlimited virtual try-ons</li>
              <li>✓ Saved looks & history</li>
              <li>✓ Priority AI processing</li>
            </ul>

            <button
              type="button"
              className="mt-8 w-full rounded-xl border border-violet-500/50 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500/10"
            >
              Start 7-Day Trial
            </button>

          </div>

        </div>

        {/* Small disclaimer */}
        <p className="mt-8 text-center text-xs text-slate-500">
          Pricing shown for demonstration purposes. Subscription
          billing will be available in a future version.
        </p>

      </div>
    </section>
  );
}