import { hero } from "@/lib/home-content";

/**
 * PARKED — the drifting screenshot columns that used to sit beside the hero
 * copy. The hero is a single centred column now, which leaves no room for a
 * tall side panel, so this is kept out of the render rather than deleted.
 * Drop `<HeroCollage />` back into Hero (and restore the two-column
 * `.hero__inner` grid) to bring it back.
 */
function CollageColumn({
  items,
  direction,
}: {
  items: { src: string; alt: string }[];
  direction: "up" | "down";
}) {
  // The list is rendered twice so the CSS translate loop never shows a gap.
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

export default function HeroCollage() {
  return (
    <div className="hero__collage" aria-label="Recent work">
      <div className="collage">
        <CollageColumn items={hero.collage.columnA} direction="up" />
        <CollageColumn items={hero.collage.columnB} direction="down" />
      </div>
    </div>
  );
}
