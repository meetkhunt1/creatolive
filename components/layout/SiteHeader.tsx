"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  brand,
  mobileNav,
  primaryNav,
  resourcesMegaMenu,
  servicesMegaMenu,
  socials,
} from "@/lib/home-content";
import { isBuiltHref, keepBuilt } from "@/lib/routes";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "@/components/icons";

// Nav is filtered to the pages that exist — see lib/routes.ts.
const navItems = keepBuilt(primaryNav);
const drawerItems = keepBuilt(mobileNav);

// A mega menu with no surviving tiles would render as an empty panel, so the
// menu (and its chevron) is dropped and the nav item stays a plain link. Both
// come back on their own once the pages behind them are built.
const serviceHighlights = keepBuilt(servicesMegaMenu.highlights);
const hasServicesMenu = serviceHighlights.length > 0;
const hasResourcesMenu =
  keepBuilt(resourcesMegaMenu.links).length > 0 ||
  resourcesMegaMenu.columns.some((col) => keepBuilt(col.items).length > 0);

function hasMenu(kind: string | undefined) {
  if (kind === "services") return hasServicesMenu;
  if (kind === "resources") return hasResourcesMenu;
  return false;
}

function Wordmark() {
  return (
    <Link href="/" className="site-logo" aria-label={`${brand.name} home`}>
      <img
        src={brand.logo.src}
        alt={brand.logo.alt}
        width={brand.logo.width}
        height={brand.logo.height}
        // The logo is above the fold on every page, so it is not lazy-loaded.
        fetchPriority="high"
      />
    </Link>
  );
}

function ServicesMenu() {
  return (
    <section className="megamenu">
      <div className="megamenu__wrap">
        <div className="grid-1-2">
          <div className="section-header">
            <h4 className="tagline">{servicesMegaMenu.title}</h4>
            <p className="description">{servicesMegaMenu.description}</p>
          </div>

          <div className="tile-grid tile-grid--center grid-2-even">
            {serviceHighlights.map((item) => (
              <Link key={item.title} href={item.href} className="tile">
                <div className="tile__header">
                  <div className="tile__icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="tile__title">{item.title}</div>
                </div>
              </Link>
            ))}
            {isBuiltHref(servicesMegaMenu.ctaHref) ? (
              <div className="tile">
                <div className="btn-row btn-row--center">
                  <Link className="btn btn--outline" href={servicesMegaMenu.ctaHref}>
                    {servicesMegaMenu.ctaLabel}
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResourcesMenu() {
  return (
    <section className="megamenu">
      <div className="megamenu__wrap">
        <div className="grid-1-3">
          <div>
            {isBuiltHref(resourcesMegaMenu.headingHref) ? (
              <Link className="menu-tagline" href={resourcesMegaMenu.headingHref}>
                {resourcesMegaMenu.heading}
              </Link>
            ) : (
              <span className="menu-tagline">{resourcesMegaMenu.heading}</span>
            )}
            <ul className="menu-links">
              {keepBuilt(resourcesMegaMenu.links).map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span>{link.label}</span>
                    <span>{link.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid-2-even">
            {resourcesMegaMenu.columns.map((col) => (
              <div key={col.heading}>
                {isBuiltHref(col.headingHref) ? (
                  <Link className="menu-tagline" href={col.headingHref}>
                    {col.heading}
                  </Link>
                ) : (
                  <span className="menu-tagline">{col.heading}</span>
                )}
                <div className="featured-list">
                  {keepBuilt(col.items).map((item) => (
                    <Link key={item.title} href={item.href}>
                      <img src={item.image} alt="" loading="lazy" />
                      <h4>{item.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SiteHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="site-header" id="site-header">
        <div className="container">
          <div className="site-header__inner">
            <div>
              <Wordmark />
            </div>

            <div className="site-header__nav">
              <nav aria-label="Primary">
                <ul className="nav-list">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href}>
                        <span>{item.label}</span>
                        {hasMenu(item.megaMenu) ? (
                          <span className="nav-icon">
                            <ChevronDownIcon />
                          </span>
                        ) : null}
                      </Link>
                      {item.megaMenu === "services" && hasServicesMenu ? (
                        <ServicesMenu />
                      ) : null}
                      {item.megaMenu === "resources" && hasResourcesMenu ? (
                        <ResourcesMenu />
                      ) : null}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="site-header__cta">
              <a className="btn--chip" href="/contact">
                Book A Free Consult
              </a>
              <button
                type="button"
                className="menu-toggle"
                aria-label="Open menu"
                aria-expanded={drawerOpen}
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- Mobile drawer ---------- */}
      <div
        className={`drawer${drawerOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="drawer__overlay" onClick={() => setDrawerOpen(false)} />
        <div className="drawer__inner">
          <div className="drawer__header">
            <Wordmark />
            <button
              type="button"
              className="drawer__close"
              aria-label="Close menu"
              onClick={() => setDrawerOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <nav aria-label="Mobile">
            <ul className="drawer__nav">
              {drawerItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} onClick={() => setDrawerOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="drawer__buttons">
            <a className="btn--chip btn--block" href="/contact">
              Book A Free Consult
            </a>
            <a className="btn btn--outline" href="/contact">
              Request a Quote
            </a>
          </div>

          <div className="drawer__footer">
            <ul>
              <li>
                <a href={brand.phoneHref}>{brand.phone}</a>
              </li>
              <li>
                <a href={brand.emailHref}>{brand.email}</a>
              </li>
            </ul>
            <div className="drawer__social">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  <img src={social.icon} alt="" width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
