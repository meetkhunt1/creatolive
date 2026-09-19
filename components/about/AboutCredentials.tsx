import { aboutCredentials } from "@/lib/about-content";

/**
 * Alternating image / copy rows describing how the studio operates. With no
 * imagery on any item the rows drop to plain text cards side by side, which
 * reads better than half-empty two-column rows.
 */
export default function AboutCredentials() {
  const hasMedia = aboutCredentials.items.some((item) => item.image);

  return (
    <section className="credentials section-space">
      <div className="container">
        <div className="section-header section-header--center">
          <h4 className="tagline">{aboutCredentials.tagline}</h4>
          <h2 className="title">{aboutCredentials.title}</h2>
        </div>

        <div
          className={`credentials__list${hasMedia ? "" : " credentials__list--text"}`}
        >
          {aboutCredentials.items.map((item, index) => (
            <article
              className={`credential${
                hasMedia && index % 2 === 1 ? " credential--flip" : ""
              }`}
              key={item.title}
            >
              {item.image ? (
                <div className="credential__media">
                  <img src={item.image} alt="" loading="lazy" />
                </div>
              ) : null}
              <div className="credential__body">
                <h3 className="credential__title">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
