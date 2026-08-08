import { ArrowRight } from "lucide-react";
import DemoImageCard from "./DemoImageCard";

interface DemoPreviewProps {
  images: {
    image: string;
    title: string;
    subtitle: string;
  }[];
}

export default function DemoPreview({ images }: DemoPreviewProps) {
  const first = images[0] ?? { image: "", title: "", subtitle: "" };
  const second = images[1] ?? { image: "", title: "", subtitle: "" };

return (
  <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center">
    
    {/* Before */}
    <div className="w-full max-w-md">
      <DemoImageCard
        image={first.image}
        title={first.title}
        subtitle={first.subtitle}
      />
    </div>

    {/* Arrow */}
    <div className="flex items-center justify-center">
      <ArrowRight
        size={28}
        className="hidden lg:block text-white"
        strokeWidth={1.8}
      />

      <ArrowRight
        size={24}
        className="block rotate-90 text-white lg:hidden"
        strokeWidth={1.8}
      />
    </div>

    {/* After */}
    <div className="w-full max-w-md">
      <DemoImageCard
        image={second.image}
        title={second.title}
        subtitle={second.subtitle}
      />
    </div>

  </div>
);
}