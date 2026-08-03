import GlassCard from "../common/GlassCard";

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    review: string;
    rating: number;
  };
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <GlassCard>
      {/* ⭐ Rating */}
      <div className="mb-4 flex">
        {[...Array(testimonial.rating)].map((_, index) => (
          <span
            key={index}
            className="text-xl text-yellow-400"
          >
            ★
          </span>
        ))}
      </div>

      {/* 💬 Review */}
      <p className="text-slate-300 italic leading-7">
        "{testimonial.review}"
      </p>

      {/* Divider */}
      <div className="my-6 border-t border-white/10"></div>

      {/* 👤 Name */}
      <h3 className="text-lg font-semibold text-white">
        {testimonial.name}
      </h3>

      {/* 💼 Role */}
      <p className="mt-1 text-sm text-violet-400">
        {testimonial.role}
      </p>
    </GlassCard>
  );
}