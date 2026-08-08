import GlassCard from "../common/GlassCard";

interface DemoImageCardProps {
  image: string;
  title: string;
  subtitle: string;
}

export default function DemoImageCard({
  image,
  title,
  subtitle,
}: DemoImageCardProps) {
  return (
    <GlassCard className="p-4">
      
      {/* Image */}
      <div className="w-full flex justify-center">
        <img
          src={image}
          alt={title}
          className="max-w-full h-auto rounded-xl object-contain"
        />
      </div>

      {/* Text */}
      <div className="mt-5 space-y-1">
        <h3 className="text-2xl font-semibold text-white tracking-tight">
          {title}
        </h3>

        <p className="text-sm text-slate-400">
          {subtitle}
        </p>
      </div>

    </GlassCard>
  );
} 