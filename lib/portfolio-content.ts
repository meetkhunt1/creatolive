/* ============================================================
   PORTFOLIO CONTENT
   ------------------------------------------------------------
   `projects` powers both the listing grid and the detail pages.
   Add an entry here and the new project appears on /portfolio
   and gets its own /project/<slug> page automatically.

   Filter labels are matched exactly against the tags on each
   project, so a new tag must be added to the lists below to be
   filterable.
   ============================================================ */

export type ProjectSection = {
  eyebrow?: string;
  title: string;
  /** Paragraphs of body copy. */
  paragraphs?: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
  /** Optional image shown alongside the copy. */
  image?: string;
  /** Which side the image sits on at desktop widths. */
  imagePosition?: "left" | "right";
};

export type Project = {
  slug: string;
  title: string;
  /** Thumbnail for the listing grid (roughly 1074 × 900). */
  thumb: string;
  /** Service pills. Also used as the archive "Services" filter.
   *  The first entry doubles as the eyebrow on the detail page. */
  services: string[];
  /** Industry tags, used by the archive "Industry" filter. */
  industries: string[];
  /** One-line summary shown under the detail page title. */
  summary: string;
  /** Live site URL — omit to hide the "View Live Site" link. */
  liveUrl?: string;
  /** Full-bleed image between the two content slabs. */
  heroImage?: string;
  sections: ProjectSection[];
  /** Extra screens shown in a grid below the write-up.
   *  `full` spans the row; `band` is a wide strip kept uncropped. */
  gallery?: { src: string; alt: string; full?: boolean; band?: boolean }[];
};

export const portfolioIntro = {
  title: "Our Work",
  description:
    "Whether it's a small brand site or a sophisticated ecommerce build, we are passionate about every aspect of what we do.",
};

/** Filter option lists. Labels must match the tags used on projects. */
export const industryFilters = [
  "Children's Fitness",
  "DTC Ecommerce",
  "Food & Beverage",
  "Interior Design",
  "Modular Kitchens",
  "Pet Health & Wellness",
  "Premium Consumer Goods",
  "Sporting Goods",
];

export const serviceFilters = [
  "Shopify Development",
  "WordPress Development",
  "Store Redesign",
  "Website Design",
  "Landing Page Design",
  "UI/UX Design",
  "Responsive Development",
  "Ecommerce",
];

/** Reusable CTA tile that breaks up the grid every four projects. */
export const inlineCta = {
  title: "Calculate the cost of having a custom website developed",
  text: "What does it cost to build a site that actually converts? Tell us about your project in a few simple steps and get an initial quote.",
  ctaLabel: "Let's Start",
  ctaHref: "/contact",
};

export const closingCta = {
  title: "Let's work together.",
  subtitle: "Get in touch to discuss your project today.",
  primaryCta: { label: "Quick Enquiry", href: "/contact" },
  secondaryCta: { label: "Get In Touch", href: "/contact" },
};

/* ---------- The projects ---------------------------------- */
/* The four live website builds. Images live in /public/img/portfolio. */

