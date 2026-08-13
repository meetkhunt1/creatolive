"use client";

import { Fragment, useMemo, useState } from "react";
import Link from "next/link";
import {
  industryFilters,
  inlineCta,
  projects,
  serviceFilters,
} from "@/lib/portfolio-content";

type Group = "industry" | "service";

/** Multi-select dropdown of filter options. */
function FilterDropdown({
  label,
  options,
  selected,
  isOpen,
  onToggleOpen,
  onSelect,
}: {
  label: string;
  options: string[];
  selected: string[];
  isOpen: boolean;
  onToggleOpen: () => void;
  onSelect: (value: string) => void;
}) {
  const available = options.filter((option) => !selected.includes(option));

  return (
    <div className="filter-dropdown">
      <button
        type="button"
        className={`filter-button${isOpen ? " is-open" : ""}`}
        aria-expanded={isOpen}
        onClick={onToggleOpen}
      >
        <span className="filter-button__text">{label}</span>
      </button>

      {isOpen ? (
        <ul className="filter-options">
          <li onClick={() => onSelect("all")}>
            <span>All</span>
            <span aria-hidden="true">+</span>
          </li>
          {available.map((option) => (
            <li key={option} onClick={() => onSelect(option)}>
              <span>{option}</span>
              <span aria-hidden="true">+</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function InlineCtaTile() {
  return (
    <article className="inline-cta">
      <div className="inline-cta__inner">
        <div>
          <h2 className="inline-cta__title">{inlineCta.title}</h2>
          <p>{inlineCta.text}</p>
        </div>
        <div className="inline-cta__actions">
          <Link className="btn btn--secondary" href={inlineCta.ctaHref}>
            {inlineCta.ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ProjectArchive() {
  const [openGroup, setOpenGroup] = useState<Group | null>(null);
  const [industries, setIndustries] = useState<string[]>([]);
  const [services, setServices] = useState<string[]>([]);

  const pick = (group: Group, value: string) => {
    const setter = group === "industry" ? setIndustries : setServices;
    if (value === "all") {
      setter([]);
    } else {
      setter((current) =>
        current.includes(value) ? current : [...current, value],
      );
    }
    setOpenGroup(null);
  };

  const drop = (group: Group, value: string) => {
    const setter = group === "industry" ? setIndustries : setServices;
    setter((current) => current.filter((v) => v !== value));
  };

  const visible = useMemo(
    () =>
      projects.filter((project) => {
        const industryOk =
          industries.length === 0 ||
          industries.some((tag) => project.industries.includes(tag));
        const serviceOk =
          services.length === 0 ||
          services.some((tag) => project.services.includes(tag));
        return industryOk && serviceOk;
      }),
    [industries, services],
  );

  const chips = [
    ...industries.map((value) => ({ group: "industry" as Group, value })),
    ...services.map((value) => ({ group: "service" as Group, value })),
  ];

  return (
    <section className="project-archive">
      <div className="container">
        <div className="filter-bar">
          <FilterDropdown
            label="Industry"
            options={industryFilters}
            selected={industries}
            isOpen={openGroup === "industry"}
            onToggleOpen={() =>
              setOpenGroup(openGroup === "industry" ? null : "industry")
            }
            onSelect={(value) => pick("industry", value)}
          />

          <div className="filter-separator">/</div>

          <FilterDropdown
            label="Services"
            options={serviceFilters}
            selected={services}
            isOpen={openGroup === "service"}
            onToggleOpen={() =>
              setOpenGroup(openGroup === "service" ? null : "service")
            }
            onSelect={(value) => pick("service", value)}
          />

          {chips.length > 0 ? (
            <div className="filter-chips">
              {chips.map((chip) => (
                <button
                  type="button"
                  className="filter-chip"
                  key={`${chip.group}-${chip.value}`}
                  onClick={() => drop(chip.group, chip.value)}
                  aria-label={`Remove ${chip.value} filter`}
                >
                  <span>{chip.value}</span>
                  <span aria-hidden="true">×</span>
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="project-grid">
          {visible.map((project, index) => (
            <Fragment key={project.slug}>
              <article className="project-tile">
                <Link
                  href={`/project/${project.slug}`}
                  className="project-tile__thumb"
                >
                  <img
                    src={project.thumb}
                    alt={project.title}
                    loading="lazy"
                    width={1074}
                    height={900}
                  />
                  <div className="project-tile__meta">
                    <ul className="pill-list">
                      {project.services.slice(0, 4).map((tag) => (
                        <li key={tag}>
                          <span>{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>

                <div>
                  <h2 className="block-title project-tile__title">
                    <Link href={`/project/${project.slug}`}>{project.title}</Link>
                  </h2>
                </div>
              </article>

              {/* Break the grid with a CTA tile after every fourth project */}
              {(index + 1) % 4 === 0 && index + 1 < visible.length ? (
                <InlineCtaTile />
              ) : null}
            </Fragment>
          ))}

          {visible.length === 0 ? (
            <p className="project-empty">
              No projects match those filters yet — clear one to see more.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
