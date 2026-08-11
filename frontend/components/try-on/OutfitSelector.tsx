"use client";

import GlassCard from "../common/GlassCard";
import OutfitUploader from "./OutfitUploader";

interface OutfitSelectorProps {
  selectedOutfit: string | null;
  customOutfitImage: string;
  onSelect: (outfitId: string) => void;
  onCustomUpload: (image: string) => void;
}

const outfits = [
  {
    id: "dress",
    name: "Elegant Dress",
    image: "/Images/dress.png",
  },
  {
    id: "casual",
    name: "Casual Outfit",
    image: "/Images/casual.png",
  },
  {
    id: "shirt",
    name: "Classic Shirt",
    image: "/Images/shirt.png",
  },
];

export default function OutfitSelector({
  selectedOutfit,
  customOutfitImage,
  onSelect,
  onCustomUpload,
}: OutfitSelectorProps) {
  const handleOutfitSelect = (id: string) => {
    onSelect(id);
  };

  const handleCustomOutfit = () => {
    onSelect("custom");
  };

  return (
    <GlassCard className="mt-8 p-6 sm:p-8">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-white">
          Choose Your Outfit
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Select an outfit to try on virtually.
        </p>
      </div>

      {/* Predefined Outfits */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {outfits.map((outfit) => {
          const isSelected = selectedOutfit === outfit.id;

          return (
            <button
              key={outfit.id}
              type="button"
              onClick={() => handleOutfitSelect(outfit.id)}
              className={`overflow-hidden rounded-xl border text-left transition-all duration-300 ${
                isSelected
                  ? "border-violet-500 bg-violet-500/10 shadow-lg shadow-violet-500/20"
                  : "border-white/10 bg-slate-900 hover:-translate-y-1 hover:border-violet-500/50"
              }`}
            >
              <img
                src={outfit.image}
                alt={outfit.name}
                className="h-36 w-full object-contain sm:h-40"
              />

              <div className="p-4">
                <h3 className="font-semibold text-white">
                  {outfit.name}
                </h3>

                {isSelected && (
                  <p className="mt-1 text-sm font-medium text-violet-400">
                    Selected ✓
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Single Divider */}
      <div className="my-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/10" />

        <span className="text-sm text-slate-500">
          OR
        </span>

        <div className="h-px flex-1 bg-white/10" />
      </div>

      {/* Custom Outfit */}
      <OutfitUploader
        onUpload={handleCustomOutfit}
        isSelected={selectedOutfit === "custom"}
      />
    </GlassCard>
  );
}