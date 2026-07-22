export default function HeroBackground() {
  return (
    <>
      {/* Purple Blur */}
      <div className="absolute left-0 top-10 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[140px]" />

      {/* Blue Blur */}
      <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-cyan-600/20 blur-[140px]" />

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