import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-bold text-xl text-white"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">
        <Sparkles className="h-5 w-5 text-white" />
      </div>

      <span>VirtualFit AI</span>
    </Link>
  );
}