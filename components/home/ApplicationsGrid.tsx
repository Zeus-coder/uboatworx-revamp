import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal, StaggerGroup, StaggerItem } from "@/components/ui/SectionReveal";
import { APPLICATIONS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ApplicationsGrid() {
  return (
    <section id="applications" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionReveal className="max-w-2xl">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-cyan-soft">
          Applications
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight text-ink-100 sm:text-4xl">
          A Submarine for <GradientText>Every Mission</GradientText>
        </h2>
        <p className="mt-4 text-ink-300">
          From private yachts to scientific expeditions, U-Boat Worx
          submersibles are engineered around the way you intend to use them.
        </p>
      </SectionReveal>

      <StaggerGroup className="mt-12 grid gap-6 lg:grid-cols-2">
        {APPLICATIONS.map((app, index) => (
          <StaggerItem
            key={app.title}
            className={index === 0 ? "lg:col-span-2" : undefined}
          >
            <Link href={`/production-models/${app.modelSlug}`} className="block h-full">
              <GlassCard className="group relative h-full overflow-hidden">
                <div
                  className={cn(
                    "relative",
                    index === 0 ? "aspect-[21/9]" : "aspect-[4/3]"
                  )}
                >
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss-950 via-abyss-950/50 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <h3 className="font-display text-xl uppercase tracking-wide text-ink-100">
                    {app.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 max-w-md text-sm text-ink-300",
                      index === 0 ? "lg:max-w-xl" : "line-clamp-2"
                    )}
                  >
                    {app.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.2em] text-cyan-glow transition-transform duration-300 group-hover:translate-x-1">
                    {app.cta} →
                  </span>
                </div>
              </GlassCard>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
