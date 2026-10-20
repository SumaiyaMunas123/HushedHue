import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { WhatIMake } from "@/components/sections/WhatIMake";
import { PaletteLab } from "@/components/sections/PaletteLab";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { AboutSection } from "@/components/sections/AboutSection";
import { JournalTeaser } from "@/components/sections/JournalTeaser";
import { ContactFooter } from "@/components/sections/ContactFooter";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Marquee />
      <WhatIMake />
      <PaletteLab />
      <SelectedWork />
      <ProcessTimeline />
      <AboutSection />
      <JournalTeaser />
      <ContactFooter />
    </main>
  );
}
