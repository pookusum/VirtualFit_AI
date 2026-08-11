export default function TryOnProcessing() {
  return (
    <div className="mt-10 flex flex-col items-center text-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-violet-500/30 border-t-violet-500" />

      <h2 className="mt-6 text-2xl font-semibold text-white">
        Creating Your Virtual Try-On
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        AI is analyzing your photo and applying the selected outfit.
      </p>
    </div>
  );
}   