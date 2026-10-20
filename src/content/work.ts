export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  gradient: string;
  problem: string;
  approach: string;
  result: string;
  mockup: {
    screenTitle: string;
    accent: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "loom-wellness",
    title: "Loom Wellness",
    subtitle: "A calm daily check-in for busy minds.",
    tags: ["Mobile", "UI/UX", "Palette"],
    gradient: "from-[var(--color-peach-haze)] via-[var(--color-grey-rose)] to-[var(--color-dusk-red)]",
    problem:
      "The client needed a wellness app that felt supportive, not clinical — without the loud gradients common in the category.",
    approach:
      "We built a dusk-grey palette, soft card surfaces, and a single accent for progress. Motion stays slow; typography leads.",
    result:
      "Test users described the app as “quietly encouraging.” Session length grew while notification opt-out fell.",
    mockup: { screenTitle: "Today", accent: "var(--color-ember)" },
  },
  {
    slug: "northline-coffee",
    title: "Northline Coffee",
    subtitle: "Brand and web for a slow-roast studio.",
    tags: ["Brand", "Web"],
    gradient: "from-[var(--color-cream)] via-[var(--color-ember)] to-[var(--color-graphite)]",
    problem:
      "A new roastery wanted to feel premium but approachable — far from trendy loud serif tropes.",
    approach:
      "Wordmark in soft Fraunces, packaging grids in bento blocks, photography framed in peach-haze panels.",
    result:
      "Launch kit shipped in four weeks. Wholesale partners cited the brand book as “easy to use.”",
    mockup: { screenTitle: "Menu", accent: "var(--color-dusk-red)" },
  },
  {
    slug: "atlas-notes",
    title: "Atlas Notes",
    subtitle: "Research tool with focus-first UI.",
    tags: ["UI/UX", "Web app"],
    gradient: "from-[var(--color-mist)] via-[var(--color-peach-haze)] to-[var(--color-smoke)]",
    problem:
      "Researchers drowned in chrome. The product needed depth without visual noise.",
    approach:
      "Layered glass sidebars, keyboard-first flows, and a type scale tuned for long reading sessions.",
    result:
      "Time-to-first-note dropped 30% in beta. Accessibility audit passed AA across core flows.",
    mockup: { screenTitle: "Inbox", accent: "var(--color-grey-rose)" },
  },
  {
    slug: "halo-finance",
    title: "Halo Finance",
    subtitle: "Mobile banking that whispers confidence.",
    tags: ["Mobile", "UI/UX"],
    gradient: "from-[var(--color-grey-rose)] via-[var(--color-ember)] to-[var(--color-peach-haze)]",
    problem:
      "Users mistrusted flashy fintech UI. Trust had to feel tactile and honest.",
    approach:
      "Graphite type on cream, rounded bento account cards, and micro-motion only on confirmations.",
    result:
      "Onboarding completion improved measurably in user testing; NPS comments highlighted “calm.”",
    mockup: { screenTitle: "Home", accent: "var(--color-dusk-red)" },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
