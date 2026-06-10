import Image from "next/image";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/lib/utils";
import { type Essential } from "@/lib/why-data";

type EssentialSpotlightProps = {
  essential: Essential;
  reverse?: boolean;
};

export function EssentialSpotlight({ essential, reverse }: EssentialSpotlightProps) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <SectionReveal
        className={cn(
          "glass-panel relative aspect-square overflow-hidden rounded-3xl",
          reverse && "lg:order-2"
        )}
      >
        <Image
          src={essential.image}
          alt={essential.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <span className="text-glow font-display text-sm text-cyan-glow">
          {essential.number}
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight text-ink-100 sm:text-4xl">
          <GradientText>{essential.title}</GradientText>
        </h2>
        <p className="mt-4 text-lg text-ink-300">{essential.description}</p>
      </SectionReveal>
    </div>
  );
}
