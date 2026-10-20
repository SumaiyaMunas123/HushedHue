export type GeneratedPalette = {
  id: string;
  name: string;
  description: string;
  swatches: { name: string; hex: string }[];
  theme: Record<string, string>;
};

function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const color = l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
}

/** Harmonious grey-toned palette from a random seed hue (low saturation). */
export function generateHarmoniousPalette(seedHue = Math.random() * 360): GeneratedPalette {
  const h = seedHue;
  const graphite = hslToHex(h, 8, 16);
  const smoke = hslToHex(h, 10, 42);
  const mist = hslToHex(h, 12, 72);
  const greyRose = hslToHex(h, 22, 72);
  const duskRed = hslToHex(h, 28, 48);
  const ember = hslToHex(h + 18, 32, 62);
  const peachHaze = hslToHex(h + 10, 38, 88);
  const cream = hslToHex(h + 6, 30, 95);

  return {
    id: `shuffle-${Math.round(h)}`,
    name: "Shuffled dusk",
    description: "A fresh grey-toned harmony from the same sunset logic.",
    swatches: [
      { name: "Graphite", hex: graphite },
      { name: "Smoke", hex: smoke },
      { name: "Mist", hex: mist },
      { name: "Grey rose", hex: greyRose },
      { name: "Dusk", hex: duskRed },
      { name: "Ember", hex: ember },
      { name: "Peach haze", hex: peachHaze },
      { name: "Cream", hex: cream },
    ],
    theme: {
      "--color-graphite": graphite,
      "--color-smoke": smoke,
      "--color-mist": mist,
      "--color-grey-rose": greyRose,
      "--color-dusk-red": duskRed,
      "--color-ember": ember,
      "--color-peach-haze": peachHaze,
      "--color-cream": cream,
    },
  };
}

export async function copyHex(hex: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(hex);
    return true;
  } catch {
    return false;
  }
}
