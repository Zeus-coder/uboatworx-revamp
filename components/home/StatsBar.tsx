import { StaggerGroup, StaggerItem } from "@/components/ui/SectionReveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { STATS } from "@/lib/site-data";

export function StatsBar() {
  return (
    <section className="border-y border-cyan-glow/10 bg-abyss-900/40 py-12">
      <StaggerGroup className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-10">
        {STATS.map((stat) => (
          <StaggerItem key={stat.label} className="text-center lg:text-left">
            <p className="font-display text-3xl font-semibold sm:text-4xl">
              <StatCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className="text-glow text-cyan-glow"
              />
            </p>
            <p className="mt-2 font-display text-xs uppercase tracking-[0.2em] text-ink-400">
              {stat.label}
            </p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
