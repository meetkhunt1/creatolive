import { aboutCredentials } from "@/lib/about-content";

/** Alternating image / copy rows describing how the studio operates. */
export default function AboutCredentials() {
  return (
    <section className="credentials section-space">
      <div className="container">
        <div className="section-header section-header--center">
          <h4 className="tagline">{aboutCredentials.tagline}</h4>
          <h2 className="title">{aboutCredentials.title}</h2>
        </div>

        <div className="credentials__list">
          {aboutCredentials.items.map((item, index) => (
            <article
              className={`credential${index % 2 === 1 ? " credential--flip" : ""}`}
              key={item.title}
            >
              <div className="credential__media">
                <img src={item.image} alt="" loading="lazy" />
              </div>
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
