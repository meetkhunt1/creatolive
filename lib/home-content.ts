/* ============================================================
   HOME PAGE CONTENT
   ------------------------------------------------------------
   Every string, link and image on the home page lives here so
   copy changes never require touching a component.

   Anything marked PLACEHOLDER is design-filler that should be
   swapped for real Creatolive material before launch.

   Service names are NOT edited here — they come from the single
   catalog in ./services-content.ts and are reused below.
   ============================================================ */

import { projects as caseStudies } from "./portfolio-content";
import { featuredServices, serviceCatalog, serviceLabels } from "./services-content";

/* ---------- Brand / contact ------------------------------- */

export const brand = {
  name: "Creatolive",
  /** Wordmark image. The artwork is a single near-white colour on transparent,
   *  so the light theme inverts it in CSS rather than loading a second file. */
  logo: {
    src: "/img/creatolive-logo.png",
    /** Descriptive alt text — this is the site's most-crawled image. */
    alt: "Creatolive — web development, mobile app, SEO and Meta Ads studio",
    width: 1536,
    height: 259,
  },
  phone: "+91 7574985477",
  phoneHref: "tel:+917574985477",
  email: "info@creatolive.com",
  emailHref: "mailto:info@creatolive.com",
  /** Optional street address — shown in the footer and top bar when set. */
  address: "",
  copyright: `© ${new Date().getFullYear()} Creatolive. All rights reserved.`,
  /** Optional award badge shown beside the footer word-mark. */
  awardBadge: null as { src: string; alt: string; href: string } | null,
};

export const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/creato_live/",
    icon: "/img/instagram.svg",
  },
  { label: "Facebook", href: "#", icon: "/img/facebook.svg" },
  { label: "LinkedIn", href: "#", icon: "/img/linkedin.svg" },
];

/* ---------- Navigation ------------------------------------ */

export const primaryNav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", megaMenu: "services" as const },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog", megaMenu: "resources" as const },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const mobileNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const servicesMegaMenu = {
  title: "Full-Funnel Marketing and Development Services for Your Brand",
  description:
    "At Creatolive we build the systems that grow revenue — websites and apps that convert, search visibility that compounds, and paid campaigns measured against real business outcomes.",
  /** From the catalog — see lib/services-content.ts. */
  highlights: featuredServices.map((service) => ({
    title: service.name,
    href: `/services/${service.slug}`,
    icon: service.icon,
  })),
  ctaLabel: "All Services",
  ctaHref: "/services",
};

export const resourcesMegaMenu = {
  heading: "Resources",
  headingHref: "/blog",
  links: [
    {
      label: "Blog",
      description: "Guides, insights and handy resources",
      href: "/blog",
    },
    {
      label: "Case Studies",
      description: "Success stories from our clients",
      href: "/portfolio",
    },
    {
      label: "Contact",
      description: "Get in touch for a growth plan",
      href: "/contact",
    },
    {
      label: "Careers",
      description: "Join our team: work on exciting brands",
      href: "/careers",
    },
  ],
  columns: [
    {
      heading: "Blog",
      headingHref: "/blog",
      // PLACEHOLDER — swap for real posts once the blog is live.
      items: [
        {
          title: "How Much Does a Website Cost in 2026?",
          href: "/blog",
          image: "/img/thumb-placeholder.svg",
        },
        {
          title: "A Practical Guide to Local SEO",
          href: "/blog",
          image: "/img/thumb-placeholder.svg",
        },
        {
          title: "Meta Ads: Structuring Campaigns That Scale",
          href: "/blog",
          image: "/img/thumb-placeholder.svg",
        },
      ],
    },
    {
      heading: "Case Studies",
      headingHref: "/portfolio",
      /** First three live case studies — see lib/portfolio-content.ts. */
      items: caseStudies.slice(0, 3).map((project) => ({
        title: project.title,
        href: `/project/${project.slug}`,
        image: project.thumb,
      })),
    },
  ],
};

/* ---------- Hero ------------------------------------------ */

