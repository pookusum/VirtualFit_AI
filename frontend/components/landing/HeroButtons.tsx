export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <button className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700">
        Try VirtualFit
      </button>

      <button className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-white transition hover:bg-slate-800">
        Watch Demo
      </button>
    </div>
  );
}