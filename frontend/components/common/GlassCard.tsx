import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-slate-900/80 p-8 shadow-xl backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}