import { SonarRing } from "@/components/effects/SonarRing";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { type ComingSoonEntry } from "@/lib/coming-soon-data";

export function ComingSoon({ entry }: { entry: ComingSoonEntry }) {
  return (
    <div className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center lg:px-10">
      <SonarRing className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 opacity-20" />
      <SectionReveal className="relative">
        <Badge variant="gold">{entry.category}</Badge>
        <h1 className="mt-6 font-display text-4xl font-semibold uppercase tracking-tight text-ink-100 sm:text-5xl">
          <GradientText>{entry.title}</GradientText>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ink-300">
          {entry.description}
        </p>
        <p className="mt-6 font-display text-xs uppercase tracking-[0.3em] text-cyan-soft">
          This page is currently being charted — check back soon
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/production-models" size="lg" magnetic>
            Explore Production Models
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Our Team
          </Button>
        </div>
      </SectionReveal>
    </div>
  );
}
