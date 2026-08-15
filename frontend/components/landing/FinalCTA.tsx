import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute left-1/4 top-1/3 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      {/* CTA Card */}
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-slate-900 to-pink-500/10 px-6 py-16 text-center shadow-2xl sm:px-12 lg:px-20">
        
        {/* Small Label */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
          Your Style. Your Fit. Your Virtual Look.
        </p>

        {/* Heading */}
        <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Ready to see yourself in a new look?
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          Upload your photo, choose an outfit, and let VirtualFit AI
          create your personalized virtual look in seconds.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/try-on"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-slate-100"
          >
            Try VirtualFit AI
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Supporting Text */}
        <p className="mt-5 text-xs text-slate-500">
          AI-powered virtual fashion experience
        </p>
      </div>
    </section>
  );
}