export const projects: Project[] = [
  {
    slug: "aavilo",
    title: "Aavilo",
    thumb: "/img/portfolio/aavilo-card.webp",
    services: [
      "Shopify Development",
      "Store Redesign",
      "Landing Page Design",
      "UI/UX Design",
      "Responsive Development",
      "Ecommerce",
    ],
    industries: ["DTC Ecommerce", "Pet Health & Wellness"],
    summary:
      "A direct-to-consumer pet wellness brand needed a faster, cleaner storefront and landing pages built specifically for paid traffic.",
    liveUrl: "https://aavilo.com",
    heroImage: "/img/portfolio/aavilo-banner.webp",
    sections: [
      {
        eyebrow: "Aavilo",
        title: "Business Overview",
        paragraphs: [
          "Aavilo is a direct-to-consumer pet wellness brand selling natural supplements for dogs. Most of its traffic arrives from paid social, so the storefront has to earn trust and explain the product within the first few seconds.",
          "The brief was to redesign the Shopify store and build dedicated landing pages that communicate product benefits clearly, improve customer trust and lift conversion rate.",
        ],
      },
      {
        eyebrow: "Aavilo",
        title: "Project Overview",
        image: "/img/portfolio/aavilo-pdp-green.webp",
        paragraphs: [
          "We rebuilt the shopping experience around product presentation and information hierarchy — what the supplement does, who it is for and why it can be trusted, answered before the customer has to scroll.",
          "Alongside the store redesign we built landing pages made for campaign traffic, so each ad can point at a page matched to its message rather than at a generic collection.",
        ],
        bullets: [
          "Shopify store redesign focused on speed and clarity",
          "Product pages restructured around benefits and trust signals",
          "Dedicated landing pages built for paid social traffic",
          "Mobile responsiveness optimised, where most of the traffic lands",
          "Conversion-focused layouts carried across the full storefront",
        ],
      },
    ],
    gallery: [
      {
        src: "/img/portfolio/aavilo-brand.webp",
        alt: "Aavilo brand identity and packaging",
        full: true,
      },
      {
        src: "/img/portfolio/aavilo-pdp-purple.webp",
        alt: "Aavilo product page, second variant",
      },
      {
        src: "/img/portfolio/aavilo-card.webp",
        alt: "Aavilo storefront overview",
      },
    ],
  },
  {
    slug: "baby-gains",
    title: "Baby Gains",
    thumb: "/img/portfolio/baby-gains-card.webp",
    services: ["Shopify Development", "Store Redesign", "UI/UX Design", "Ecommerce"],
    industries: ["Children's Fitness", "Sporting Goods"],
    summary:
      "A children's fitness equipment brand needed a complete Shopify redesign that represents the brand properly and makes products easy to find.",
    liveUrl: "http://babygains.store",
    heroImage: "/img/portfolio/baby-gains-before-after.webp",
    sections: [
      {
        eyebrow: "Baby Gains",
        title: "Business Overview",
        paragraphs: [
          "Baby Gains sells fitness equipment that helps children build strength, coordination and confidence through age-appropriate products.",
          "The existing store undersold the brand and made product discovery harder than it needed to be, so the goal was a complete redesign rather than a refresh.",
        ],
      },
      {
        eyebrow: "Baby Gains",
        title: "Project Overview",
        image: "/img/portfolio/baby-gains-1.webp",
        paragraphs: [
          "We rebuilt the storefront around a modern shopping experience that reflects the brand and simplifies product discovery, starting with navigation and collection structure.",
          "Collection and product templates were redesigned with a stronger visual hierarchy, then made fully responsive so the journey holds together from desktop through to mobile.",
        ],
        bullets: [
          "Complete Shopify store redesign",
          "Navigation and collection organisation rebuilt for discovery",
          "Collection page design with a clearer product hierarchy",
          "Product page design that gives each item room to sell",
          "Responsive storefront tested across desktop and mobile",
        ],
      },
    ],
    gallery: [
      {
        src: "/img/portfolio/baby-gains-banner.webp",
        alt: "Baby Gains brand banner",
        full: true,
        band: true,
      },
      {
        src: "/img/portfolio/baby-gains-mobile.webp",
        alt: "Baby Gains storefront on mobile",
        full: true,
      },
      { src: "/img/portfolio/baby-gains-2.webp", alt: "Baby Gains collection page" },
      { src: "/img/portfolio/baby-gains-3.webp", alt: "Baby Gains product page" },
    ],
  },
  {
    slug: "hanson-of-sonoma",
    title: "Hanson of Sonoma",
    thumb: "/img/portfolio/hanson-card.webp",
    services: ["Shopify Development", "Store Redesign", "UI/UX Design", "Ecommerce"],
    industries: ["Food & Beverage", "Premium Consumer Goods"],
    summary:
      "A premium spirits and lifestyle brand needed an online experience that matches its positioning, with storytelling built into the purchase journey.",
    liveUrl: "https://hansonofsonoma.com",
    heroImage: "/img/portfolio/hanson-before-after.webp",
    sections: [
      {
        eyebrow: "Hanson of Sonoma",
        title: "Business Overview",
        paragraphs: [
          "Hanson of Sonoma is a premium lifestyle and spirits brand whose online store needed to reflect the same standard as the product.",
          "The redesign focused on usability, storytelling and the purchasing experience — a store that reads as premium without getting in the way of the sale.",
        ],
      },
      {
        eyebrow: "Hanson of Sonoma",
        title: "Project Overview",
        image: "/img/portfolio/hanson-1.webp",
        paragraphs: [
          "We rebuilt the storefront with cleaner layouts and improved navigation, giving the brand story room to land while keeping the path to purchase short.",
          "Product presentation was reworked so customers can explore the range and buy with confidence, with the premium visual language carried consistently across every template.",
        ],
        bullets: [
          "Complete Shopify store redesign",
          "Cleaner layouts with a premium visual treatment",
          "Navigation reworked for easier exploration of the range",
          "Product pages rebuilt around presentation and confidence",
          "Brand storytelling integrated into the purchase journey",
        ],
      },
    ],
    gallery: [
      {
        src: "/img/portfolio/hanson-banner.webp",
        alt: "Hanson of Sonoma brand banner",
        full: true,
        band: true,
      },
      { src: "/img/portfolio/hanson-2.webp", alt: "Hanson of Sonoma collection page" },
      { src: "/img/portfolio/hanson-3.webp", alt: "Hanson of Sonoma product page" },
    ],
  },
  {
    slug: "kitchen-corner",
    title: "Kitchen Corner",
    thumb: "/img/portfolio/kitchen-corner-card.webp",
    services: [
      "WordPress Development",
      "Website Design",
      "UI/UX Design",
      "Responsive Development",
    ],
    industries: ["Interior Design", "Modular Kitchens"],
    summary:
      "A modular kitchen company needed a corporate site that establishes credibility and showcases its journey, expertise and completed projects.",
    liveUrl: "https://mykitchencorner.in",
    heroImage: "/img/portfolio/kitchen-corner-before-after.webp",
    sections: [
      {
        eyebrow: "Kitchen Corner",
        title: "Business Overview",
        paragraphs: [
          "Kitchen Corner wanted a professional website to present the company's journey, expertise, completed projects and product range in one place.",
          "The objective was to establish credibility with prospective clients while giving them enough information to judge the quality of the work before making contact.",
        ],
      },
      {
        eyebrow: "Kitchen Corner",
        title: "Project Overview",
        image: "/img/portfolio/kitchen-corner-1.webp",
        paragraphs: [
          "We built the site on WordPress with a clean, modern design and intuitive navigation, structured so each part of the business has a clear place.",
          "Content was organised to communicate the company's history, services and completed projects effectively, with responsive layouts that hold up on any screen.",
        ],
        bullets: [
          "Corporate website designed and built on WordPress",
          "Content structured around history, services and portfolio",
          "Project showcase built to demonstrate craftsmanship",
          "Intuitive navigation across a content-heavy site",
          "Responsive layouts tested from desktop to mobile",
        ],
      },
    ],
    gallery: [
      {
        src: "/img/portfolio/kitchen-corner-banner.webp",
        alt: "Kitchen Corner brand banner",
        full: true,
        band: true,
      },
      {
        src: "/img/portfolio/kitchen-corner-fullpage.webp",
        alt: "Kitchen Corner home page, full length",
        full: true,
      },
      { src: "/img/portfolio/kitchen-corner-2.webp", alt: "Kitchen Corner project pages" },
      { src: "/img/portfolio/kitchen-corner-3.webp", alt: "Kitchen Corner product range" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
