import SectionHeading from "../common/SectionHeading";
import PrimaryButton from "../common/PrimaryButton";
import DemoPreview from "./DemoPreview";

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
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          title="See VirtualFit AI in Action"
          description="Experience how AI transforms your photo into a realistic virtual try-on."
        />

        <div className="mt-12">
          <DemoPreview images={demoImages} />
        </div>

        <div className="mt-10 flex justify-center">
          <PrimaryButton>
            Try VirtualFit AI
          </PrimaryButton>
        </div>

      </div>
    </section>
  );
}