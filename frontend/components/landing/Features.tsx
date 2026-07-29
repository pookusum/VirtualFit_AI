import { features } from "@/constants/features";
import FeatureCard from "./FeatureCard";
import SectionHeading from "../common/SectionHeading";
import FadeIn from "../common/FadeIn";


export default function Features() {
  return (
    <section className="bg-slate-950 py-24">
  <div className="mx-auto max-w-7xl px-6">

     <FadeIn>
    <SectionHeading
        title="Why Choose VirtualFit AI"
        description="AI-powered features designed to transform your online fashion experience."
    />
      </FadeIn>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
       {features.map((feature, index) => (
       <FadeIn key={feature.title} delay={index * 0.15}>
        <FeatureCard
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
        />
    </FadeIn>
))}
    </div>

  </div>
</section>
  )
}