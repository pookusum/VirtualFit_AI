"use client";

import { useState } from "react";

import UploadPhoto from "@/components/try-on/UploadPhoto";
import OutfitSelector from "@/components/try-on/OutfitSelector";
import TryOnProcessing from "@/components/try-on/TryOnProcessing";
import TryOnResult from "@/components/try-on/TryOnResult";

export default function TryOnPage() {
  const [personImage, setPersonImage] = useState("");
  const [selectedOutfit, setSelectedOutfit] = useState<string | null>(null);
  const [customOutfitImage, setCustomOutfitImage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultImage, setResultImage] = useState("");

  const handleTryOn = () => {
    setIsProcessing(true);

    setTimeout(() => {
      setResultImage("/Images/After.png");
      setIsProcessing(false);
    }, 2500);
  };

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

          {/* Upload + Outfit Section */}
          <div className="mt-12">

            <UploadPhoto
              onUpload={setPersonImage}
            />

            <OutfitSelector
              selectedOutfit={selectedOutfit}
              customOutfitImage={customOutfitImage}
              onSelect={setSelectedOutfit}
              onCustomUpload={setCustomOutfitImage}
            />

          </div>

          {/* Try-On Button */}
          {!isProcessing && !resultImage && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                disabled={!personImage || !selectedOutfit}
                onClick={handleTryOn}
                className="rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Try VirtualFit AI
              </button>
            </div>
          )}

          {/* Processing */}
          {isProcessing && <TryOnProcessing />}

          {/* Result */}
          {resultImage && (
            <TryOnResult image={resultImage} />
          )}

        </div>
      </section>
    </main>
  );
}