import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { type ModelFamily } from "@/lib/models-data";

export function ModelHero({ model }: { model: ModelFamily }) {
  const primary = model.variants[0];

  return (
    <section className="relative overflow-hidden border-b border-cyan-glow/10">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-24">
        <SectionReveal>
          <div className="flex flex-wrap gap-2">
            {model.applications.map((app) => (
              <Badge key={app} variant="cyan">
                {app}
              </Badge>
            ))}
          </div>
          <p className="mt-4 font-display text-xs uppercase tracking-[0.3em] text-cyan-soft">
            {model.series}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold uppercase tracking-tight text-ink-100 sm:text-5xl lg:text-6xl">
            <GradientText>{model.name}</GradientText>
          </h1>
          <p className="mt-4 text-lg text-ink-300">{model.tagline}</p>
          <p className="mt-4 max-w-xl text-ink-400">{model.shortDescription}</p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            <Spec label="Depth" value={primary.depth} />
            <Spec label="Occupancy" value={primary.occupancy} />
            {primary.speed && <Spec label="Speed" value={primary.speed} />}
            {primary.endurance && (
              <Spec label="Endurance" value={primary.endurance} />
            )}
          </div>

          {primary.price && (
            <p className="mt-6 font-display text-lg text-gold-300">
              {primary.price}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg" magnetic>
              Enquire About {model.name}
            </Button>
            <Button href="/production-models" variant="secondary" size="lg">
              All Models
            </Button>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15} className="relative aspect-[4/3]">
          <Image
            src={model.heroImage}
            alt={model.name}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </SectionReveal>
      </div>
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-xs uppercase tracking-[0.2em] text-ink-400">
        {label}
      </p>
      <p className="mt-1 font-display text-lg text-ink-100">{value}</p>
    </div>
  );
}
