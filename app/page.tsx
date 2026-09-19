import Hero from "@/components/home/Hero";
import Platforms from "@/components/home/Platforms";
import Clients from "@/components/home/Clients";
import TileSection from "@/components/home/TileSection";
import Projects from "@/components/home/Projects";
import Focus from "@/components/home/Focus";
import Simplify from "@/components/home/Simplify";
import ServiceList from "@/components/home/ServiceList";
import AboutTeam from "@/components/home/AboutTeam";
import Testimonials from "@/components/home/Testimonials";
import BlogCarousel from "@/components/home/BlogCarousel";
import Marquee from "@/components/home/Marquee";
import Faq from "@/components/home/Faq";
import { coreValues, services } from "@/lib/home-content";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* "Experts in leading web platforms" — taken off the page. */}
      {/* <Platforms /> */}

      {/* Client logo marquee — the marks are template filler, not Creatolive
          clients. Restore once there are real logos to show. */}
      {/* <Clients /> */}

      {/* All four live services fit here in a 2 x 2 grid, which is why the
          fuller ServiceList section below is switched off — it would repeat
          the same four. Turn it back on when the catalog grows. */}
      <TileSection
        tagline={services.tagline}
        title={services.title}
        description={services.description}
        items={services.items}
        columns={2}
        align="left"
        primaryCta={services.primaryCta}
        secondaryCta={services.secondaryCta}
      />

      <Projects />
      <Focus />

      <TileSection
        title={coreValues.title}
        description={coreValues.description}
        items={coreValues.items}
        surface="deep"
      />

      {/* "We Simplify for the Client" — taken off the home page. */}
      {/* <Simplify /> */}

      {/* Duplicates the services grid above while the catalog is four
          entries. Restore once there are more. */}
      {/* <ServiceList /> */}
      <AboutTeam />

      {/* "Client Testimonials" — hidden; the quotes are still placeholder filler. */}
      {/* <Testimonials /> */}
      {/* Blog carousel — placeholder posts and thumbnails, and /blog is not
          built yet. Restore when the blog is live. */}
      {/* <BlogCarousel /> */}
      <Marquee />
      <Faq />
    </>
  );
}
