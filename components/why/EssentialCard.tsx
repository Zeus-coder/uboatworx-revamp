import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";
import { type Essential } from "@/lib/why-data";

export function EssentialCard({ essential }: { essential: Essential }) {
  return (
    <GlassCard className="group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={essential.image}
          alt={essential.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss-950 via-abyss-950/10 to-transparent" />
        <span className="text-glow absolute left-4 top-4 font-display text-sm text-cyan-glow">
          {essential.number}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg uppercase tracking-wide text-ink-100">
          {essential.title}
        </h3>
        <p className="mt-2 text-sm text-ink-400">{essential.summary}</p>
      </div>
    </GlassCard>
  );
}
