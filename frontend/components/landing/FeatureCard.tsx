import { LucideIcon } from "lucide-react";
import GlassCard from "../common/GlassCard";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <GlassCard>
      {/* Icon */}
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400">
        <Icon size={30} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-slate-400 leading-7">
        {description}
      </p>
    </GlassCard>
  );
}