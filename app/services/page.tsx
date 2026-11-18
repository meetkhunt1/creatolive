import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import {
  absoluteUrl,
  breadcrumbSchema,
  orgRef,
  pageMetadata,
  webPageSchema,
} from "@/lib/site";
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

const description =
  "Website development, Flutter mobile apps, SEO and Meta Ads from Creatolive, a digital agency in Rajkot, India. Senior specialists, clear package pricing.";

export const metadata: Metadata = pageMetadata({
  title: "Services — Web Development, Apps, SEO & Meta Ads",
  description,
  path: "/services",
});

export default function ServicesPage() {
  // Per-service detail pages are not built yet, so tiles carry no href and
  // render as plain cards. Adding the route later is all it takes to link them.
  // The slug id is the anchor the footer's service links jump to.
  const serviceTiles = serviceCatalog.map((service) => ({
    id: service.slug,
    title: service.name,
    icon: service.icon,
    text: service.detail ? `${service.summary} ${service.detail}` : service.summary,
  }));

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: "/services", name: "Creatolive Services", description }),
          breadcrumbSchema([{ name: "Services", path: "/services" }]),
          ...serviceCatalog.map((service) => ({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${absoluteUrl("/services")}#${service.slug}`,
            name: service.name,
            serviceType: service.name,
            description: service.detail
              ? `${service.summary} ${service.detail}`
              : service.summary,
            url: `${absoluteUrl("/services")}#${service.slug}`,
            provider: orgRef,
            areaServed: [{ "@type": "Country", name: "India" }, { "@type": "Place", name: "Worldwide" }],
          })),
        ]}
      />
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

      {/* Client logo marquee — placeholder marks, see app/page.tsx. */}
      {/* <Clients /> */}
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
