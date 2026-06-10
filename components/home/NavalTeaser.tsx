import Link from "next/link";
import { SonarRing } from "@/components/effects/SonarRing";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { NAVAL_TEASER } from "@/lib/site-data";

export function NavalTeaser() {
  return (
    <section className="relative overflow-hidden border-t border-cyan-glow/10 bg-abyss-900/50 py-16">
      <SonarRing className="pointer-events-none absolute -right-32 top-1/2 hidden h-[480px] w-[480px] -translate-y-1/2 opacity-20 lg:block" />
      <SectionReveal className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-gold-300">
          {NAVAL_TEASER.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight text-ink-100 sm:text-4xl">
          <GradientText>{NAVAL_TEASER.headline}</GradientText>
        </h2>
        <p className="mt-4 text-ink-300">{NAVAL_TEASER.description}</p>
        <div className="mt-8 flex justify-center">
          <Link
            href={NAVAL_TEASER.cta.href}
            className="group inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.2em] text-cyan-glow transition-colors duration-300 hover:text-cyan-soft"
          >
            {NAVAL_TEASER.cta.label}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </SectionReveal>
    </section>
  );
}
