import type { Metadata } from "next";
import AboutStats from "@/components/about/AboutStats";
import AboutStory from "@/components/about/AboutStory";
import AboutCredentials from "@/components/about/AboutCredentials";
import TeamGrid from "@/components/about/TeamGrid";
import TileSection from "@/components/home/TileSection";
import Clients from "@/components/home/Clients";
import CtaBand from "@/components/portfolio/CtaBand";
import { aboutClosing, aboutIntro, aboutProcess } from "@/lib/about-content";
import { coreValues } from "@/lib/home-content";

export const metadata: Metadata = {
  title: "About | Creatolive",
  description:
    "Creatolive is a growth studio building websites, apps and campaigns for ambitious brands. Meet the team and see how we work.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <div className="page-intro__grid">
            <div>
              <h4 className="tagline">{aboutIntro.tagline}</h4>
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

      <TileSection
        title={coreValues.title}
        description={coreValues.description}
        items={coreValues.items}
      />

      {/* "Our Team" — hidden until there are real names and photos. */}
      {/* <TeamGrid /> */}

      <Clients />

      <CtaBand
        title={aboutClosing.title}
        subtitle={aboutClosing.description}
        primaryCta={aboutClosing.primaryCta}
        secondaryCta={aboutClosing.secondaryCta}
      />
    </>
  );
}
