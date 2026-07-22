import {
  Camera,
  BrainCircuit,
  Shirt,
} from "lucide-react";

import FloatingCard from "./FloatingCard";

export default function HeroPreview() {
  return (
    <div className="relative flex flex-1 items-center justify-center">

      <div className="space-y-6">

      <div className="ml-0">
      </div>

      <div className="ml-16">
      </div>

      <div className="ml-8">
      </div>

      </div>

        <FloatingCard
          icon={<Camera size={28} />}
          title="Upload Photo"
          subtitle="Upload a full-body image to begin your AI try-on."
        />

        <div className="flex justify-center text-violet-400 text-2xl">
          ↓
        </div>

        <FloatingCard
          icon={<BrainCircuit size={28} />}
          title="AI Processing"
          subtitle="Body detection, segmentation and outfit fitting."
        />

        <div className="flex justify-center text-cyan-400 text-2xl">
          ↓
        </div>

        <FloatingCard
          icon={<Shirt size={28} />}
          title="Virtual Try-On"
          subtitle="Generate realistic AI-powered outfit previews."
        />
        
      </div>

    );
}