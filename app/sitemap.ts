import type { MetadataRoute } from "next";
import { MODEL_FAMILIES } from "@/lib/models-data";

const SITE_URL = "https://www.uboatworx.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/production-models`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/why-u-boat-worx`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const modelPages: MetadataRoute.Sitemap = MODEL_FAMILIES.map((model) => ({
    url: `${SITE_URL}/production-models/${model.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...modelPages];
}
