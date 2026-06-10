import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CTA_BANNER } from "@/lib/site-data";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionReveal className="glass-panel glow-border relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
        <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-ink-100 sm:text-5xl">
          <GradientText>{CTA_BANNER.headline}</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-300">
          {CTA_BANNER.description}
        </p>
        <div className="mt-8 flex justify-center">
          <Button href={CTA_BANNER.cta.href} size="lg" magnetic>
            {CTA_BANNER.cta.label}
          </Button>
        </div>
      </SectionReveal>
    </section>
  );
}
