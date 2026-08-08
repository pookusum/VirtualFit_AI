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
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-stretch sm:justify-center">
      <div className="flex-1 max-w-md w-full">
        <DemoImageCard
          image={first.image}
          title={first.title}
          subtitle={first.subtitle}
        />
      </div>
      <div className="flex items-center justify-center">
        <ArrowRight
          size={28}
          className="text-white hidden sm:block"
          strokeWidth={1.8}
        />
        <ArrowRight
          size={22}
          className="text-white sm:hidden rotate-90"
          strokeWidth={1.6}
        />
      </div>

      <div className="flex-1 max-w-md w-full">
        <DemoImageCard
          image={second.image}
          title={second.title}
          subtitle={second.subtitle}
        />
      </div>
    </div>
  );
}