import { focus } from "@/lib/home-content";
import { isBuiltHref } from "@/lib/routes";

/** Two-column positioning statement: headline left, argument right. */
export default function Focus() {
  return (
    <section className="focus section-space">
      <div className="container">
        <div className="focus__grid">
          <div className="section-header">
            <h2 className="tagline">{focus.tagline}</h2>
            <h2 className="title">{focus.title}</h2>
          </div>

          <div className="focus__body">
            {focus.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}

            {isBuiltHref(focus.cta.href) ? (
              <div className="btn-row btn-row--left btn-row--inline">
                <a className="btn btn--outline" href={focus.cta.href}>
                  {focus.cta.label}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
