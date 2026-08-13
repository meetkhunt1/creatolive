/**
 * Which pages actually exist under `app/`.
 *
 * The content files describe the full site — About, Services, Blog, Careers and
 * friends — but only the routes listed here have been built. Everything else
 * stays authored and untouched; it is simply not rendered as a link, so no one
 * can click through to a 404. To bring a page back online, build the route and
 * add it below — every nav list, tile and CTA picks it up automatically.
 */
export const BUILT_ROUTES = ["/", "/about", "/services", "/portfolio", "/contact"] as const;

/**
 * Routes whose children are built too, because a single dynamic route renders
 * them all. `/project` covers every `/project/<slug>`.
 *
 * `/services` deliberately lives in BUILT_ROUTES instead: the hub page exists,
 * but the per-service pages under it do not, so `/services/web-development`
 * and friends stay hidden until they are built.
 */
export const BUILT_ROUTE_TREES = ["/project"] as const;

/** True for links we are happy to render: built internal routes, plus anything
 *  that is not one of our page routes at all (external, mailto:, tel:, #hash). */
export function isBuiltHref(href: string | undefined | null): boolean {
  if (!href) return false;
  if (!href.startsWith("/")) return true;

  const path = href.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  return (
    BUILT_ROUTES.some((route) => path === route) ||
    BUILT_ROUTE_TREES.some(
      (route) => path === route || path.startsWith(`${route}/`),
    )
  );
}

/** Drop entries pointing at pages that have not been built yet. */
export function keepBuilt<T extends { href: string }>(items: readonly T[]): T[] {
  return items.filter((item) => isBuiltHref(item.href));
}

/** Unwrap `<a>` tags aimed at unbuilt pages inside authored HTML, keeping the
 *  sentence intact and only losing the link. */
export function stripUnbuiltLinks(html: string): string {
  return html.replace(
    /<a\b[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi,
    (match, href: string, text: string) => (isBuiltHref(href) ? match : text),
  );
}
