import { GlassCard } from "@/components/ui/GlassCard";
import { DEALERS } from "@/lib/site-data";

export function DealerList() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {DEALERS.map((dealer) => (
        <GlassCard
          key={`${dealer.name}-${dealer.location}`}
          className="p-6"
          hover={false}
        >
          <p className="font-display text-xs uppercase tracking-[0.2em] text-cyan-soft">
            {dealer.region}
          </p>
          <h3 className="mt-2 font-display text-lg uppercase tracking-wide text-ink-100">
            {dealer.name}
          </h3>
          <p className="mt-1 text-sm text-ink-400">{dealer.location}</p>
        </GlassCard>
      ))}
    </div>
  );
}
