"use client";

import { useRef, useState } from "react";
import type { ChangeEvent } from "react";

interface OutfitUploaderProps {
  onUpload: (image: string) => void;
  isSelected: boolean;
}

export default function OutfitUploader({
  onUpload,
  isSelected,
}: OutfitUploaderProps) {
  const [image, setImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

   const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);
    onUpload(imageUrl);
  };

  const handleRemove = () => {
    setImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div
      className={`rounded-xl p-5 text-center transition-all duration-300 ${
        isSelected
          ? "border border-violet-500 bg-violet-500/10"
          : "border border-transparent"
      }`}
    >
      {/* Heading */}
      <h3 className="text-lg font-semibold text-white">
        Upload Your Own Outfit
      </h3>

      <p className="mt-1 text-xs text-slate-400">
        Have a specific outfit in mind?
      </p>

      {/* Upload Area */}
      <div className="mt-4 flex flex-col items-center">

        {image ? (
          <>
            {/* Outfit Preview */}
            <img
              src={image}
              alt="Uploaded outfit"
              className="h-32 w-24 rounded-lg object-contain"
            />

            {/* Remove */}
            <button
              type="button"
              onClick={handleRemove}
              className="mt-3 text-xs text-red-400 transition hover:text-red-300"
            >
              Remove Outfit
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              Upload Outfit
            </button>

            <p className="mt-2 text-xs text-slate-500">
              JPG, JPEG or PNG
            </p>
          </>
        )}

        {/* Hidden Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg"
          onChange={handleFileChange}
          className="hidden"
        />

      </div>
    </div>
  );
}