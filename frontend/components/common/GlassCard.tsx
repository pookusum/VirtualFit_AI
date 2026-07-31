import { ReactNode } from "react";


interface GlassCardProps {
    children: ReactNode;
    className?: string;
}
export default function GlassCard({
    children,
}: GlassCardProps) {
    return (
        <div className="rounded-2xl
        border
        border-white/10
        bg-slate-900
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-violet-500
        hover:shadow-xl
        hover:shadow-violet-500/10">
        

            {children}

        </div>
    );
}