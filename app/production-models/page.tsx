import type { Metadata } from "next";
import { ModelsGrid } from "@/components/models/ModelsGrid";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Production Models",
  description:
    "Explore the full U-Boat Worx production submarine range — nine series-engineered families spanning personal exploration, research, cruise, performance and entertainment submersibles.",
  alternates: { canonical: "/production-models" },
  openGraph: {
    title: "Production Models | U-Boat Worx",
    description:
      "Explore the full U-Boat Worx production submarine range — nine series-engineered families spanning personal exploration, research, cruise, performance and entertainment submersibles.",
  },
};

export default function ProductionModelsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionReveal className="max-w-3xl">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-cyan-soft">
          Production Models
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold uppercase tracking-tight text-ink-100 sm:text-5xl">
          The Fleet, <GradientText>Engineered for Every Depth</GradientText>
        </h1>
        <p className="mt-4 text-lg text-ink-300">
          Nine production submarine families, from the single-seat NEMO to
          the 120-guest UWEP — every U-Boat Worx submersible is
          series-engineered, DNV certified, and ready to be configured around
          your mission.
        </p>
      </SectionReveal>

      <div className="mt-12">
        <ModelsGrid />
      </div>
    </div>
  );
}
