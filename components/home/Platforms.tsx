import { platforms } from "@/lib/home-content";

export default function Platforms() {
  return (
    <section className="platforms">
      <div className="container">
        <div className="section-header section-header--narrow">
          <h2 className="title">{platforms.title}</h2>
        </div>

        <div className="platform-rail">
          {platforms.logos.map((logo) => (
            <img key={logo.src} src={logo.src} alt={logo.alt} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
