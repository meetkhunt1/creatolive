"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/home-content";
import { isBuiltHref } from "@/lib/routes";
import { CloseIcon } from "@/components/icons";

type Item = (typeof testimonials.items)[number];

function Person({ item }: { item: Item }) {
  return (
    <div className="testimonial__info">
      <span>
        <img src={item.avatar} alt={item.name} loading="lazy" width={100} height={100} />
      </span>
      <h4 className="testimonial__name">{item.name}</h4>
      <span className="testimonial__role">
        <a href={item.companyHref} target="_blank" rel="noreferrer">
          <span>{item.role}</span>
          <span className="company">{item.company}</span>
        </a>
      </span>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState<Item | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="testimonials section-space" id="testimonials">
      <div className="container">
        <div className="section-header section-header--center">
          <h4 className="tagline">{testimonials.tagline}</h4>
          <h2 className="title">{testimonials.title}</h2>
          <p className="description">{testimonials.description}</p>
        </div>

        <div className="testimonials__grid grid-3">
          {testimonials.items.map((item) => (
            <div className="testimonial" key={item.id}>
              <div className="testimonial__body">
                <div className="testimonial__text">{item.quote}</div>
                <button
                  type="button"
                  className="testimonial__more"
                  onClick={() => setActive(item)}
                >
                  Read More
                </button>
              </div>
              <Person item={item} />
            </div>
          ))}
        </div>

        {isBuiltHref(testimonials.cta.href) ? (
          <div className="btn-row btn-row--center">
            <a className="btn btn--primary" href={testimonials.cta.href}>
              {testimonials.cta.label}
            </a>
          </div>
        ) : null}
      </div>

      {active ? (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Testimonial from ${active.name}`}
          onClick={() => setActive(null)}
        >
          <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal__close"
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </button>
            <Person item={active} />
            <p className="modal__quote">{active.quote}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
