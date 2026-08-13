import { clients } from "@/lib/home-content";

/** Infinite logo rail. The track is duplicated so the loop is seamless. */
export default function Clients() {
  return (
    <section className="clients">
      <div className="container">
        <div className="section-header section-header--narrow">
          <h2 className="title">{clients.title}</h2>
        </div>
      </div>

      <div className="logo-rail">
        {[0, 1].map((copy) => (
          <div className="logo-rail__track" key={copy} aria-hidden={copy === 1}>
            {clients.logos.map((logo, i) => (
              <div className="logo-rail__item" key={`${copy}-${i}`}>
                <img src={logo.src} alt={copy === 0 ? logo.alt : ""} loading="lazy" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
