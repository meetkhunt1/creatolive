import Link from "next/link";
import { marqueeItems } from "@/lib/home-content";
import { isBuiltHref } from "@/lib/routes";

/** Outlined / solid alternating service names scrolling endlessly. */
export default function Marquee() {
  return (
    <section className="marquee" aria-label="Our services">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <ul className="marquee__group" key={copy} aria-hidden={copy === 1}>
            {marqueeItems.map((item) => (
              <li className="marquee__item" key={`${copy}-${item.label}`}>
                {isBuiltHref(item.href) ? (
                  <Link href={item.href}>
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <span>
                    <span>{item.label}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
