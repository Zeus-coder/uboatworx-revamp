import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { EssentialSpotlight } from "@/components/why/EssentialSpotlight";
import { ESSENTIALS } from "@/lib/why-data";

export const metadata: Metadata = {
  title: "Why U-Boat Worx",
  description:
    "Nine engineering essentials that make U-Boat Worx submarines without peer in comfort, visibility, safety, control, adaptability and endurance beneath the surface.",
  alternates: { canonical: "/why-u-boat-worx" },
  openGraph: {
    title: "Why U-Boat Worx",
    description:
      "Nine engineering essentials that make U-Boat Worx submarines without peer in comfort, visibility, safety, control, adaptability and endurance beneath the surface.",
  },
};

export default function WhyUboatWorxPage() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
        <SectionReveal>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-cyan-soft">
            Why U-Boat Worx
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold uppercase tracking-tight text-ink-100 sm:text-5xl lg:text-6xl">
            Without Peer in <GradientText>Every Aspect</GradientText> of
            Underwater Exploration
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-300">
            Fourteen years of subsea engineering distilled into nine
            essentials — the standards every U-Boat Worx submarine is
            designed, built and certified against, from the smallest personal
            submersible to the largest entertainment platform.
          </p>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-6xl space-y-24 px-6 pb-24 lg:px-10">
        {ESSENTIALS.map((essential, index) => (
          <EssentialSpotlight
            key={essential.number}
            essential={essential}
            reverse={index % 2 === 1}
          />
        ))}
      </section>

      <section className="border-t border-cyan-glow/10 bg-abyss-900/40 py-24">
        <SectionReveal className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-ink-100 sm:text-4xl">
            Ready to See These <GradientText>Essentials in Action</GradientText>?
          </h2>
          <p className="mt-4 text-ink-300">
            Speak with our team for a full ownership consultation, or explore
            the production models built around these nine standards.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg" magnetic>
              Request Owner&apos;s Guide
            </Button>
            <Button href="/production-models" variant="secondary" size="lg">
              Explore Production Models
            </Button>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
