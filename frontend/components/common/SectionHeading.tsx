interface SectionHeadingProps {
  title: string;
  description: string;
}

export default function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-white">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-400">
        {description}
      </p>
    </div>
  );
}