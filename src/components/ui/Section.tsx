import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, eyebrow, children, className = "" }: SectionProps) {
  const titleId = title ? `${id ?? "section"}-title` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`mx-auto w-full max-w-(--page-max) px-5 py-20 md:px-8 md:py-28 ${className}`}
    >
      {(eyebrow || title) && (
        <header className="mb-12 md:mb-16">
          {eyebrow ? (
            <p className="mb-3 text-sm tracking-wide text-smoke">{eyebrow}</p>
          ) : null}
          {title ? (
            <h2 id={titleId} className="text-display-lg display-hover text-graphite">
              {title}
            </h2>
          ) : null}
        </header>
      )}
      {children}
    </section>
  );
}
