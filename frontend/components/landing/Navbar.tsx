"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Logo from "@/components/common/Logo";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50 w-full border-b border-white/10 bg-slate-950">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">

        {/* Logo */}
        <Logo onClick={closeMenu} />

        {/* Desktop Navigation */}
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

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">

          <Link
            href="/login"
            className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20"
          >
            Get Started
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={
            isMenuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg border border-white/10 p-2 text-white transition hover:bg-slate-900 lg:hidden"
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full border-b border-white/10 bg-slate-950 px-5 py-6 shadow-2xl lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">

            {/* Navigation Links */}
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

            {/* Login */}
            <Link
              href="/login"
              onClick={closeMenu}
              className="rounded-xl border border-slate-700 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Login
            </Link>

            {/* Get Started */}
            <Link
              href="/signup"
              onClick={closeMenu}
              className="rounded-xl bg-violet-600 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-violet-500"
            >
              Get Started
            </Link>

          </div>
        </nav>
      )}

    </header>
  );
}