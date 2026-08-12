interface TryOnResultProps {
  image: string;
}

export default function TryOnResult({
  image,
}: TryOnResultProps) {
  return (
    <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900/80 p-6 sm:p-8">
      
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-white">
          Your Virtual Try-On Result
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Here is how your selected outfit looks on you.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <img
          src={image}
          alt="Virtual try-on result"
          className="max-h-[600px] w-auto max-w-full rounded-xl object-contain"
        />
      </div>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <button
          type="button"
          className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
        >
          Try Another Outfit
        </button>

        <button
          type="button"
          className="rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-violet-500 hover:bg-violet-500/10"
        >
          Download Result
        </button>
      </div>
    </div>
  );
}