"use client";

import { motion, useReducedMotion } from "motion/react";
import { offerings } from "@/content/offerings";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

function Visual({
  type,
  reduced,
}: {
  type: (typeof offerings)[number]["visual"];
  reduced: boolean;
}) {
  if (type === "palette") {
    return (
      <div className="flex h-full min-h-32 gap-2 p-6">
        {["var(--color-mist)", "var(--color-grey-rose)", "var(--color-ember)", "var(--color-peach-haze)"].map(
          (c) =>
            reduced ? (
              <div key={c} className="flex-1 rounded-2xl" style={{ background: c }} />
            ) : (
              <motion.div
                key={c}
                className="flex-1 rounded-2xl"
                style={{ background: c }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            ),
        )}
      </div>
    );
  }
  if (type === "brand") {
    return (
      <div className="flex h-full min-h-32 items-center justify-center p-6">
        <svg viewBox="0 0 120 80" className="h-24 w-32 text-graphite" aria-hidden>
          <circle cx="40" cy="40" r="28" fill="var(--color-grey-rose)" opacity="0.5" />
          <rect x="58" y="22" width="44" height="36" rx="8" fill="var(--color-ember)" opacity="0.65" />
        </svg>
      </div>
    );
  }
  if (type === "ui") {
    return (
      <div className="space-y-3 p-6">
        <div className="h-3 w-2/3 rounded-full bg-mist/80" />
        <div className="h-16 rounded-2xl bg-peach-haze/80" />
        <div className="grid grid-cols-3 gap-2">
          <div className="h-10 rounded-xl bg-grey-rose/50" />
          <div className="h-10 rounded-xl bg-ember/40" />
          <div className="h-10 rounded-xl bg-mist/70" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center p-6">
      <div className="h-36 w-20 rounded-[1.25rem] border border-mist/50 bg-cream p-2 shadow-inner">
        <div className="mb-2 h-2 w-8 rounded-full bg-mist/80" />
        <div className="space-y-2">
          <div className="h-8 rounded-lg bg-peach-haze" />
          <div className="h-8 rounded-lg bg-grey-rose/40" />
        </div>
      </div>
    </div>
  );
}

export function WhatIMake() {
  const reduced = useReducedMotion();

  return (
    <Section id="make" eyebrow="What I make" title="Four quiet crafts.">
      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        {offerings.map((item, i) => (
          <motion.div
            key={item.id}
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.6 }}
          >
            <GlassCard className="group h-full transition-transform duration-500 hover:-translate-y-1">
              <Visual type={item.visual} reduced={reduced} />
              <div className="border-t border-mist/25 p-6">
                <h3 className="font-display text-2xl text-graphite">{item.title}</h3>
                <p className="mt-2 text-smoke">{item.description}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
