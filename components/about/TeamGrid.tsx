import Link from "next/link";
import { aboutTeamGrid } from "@/lib/about-content";
import { isBuiltHref } from "@/lib/routes";

/** Portrait grid of the team, closing with a "join us" card. */
export default function TeamGrid() {
  const { joinCard } = aboutTeamGrid;

  const joinInner = (
    <>
      <div className="team-card__photo team-card__photo--join" aria-hidden="true">
        <span>+</span>
      </div>
      <h3 className="team-card__name">{joinCard.title}</h3>
      <p className="team-card__role">{joinCard.text}</p>
    </>
  );

  return (
    <section className="team section-space" id="team">
      <div className="container">
        <div className="section-header section-header--center">
          <h4 className="tagline">{aboutTeamGrid.tagline}</h4>
          <h2 className="title">{aboutTeamGrid.title}</h2>
          <p className="description">{aboutTeamGrid.description}</p>
        </div>

        <div className="team__grid">
          {aboutTeamGrid.members.map((member, index) => (
            <article className="team-card" key={`${member.name}-${index}`}>
              <div className="team-card__photo">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  width={400}
                  height={400}
                />
              </div>
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__role">{member.role}</p>
            </article>
          ))}

          {/* Becomes a link to Careers once that page exists — see lib/routes.ts. */}
          {isBuiltHref(joinCard.href) ? (
            <Link className="team-card team-card--join" href={joinCard.href}>
              {joinInner}
            </Link>
          ) : (
            <article className="team-card team-card--join">{joinInner}</article>
          )}
        </div>
      </div>
    </section>
  );
}
