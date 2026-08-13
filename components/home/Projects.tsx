import Link from "next/link";
import { projects } from "@/lib/home-content";

/** Alternating image / copy rows for featured work. */
export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects__list">
          {projects.items.map((project) => (
            <article className="project" key={project.title}>
              <div className="project__media">
                <Link href={project.href}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={690}
                    height={465}
                  />
                </Link>
              </div>

              <div className="project__content">
                <ul className="pill-list">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Link href={project.href}>{tag}</Link>
                    </li>
                  ))}
                </ul>

                <h2 className="block-title project__title">
                  <Link href={project.href}>{project.title}</Link>
                </h2>

                <p className="block-text project__excerpt">{project.excerpt}</p>

                <Link className="block-link" href={project.href}>
                  Read More Details
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="btn-row btn-row--center">
          <a className="btn btn--primary" href={projects.cta.href}>
            {projects.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
