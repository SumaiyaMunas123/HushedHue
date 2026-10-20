import Link from "next/link";
import { site } from "@/content/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#palette-lab", label: "Palette Lab" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 mx-auto flex w-full max-w-(--page-max) items-center justify-between px-5 py-5 md:px-8">
      <Link
        href="/"
        className="font-display text-lg text-graphite display-hover"
        style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 32' }}
      >
        {site.name}
      </Link>
      <nav aria-label="Primary">
        <ul className="flex flex-wrap gap-4 text-sm text-smoke md:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-graphite focus-visible:text-graphite"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
