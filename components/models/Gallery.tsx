import Image from "next/image";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal, StaggerGroup, StaggerItem } from "@/components/ui/SectionReveal";

type GalleryProps = {
  images: string[];
  modelName: string;
};

export function Gallery({ images, modelName }: GalleryProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <SectionReveal className="max-w-2xl">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-cyan-soft">
          Gallery
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight text-ink-100 sm:text-4xl">
          <GradientText>{modelName}</GradientText> in Detail
        </h2>
      </SectionReveal>

      <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <StaggerItem key={src}>
            <div className="glass-panel relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`${modelName} detail ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
