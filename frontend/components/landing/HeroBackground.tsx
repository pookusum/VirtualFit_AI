export default function HeroBackground() {
  return (
    <>
      {/* Purple Blur */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

      {/* Blue Blur */}
      <div className="absolute right-0 top-40 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
}