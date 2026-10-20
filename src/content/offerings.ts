export type Offering = {
  id: string;
  title: string;
  description: string;
  visual: "palette" | "brand" | "ui" | "mobile";
};

export const offerings: Offering[] = [
  {
    id: "palettes",
    title: "Palettes",
    description: "Curated colour stories with grey-soft harmony and copy-ready tokens.",
    visual: "palette",
  },
  {
    id: "brand",
    title: "Brand design",
    description: "Logos, type, and quiet systems that feel warm on first glance.",
    visual: "brand",
  },
  {
    id: "ui",
    title: "UI/UX",
    description: "Interfaces with breathing room, clear hierarchy, and gentle motion.",
    visual: "ui",
  },
  {
    id: "mobile",
    title: "Mobile apps",
    description: "Native-feeling flows, thumb-friendly layouts, and polished details.",
    visual: "mobile",
  },
];
