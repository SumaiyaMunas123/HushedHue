"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";

const HeroShader = dynamic(
  () => import("@/components/hero/HeroShader").then((m) => m.HeroShader),
  { ssr: false },
);

const words = ["Quiet", "design,", "softly", "seen."];

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative mx-auto flex min-h-[88dvh] w-full max-w-(--page-max) flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-b-[2.5rem]">
        <HeroShader />
      </div>

      <div className="glass-surface max-w-3xl rounded-[2rem] p-8 md:p-12">
        <p className="mb-4 text-sm text-smoke">{site.tagline}</p>
        <h1 id="hero-title" className="text-display-xl display-hover text-graphite">
          {words.map((word, i) => (
            <motion.span
              key={word}
              className={`mr-[0.25em] inline-block ${word === "softly" ? "italic" : ""}`}
              initial={reduced ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15 + i * 0.08,
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-smoke">
          We make palettes, brands, and interfaces that feel like a sunset you can scroll
          through — calm, a little dreamy, and built with care.
        </p>
        <div className="mt-8">
          <Button href="#work">See the work</Button>
        </div>
      </div>
    </section>
  );
}
