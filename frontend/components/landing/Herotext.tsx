import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroText() {
  return (
    <div className="flex flex-1 flex-col items-start justify-center">
      {/* Badge */}
      <div className="mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
        ✨ AI-Powered Fashion Platform
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-extrabold leading-tight text-white lg:text-7xl">
        Experience{" "}
        <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Fashion
        </span>
        <br />
        Before You Buy.
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
        Upload your photo, choose your favorite outfit, and let our AI create
        realistic virtual try-on experiences within seconds.
      </p>

      <HeroButtons />

      <HeroStats />
    </div>
  );
}