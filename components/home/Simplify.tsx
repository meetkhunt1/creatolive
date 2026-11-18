import { simplify } from "@/lib/home-content";
import { isBuiltHref } from "@/lib/routes";

/** Split header plus three transparent, left-aligned tiles. */
export default function Simplify() {
  return (
    <section className="simplify section-space">
      <div className="container">
        <div className="section-header-split">
          <div className="section-header">
            <p className="tagline">{simplify.tagline}</p>
            <h2 className="title">{simplify.title}</h2>
          </div>
          <div>
            <p className="description">{simplify.description}</p>
          </div>
        </div>

        <div className="tile-grid tile-grid--plain grid-3">
          {simplify.items.map((item) => (
            <div className="tile" key={item.title}>
              <div className="tile__header">
                <div className="tile__icon">
                  <img src={item.icon} alt="" loading="lazy" />
                </div>
                <h3 className="tile__title">{item.title}</h3>
              </div>
              <div className="tile__body">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {isBuiltHref(simplify.cta.href) ? (
          <div className="btn-row btn-row--left btn-row--inline">
            <a className="btn btn--outline" href={simplify.cta.href}>
              {simplify.cta.label}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
