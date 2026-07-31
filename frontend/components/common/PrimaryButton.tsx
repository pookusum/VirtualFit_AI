import { ReactNode } from "react";

interface PrimaryButtonProps {
    children: ReactNode;
    variant?: "primary" | "outline";
}

export default function PrimaryButton({
    children,
    variant = "primary",
}: PrimaryButtonProps) {

    const baseStyles =
        "rounded-xl px-6 py-3 font-semibold transition-all duration-300";

    const buttonStyles =
        variant === "primary"
            ? "bg-violet-600 text-white hover:bg-violet-700"
            : "border border-white text-white hover:bg-white hover:text-black";

    return (
        <button className={`${baseStyles} ${buttonStyles}`}>
            {children}
        </button>
    );
}