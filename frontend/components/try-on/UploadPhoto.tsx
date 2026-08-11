"use client";

import { useRef, useState } from "react";
import type { ChangeEvent } from "react";
import GlassCard from "@/components/common/GlassCard";

interface UploadPhotoProps {
  onUpload: (image: string) => void;
}

export default function UploadPhoto({ onUpload }: UploadPhotoProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [image, setImage] = useState<string | null>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

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

    // Send uploaded image to parent
    onUpload(imageUrl);
  };

  const handleRemove = () => {
    setImage(null);

    // Tell parent that image was removed
    onUpload("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <GlassCard className="p-6 sm:p-8">
      <div className="flex flex-col items-center text-center">

        {!image ? (
          <>
            {/* Upload Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600/20 text-3xl">
              📷
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-2xl font-semibold text-white">
              Upload Your Photo
            </h2>

            {/* Description */}
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-400">
              Upload a clear, full-body photo to get the best virtual
              try-on results.
            </p>

            {/* Button */}
            <button
              type="button"
              onClick={handleUploadClick}
              className="mt-8 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-violet-500"
            >
              Choose Photo
            </button>

            <p className="mt-4 text-xs text-slate-500">
              JPG, JPEG or PNG
            </p>
          </>
        ) : (
          <>
            {/* Image Preview */}
            <div className="mx-auto max-w-md overflow-hidden rounded-xl">
              <img
                src={image}
                alt="Uploaded photo"
                className="max-h-[500px] w-full object-contain"
              />
            </div>

            {/* Uploaded Message */}
            <h2 className="mt-6 text-2xl font-semibold text-white">
              Photo Uploaded
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Your photo is ready for virtual try-on.
            </p>

            {/* Actions */}
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

              <button
                type="button"
                onClick={handleUploadClick}
                className="rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10"
              >
                Change Photo
              </button>

              <button
                type="button"
                onClick={handleRemove}
                className="rounded-xl border border-red-500/30 px-6 py-3 font-semibold text-red-400 transition-all duration-300 hover:bg-red-500/10"
              >
                Remove
              </button>

            </div>
          </>
        )}

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg"
          onChange={handleFileChange}
          className="hidden"
        />

      </div>
    </GlassCard>
  );
}