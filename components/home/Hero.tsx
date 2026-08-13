import { hero } from "@/lib/home-content";
import { StarIcon } from "@/components/icons";

function Stars() {
  return (
    <ul className="review-badge__stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i}>
          <StarIcon />
        </li>
      ))}
    </ul>
  );
}

/** A drifting column of work screenshots. The list is rendered twice so
 *  the CSS translate loop never shows a gap. */
function CollageColumn({
  items,
  direction,
}: {
  items: { src: string; alt: string }[];
  direction: "up" | "down";
}) {
  return (
    <div className={`collage__col collage__col--${direction}`}>
      {[...items, ...items].map((item, i) => (
        <div className="collage__item" key={`${item.src}-${i}`}>
          <img
            src={item.src}
            alt={i < items.length ? item.alt : ""}
            aria-hidden={i >= items.length}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <h1 className="hero__title">{hero.title}</h1>
            <p className="hero__text">{hero.text}</p>

            <div className="btn-row btn-row--left">
              <a className="btn btn--primary" href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </a>
              <a className="btn btn--secondary" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </a>
            </div>

            <div className="review-badges">
              {hero.badges.map((badge) => (
                <div
                  className={`review-badge review-badge--${badge.platform}`}
                  key={badge.platform}
                >
                  <div className="review-badge__icon">
                    <img src={badge.icon} alt="" />
                  </div>
                  <div className="review-badge__meta">
                    <Stars />
                    <span className="review-badge__count">{badge.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__collage" aria-label="Recent work">
            <div className="collage">
              <CollageColumn items={hero.collage.columnA} direction="up" />
              <CollageColumn items={hero.collage.columnB} direction="down" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
