import Link from "next/link";
import { isBuiltHref } from "@/lib/routes";

type Tile = {
  title: string;
  icon: string;
  text: string;
  href?: string;
  /** Anchor target, so links elsewhere can jump straight to this tile. */
  id?: string;
};

type Props = {
  tagline?: string;
  title: string;
  description?: string;
  items: Tile[];
  /** "deep" renders on the high-contrast band, "base" on the page colour. */
  surface?: "base" | "deep";
  columns?: 2 | 3;
  /** Defaults to centring tiles that carry no link; set explicitly for long copy. */
  align?: "center" | "left";
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
};

/**
 * Icon-tile section used by Services, Core Values and the service list.
 * Tiles become links when an `href` is supplied.
 */
export default function TileSection({
  tagline,
  title,
  description,
  items,
  surface = "base",
  columns = 3,
  align,
  primaryCta,
  secondaryCta,
  className,
}: Props) {
  // Tiles pointing at pages we have not built stay on the page but lose their
  // link, so the layout is unchanged and nothing leads to a 404.
  const centred = align ? align === "center" : !items.some((item) => isBuiltHref(item.href));
  const primary = primaryCta && isBuiltHref(primaryCta.href) ? primaryCta : undefined;
  const secondary =
    secondaryCta && isBuiltHref(secondaryCta.href) ? secondaryCta : undefined;

  return (
    <section
      className={[
        "tiles-section",
        surface === "deep" ? "bg-deep" : "bg-base",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="container">
        <div className="section-header section-header--center">
          {tagline ? <h4 className="tagline">{tagline}</h4> : null}
          <h2 className="title">{title}</h2>
          {description ? <p className="description">{description}</p> : null}
        </div>

        <div
          className={[
            "tile-grid",
            centred ? "tile-grid--center" : "",
            columns === 3 ? "grid-3" : "grid-2-even",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item) => {
            const inner = (
              <>
                <div className="tile__header">
                  <div className="tile__icon">
                    <img src={item.icon} alt="" loading="lazy" />
                  </div>
                  <h4 className="tile__title">{item.title}</h4>
                </div>
                <div className="tile__body">
                  <p>{item.text}</p>
                </div>
              </>
            );

            return item.href && isBuiltHref(item.href) ? (
              <Link className="tile" href={item.href} key={item.title} id={item.id}>
                {inner}
              </Link>
            ) : (
              <div className="tile" key={item.title} id={item.id}>
                {inner}
              </div>
            );
          })}
        </div>

        {primary || secondary ? (
          <div className="btn-row btn-row--center">
            {primary ? (
              <a className="btn btn--primary" href={primary.href}>
                {primary.label}
              </a>
            ) : null}
            {secondary ? (
              <a className="btn btn--secondary" href={secondary.href}>
                {secondary.label}
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
