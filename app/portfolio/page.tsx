import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { projects } from "@/lib/portfolio-content";
import { absoluteUrl, breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/site";
import ProjectArchive from "@/components/portfolio/ProjectArchive";
import CtaBand from "@/components/portfolio/CtaBand";
import { portfolioIntro } from "@/lib/portfolio-content";

const description =
  "Case studies from Creatolive — Shopify and WordPress websites, ecommerce redesigns and landing pages for brands in India and the United States.";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio — Website & Ecommerce Case Studies",
  description,
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            ...webPageSchema({ path: "/portfolio", name: "Creatolive Portfolio", description, type: "CollectionPage" }),
            mainEntity: {
              "@type": "ItemList",
              itemListElement: projects.map((project, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: absoluteUrl(`/project/${project.slug}`),
                name: project.title,
              })),
            },
          },
          breadcrumbSchema([{ name: "Portfolio", path: "/portfolio" }]),
        ]}
      />
      <section className="page-intro">
        <div className="container">
          <div className="page-intro__grid">
            <div>
              <h1 className="title page-intro__title">{portfolioIntro.title}</h1>
              <p>{portfolioIntro.description}</p>
            </div>
            <div />
          </div>
        </div>
      </section>

      <ProjectArchive />
      <CtaBand />
    </>
  );
}
