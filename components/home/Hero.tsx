import { hero } from "@/lib/home-content";
import { ArrowRightIcon, StarIcon } from "@/components/icons";

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

/**
 * Single centred column: pill, display headline, supporting line, then the
 * calls to action. The screenshot columns that used to sit alongside are
 * parked in HeroCollage.tsx.
 */
export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__inner">
          {hero.eyebrow ? (
            <p className="hero__eyebrow">
              <span className="hero__eyebrow-dot" aria-hidden="true" />
              {hero.eyebrow}
            </p>
          ) : null}

          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__text">{hero.text}</p>

          <div className="hero__actions">
            <a className="btn btn--primary btn--hero" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowRightIcon />
            </a>
            <a
              className="btn btn--secondary btn--hero"
              href={hero.secondaryCta.href}
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          {/* Dropped entirely when there are no badges, so the hero does not
              carry an empty row under the buttons. */}
          {hero.badges.length > 0 ? (
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
          ) : null}
        </div>
      </div>
    </section>
  );
}
