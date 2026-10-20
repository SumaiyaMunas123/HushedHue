export type PaletteSwatch = {
  name: string;
  hex: string;
  token?: string;
};

export type CuratedPalette = {
  id: string;
  name: string;
  description: string;
  swatches: PaletteSwatch[];
  /** CSS variable overrides applied when selected */
  theme: Record<string, string>;
};

const baseTheme = {
  "--color-graphite": "#2B2A2D",
  "--color-smoke": "#6F6A6C",
  "--color-mist": "#B9B2B0",
  "--color-grey-rose": "#C9A3A0",
  "--color-dusk-red": "#A8564F",
  "--color-ember": "#C98B6B",
  "--color-peach-haze": "#F1DCCB",
  "--color-cream": "#F7EFE8",
};

export const curatedPalettes: CuratedPalette[] = [
  {
    id: "sunset-family",
    name: "Sunset family",
    description: "The house palette — smoky rose dusk over warm cream.",
    swatches: [
      { name: "Graphite", hex: "#2B2A2D", token: "graphite" },
      { name: "Grey rose", hex: "#C9A3A0", token: "grey-rose" },
      { name: "Dusk red", hex: "#A8564F", token: "dusk-red" },
      { name: "Ember", hex: "#C98B6B", token: "ember" },
      { name: "Peach haze", hex: "#F1DCCB", token: "peach-haze" },
      { name: "Cream", hex: "#F7EFE8", token: "cream" },
    ],
    theme: { ...baseTheme },
  },
  {
    id: "fog-lilac",
    name: "Fog lilac",
    description: "Cooler mist with a whisper of mauve — still soft, still grey.",
    swatches: [
      { name: "Graphite", hex: "#2A2A2E" },
      { name: "Smoke", hex: "#6E6A72" },
      { name: "Mist", hex: "#B8B0B8" },
      { name: "Lilac haze", hex: "#C4A8B8" },
      { name: "Dusk", hex: "#8E6A7A" },
      { name: "Cream", hex: "#F5F0F2" },
    ],
    theme: {
      ...baseTheme,
      "--color-mist": "#B8B0B8",
      "--color-grey-rose": "#C4A8B8",
      "--color-dusk-red": "#8E6A7A",
      "--color-ember": "#B8929E",
      "--color-peach-haze": "#E8D8E0",
      "--color-cream": "#F5F0F2",
    },
  },
  {
    id: "sea-dusk",
    name: "Sea dusk",
    description: "Mineral teal-grey meeting ember — coastal sunset, muted.",
    swatches: [
      { name: "Graphite", hex: "#252A2C" },
      { name: "Smoke", hex: "#5F6A6C" },
      { name: "Mist", hex: "#A8B2B0" },
      { name: "Sea rose", hex: "#9BA8A0" },
      { name: "Dusk", hex: "#6A7A78" },
      { name: "Cream", hex: "#F0EDE8" },
    ],
    theme: {
      ...baseTheme,
      "--color-graphite": "#252A2C",
      "--color-smoke": "#5F6A6C",
      "--color-mist": "#A8B2B0",
      "--color-grey-rose": "#9BA8A0",
      "--color-dusk-red": "#6A7A78",
      "--color-ember": "#A8907A",
      "--color-peach-haze": "#D8CEC4",
      "--color-cream": "#F0EDE8",
    },
  },
  {
    id: "ash-sage",
    name: "Ash sage",
    description: "Dry sage grey with peach ember highlights — botanical dusk.",
    swatches: [
      { name: "Graphite", hex: "#282B28" },
      { name: "Smoke", hex: "#646A62" },
      { name: "Sage mist", hex: "#A8B0A4" },
      { name: "Grey rose", hex: "#A8A890" },
      { name: "Dusk", hex: "#6A7568" },
      { name: "Cream", hex: "#F2F0EA" },
    ],
    theme: {
      ...baseTheme,
      "--color-graphite": "#282B28",
      "--color-smoke": "#646A62",
      "--color-mist": "#A8B0A4",
      "--color-grey-rose": "#B0A898",
      "--color-dusk-red": "#6A7568",
      "--color-ember": "#B89878",
      "--color-peach-haze": "#D8D0C0",
      "--color-cream": "#F2F0EA",
    },
  },
  {
    id: "plum-smoke",
    name: "Plum smoke",
    description: "Plum-grey depth with ember edges — evening interior light.",
    swatches: [
      { name: "Graphite", hex: "#2A262C" },
      { name: "Smoke", hex: "#6A646C" },
      { name: "Mist", hex: "#B0A8B0" },
      { name: "Plum haze", hex: "#B898A8" },
      { name: "Dusk", hex: "#785868" },
      { name: "Cream", hex: "#F4EEF0" },
    ],
    theme: {
      ...baseTheme,
      "--color-graphite": "#2A262C",
      "--color-smoke": "#6A646C",
      "--color-mist": "#B0A8B0",
      "--color-grey-rose": "#B898A8",
      "--color-dusk-red": "#785868",
      "--color-ember": "#C08878",
      "--color-peach-haze": "#E8D0C8",
      "--color-cream": "#F4EEF0",
    },
  },
  {
    id: "ember-clay",
    name: "Ember clay",
    description: "Warmer clay tones with dusty coral — confident but gentle.",
    swatches: [
      { name: "Graphite", hex: "#2C2826" },
      { name: "Smoke", hex: "#736A66" },
      { name: "Clay", hex: "#C4A090" },
      { name: "Ember", hex: "#C97858" },
      { name: "Peach", hex: "#E8C8B0" },
      { name: "Cream", hex: "#FAF2EA" },
    ],
    theme: {
      ...baseTheme,
      "--color-graphite": "#2C2826",
      "--color-smoke": "#736A66",
      "--color-grey-rose": "#C4A090",
      "--color-dusk-red": "#A85A48",
      "--color-ember": "#C97858",
      "--color-peach-haze": "#E8C8B0",
      "--color-cream": "#FAF2EA",
    },
  },
];

export const defaultPaletteId = curatedPalettes[0].id;
