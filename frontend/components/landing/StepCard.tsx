import { LucideIcon } from "lucide-react";

interface StepCardProps {
  step: {
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
  };
}

export default function StepCard({ step }: StepCardProps) {
  const Icon = step.icon;

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-xl">
      {/* Step Number */}
      <span className="text-sm font-semibold text-violet-400">
        {step.number}
      </span>

      {/* Icon */}
      <div className="mt-4 mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400">
        <Icon size={30} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white">
        {step.title}
      </h3>

      {/* Description */}
      <p className="mt-3 leading-7 text-slate-400">
        {step.description}
      </p>
    </div>
  );
}   