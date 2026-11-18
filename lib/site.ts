/* ============================================================
   SITE-WIDE SEO CONFIG
   One place for the canonical origin, the business facts search
   engines and AI assistants read, and the helpers that turn them
   into metadata and JSON-LD. Every page builds on these.
   ============================================================ */

import type { Metadata } from "next";
import { brand, socials } from "@/lib/home-content";

/** Canonical origin — https, no www, no trailing slash. The .htaccess
 *  redirects every other host/scheme here. */
export const siteUrl = "https://creatolive.com";

export const siteName = "Creatolive";

export const defaultDescription =
  "Creatolive is a digital marketing and development agency in Rajkot, India. We build websites, Flutter mobile apps, SEO campaigns and Meta Ads that are measured on revenue, not reach.";

/** 1200 × 630 social card, see public/og-image.png. */
export const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Creatolive — web development, mobile apps, SEO and Meta Ads agency",
};

/** Business location. Street address is deliberately left out until it is
 *  confirmed; city/region/country is enough for local relevance. */
export const location = {
  locality: "Rajkot",
  region: "Gujarat",
  country: "IN",
  countryName: "India",
};

export const foundingYear = "2020";

export const absoluteUrl = (path = "/") =>
  path === "/" ? `${siteUrl}/` : `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

/** Per-page metadata with canonical, Open Graph and Twitter tags filled in. */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  /** Use the title as-is instead of appending " | Creatolive". */
  absoluteTitle?: boolean;
  type?: "website" | "article";
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteName}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName,
      locale: "en_IN",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}

/* ---------- JSON-LD ---------------------------------------- */

const orgId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": orgId,
  name: siteName,
  alternateName: "Creatolive Digital",
  url: absoluteUrl("/"),
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl("/apple-icon.png"),
    width: 180,
    height: 180,
  },
  image: absoluteUrl(ogImage.url),
  description: defaultDescription,
  foundingDate: foundingYear,
  email: brand.email,
  telephone: brand.phone.replace(/\s+/g, ""),
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: location.locality,
    addressRegion: location.region,
    addressCountry: location.country,
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Place", name: "Worldwide" },
  ],
  knowsAbout: [
    "Website development",
    "WordPress development",
    "Shopify development",
    "Flutter mobile app development",
    "Search engine optimization",
    "Local SEO",
    "Meta Ads",
    "Facebook advertising",
    "Instagram advertising",
    "Digital marketing",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: brand.email,
    telephone: brand.phone.replace(/\s+/g, ""),
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Gujarati"],
  },
  sameAs: socials.map((s) => s.href).filter((href) => href.startsWith("http")),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: absoluteUrl("/"),
  name: siteName,
  description: defaultDescription,
  inLanguage: "en-IN",
  publisher: { "@id": orgId },
};

export const orgRef = { "@id": orgId };
export const websiteRef = { "@id": websiteId };

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function webPageSchema({
  path,
  name,
  description,
  type = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: websiteRef,
    about: orgRef,
    primaryImageOfPage: absoluteUrl(ogImage.url),
  };
}

/** Plain text from the FAQ's authored HTML — for FAQPage schema and llms.txt. */
export function htmlToText(html: string) {
  return html
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<\/(p|ol|ul)>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s*\n+/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
}

export function faqSchema(items: { question: string; html: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: htmlToText(item.html) },
    })),
  };
}
