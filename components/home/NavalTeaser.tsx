import { SonarRing } from "@/components/effects/SonarRing";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { NAVAL_TEASER } from "@/lib/site-data";

export function NavalTeaser() {
  return (
    <section className="relative overflow-hidden border-y border-cyan-glow/10 bg-abyss-900/50 py-24">
      <SonarRing className="pointer-events-none absolute -right-32 top-1/2 hidden h-[480px] w-[480px] -translate-y-1/2 opacity-30 lg:block" />
      <SectionReveal className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-gold-300">
          {NAVAL_TEASER.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight text-ink-100 sm:text-4xl">
          <GradientText>{NAVAL_TEASER.headline}</GradientText>
        </h2>
        <p className="mt-4 text-ink-300">{NAVAL_TEASER.description}</p>
        <div className="mt-8 flex justify-center">
          <Button href={NAVAL_TEASER.cta.href} variant="secondary">
            {NAVAL_TEASER.cta.label}
          </Button>
        </div>
      </SectionReveal>
    </section>
  );
}
