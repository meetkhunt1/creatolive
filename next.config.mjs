/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: import.meta.dirname,

  /**
   * Static export. `npm run build` writes plain HTML/CSS/JS to ./out, which is
   * what the deploy branch carries and Hostinger serves from public_html.
   *
   * This rules out server-only features — API routes, server actions,
   * middleware, ISR and next/image optimisation. The site uses none of them:
   * every route is static or has generateStaticParams, and images are plain
   * <img> tags. Adding any of those later means moving off shared hosting.
   */
  output: "export",

  /**
   * `trailingSlash` is deliberately left off. With it on, next/link emits
   * "/about/" while the plain <a href="/about"> tags scattered through the
   * components stay bare, so half the site's links would 301-redirect. Off,
   * every link is "/about" and the .htaccess rewrite in /public maps that to
   * about.html — one canonical URL form, no redirects.
   */

  images: {
    // No image optimiser exists in a static export.
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
