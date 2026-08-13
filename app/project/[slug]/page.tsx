import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBand from "@/components/portfolio/CtaBand";
import { getProject, projects } from "@/lib/portfolio-content";

type Params = { params: Promise<{ slug: string }> };

/** Pre-render every project at build time. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found | Creatolive" };

  return {
    title: `${project.title} | Creatolive`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const [overview, detail] = project.sections;

  return (
    <>
      {/* ---------- Banner ---------- */}
      <section className="project-banner">
        <div className="container">
          <div className="project-banner__inner">
            <div className="project-banner__header">
              <h4 className="project-banner__eyebrow">
                {project.services[0]}
              </h4>
              <h1 className="project-banner__title">{project.title}</h1>
            </div>

            <div className="project-banner__footer">
              {project.liveUrl ? (
                <div>
                  <a
                    className="block-link project-banner__link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live Site →
                  </a>
                </div>
              ) : (
                <div />
              )}
              <div className="project-banner__desc">
                <p>{project.summary}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Business overview ---------- */}
      {overview ? (
        <section className="project-slab project-slab--center">
          <div className="container">
            <div className="project-slab__grid">
              <div>
                {overview.eyebrow ? (
                  <h4 className="project-slab__eyebrow">{overview.eyebrow}</h4>
                ) : null}
                <h2 className="project-slab__title">{overview.title}</h2>
              </div>
              <div className="project-slab__body">
                {overview.paragraphs?.map((text) => (
                  <p key={text.slice(0, 28)}>{text}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* ---------- Full-bleed image ---------- */}
      {project.heroImage ? (
        <div className="project-full-image">
          <div className="project-full-image--desktop">
            <img src={project.heroImage} alt={project.title} />
          </div>
          <div className="project-full-image--mobile">
            <img src={project.heroImage} alt="" />
          </div>
        </div>
      ) : null}

      {/* ---------- Project overview + what we did ---------- */}
      {detail ? (
        <section className="project-slab">
          <div className="container">
            <div className="project-slab__grid">
              <div>
                {detail.image ? (
                  <div className="project-slab__media">
                    <img src={detail.image} alt={project.title} loading="lazy" />
                  </div>
                ) : null}

                <div className="tag-links">
                  <h4 className="tag-links__heading">What we did</h4>
                  <div className="tag-links__list">
                    {/* Service pages are not built yet, so these read as tags. */}
                    {project.services.map((service) => (
                      <span key={service}>{service}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                {detail.eyebrow ? (
                  <h4 className="project-slab__eyebrow">{detail.eyebrow}</h4>
                ) : null}
                <h2 className="project-slab__title">{detail.title}</h2>

                <div className="project-slab__body">
                  {detail.paragraphs?.map((text) => (
                    <p key={text.slice(0, 28)}>{text}</p>
                  ))}

                  {detail.bullets ? (
                    <ul>
                      {detail.bullets.map((item) => (
                        <li key={item.slice(0, 28)}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* ---------- Further screens ---------- */}
      {project.gallery?.length ? (
        <section className="project-gallery">
          <div className="container">
            <div className="project-gallery__grid">
              {project.gallery.map((shot) => (
                <div
                  className={[
                    "project-gallery__item",
                    shot.full ? "project-gallery__item--full" : "",
                    shot.band ? "project-gallery__item--band" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  key={shot.src}
                >
                  <img src={shot.src} alt={shot.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand />
    </>
  );
}
