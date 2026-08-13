"use client";

import { useRef } from "react";
import Link from "next/link";
import { blog } from "@/lib/home-content";
import { isBuiltHref } from "@/lib/routes";
import { ChevronLeftIcon, ChevronRightIcon, ClockIcon } from "@/components/icons";

export default function BlogCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 16 : track.clientWidth;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="blog__head">
          <div className="section-header">
            <h4 className="tagline">{blog.tagline}</h4>
            <h2 className="title">{blog.title}</h2>
          </div>

          <div className="carousel-nav">
            <button type="button" aria-label="Previous posts" onClick={() => scrollBy(-1)}>
              <ChevronLeftIcon />
            </button>
            <button type="button" aria-label="Next posts" onClick={() => scrollBy(1)}>
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        <div className="carousel" ref={trackRef}>
          {blog.items.map((post) => {
            // The blog itself is not built yet, so cards read as previews only.
            const linked = isBuiltHref(post.href);

            return (
            <article className="post-card" key={post.title}>
              <div className="post-card__thumb">
                {linked ? (
                  <Link href={post.href}>
                    <img src={post.image} alt={post.title} loading="lazy" />
                  </Link>
                ) : (
                  <img src={post.image} alt={post.title} loading="lazy" />
                )}
              </div>

              <div className="post-card__content">
                <h2 className="post-card__title">
                  {linked ? <Link href={post.href}>{post.title}</Link> : post.title}
                </h2>
                <p className="post-card__excerpt">{post.excerpt}</p>
              </div>

              <div className="post-card__footer">
                <span>{post.date}</span>
                <span className="post-card__read-time">
                  <ClockIcon />
                  <span>{post.readTime}</span>
                </span>
              </div>
            </article>
            );
          })}
        </div>

        {isBuiltHref(blog.cta.href) ? (
          <div className="btn-row btn-row--center">
            <a className="btn btn--primary" href={blog.cta.href}>
              {blog.cta.label}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
