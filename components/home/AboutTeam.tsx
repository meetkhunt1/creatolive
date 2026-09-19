import { about } from "@/lib/home-content";
import { isBuiltHref, stripUnbuiltLinks } from "@/lib/routes";

/** Copy + full-width image, copy first on desktop. Without an image the
 *  grid collapses to a single copy column. */
export default function AboutTeam() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className={`about__grid${about.image ? "" : " about__grid--solo"}`}>
          <div className="about__copy">
            <div className="section-header">
              <h4 className="tagline">{about.tagline}</h4>
              <h2 className="block-title">{about.title}</h2>
              <div
                className="about__text"
                dangerouslySetInnerHTML={{ __html: stripUnbuiltLinks(about.html) }}
              />
            </div>

            {isBuiltHref(about.primaryCta.href) ||
            isBuiltHref(about.secondaryCta.href) ? (
              <div className="btn-row btn-row--left btn-row--inline">
                {isBuiltHref(about.primaryCta.href) ? (
                  <a className="btn btn--outline" href={about.primaryCta.href}>
                    {about.primaryCta.label}
                  </a>
                ) : null}
                {isBuiltHref(about.secondaryCta.href) ? (
                  <a className="btn btn--link" href={about.secondaryCta.href}>
                    {about.secondaryCta.label}
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>

          {about.image ? (
            <div className="about__media">
              <img
                src={about.image}
                alt={about.title}
                loading="lazy"
                width={850}
                height={450}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
