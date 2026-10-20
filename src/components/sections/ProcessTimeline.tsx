"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/content/process";
import { Section } from "@/components/ui/Section";
import { useReducedMotion } from "@/lib/hooks";

gsap.registerPlugin(ScrollTrigger);

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const scrollWidth = track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  if (reduced) {
    return (
      <Section id="process" eyebrow="Process" title="How we move.">
        <ol className="grid gap-6 md:grid-cols-2">
          {processSteps.map((step, i) => (
            <li key={step.id} className="glass-surface rounded-(--radius-bento) p-6">
              <span className="text-sm text-smoke">0{i + 1}</span>
              <h3 className="mt-2 font-display text-2xl text-graphite">{step.title}</h3>
              <p className="mt-2 text-smoke">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>
    );
  }

  return (
    <section
      id="process"
      ref={sectionRef}
      aria-labelledby="process-title"
      className="relative overflow-hidden"
    >
      <div className="mx-auto w-full max-w-(--page-max) px-5 py-20 md:px-8 md:py-28">
        <p className="mb-3 text-sm text-smoke">Process</p>
        <h2 id="process-title" className="text-display-lg display-hover text-graphite">
          How we move.
        </h2>
      </div>
      <div ref={trackRef} className="flex w-max gap-6 px-5 pb-24 md:gap-8 md:px-8">
        {processSteps.map((step, i) => (
          <article
            key={step.id}
            className="glass-surface w-[min(85vw,22rem)] shrink-0 rounded-(--radius-bento) p-8"
          >
            <span className="text-sm text-smoke">0{i + 1}</span>
            <h3 className="mt-3 font-display text-3xl text-graphite">{step.title}</h3>
            <p className="mt-4 leading-relaxed text-smoke">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
