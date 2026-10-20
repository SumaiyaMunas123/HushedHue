import Link from "next/link";
import { caseStudies } from "@/content/work";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

export function SelectedWork() {
  return (
    <Section id="work" eyebrow="Selected work" title="Stories in soft colour.">
      <div className="grid gap-5 md:grid-cols-2">
        {caseStudies.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`} className="group block">
            <GlassCard className="h-full transition-transform duration-500 group-hover:-translate-y-1">
              <div className={`grain-overlay mesh-gradient h-44 opacity-90 ${project.gradient}`} />
              <div className="p-6">
                <ul className="mb-3 flex flex-wrap gap-2 text-xs text-smoke">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-mist/40 px-2 py-0.5">
                      {tag}
                    </li>
                  ))}
                </ul>
                <h3 className="font-display text-2xl text-graphite group-hover:text-dusk-red">
                  {project.title}
                </h3>
                <p className="mt-2 text-smoke">{project.subtitle}</p>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </Section>
  );
}
