import { aboutStats } from "@/lib/about-content";

/** Three-up figures strip sitting under the About intro. */
export default function AboutStats() {
  return (
    <section className="stats-band" aria-label="Creatolive by the numbers">
      <div className="container">
        <dl className="stats-band__grid">
          {aboutStats.map((stat) => (
            <div className="stat" key={stat.label}>
              <dt className="stat__value">{stat.value}</dt>
              <dd className="stat__label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
