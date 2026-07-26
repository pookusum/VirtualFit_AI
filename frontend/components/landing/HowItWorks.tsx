import { howItWorks } from "@/constants/howItWorks";
import StepCard from "./StepCard";

export default function HowItWorks() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            How It Works
          </h2>

          <p className="mt-4 text-lg text-slate-400">
            Experience VirtualFit AI in four simple steps.
          </p>
        </div>

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