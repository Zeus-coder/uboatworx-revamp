import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { type ModelFamily } from "@/lib/models-data";

export function ModelCard({ model }: { model: ModelFamily }) {
  const primary = model.variants[0];

  return (
    <Link href={`/production-models/${model.slug}`} className="block h-full">
      <GlassCard className="group flex h-full flex-col overflow-hidden">
        <div className="relative aspect-[4/3] bg-abyss-900">
          <Image
            src={model.heroImage}
            alt={model.name}
            fill
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <Badge variant="cyan">{model.series}</Badge>
          <h3 className="mt-3 font-display text-xl uppercase tracking-wide text-ink-100">
            {model.name}
          </h3>
          <p className="mt-2 text-sm text-ink-400">{model.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-400">
            <span>{primary.depth}</span>
            <span>{primary.occupancy}</span>
          </div>
          <span className="mt-auto inline-flex items-center gap-2 pt-6 font-display text-xs uppercase tracking-[0.2em] text-cyan-glow transition-transform duration-300 group-hover:translate-x-1">
            View Model →
          </span>
        </div>
      </GlassCard>
    </Link>
  );
}
