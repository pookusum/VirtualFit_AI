import HeroBackground from "./HeroBackground";
import HeroText from "./HeroText";
import HeroPreview from "./HeroPreview";
import FadeIn from "@/components/common/FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row">
        {/* Left Side */}
        <FadeIn>
          <HeroText />
        </FadeIn>

        <FadeIn>
          <HeroPreview />
        </FadeIn>
      </div>
    </section>
  );
}