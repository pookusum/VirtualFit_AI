
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, UserRound, LogOut } from "lucide-react";

import Logo from "@/components/common/Logo";
import { navigation } from "@/constants/navigation";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    let mounted = true;

    const loadUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (!mounted) return;

      if (error || !user) {
        setUserName(null);
        setIsLoading(false);
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("user_id", user.id)
        .maybeSingle();

      if (!mounted) return;

      const name =
        profile?.full_name ||
        user.user_metadata?.full_name ||
        user.email?.split("@")[0] ||
        "User";

      setUserName(name);
      setIsLoading(false);
    };

    void loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!mounted) return;

      if (event === "SIGNED_OUT" || !session?.user) {
        setUserName(null);
        setIsLoading(false);
        return;
      }

      const user = session.user;

      setUserName(
        user.user_metadata?.full_name ||
          user.email?.split("@")[0] ||
          "User"
      );

      // Fetch the saved profile after the auth callback completes.
      if (event === "SIGNED_IN" || event === "USER_UPDATED") {
        setTimeout(() => {
          if (mounted) void loadUser();
        }, 0);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    closeMenu();

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout failed:", error.message);
      return;
    }

    setUserName(null);
    router.push("/");
    router.refresh();
  };

  const authLinks = (
    <>
      {isLoading ? null : userName ? (
        <>
          <Link
            href="/profile"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-white transition hover:bg-slate-900"
          >
            <UserRound size={16} />
            <span className="max-w-32 truncate">
              Hi, {userName}
            </span>
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500"
          >
            <LogOut size={16} />
            Logout
          </button>
        </>
      ) : (
        <>
          <Link
            href="/login"
            onClick={closeMenu}
            className="rounded-xl border border-slate-700 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Login
          </Link>

          <Link
            href="/signup"
            onClick={closeMenu}
            className="rounded-xl bg-violet-600 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20"
          >
            Get Started
          </Link>
        </>
      )}
    </>
  );

  return (
    <header className="relative z-50 w-full border-b border-white/10 bg-slate-950">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
        <Logo onClick={closeMenu} />

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-violet-400"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop authentication controls */}
        <div className="hidden items-center gap-3 lg:flex">
          {authLinks}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-lg border border-white/10 p-2 text-white transition hover:bg-slate-900 lg:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full border-b border-white/10 bg-slate-950 px-5 py-6 shadow-2xl lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-white"
              >
                {item.title}
              </Link>
            ))}

            <div className="my-3 border-t border-white/10" />

            <div className="flex flex-col gap-3">
              {authLinks}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
