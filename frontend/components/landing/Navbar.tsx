"use client";

import Link from "next/link";

import Logo from "@/components/common/Logo";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 bg-slate-950">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-slate-700 px-5 py-2 text-sm text-white transition hover:bg-slate-800">
            Login
          </button>

          <button className="rounded-lg bg-violet-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-violet-700">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}