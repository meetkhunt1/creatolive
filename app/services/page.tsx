import type { Metadata } from "next";
import TileSection from "@/components/home/TileSection";
import Faq from "@/components/home/Faq";
import Clients from "@/components/home/Clients";
import CtaBand from "@/components/portfolio/CtaBand";
import {
  serviceCatalog,
  servicesClosing,
  servicesIntro,
  servicesOverview,
  servicesProcess,
} from "@/lib/services-content";

export const metadata: Metadata = {
  title: "Services | Creatolive",
  description:
    "Web development, mobile apps, SEO, paid media, social and brand identity — the services Creatolive runs for growing businesses.",
};

export default function ServicesPage() {
  // Per-service detail pages are not built yet, so tiles carry no href and
  // render as plain cards. Adding the route later is all it takes to link them.
  const serviceTiles = serviceCatalog.map((service) => ({
    title: service.name,
    icon: service.icon,
    text: service.detail ? `${service.summary} ${service.detail}` : service.summary,
  }));

  return (
    <>
      <section className="page-intro">
        <div className="container">
          <div className="page-intro__grid">
            <div>
              <h1 className="title page-intro__title">{servicesIntro.title}</h1>
              <p>{servicesIntro.description}</p>
            </div>
            <div />
          </div>
        </div>
      </section>

      <TileSection
        tagline={servicesOverview.tagline}
        title={servicesOverview.title}
        description={servicesOverview.description}
        items={serviceTiles}
        columns={2}
        align="left"
      />

      <TileSection
        tagline={servicesProcess.tagline}
        title={servicesProcess.title}
        description={servicesProcess.description}
        items={servicesProcess.steps}
        surface="deep"
      />

      <Clients />
      <Faq variant="plain" />

      <CtaBand
        title={servicesClosing.title}
        subtitle={servicesClosing.description}
        primaryCta={servicesClosing.primaryCta}
        secondaryCta={servicesClosing.secondaryCta}
      />
    </>
  );
}
