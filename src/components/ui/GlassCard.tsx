import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "button";
  onClick?: () => void;
};

export function GlassCard({
  children,
  className = "",
  as: Tag = "div",
  onClick,
}: GlassCardProps) {
  return (
    <Tag
      className={`glass-surface grain-overlay overflow-hidden rounded-(--radius-bento) ${className}`}
      onClick={onClick}
      type={Tag === "button" ? "button" : undefined}
    >
      {children}
    </Tag>
  );
}
