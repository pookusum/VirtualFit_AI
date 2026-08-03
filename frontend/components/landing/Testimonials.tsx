import { testimonials } from "@/constants/testimonials";
import TestimonialCard from "./TestimonialCard";
import SectionHeading from "../common/SectionHeading";
import FadeIn from "../common/FadeIn";

export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <SectionHeading
            title="What Our Users Say"
            description="Thousands of users trust VirtualFit AI for smarter online shopping."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn
              key={testimonial.name}
              delay={index * 0.2}
            >
              <TestimonialCard testimonial={testimonial} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}