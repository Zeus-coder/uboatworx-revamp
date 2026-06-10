import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal, StaggerGroup, StaggerItem } from "@/components/ui/SectionReveal";
import { EssentialCard } from "@/components/why/EssentialCard";
import { ESSENTIALS } from "@/lib/why-data";

export function WhyUbwTeaser() {
  const featured = ESSENTIALS.slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionReveal className="mx-auto max-w-2xl text-center">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-cyan-soft">
          Why U-Boat Worx
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight text-ink-100 sm:text-4xl">
          Without Peer in <GradientText>Every Aspect</GradientText> of
          Underwater Exploration
        </h2>
      </SectionReveal>

      <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-3">
        {featured.map((essential) => (
          <StaggerItem key={essential.number}>
            <EssentialCard essential={essential} />
          </StaggerItem>
        ))}
      </StaggerGroup>

      <div className="mt-12 flex justify-center">
        <Button href="/why-u-boat-worx" variant="secondary">
          See All 9 Essentials
        </Button>
      </div>
    </section>
  );
}
