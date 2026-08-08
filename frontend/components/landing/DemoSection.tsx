import SectionHeading from "../common/SectionHeading";
import PrimaryButton from "../common/PrimaryButton";
import DemoPreview from "./DemoPreview";
import Link from "next/link";
import FadeIn from "../common/FadeIn";

<Link href="/try-on">
  <PrimaryButton>
    Try VirtualFit AI
  </PrimaryButton>
</Link>

const demoImages = [
  {
    image: "/Images/before.png",
    title: "Before",
    subtitle: "Your original photo",
  },
  {
    image: "/Images/After.png",
    title: "After",
    subtitle: "AI-powered virtual try-on",
  },
];

export default function DemoSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <FadeIn>
      <SectionHeading
        title="See VirtualFit AI in Action"
        description="Experience how AI transforms your photo into a realistic virtual try-on."
      />
    </FadeIn>

    <div className="mt-10 sm:mt-12 lg:mt-16">
      <DemoPreview images={demoImages} />
    </div>

    <div className="mt-10 flex justify-center">
      <PrimaryButton href="/try-on">
        Try VirtualFit AI
      </PrimaryButton>
    </div>

  </div>
</section>
  );
}