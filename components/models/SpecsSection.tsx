import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SpecTable } from "@/components/ui/SpecTable";
import { type ModelFamily } from "@/lib/models-data";

export function SpecsSection({ model }: { model: ModelFamily }) {
  return (
    <section className="border-y border-cyan-glow/10 bg-abyss-900/40 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionReveal className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-cyan-soft">
            Specifications
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight text-ink-100 sm:text-4xl">
            {model.variants.length > 1 ? (
              <>
                Available <GradientText>Configurations</GradientText>
              </>
            ) : (
              <>
                Technical <GradientText>Specification</GradientText>
              </>
            )}
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-10">
          <SpecTable variants={model.variants} />
        </SectionReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <SectionReveal delay={0.15}>
            <h3 className="font-display text-xs uppercase tracking-[0.3em] text-cyan-soft">
              Overview
            </h3>
            <div className="mt-4 space-y-4 text-ink-300">
              {model.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <h3 className="font-display text-xs uppercase tracking-[0.3em] text-cyan-soft">
              Safety Systems
            </h3>
            <ul className="mt-4 space-y-3">
              {model.safetyFeatures.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-ink-300">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-glow" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
