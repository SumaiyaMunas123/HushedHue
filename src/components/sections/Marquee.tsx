import { services } from "@/content/services";

export function Marquee() {
  const items = [...services, ...services];

  return (
    <section aria-label="Services" className="border-y border-mist/30 py-6">
      <div className="overflow-hidden">
        <ul className="marquee-track flex w-max gap-12 whitespace-nowrap px-5 text-lg text-smoke md:gap-16 md:text-xl">
          {items.map((service, i) => (
            <li key={`${service}-${i}`} className="flex items-center gap-12 md:gap-16">
              <span>{service}</span>
              <span aria-hidden className="text-grey-rose">
                ✦
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
