import Link from "next/link";

interface LogoProps {
  onClick?: () => void;
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center gap-2 font-bold text-xl text-white"
    >
      <span className="text-violet-400">
        VirtualFit
      </span>

      <span>
        AI
      </span>
    </Link>
  );
}