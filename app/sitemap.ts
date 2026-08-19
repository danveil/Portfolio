import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const modified = new Date();
  return [
    { url: siteConfig.url, lastModified: modified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/projects`, lastModified: modified, changeFrequency: "weekly", priority: 0.9 },
    ...projects.map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified: modified,
      changeFrequency: "monthly" as const,
      priority: project.featured ? 0.8 : 0.6,
    })),
  ];
}
