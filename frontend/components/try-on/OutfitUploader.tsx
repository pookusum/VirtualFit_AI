"use client";

import { useRef, useState } from "react";
interface OutfitUploaderProps {
  onUpload: () => void;
  isSelected: boolean;
}

export default function OutfitUploader({
  onUpload,
  isSelected,
}: OutfitUploaderProps) {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  return (
    
    <div className="mt-6 border-t border-white/10 pt-6">

      <div className="text-center">
        <p className="text-sm text-slate-500">
          OR
        </p>

        <h3 className="mt-2 text-lg font-semibold text-white">
          Upload Your Own Outfit
        </h3>

        <p className="mt-1 text-xs text-slate-400">
          Have a specific outfit in mind?
        </p>
      </div>

      <div className="mt-4 flex flex-col items-center">

        {image ? (
          <div className="flex flex-col items-center">

            <img
              src={image}
              alt="Uploaded outfit"
              className="h-32 w-24 rounded-lg object-contain"
            />

            <button
              type="button"
              onClick={() => {
                setImage(null);

                if (fileInputRef.current) {
                  fileInputRef.current.value = "";
                }
              }}
              className="mt-3 text-xs text-red-400 hover:text-red-300"
            >
              Remove Outfit
            </button>

          </div>
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