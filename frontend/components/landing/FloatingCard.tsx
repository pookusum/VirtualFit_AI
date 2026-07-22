import { ReactNode } from "react";

interface FloatingCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export default function FloatingCard({
  icon,
  title,
  subtitle,
}: FloatingCardProps) {
  return (
    <div className="w-64 rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-xl backdrop-blur-md transition hover:scale-105">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}