import Link from "next/link";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
}

export default function PrimaryButton({
  children,
  href,
}: PrimaryButtonProps) {
  const buttonStyle =
    "inline-flex items-center justify-center rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-violet-500 hover:scale-105";

  if (href) {
    return (
      <Link href={href} className={buttonStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonStyle}>
      {children}
    </button>
  );
}