import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/work";
import { site } from "@/content/site";
import { PhoneMockup } from "@/components/work/PhoneMockup";
import { Button } from "@/components/ui/Button";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Work" };
  return {
    title: `${study.title} — ${site.name}`,
    description: study.subtitle,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <main className="mx-auto w-full max-w-(--page-max) px-5 py-16 md:px-8 md:py-24">
      <Link href="/#work" className="text-sm text-smoke hover:text-graphite">
        ← Back to work
      </Link>
      <header className="mt-8 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <ul className="mb-4 flex flex-wrap gap-2 text-xs text-smoke">
            {study.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-mist/40 px-2 py-0.5">
                {tag}
              </li>
            ))}
          </ul>
          <h1 className="text-display-lg text-graphite">{study.title}</h1>
          <p className="mt-4 text-lg text-smoke">{study.subtitle}</p>
        </div>
        <div className={`grain-overlay mesh-gradient h-56 rounded-(--radius-bento) md:h-72`} />
      </header>

      <div className="mt-16 grid gap-12 md:grid-cols-[1fr_auto]">
        <div className="space-y-10">
          {(
            [
              ["Problem", study.problem],
              ["Approach", study.approach],
              ["Result", study.result],
            ] as const
          ).map(([label, body]) => (
            <section key={label} aria-labelledby={`${study.slug}-${label}`}>
              <h2
                id={`${study.slug}-${label}`}
                className="font-display text-2xl text-graphite"
              >
                {label}
              </h2>
              <p className="mt-3 leading-relaxed text-smoke">{body}</p>
            </section>
          ))}
        </div>
        <PhoneMockup title={study.mockup.screenTitle} accent={study.mockup.accent} />
      </div>

      <div className="mt-16">
        <Button href="/#contact">Start a project</Button>
      </div>
    </main>
  );
}