export const hero = {
  title: "Result-Oriented Digital Marketing and Development",
  text: "Welcome to Creatolive 👋 we're a result-oriented agency that focuses on custom work across web development, mobile apps, SEO and paid media.",
  primaryCta: { label: "Start a Project", href: "/contact" },
  secondaryCta: { label: "Schedule a Call", href: "/contact" },
  // PLACEHOLDER counts — set these to your real review totals.
  badges: [
    { platform: "google" as const, icon: "/icons/google.svg", label: "GOOGLE REVIEWS" },
    { platform: "clutch" as const, icon: "/icons/clutch-review.svg", label: "CLUTCH REVIEWS" },
  ],
  /* Two drifting columns of work screenshots. PLACEHOLDER imagery. */
  collage: {
    columnA: [
      { src: "/img/screen-shot-2023-12-20-at-17.34.19-310x200.png", alt: "Project preview" },
      { src: "/img/screenshot-2026-03-27-at-1.35.21-pm-310x200.png", alt: "Project preview" },
      { src: "/img/screen-shot-2023-12-20-at-17.36.33-310x200.png", alt: "Project preview" },
      { src: "/img/screen-shot-2023-12-20-at-17.33.06-310x200.png", alt: "Project preview" },
      { src: "/img/screen-shot-2023-12-20-at-17.37.30-310x200.png", alt: "Project preview" },
      { src: "/img/screen-shot-2023-12-20-at-17.39.03-310x200.png", alt: "Project preview" },
      { src: "/img/screen-shot-2023-12-20-at-17.40.01-310x200.png", alt: "Project preview" },
      { src: "/img/screen-shot-2023-12-20-at-17.40.46-310x200.png", alt: "Project preview" },
    ],
    columnB: [
      { src: "/img/screen-shot-2023-12-20-at-17.41.39-310x200.png", alt: "Project preview" },
      { src: "/img/screen-shot-2023-12-20-at-17.24.37-310x200.png", alt: "Project preview" },
      { src: "/img/screen-shot-2023-12-20-at-17.42.35-310x200.png", alt: "Project preview" },
      { src: "/img/screen-shot-2023-12-20-at-17.43.57-310x200.png", alt: "Project preview" },
      { src: "/img/screen-shot-2023-12-20-at-17.44.55-310x200.png", alt: "Project preview" },
      { src: "/img/screen-shot-2023-12-20-at-17.45.39-310x200.png", alt: "Project preview" },
      { src: "/img/screen-shot-2023-12-20-at-17.46.37-310x200.png", alt: "Project preview" },
    ],
  },
};

/* ---------- Platform logos -------------------------------- */

export const platforms = {
  title: "Experts in leading web platforms",
  logos: [
    { src: "/img/wordpress-logo.wine_.svg", alt: "WordPress" },
    { src: "/img/woo-repo.svg", alt: "WooCommerce" },
    { src: "/img/shopifypartners_primary.svg", alt: "Shopify Partners" },
  ],
};

/* ---------- Client logo marquee --------------------------- */
/* PLACEHOLDER logos — replace with your own client marks. */

export const clients = {
  title: "Trusted by growing brands since 2020",
  logos: [
    "/img/de-jour-jeans-logo.png",
    "/img/happy-travels-logo.png",
    "/img/cheap-az-logo.png",
    "/img/hey-bambu-logo.png",
    "/img/lifelong-literacy-logo.png",
    "/img/swillhouse-logo.png",
    "/img/sunsolis-legal-logo.png",
    "/img/moca-logo.png",
    "/img/powerhouse-supplements-logo.png",
    "/img/little-l-logo.png",
    "/img/lazarus-logo.png",
    "/img/road-safety-education-logo.png",
    "/img/tgc-logo.png",
    "/img/local-sauce-tours-logo.png",
    "/img/ko-homes-logo.png",
    "/img/yellow-ribbon-logo.png",
    "/img/jasecross-logo.png",
    "/img/matrak-logo.png",
    "/img/mycon-logo.png",
    "/img/the-kind-coffee-logo.png",
    "/img/piano-talent-logo.png",
    "/img/mascot-logo.png",
    "/img/the-best-of-moi-logo.png",
    "/img/international-cargo-express-logo.png",
    "/img/local-travel-planner-logo.png",
  ].map((src) => ({ src, alt: "Client logo" })),
};

/* ---------- Services (3 headline tiles) ------------------- */

export const services = {
  tagline: "Our Services",
  title: "Digital Marketing, Web and App Development Services",
  description:
    "At Creatolive we specialise in high-quality digital work tailored to your goals. Our team delivers custom solutions across web development, mobile apps, search and paid media.",
  /** The three catalog entries flagged `featured` — names come from there. */
  items: featuredServices.map((service) => ({
    title: service.name,
    icon: service.icon,
    text: service.summary,
  })),
  primaryCta: { label: "Contact Us", href: "/contact" },
  secondaryCta: { label: "Learn More", href: "/about" },
};

