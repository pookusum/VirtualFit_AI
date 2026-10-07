
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserRound, Mail, ArrowLeft, LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface Profile {
  full_name: string | null;
  avatar_url: string | null;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const loadProfile = async () => {
      const supabase = createClient();

      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        router.replace("/login");
        return;
      }

      const { data } = await supabase
        .from("profiles")
        .select("full_name, avatar_url")
        .eq("user_id", user.id)
        .maybeSingle();

      setEmail(user.email ?? "");
      setProfile({
        full_name:
          data?.full_name ??
          user.user_metadata?.full_name ??
          "",
        avatar_url: data?.avatar_url ?? null,
      });

      setIsLoading(false);
    };

    void loadProfile();
  }, [router]);

  
const handleSave = async () => {
  if (!profile) return;

  const fullName = profile.full_name?.trim() ?? "";

  if (!fullName) {
    setMessage("Please enter your full name.");
    return;
  }

  setIsSaving(true);
  setMessage("");

  try {
    const supabase = createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      setMessage("Your session has expired. Please log in again.");
      router.replace("/login");
      return;
    }

    // Save the name in the profiles table.
    const { error: profileError } = await supabase
      .from("profiles")
      .upsert(
        {
          user_id: user.id,
          full_name: fullName,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" }
      );

    if (profileError) {
      console.error("Profile save error:", profileError);
      setMessage(`Could not save profile: ${profileError.message}`);
      return;
    }

    // Keep the name in Supabase Auth metadata in sync.
    const { error: authError } = await supabase.auth.updateUser({
      data: { full_name: fullName },
    });

    if (authError) {
      console.error("Auth metadata update error:", authError);
      setMessage(
        "Profile saved, but account metadata could not be updated. Please try again."
      );
      return;
    }

    // Confirm the saved name in the UI.
    setProfile((current) =>
      current ? { ...current, full_name: fullName } : current
    );

    setMessage("Your profile has been updated successfully!");
  } catch (error) {
    console.error("Unexpected profile save error:", error);
    setMessage("Something went wrong while saving. Please try again.");
  } finally {
    setIsSaving(false);
  }
};


  const handleLogout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      setMessage(error.message);
      return;
    }

    router.replace("/");
    router.refresh();
  };

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-300">
        Loading your profile...
      </main>
    );
  }

  if (!profile) return null;

  const initials =
    profile.full_name?.trim().charAt(0).toUpperCase() || "U";

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-violet-400"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <div className="mt-8">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            Your account
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Profile settings
          </h1>
          <p className="mt-3 text-slate-400">
            Manage your personal details and VirtualFit AI account.
          </p>
        </div>

        <section className="mt-8 rounded-2xl border border-white/10 bg-slate-900/80 p-6 sm:p-8">
          <div className="flex items-center gap-4 border-b border-white/10 pb-6">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-violet-500/15 text-2xl font-bold text-violet-300">
              {profile.avatar_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={profile.avatar_url}
                  alt="Profile avatar"
                  className="h-full w-full object-cover"
                />
              ) : (
                initials
              )}
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                {profile.full_name || "Your name"}
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                VirtualFit AI member
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm text-slate-300"
              >
                Full name
              </label>
              <div className="relative">
                <UserRound
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  id="fullName"
                  type="text"
                  value={profile.full_name ?? ""}
                  onChange={(event) =>
                    setProfile({
                      ...profile,
                      full_name: event.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-white/10 bg-slate-950 py-3 pl-11 pr-4 outline-none transition focus:border-violet-500"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-slate-300"
              >
                Email address
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  id="email"
                  type="email"
                  value={email}
                  readOnly
                  className="w-full cursor-not-allowed rounded-xl border border-white/10 bg-slate-950/60 py-3 pl-11 pr-4 text-slate-400"
                />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Your email is managed by your authentication account.
              </p>
            </div>
          </div>

          {message && (
            <p
              role="status"
              className="mt-5 text-sm text-violet-300"
            >
              {message}
            </p>
          )}

          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className="mt-7 w-full rounded-xl bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </section>

        <section className="mt-5 flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-semibold">Sign out</h2>
            <p className="mt-1 text-sm text-slate-400">
              Sign out of your VirtualFit AI account on this device.
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium transition hover:border-red-400/40 hover:bg-red-400/10 hover:text-red-300"
          >
            <LogOut size={16} />
            Logout
          </button>
        </section>
      </div>
    </main>
  );
}
