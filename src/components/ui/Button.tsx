import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-teal-500 text-[#07111F] hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20"
      : "border border-teal-400/30 bg-teal-500/10 text-teal-400 hover:border-teal-400/50 hover:bg-teal-500/20";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}