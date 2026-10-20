type PhoneMockupProps = {
  title: string;
  accent?: string;
};

export function PhoneMockup({ title, accent = "var(--color-ember)" }: PhoneMockupProps) {
  return (
    <div
      className="mx-auto w-[min(100%,16rem)] rounded-[2rem] border border-mist/50 bg-graphite p-2 shadow-xl"
      role="img"
      aria-label={`Mobile screen mockup: ${title}`}
    >
      <div className="overflow-hidden rounded-[1.5rem] bg-cream">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="h-2 w-8 rounded-full bg-mist/80" />
          <span className="text-[10px] text-smoke">9:41</span>
        </div>
        <div className="space-y-3 px-4 pb-6">
          <p className="font-display text-lg text-graphite">{title}</p>
          <div className="h-24 rounded-2xl" style={{ background: accent, opacity: 0.85 }} />
          <div className="space-y-2">
            <div className="h-3 w-full rounded-full bg-peach-haze" />
            <div className="h-3 w-4/5 rounded-full bg-mist/60" />
            <div className="h-3 w-3/5 rounded-full bg-mist/40" />
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="h-14 rounded-xl bg-peach-haze/80" />
            <div className="h-14 rounded-xl bg-grey-rose/30" />
          </div>
        </div>
      </div>
    </div>
  );
}
