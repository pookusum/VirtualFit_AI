const stats = [
  {
    number: "100K+",
    label: "Users",
  },
  {
    number: "98%",
    label: "Accuracy",
  },
  {
    number: "500K+",
    label: "Virtual Try-ons",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-12 flex flex-wrap gap-10">
      {stats.map((item) => (
        <div key={item.label}>
          <h2 className="text-3xl font-bold text-white">{item.number}</h2>

          <p className="text-slate-400">{item.label}</p>
        </div>
      ))}
    </div>
  );
}