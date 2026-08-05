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
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />

      <div className="space-y-1">
        <h3 className="text-2xl font-semibold text-white-900 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-white-400">
          {subtitle}
        </p>
      </div>
    </GlassCard>
  );
}