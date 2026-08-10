import UploadPhoto from "@/components/try-on/UploadPhoto";
import OutfitSelector from "@/components/try-on/OutfitSelector"
import OutfitUploader from "@/components/try-on/OutfitUploader";

export default function TryOnPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          {/* Page Heading */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Virtual Try-On
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Upload your photo and see how different outfits look on you
              with AI-powered virtual try-on.
            </p>
          </div>

          {/* Upload Section */}
          <div className="mt-12">
            <UploadPhoto />


            <OutfitSelector />
           

          </div>

        </div>
      </section>
    </main>
  );
}