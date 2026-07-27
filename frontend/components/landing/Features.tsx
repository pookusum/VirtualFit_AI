import { features } from "@/constants/features";
import FeatureCard from "./FeatureCard";
import SectionHeading from "../common/SectionHeading";

export default function Features() {
  return (
    <section className="bg-slate-950 py-24">
  <div className="mx-auto max-w-7xl px-6">

    <SectionHeading
      title="Why Choose VirtualFit AI"
      description="AI-powered features designed to transform your online fashion experience."
    />

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>

  </div>
</section>
  )
}