/* ---------- Featured projects ----------------------------- */

export const projects = {
  /** The live case studies, straight from lib/portfolio-content.ts — each card
   *  links through to its own /project/<slug> page. */
  items: caseStudies.map((project) => {
    const detail = project.sections[project.sections.length - 1];
    return {
      title: project.title,
      href: `/project/${project.slug}`,
      image: project.thumb,
      tags: project.services.slice(0, 3),
      excerpt: [project.summary, detail?.paragraphs?.[0]].filter(Boolean).join(" "),
    };
  }),
  cta: { label: "View All Projects", href: "/portfolio" },
};

/* ---------- Focus statement ------------------------------- */

export const focus = {
  tagline: "Ideal for businesses seeking growth specialists",
  title: "Focused on Performance-Driven Marketing and Development",
  paragraphs: [
    "Creatolive specialises in growth work, with a dedicated focus on delivering marketing and development that moves real business numbers.",
    "We're not a generalist studio. We don't dilute our focus across every service under the sun and hope something sticks.",
    "Instead, we go deep on the channels that compound — search, paid media and the website or app they point at. That lets us be experts in our craft and deliver the best results for our clients.",
  ],
  cta: { label: "Learn More", href: "/services" },
};

/* ---------- Core values ----------------------------------- */

export const coreValues = {
  title: "Our Core Values",
  description:
    "Our mission is to be one of the most trusted growth partners in the market. We want to help business owners everywhere reach their full potential online.",
  items: [
    {
      title: "1) Simplify for the Client",
      icon: "/icons/svc-simplify.svg",
      text: "Marketing and tech can be complex, but our constant goal is to simplify it for our clients.",
    },
    {
      title: "2) Top Quality Execution",
      icon: "/icons/svc-quality.svg",
      text: "Our team is made up of specialists with deep experience, so the quality of our work stays in the top tier.",
    },
    {
      title: "3) Team Welfare",
      icon: "/icons/svc-team.svg",
      text: "We always strive to make our workplace enjoyable and to give our team real fulfilment in the work they do.",
    },
  ],
};

/* ---------- Simplify ------------------------------------- */

export const simplify = {
  tagline: "Simplifying",
  title: "We Simplify for the Client",
  description:
    "At Creatolive we believe in simplifying the process for our clients. We do that three ways: dashboards you can actually use, direct and clear communication, and fast response times.",
  items: [
    {
      title: "User-Friendly Dashboards",
      icon: "/icons/svc-dashboard.svg",
      text: "We build custom dashboards that are easy to navigate and edit, so you can manage your site and campaigns with confidence.",
    },
    {
      title: "Direct and Clear Communication",
      icon: "/icons/svc-communication.svg",
      text: "We prioritise open, transparent communication so you're always informed and involved throughout the project.",
    },
    {
      title: "Rapid Response",
      icon: "/icons/svc-rapid.svg",
      text: "We know timely support matters, so we keep response times short and turnarounds quick on requests and questions.",
    },
  ],
  cta: { label: "Learn More", href: "/services" },
};

/* ---------- Full service list ---------------------------- */

export const serviceList = {
  tagline: "Our Services",
  title: "List of Our Marketing, Web and App Services",
  description:
    "Creatolive delivers custom web development, mobile apps, search and paid media. Our team builds advanced automations and features around your business, creating an online presence tailored to how you actually sell.",
  /** Straight from the catalog — see lib/services-content.ts. */
  items: serviceCatalog.map((service) => ({
    title: service.name,
    href: `/services/${service.slug}`,
    icon: service.icon,
    text: service.summary,
  })),
};

/* ---------- Who we are ----------------------------------- */

export const about = {
  tagline: "Who We Are",
  title: "Meet the Team at Creatolive",
  html:
    "<p>We're committed to being one of the most dependable growth partners our clients work with. Delivering exceptional results takes senior specialists rather than generalists, which is why our team sits at the heart of everything we do. Learn more about the people behind our work on our <a href=\"/about\">About page</a>.</p>",
  // PLACEHOLDER — swap for a photo of the Creatolive team (850 × 450).
  image: "/img/team-placeholder.svg",
  primaryCta: { label: "About Us", href: "/about" },
  secondaryCta: { label: "Our Services", href: "/services" },
};

