import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/site";
import AboutStats from "@/components/about/AboutStats";
import AboutStory from "@/components/about/AboutStory";
import AboutCredentials from "@/components/about/AboutCredentials";
import TeamGrid from "@/components/about/TeamGrid";
import TileSection from "@/components/home/TileSection";
import Clients from "@/components/home/Clients";
import CtaBand from "@/components/portfolio/CtaBand";
import { aboutClosing, aboutIntro, aboutProcess } from "@/lib/about-content";

const description =
  "Creatolive is a Rajkot-based growth studio building websites, apps and campaigns for ambitious brands since 2020. See who we are and how we work.";

export const metadata: Metadata = pageMetadata({
  title: "About Creatolive — Digital Agency in Rajkot, India",
  absoluteTitle: true,
  description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: "/about", name: "About Creatolive", description, type: "AboutPage" }),
          breadcrumbSchema([{ name: "About", path: "/about" }]),
        ]}
      />
      <section className="page-intro">
        <div className="container">
          <div className="page-intro__grid">
            <div>
              <p className="tagline">{aboutIntro.tagline}</p>
              <h1 className="title page-intro__title">{aboutIntro.title}</h1>
              {aboutIntro.paragraphs.map((text) => (
                <p key={text.slice(0, 28)}>{text}</p>
              ))}
            </div>
            <div />
          </div>
        </div>
      </section>

      <AboutStats />
      <AboutStory />
      <AboutCredentials />

      <TileSection
        tagline={aboutProcess.tagline}
        title={aboutProcess.title}
        description={aboutProcess.description}
        items={aboutProcess.items}
        surface="deep"
      />

      {/* "Our Core Values" — taken off this page; it still runs on the home
          page, where it is not preceded by the process tiles. */}

      {/* "Our Team" — hidden until there are real names and photos. */}
      {/* <TeamGrid /> */}

      {/* Client logo marquee — placeholder marks, see app/page.tsx. */}
      {/* <Clients /> */}

      <CtaBand
        title={aboutClosing.title}
        subtitle={aboutClosing.description}
        primaryCta={aboutClosing.primaryCta}
        secondaryCta={aboutClosing.secondaryCta}
      />
    </>
  );
}
