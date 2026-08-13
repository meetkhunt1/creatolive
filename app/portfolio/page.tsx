import type { Metadata } from "next";
import ProjectArchive from "@/components/portfolio/ProjectArchive";
import CtaBand from "@/components/portfolio/CtaBand";
import { portfolioIntro } from "@/lib/portfolio-content";

export const metadata: Metadata = {
  title: "Portfolio | Creatolive",
  description:
    "Selected work from Creatolive — websites, ecommerce builds, brand systems and campaigns for ambitious brands.",
};

export default function PortfolioPage() {
  return (
    <>
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
