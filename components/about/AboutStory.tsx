import { aboutStory } from "@/lib/about-content";
import { isBuiltHref } from "@/lib/routes";

/** Founding story: copy on the left, team photo on the right. Without a
 *  photo the grid collapses to a single copy column. */
export default function AboutStory() {
  return (
    <section className="about section-space" id="story">
      <div className="container">
        <div
          className={`about__grid${aboutStory.image ? "" : " about__grid--solo"}`}
        >
          <div className="about__copy">
            <div className="section-header">
              <h4 className="tagline">{aboutStory.tagline}</h4>
              <h2 className="block-title">{aboutStory.title}</h2>
              <div className="about__text">
                {aboutStory.paragraphs.map((text) => (
                  <p key={text.slice(0, 28)}>{text}</p>
                ))}
              </div>
            </div>

            {isBuiltHref(aboutStory.cta.href) ? (
              <div className="btn-row btn-row--left btn-row--inline">
                <a className="btn btn--outline" href={aboutStory.cta.href}>
                  {aboutStory.cta.label}
                </a>
              </div>
            ) : null}
          </div>

          {aboutStory.image ? (
            <div className="about__media">
              <img
                src={aboutStory.image}
                alt={aboutStory.title}
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
