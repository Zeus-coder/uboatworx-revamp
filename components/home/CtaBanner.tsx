import { SonarRing } from "@/components/effects/SonarRing";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { COMPANY_INFO, CTA_BANNER } from "@/lib/site-data";

export function CtaBanner() {
  const telHref = COMPANY_INFO.phone.replace(/[^+\d]/g, "");

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionReveal className="glass-panel glow-border relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16 sm:py-20">
        <SonarRing className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="relative">
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
          <p className="mt-6 font-display text-xs uppercase tracking-[0.2em] text-ink-400">
            Or reach us directly —{" "}
            <a
              href={`tel:${telHref}`}
              className="text-ink-100 transition-colors hover:text-cyan-glow"
            >
              {COMPANY_INFO.phone}
            </a>
            <span className="mx-2 text-ink-400/40">·</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-ink-100 transition-colors hover:text-cyan-glow"
            >
              {COMPANY_INFO.email}
            </a>
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}