/* ---------- Testimonials --------------------------------- */
/* PLACEHOLDER — every entry below is filler so the layout can
   be reviewed. Replace with real, attributable client quotes
   (and their photos) before this page goes live.            */

const AVATAR = "/img/avatar-placeholder.svg";

export const testimonials = {
  tagline: "Client Testimonials",
  title: "What Our Clients Say",
  description:
    "Browse our client testimonials to see the results we've delivered and the feedback we've had on our work.",
  items: [
    {
      id: "t1",
      name: "Client name",
      role: "Director",
      company: "Company name",
      companyHref: "#",
      avatar: AVATAR,
      quote:
        "Add the client's testimonial here. Around three to five sentences works best — the card clamps to four lines and opens the full quote in a modal, so there is room for detail about the brief, the way the project ran and the result it produced.",
    },
    {
      id: "t2",
      name: "Client name",
      role: "Marketing Manager",
      company: "Company name",
      companyHref: "#",
      avatar: AVATAR,
      quote:
        "Add the client's testimonial here. Around three to five sentences works best — the card clamps to four lines and opens the full quote in a modal, so there is room for detail about the brief, the way the project ran and the result it produced.",
    },
    {
      id: "t3",
      name: "Client name",
      role: "Founder",
      company: "Company name",
      companyHref: "#",
      avatar: AVATAR,
      quote:
        "Add the client's testimonial here. Around three to five sentences works best — the card clamps to four lines and opens the full quote in a modal, so there is room for detail about the brief, the way the project ran and the result it produced.",
    },
    {
      id: "t4",
      name: "Client name",
      role: "Head of Growth",
      company: "Company name",
      companyHref: "#",
      avatar: AVATAR,
      quote:
        "Add the client's testimonial here. Around three to five sentences works best — the card clamps to four lines and opens the full quote in a modal, so there is room for detail about the brief, the way the project ran and the result it produced.",
    },
    {
      id: "t5",
      name: "Client name",
      role: "Operations Lead",
      company: "Company name",
      companyHref: "#",
      avatar: AVATAR,
      quote:
        "Add the client's testimonial here. Around three to five sentences works best — the card clamps to four lines and opens the full quote in a modal, so there is room for detail about the brief, the way the project ran and the result it produced.",
    },
    {
      id: "t6",
      name: "Client name",
      role: "Creative Director",
      company: "Company name",
      companyHref: "#",
      avatar: AVATAR,
      quote:
        "Add the client's testimonial here. Around three to five sentences works best — the card clamps to four lines and opens the full quote in a modal, so there is room for detail about the brief, the way the project ran and the result it produced.",
    },
  ],
  cta: { label: "More Stories", href: "/testimonials" },
};

/* ---------- Blog carousel -------------------------------- */
/* PLACEHOLDER posts until the blog is populated. */

export const blog = {
  tagline: "From the Blog",
  title: "Guides, Insights and Handy Resources",
  items: [
    {
      title: "How Much Does a Website Cost in 2026?",
      href: "/blog",
      image: "/img/14-accounting-firm-website-new-536x350.jpeg",
      excerpt:
        "Website pricing varies wildly. Here's what actually drives the number, and where a custom build pays for itself…",
      date: "May 3, 2026",
      readTime: "16 Min Read",
    },
    {
      title: "A Practical Guide to Local SEO",
      href: "/blog",
      image: "/img/embed-linkedin-posts4-536x350.jpg",
      excerpt:
        "If you sell in a city or a service area, local SEO is the highest-leverage channel you have. Start here…",
      date: "January 31, 2026",
      readTime: "7 Min Read",
    },
    {
      title: "Meta Ads: Structuring Campaigns That Scale",
      href: "/blog",
      image: "/img/chargeback-1.4-536x350.jpg",
      excerpt:
        "Most Meta accounts stall because of structure, not creative. Here's the account layout we use…",
      date: "October 18, 2025",
      readTime: "8 Min Read",
    },
    {
      title: "Choosing Between WordPress and Shopify",
      href: "/blog",
      image: "/img/4-why-you-should-avoid-wordpress-536x350.jpg",
      excerpt:
        "Both platforms are excellent — at different jobs. A straight comparison for content, catalogue and checkout…",
      date: "September 18, 2025",
      readTime: "7 Min Read",
    },
    {
      title: "Building a Brand System That Survives Growth",
      href: "/blog",
      image: "/img/sep-02.1-536x350.png",
      excerpt:
        "A logo is not a brand. Here's how we document a visual language so output stays consistent as a team scales…",
      date: "September 17, 2025",
      readTime: "6 Min Read",
    },
  ],
  cta: { label: "Read the Blog", href: "/blog" },
};

