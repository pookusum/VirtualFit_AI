import { howItWorks } from "@/constants/howItWorks";
import StepCard from "./StepCard";
import SectionHeading from "../common/SectionHeading";

export default function HowItWorks() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
          title="How It Works"
          description="Experience VirtualFit AI in four simple steps."
/>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step) => (
            <StepCard
              key={step.number}
              step={step}
            />
          ))}
        </div>
      </div>
    </section>
  );
}