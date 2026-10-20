"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealTextProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "span";
};

export function RevealText({
  children,
  className = "",
  delay = 0,
  as: Tag = "span",
}: RevealTextProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tag>{children}</Tag>
    </motion.span>
  );
}
