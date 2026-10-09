"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { createClient } from "@/lib/supabase/client";

import UploadPhoto from "@/components/try-on/UploadPhoto";
import OutfitSelector from "@/components/try-on/OutfitSelector";
import TryOnProcessing from "@/components/try-on/TryOnProcessing";
import TryOnResult from "@/components/try-on/TryOnResult";

export default function TryOnPage() {
  const [personImage, setPersonImage] = useState("");
  const [selectedOutfit, setSelectedOutfit] = useState<string | null>(null);
  const [customOutfitImage, setCustomOutfitImage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);

  // Guest access states
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [guestTryUsed, setGuestTryUsed] = useState(false);
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  // Check the current Supabase session and guest usage
  useEffect(() => {
    let mounted = true;

    const checkAccess = async () => {
      try {
        const supabase = createClient();

        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (!mounted) return;

        setIsAuthenticated(!error && !!user);

        const used =
          localStorage.getItem("virtualfit_guest_try_used") === "true";

        setGuestTryUsed(used);
      } catch (error) {
        console.error("Unable to check authentication:", error);
      } finally {
        if (mounted) {
          setCheckingAuth(false);
        }
      }
    };

    checkAccess();

    return () => {
      mounted = false;
    };
  }, []);

  // Start a try-on only if the visitor is allowed
  const handleTryOn = () => {
    if (checkingAuth || isProcessing) return;

    if (!personImage || !selectedOutfit) return;

    if (!isAuthenticated && guestTryUsed) {
      setShowAuthPrompt(true);
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setResultImage("/Images/After.png");
      setIsProcessing(false);

      // Count the free try only after the demo result completes
      if (!isAuthenticated) {
        localStorage.setItem("virtualfit_guest_try_used", "true");
        setGuestTryUsed(true);
      }
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

            {!checkingAuth && !isAuthenticated && (
              <p className="mt-4 text-sm text-slate-400">
                {guestTryUsed
                  ? "Your free try-on has been used. Sign in to explore more outfits."
                  : "Enjoy one free virtual try-on before creating an account."}
              </p>
            )}
          </div>

          {/* Upload + Outfit Section */}
          <div className="mt-12">
            <UploadPhoto onUpload={setPersonImage} />

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
                onClick={handleTryOn}
                disabled={
                  checkingAuth ||
                  !personImage ||
                  !selectedOutfit
                }
                className="rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {checkingAuth ? "Checking account..." : "Try VirtualFit AI"}
              </button>
            </div>
          )}

          {/* Processing */}
          {isProcessing && <TryOnProcessing />}

          {/* Result */}
          {resultImage && (
            <TryOnResult
              image={resultImage}
              onTryAgain={() => {
                setResultImage(null);
                setSelectedOutfit(null);

                // Show the login/signup prompt on the next attempt
                if (!isAuthenticated && guestTryUsed) {
                  setShowAuthPrompt(true);
                }
              }}
            />
          )}
        </div>
      </section>

      {/* Signup/Login Prompt */}
      {showAuthPrompt && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-prompt-title"
            className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-7 text-center shadow-2xl"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/15 text-2xl">
              ✨
            </div>

            <h2
              id="auth-prompt-title"
              className="mt-5 text-2xl font-bold text-white"
            >
              Ready for another look?
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              You've used your free virtual try-on. Create an account
              or log in to continue exploring more outfits with
              VirtualFit AI.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <Link
                href="/signup"
                className="rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-500"
              >
                Create Free Account
              </Link>

              <Link
                href="/login?next=%2Ftry-on"
                className="rounded-xl border border-white/10 px-5 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Log In
              </Link>

              <button
                type="button"
                onClick={() => setShowAuthPrompt(false)}
                className="px-5 py-2 text-sm text-slate-400 transition hover:text-white"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}