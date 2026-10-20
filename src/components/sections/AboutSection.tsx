import { about } from "@/content/about";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

export function AboutSection() {
  return (
    <Section id="about" eyebrow="About" title={about.headline}>
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12">
        <p className="text-lg leading-relaxed text-smoke">{about.story}</p>
        <ul className="space-y-4">
          {about.values.map((value) => (
            <li key={value.title}>
              <GlassCard className="p-5">
                <h3 className="font-display text-xl text-graphite">{value.title}</h3>
                <p className="mt-2 text-sm text-smoke">{value.body}</p>
              </GlassCard>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
