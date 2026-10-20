"use client";

import Link from "next/link";
import { useRef } from "react";
import { site } from "@/content/site";

export function ContactFooter() {
  const wordmarkRef = useRef<HTMLParagraphElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wordmarkRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translate(${x * 12}px, ${y * 8}px)`;
  };

  const onLeave = () => {
    const el = wordmarkRef.current;
    if (el) el.style.transform = "translate(0, 0)";
  };

  return (
    <footer id="contact" className="mx-auto w-full max-w-(--page-max) px-5 pb-16 pt-8 md:px-8">
      <div className="glass-surface rounded-[2rem] p-8 md:p-12">
        <h2 className="font-display text-display-lg text-graphite">Say hello</h2>
        <p className="mt-3 max-w-lg text-lg text-smoke">
          We&apos;d love to hear your idea. Drop a line — warm, brief, human replies only.
        </p>
        <p className="mt-6">
          <a
            href={`mailto:${site.email}`}
            className="text-lg font-medium text-graphite underline decoration-grey-rose underline-offset-4 hover:text-dusk-red"
          >
            {site.email}
          </a>
        </p>
        <ul className="mt-6 flex flex-wrap gap-4 text-sm text-smoke">
          <li>
            <Link href={site.social.instagram} className="hover:text-graphite">
              Instagram
            </Link>
          </li>
          <li>
            <Link href={site.social.dribbble} className="hover:text-graphite">
              Dribbble
            </Link>
          </li>
          <li>
            <Link href={site.social.github} className="hover:text-graphite">
              GitHub
            </Link>
          </li>
        </ul>
      </div>

      <div
        className="mt-16 overflow-hidden py-8"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <p
          ref={wordmarkRef}
          className="pointer-events-none select-none text-center font-display text-[clamp(3rem,18vw,12rem)] leading-none text-graphite/90 transition-transform duration-300 ease-out"
          style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 144' }}
          aria-hidden
        >
          {site.name}
        </p>
        <p className="mt-4 text-center text-sm text-smoke">
          © {new Date().getFullYear()} {site.name}. {site.tagline}
        </p>
      </div>
    </footer>
  );
}
