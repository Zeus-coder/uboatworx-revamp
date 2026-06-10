import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal, StaggerGroup, StaggerItem } from "@/components/ui/SectionReveal";
import { type ModelHighlight } from "@/lib/models-data";

type FeatureGridProps = {
  highlights: ModelHighlight[];
  modelName: string;
};

export function FeatureGrid({ highlights, modelName }: FeatureGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <SectionReveal className="max-w-2xl">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-cyan-soft">
          Highlights
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight text-ink-100 sm:text-4xl">
          What Makes <GradientText>{modelName}</GradientText> Different
        </h2>
      </SectionReveal>

      <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((highlight) => (
          <StaggerItem key={highlight.title}>
            <GlassCard className="h-full p-6" hover={false}>
              <h3 className="font-display text-lg uppercase tracking-wide text-ink-100">
                {highlight.title}
              </h3>
              <p className="mt-2 text-sm text-ink-400">
                {highlight.description}
              </p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
