import HeroBackground from "./HeroBackground";
import HeroText from "./HeroText";
import HeroPreview from "./HeroPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row">
        {/* Left Side */}
        <HeroText />

        {/* Right Side */}
        <HeroPreview />
      </div>
    </section>
  );
}