/* ---------- Marquee -------------------------------------- */

/** Short catalog labels, scrolling — see lib/services-content.ts. */
export const marqueeItems = serviceLabels;

/* ---------- FAQ ------------------------------------------ */

export const faq = {
  title: "FAQ",
  items: [
    {
      question: "What sets Creatolive apart from other agencies?",
      html: `<p>Three things distinguish us from most agencies:</p>
        <ol>
          <li><strong>Specialists, not generalists:</strong> our team is made up of senior practitioners in the specific channels we sell, so the quality of the work stays in the top tier.</li>
          <li><strong>A defined process:</strong> we've built a set of processes and project guarantees, refined over years of client work, that set a standard you won't find elsewhere.</li>
          <li><strong>Strictly in-house:</strong> we don't rely on third-party outsourcing. An in-house team means focused attention and consistent quality on every project.</li>
        </ol>`,
    },
    {
      question: "Can you show examples of work you've delivered?",
      html: `<p>Absolutely — head to our <a href="/portfolio">portfolio page</a> to see the range of projects we've delivered, from ecommerce builds to full brand systems.</p>
        <p>If you have a question about any particular project, feel free to <a href="/contact">get in touch</a>.</p>`,
    },
    {
      question: "How much does a project cost?",
      html: `<p>Pricing depends on three things:</p>
        <ol>
          <li><strong>Scope:</strong> the number of templates, integrations and custom features involved.</li>
          <li><strong>Complexity:</strong> bespoke functionality and third-party systems take longer than standard builds.</li>
          <li><strong>Ongoing support:</strong> whether you want a monthly retainer for maintenance, content and campaign management.</li>
        </ol>
        <p>We work to clear, package-based pricing rather than open-ended hourly billing. <a href="/contact">Book a consult</a> and we'll scope your project and quote it properly.</p>`,
    },
    {
      question: "How long does a project take?",
      html: `<p>Most website projects run between 4 and 12 weeks. The timeline is driven by:</p>
        <ol>
          <li><strong>Project complexity:</strong> more templates and integrations mean more build time.</li>
          <li><strong>Content delivery:</strong> how quickly we receive copy, images and brand assets.</li>
          <li><strong>Feedback cycles:</strong> how fast we can move through review rounds together.</li>
        </ol>`,
    },
    {
      question: "What kind of support and maintenance do you offer?",
      html: `<p>We offer support packages tailored to the project:</p>
        <ol>
          <li><strong>Monthly maintenance:</strong> platform and plugin updates, backups, uptime and health monitoring.</li>
          <li><strong>Advanced support retainers:</strong> ongoing feature work and new pages alongside a roadmap for upcoming projects.</li>
          <li><strong>Campaign management:</strong> continuous SEO, social and paid-media work with monthly reporting.</li>
        </ol>`,
    },
  ],
};

/* ---------- Footer -------------------------------------- */

export const footer = {
  columns: [
    {
      heading: "Company",
      twoUp: true,
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Contact", href: "/contact" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Reviews", href: "/testimonials" },
        { label: "Packages", href: "/packages" },
      ],
    },
    {
      heading: "Services",
      twoUp: false,
      /** Detail pages are unbuilt, so the hub link stands in for the whole
       *  column until they exist — see lib/routes.ts. */
      links: [
        { label: "All Services", href: "/services" },
        ...serviceCatalog.map((service) => ({
          label: service.name,
          href: `/services/${service.slug}`,
        })),
      ],
    },
    {
      heading: "Industries",
      twoUp: false,
      links: [
        { label: "Service Businesses", href: "/industry/service-businesses" },
        { label: "D2C & Ecommerce", href: "/industry/ecommerce" },
        { label: "Startups & SMEs", href: "/industry/startups" },
        { label: "Creators & Coaches", href: "/industry/creators" },
        { label: "Real Estate", href: "/industry/real-estate" },
        { label: "Education", href: "/industry/education" },
      ],
    },
  ],
  contactHeading: "Contact",
  /** PLACEHOLDER — add your real award / directory badges here. */
  badges: [] as { src: string; alt: string }[],
};
