"use client";

import { useState } from "react";
import { curatedPalettes } from "@/content/palettes";
import { copyHex } from "@/lib/palette-utils";
import { useToast } from "@/lib/hooks";
import { usePalette } from "@/components/providers/PaletteProvider";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";
import { Toast } from "@/components/ui/Toast";

export function PaletteLab() {
  const { palette, selectPalette, shuffle } = usePalette();
  const { message, show } = useToast();
  const [activeId, setActiveId] = useState(palette.id);

  const onSelect = (id: string) => {
    setActiveId(id);
    selectPalette(id);
  };

  const onSwatch = async (hex: string) => {
    const ok = await copyHex(hex);
    show(ok ? `Copied ${hex}` : "Could not copy");
  };

  const displaySwatches =
    palette.swatches.length > 0
      ? palette.swatches
      : curatedPalettes[0].swatches;

  return (
    <>
      <Section
        id="palette-lab"
        eyebrow="Palette Lab"
        title="Shift the light on the whole site."
      >
        <p className="-mt-8 mb-10 max-w-2xl text-lg text-smoke">
          Six curated moods in the sunset family, plus a shuffle for new grey-toned harmony.
          Tap a swatch to copy its hex.
        </p>

        <div className="mb-8 flex flex-wrap gap-3">
          {curatedPalettes.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelect(p.id)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                activeId === p.id
                  ? "border-graphite bg-graphite text-cream"
                  : "border-mist/50 bg-cream/60 text-graphite hover:border-smoke"
              }`}
            >
              {p.name}
            </button>
          ))}
          <Button variant="ghost" onClick={() => { shuffle(); setActiveId("shuffle"); }}>
            Shuffle
          </Button>
        </div>

        <GlassCard className="p-6 md:p-8">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="font-display text-2xl text-graphite">{palette.name}</h3>
              {palette.description ? (
                <p className="mt-1 text-smoke">{palette.description}</p>
              ) : null}
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {displaySwatches.slice(0, 6).map((swatch) => (
              <li key={`${swatch.hex}-${swatch.name}`}>
                <button
                  type="button"
                  onClick={() => onSwatch(swatch.hex)}
                  className="group w-full text-left"
                >
                  <span
                    className="mb-2 block aspect-[4/3] w-full rounded-2xl border border-mist/30 shadow-inner transition-transform group-hover:scale-[1.02]"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <span className="block text-xs font-medium text-graphite">{swatch.name}</span>
                  <span className="block text-xs text-smoke">{swatch.hex}</span>
                </button>
              </li>
            ))}
          </ul>
        </GlassCard>
      </Section>
      <Toast message={message} />
    </>
  );
}
