import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/home/CtaBanner";
import { FeatureGrid } from "@/components/models/FeatureGrid";
import { Gallery } from "@/components/models/Gallery";
import { ModelHero } from "@/components/models/ModelHero";
import { RelatedModels } from "@/components/models/RelatedModels";
import { SpecsSection } from "@/components/models/SpecsSection";
import {
  MODEL_FAMILIES,
  getModelBySlug,
  getRelatedModels,
} from "@/lib/models-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return MODEL_FAMILIES.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const model = getModelBySlug(slug);

  if (!model) {
    return {};
  }

  return {
    title: model.name,
    description: model.shortDescription,
    alternates: { canonical: `/production-models/${slug}` },
    openGraph: {
      title: `${model.name} | U-Boat Worx`,
      description: model.shortDescription,
      images: [{ url: model.heroImage, alt: model.name }],
    },
  };
}

export default async function ModelDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const model = getModelBySlug(slug);

  if (!model) {
    notFound();
  }

  const related = getRelatedModels(slug);

  return (
    <>
      <ModelHero model={model} />
      <FeatureGrid highlights={model.highlights} modelName={model.name} />
      <SpecsSection model={model} />
      {model.gallery && (
        <Gallery images={model.gallery} modelName={model.name} />
      )}
      <RelatedModels models={related} />
      <CtaBanner />
    </>
  );
}
