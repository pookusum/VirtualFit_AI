export default function TryOnProcessing() {
  return (
    <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900/80 p-8 text-center shadow-xl">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-600/20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-violet-500/30 border-t-violet-500" />
      </div>

      <h2 className="mt-6 text-2xl font-semibold text-white">
        Creating Your Virtual Try-On
      </h2>

      <p className="mx-auto mt-3 max-w-md text-sm text-slate-400">
        Our AI is analyzing your photo and applying the selected outfit.
        This may take a few moments.
      </p>
    </div>
  );
}