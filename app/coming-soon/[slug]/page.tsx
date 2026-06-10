import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComingSoon } from "@/components/shared/ComingSoon";
import { COMING_SOON_PAGES, getComingSoonBySlug } from "@/lib/coming-soon-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return COMING_SOON_PAGES.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getComingSoonBySlug(slug);

  if (!entry) {
    return {};
  }

  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: `/coming-soon/${slug}` },
    robots: { index: false, follow: true },
  };
}

export default async function ComingSoonPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getComingSoonBySlug(slug);

  if (!entry) {
    notFound();
  }

  return <ComingSoon entry={entry} />;
}
