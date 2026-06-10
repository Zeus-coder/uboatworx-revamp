import { ModelCard } from "@/components/models/ModelCard";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal, StaggerGroup, StaggerItem } from "@/components/ui/SectionReveal";
import { type ModelFamily } from "@/lib/models-data";

export function RelatedModels({ models }: { models: ModelFamily[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <SectionReveal className="max-w-2xl">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-cyan-soft">
          Explore More
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight text-ink-100 sm:text-4xl">
          Other <GradientText>Production Models</GradientText>
        </h2>
      </SectionReveal>

      <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {models.map((model) => (
          <StaggerItem key={model.slug}>
            <ModelCard model={model} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
