import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

/** Exported as 404.html; the .htaccess serves it with a real 404 status. */
export default function NotFound() {
  return (
    <section className="page-intro">
      <div className="container">
        <p className="tagline">404</p>
        <h1 className="title page-intro__title">This page could not be found</h1>
        <p>
          The page may have moved, or the link may be out of date. Try one of
          these instead:
        </p>
        <ul className="not-found__links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </section>
  );
}
