import Link from "next/link";
import { serviceList } from "@/lib/home-content";
import { isBuiltHref } from "@/lib/routes";

/** Two-column grid of clickable service tiles on the dark band. */
export default function ServiceList() {
  return (
    <section className="service-list section-space">
      <div className="container">
        <div className="section-header-split">
          <div className="section-header">
            <h4 className="tagline">{serviceList.tagline}</h4>
            <h2 className="title">{serviceList.title}</h2>
          </div>
          <div>
            <p className="description">{serviceList.description}</p>
          </div>
        </div>

        <div className="tile-grid grid-2-even">
          {serviceList.items.map((item) => {
            const inner = (
              <>
                <div className="tile__header">
                  <div className="tile__icon">
                    <img src={item.icon} alt="" loading="lazy" />
                  </div>
                  <h2 className="tile__title">{item.title}</h2>
                </div>
                <div className="tile__body">
                  <p>{item.text}</p>
                </div>
              </>
            );

            // Service detail pages are not built yet — show the tile, not the link.
            return isBuiltHref(item.href) ? (
              <Link className="tile" href={item.href} key={item.title}>
                {inner}
              </Link>
            ) : (
              <div className="tile" key={item.title}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
