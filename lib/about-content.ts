/* ============================================================
   ABOUT PAGE CONTENT
   ------------------------------------------------------------
   Structure mirrors aboutsource.html; the copy is written for
   Creatolive rather than lifted from it.

   Anything marked PLACEHOLDER is filler so the layout can be
   reviewed — the founding year, headcount, project count, team
   members and credentials all need real numbers before launch.
   ============================================================ */

export const aboutIntro = {
  title: "An Expert Growth and Development Studio",
  tagline: "Who Are We?",
  paragraphs: [
    "Creatolive is a growth studio that builds websites, apps and campaigns for businesses that want measurable results, not activity reports.",
    "We specialise in the channels that compound — search, paid media, social and the site or app they point at — and we run them together instead of as disconnected line items.",
    "Our team is small and senior by design. The person who scopes your project is the person who works on it.",
  ],
};

/** PLACEHOLDER — replace all three with Creatolive's real figures. */
export const aboutStats = [
  { value: "5+", label: "Years in Business" },
  { value: "12", label: "Team Members" },
  { value: "150+", label: "Projects Completed" },
];

export const aboutStory = {
  tagline: "Our Story",
  title: "Built on Quality and Straight Answers",
  paragraphs: [
    // PLACEHOLDER — swap for the real founding story, year and location.
    "Creatolive started as a small group of specialists who were tired of watching good businesses pay agency retainers for work that never moved a number.",
    "We kept the model deliberately simple: senior people only, clear scopes, fixed prices, and honest reporting even when the honest answer is that a channel is not working.",
    "Since then we have delivered projects across ecommerce, professional services, education and travel — from single-page builds to full brand systems and multi-channel campaigns.",
    "That focus on quality and simplicity is still the thing every project is measured against.",
  ],
  /** A real photo of the team (850 x 450) restores the two-column layout. */
  image: null as string | null,
  cta: { label: "Let's Chat", href: "/contact" },
};

/**
 * PLACEHOLDER — the source page used these blocks for conference sponsorship,
 * open-source contribution and partner status. Replace with Creatolive's own
 * credentials, or drop entries you cannot substantiate.
 *
 * Give an item an `image` and its row lays out as image + copy; without one
 * the rows render as plain text cards.
 */
type Credential = { title: string; text: string; image?: string };

export const aboutCredentials = {
  tagline: "Why Teams Pick Us",
  title: "Specialists, Not a Generalist Agency",
  items: [
    {
      title: "Senior Practitioners on Every Project",
      text: "The work is done by people who have run these channels for years, not handed to a junior with a checklist. There is no layer of account management between you and the person building your project.",
    },
    {
      title: "Strictly In-House Delivery",
      text: "We do not subcontract client work to third-party shops. Everything ships from our own team, which is why the quality stays consistent from the first project to the fifth.",
    },
    {
      title: "Reporting Tied to Revenue",
      text: "Campaigns are judged on pipeline and revenue rather than impressions and reach. If a channel is not paying for itself, you will hear it from us before you have to ask.",
    },
  ] as Credential[],
};

export const aboutProcess = {
  tagline: "How We Work",
  title: "How Creatolive Works",
  description:
    "We aim to make the process transparent from the first call to launch day — clear pricing, clear stages and a named person to talk to throughout.",
  items: [
    {
      title: "Clear, Package-Based Pricing",
      icon: "/icons/svc-simplify.svg",
      text: "Set packages and fixed scopes rather than open-ended hourly billing, so you know the cost before the work starts.",
    },
    {
      title: "Discovery for Complex Projects",
      icon: "/icons/svc-communication.svg",
      text: "If a project does not fit a standard package, we run a paid discovery workshop first and price the build accurately off the back of it.",
    },
    {
      title: "Flexible Payment Options",
      icon: "/icons/svc-quality.svg",
      text: "Staged payments tied to delivery milestones, plus retainer options for the work that runs month to month.",
    },
  ],
};

/** PLACEHOLDER — replace with the real team, their roles and photos (400 x 400). */
export const aboutTeamGrid = {
  tagline: "Our Team",
  title: "The People Behind the Work",
  description:
    "A senior team spread across strategy, development and paid media — the same people you meet on the first call.",
  members: [
    { name: "Team Member", role: "Founder & Director", photo: "/img/avatar-placeholder.svg" },
    { name: "Team Member", role: "Project Director", photo: "/img/avatar-placeholder.svg" },
    { name: "Team Member", role: "Lead Web Developer", photo: "/img/avatar-placeholder.svg" },
    { name: "Team Member", role: "Mobile App Engineer", photo: "/img/avatar-placeholder.svg" },
    { name: "Team Member", role: "SEO Specialist", photo: "/img/avatar-placeholder.svg" },
    { name: "Team Member", role: "Paid Media Manager", photo: "/img/avatar-placeholder.svg" },
    { name: "Team Member", role: "Brand Designer", photo: "/img/avatar-placeholder.svg" },
    { name: "Team Member", role: "Project Coordinator", photo: "/img/avatar-placeholder.svg" },
  ],
  /** Careers page is not built yet, so this stays a plain card until it is. */
  joinCard: {
    title: "This could be you",
    text: "We hire senior people who like owning their work. Get in touch if that sounds like you.",
    href: "/careers",
  },
};

export const aboutClosing = {
  title: "Let's work together. Get in touch to discuss your project today.",
  description:
    "Tell us what you are trying to grow and we will come back with a scope, a price and an honest view of what it will take.",
  primaryCta: { label: "Quick Enquiry", href: "/contact" },
  secondaryCta: { label: "See Our Work", href: "/portfolio" },
};
