import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "pill" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export function Button({
  href,
  onClick,
  children,
  variant = "pill",
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dusk-red";
  const styles =
    variant === "pill"
      ? "bg-graphite px-6 py-3 text-cream hover:bg-dusk-red"
      : "px-4 py-2 text-graphite hover:text-dusk-red";

  const merged = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={merged}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={merged} onClick={onClick}>
      {children}
    </button>
  );
}
