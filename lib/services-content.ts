/**
 * THE SERVICES CATALOG — single source of truth.
 *
 * Every place a service is named on this site reads from `serviceCatalog`
 * below: the /services page, the home page's three headline tiles, the full
 * service list, the scrolling marquee and the footer. Rename a service here
 * and it changes everywhere at once — nothing else needs touching.
 *
 * `slug` feeds the future /services/<slug> detail pages. Those are not built
 * yet, so nothing links to them (see lib/routes.ts); the slugs are recorded
 * now so the links come alive the moment those pages exist.
 */

export type Service = {
  /** URL segment for the future detail page. */
  slug: string;
  /** Display name — the field to change when the service list is finalised. */
  name: string;
  /** Compact label for the marquee and other tight spaces. Falls back to name. */
  shortName?: string;
  icon: string;
  /** One-line summary used on the services page and the full home list. */
  summary: string;
  /** Longer pitch shown on the services page beneath the summary. */
  detail?: string;
  /** Set on the three services promoted to the home page hero tiles. */
  featured?: boolean;
};

export const serviceCatalog: Service[] = [
  {
    slug: "website-development",
    name: "Website Development",
    shortName: "Web Development",
    icon: "/icons/svc-custom-web.svg",
    summary:
      "Custom WordPress, Shopify and micro-system builds — websites that get future customers knocking and a brand people connect with.",
    detail:
      "We build on the platform that suits how you actually sell, then hand it over documented and easy for your team to run without us.",
    featured: true,
  },
  {
    slug: "meta-ads",
    name: "Meta Ads",
    icon: "/icons/svc-travel.svg",
    summary:
      "Facebook and Instagram campaigns with A/B testing and funnel tracking, so spend is judged on pipeline not impressions.",
    detail:
      "Creative testing runs continuously, and every campaign reports against revenue rather than reach.",
    featured: true,
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    shortName: "Mobile Apps",
    icon: "/icons/svc-woo-plugin.svg",
    summary:
      "Cross-platform Flutter apps with UI/UX-focused builds, shipped to both stores from a single, maintainable codebase.",
    detail:
      "One codebase for iOS and Android keeps the build affordable and every later change lands on both platforms at once.",
    featured: true,
  },
  {
    slug: "search-engine-optimization",
    name: "Search Engine Optimization (SEO)",
    shortName: "SEO",
    icon: "/icons/svc-wp-dev.svg",
    summary:
      "On-page and off-page SEO, local and national campaigns, plus an SEO content strategy that keeps compounding.",
    detail:
      "Technical fixes first, then the content plan — the order that gets pages ranking instead of just published.",
    featured: true,
  },
];

/**
 * PARKED — written and ready, but not offered on the site yet. The plan is to
 * bring these back as the portfolio grows. To launch one, move its entry up
 * into `serviceCatalog` above; every section that lists services picks it up.
 */
export const plannedServices: Service[] = [
  {
    slug: "social-media-marketing",
    name: "Social Media Management",
    shortName: "Social Media",
    icon: "/icons/svc-woo-site.svg",
    summary:
      "Instagram, Facebook and LinkedIn managed end to end — reels, stories and engagement that build a real audience.",
    detail:
      "A posting rhythm you can sustain, with the creative produced in batches so the calendar never runs dry.",
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    icon: "/icons/svc-shopify-theme.svg",
    summary:
      "Search, display and shopping campaigns structured for intent, with conversion tracking wired up properly from day one.",
    detail:
      "Accounts are structured around buying intent, so budget concentrates on the searches that actually convert.",
  },
  {
    slug: "brand-identity",
    name: "Branding & Identity Design",
    shortName: "Brand Identity",
    icon: "/icons/svc-dashboard.svg",
    summary:
      "Logo and visual language, brand guidelines and rebranding strategy — an identity that holds together across every channel.",
    detail:
      "You get the working files and a guideline document, so the brand stays consistent whoever picks it up next.",
  },
  {
    slug: "ecommerce-development",
    name: "Ecommerce Development",
    shortName: "Ecommerce",
    icon: "/icons/svc-ecommerce.svg",
    summary:
      "Storefronts on WooCommerce and Shopify built to convert, with the integrations your operations team actually needs.",
    detail:
      "Stock, shipping and accounting connected up front, so launch day does not create a manual data-entry job.",
  },
];

/** Look a service up by slug. */
export function getService(slug: string) {
  return serviceCatalog.find((service) => service.slug === slug);
}

/** The three services promoted on the home page. */
export const featuredServices = serviceCatalog.filter((service) => service.featured);

/** Compact labels, used by the marquee and tag chips. */
export const serviceLabels = serviceCatalog.map((service) => ({
  label: service.shortName ?? service.name,
  href: `/services/${service.slug}`,
}));

/* ---------- /services page copy ---------------------------- */

export const servicesIntro = {
  title: "Marketing, Web and App Services Built Around Your Growth",
  description:
    "Creatolive is a growth studio, not a generalist agency. We go deep on the channels that compound — search, paid media and the website or app they point at — and we run them as one system rather than as separate line items.",
};

export const servicesOverview = {
  tagline: "What We Do",
  title: "A Focused Set of Services, Delivered by Specialists",
  description:
    "Every service below is run by someone senior in that discipline. We would rather do a short list properly than offer everything and subcontract half of it.",
};

/** "How we work" — the delivery process shown on the services page. */
export const servicesProcess = {
  tagline: "How We Work",
  title: "A Clear Process From First Call to Launch",
  description:
    "No open-ended hourly billing and no vanishing project manager. You get a scope, a price and a named person to talk to.",
  steps: [
    {
      title: "Discovery & Scope",
      icon: "/icons/svc-communication.svg",
      text: "We start by understanding the business, not the brief. You leave the first call with a written scope and a fixed price rather than an estimate that drifts.",
    },
    {
      title: "Build & Iterate",
      icon: "/icons/svc-quality.svg",
      text: "Work lands in reviewable stages so you see progress as it happens and can redirect early, while changes are still cheap to make.",
    },
    {
      title: "Launch & Support",
      icon: "/icons/svc-rapid.svg",
      text: "We handle the launch, then stay reachable. Questions get answered quickly instead of disappearing into a ticket queue.",
    },
  ],
};

export const servicesClosing = {
  title: "Not sure which service you need?",
  description:
    "Tell us the outcome you are chasing and we will tell you honestly what will move it — including when the answer is that you do not need us yet.",
  primaryCta: { label: "Book A Free Consult", href: "/contact" },
  secondaryCta: { label: "See Our Work", href: "/portfolio" },
};
