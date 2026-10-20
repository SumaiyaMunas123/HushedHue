"use client";

import { useEffect } from "react";
import { useReducedMotion } from "@/lib/hooks";

export function DuskScrollBackground() {
  const reduced = useReducedMotion();

  useEffect(() => {
    const root = document.documentElement;

    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
      root.style.setProperty("--dusk-progress", progress.toFixed(4));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden
      className={`fixed inset-0 -z-10 dusk-bg transition-[background] ${reduced ? "" : "duration-300"}`}
    />
  );
}
