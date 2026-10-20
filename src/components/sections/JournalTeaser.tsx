import { journalPosts } from "@/content/journal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

export function JournalTeaser() {
  return (
    <Section id="journal" eyebrow="Journal" title="Notes from the studio.">
      <div className="grid gap-4 md:grid-cols-3">
        {journalPosts.map((post) => (
          <GlassCard key={post.slug} as="article" className="flex h-full flex-col p-6">
            <p className="text-xs tracking-wide text-smoke">{post.tag}</p>
            <h3 className="mt-3 font-display text-xl text-graphite">{post.title}</h3>
            <p className="mt-3 flex-1 text-sm text-smoke">{post.excerpt}</p>
            <p className="mt-4 text-xs text-mist">Coming soon</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
