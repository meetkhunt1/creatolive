import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { BUILT_ROUTES } from "@/lib/routes";
import { projects } from "@/lib/portfolio-content";

export const dynamic = "force-static";

/** Built from the same route list the navigation uses, so a page that is
 *  not live can never end up in the sitemap. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const priority: Record<string, number> = {
    "/": 1,
    "/services": 0.9,
    "/contact": 0.8,
    "/portfolio": 0.8,
    "/about": 0.7,
  };

  return [
    ...BUILT_ROUTES.map((path) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: priority[path] ?? 0.6,
    })),
    ...projects.map((project) => ({
      url: absoluteUrl(`/project/${project.slug}`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
      images: [absoluteUrl(project.heroImage ?? project.thumb)],
    })),
  ];
}
