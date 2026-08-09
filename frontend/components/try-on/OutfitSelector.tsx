"use client";

import { useState } from "react";
import GlassCard from "@/components/common/GlassCard";

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

export default function OutfitSelector() {
  const [selectedOutfit, setSelectedOutfit] = useState<string | null>(null);

  return (
    <GlassCard className="mx-auto mt-8 max-w-5xl p-8">
      <h2 className="text-center text-2xl font-semibold text-white">
        Choose Your Outfit
      </h2>

      <p className="mt-2 text-center text-sm text-slate-400">
        Select an outfit to try on virtually.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {outfits.map((outfit) => (
          <button
            key={outfit.id}
            type="button"
            onClick={() => setSelectedOutfit(outfit.id)}
            className={`overflow-hidden rounded-xl border text-left transition-all duration-300 ${
              selectedOutfit === outfit.id
                ? "border-violet-500 bg-violet-500/10 shadow-lg shadow-violet-500/20"
                : "border-white/10 bg-slate-900 hover:-translate-y-1 hover:border-violet-500/50"
            }`}
          >
            <img
              src={outfit.image}
              alt={outfit.name}
              className="h-64 w-full object-contain"
            />

            <div className="p-4">
              <h3 className="font-semibold text-white">
                {outfit.name}
              </h3>

              {selectedOutfit === outfit.id && (
                <p className="mt-1 text-sm text-violet-400">
                  Selected ✓
                </p>
              )}
            </div>
          </button>
        ))}
      </div>
    </GlassCard>
  );
}