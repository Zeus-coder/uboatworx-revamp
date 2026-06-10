import Link from "next/link";
import { ModelCard } from "@/components/models/ModelCard";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal, StaggerGroup, StaggerItem } from "@/components/ui/SectionReveal";
import { MODEL_FAMILIES } from "@/lib/models-data";

export function ModelsShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionReveal className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-cyan-soft">
            Production Models
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight text-ink-100 sm:text-4xl">
            Nine Families, <GradientText>One Standard of Excellence</GradientText>
          </h2>
        </div>
        <Link
          href="/production-models"
          className="group inline-flex shrink-0 items-center gap-2 font-display text-xs uppercase tracking-[0.2em] text-cyan-glow transition-colors duration-300 hover:text-cyan-soft"
        >
          View All Models
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </SectionReveal>

      <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MODEL_FAMILIES.map((model) => (
          <StaggerItem key={model.slug}>
            <ModelCard model={model} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
