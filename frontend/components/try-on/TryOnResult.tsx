interface TryOnResultProps {
  image: string;
}

export default function TryOnResult({
  image,
}: TryOnResultProps) {
  return (
    <section className="mt-12">
      <div className="mx-auto max-w-2xl text-center">

        <h2 className="text-2xl font-semibold text-white">
          Your Virtual Try-On
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Your AI-powered outfit preview is ready.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-4 shadow-xl">
          <img
            src={image}
            alt="Virtual try-on result"
            className="mx-auto max-h-[600px] w-full object-contain rounded-xl"
          />
        </div>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

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
    </section>
  );
}