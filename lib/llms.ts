/* Builds /llms.txt and /llms-full.txt from the same content the pages render,
 * so the summary AI assistants read can never drift from the site. */

import { brand, faq } from "@/lib/home-content";
import { serviceCatalog } from "@/lib/services-content";
import { projects } from "@/lib/portfolio-content";
import { aboutIntro } from "@/lib/about-content";
import { absoluteUrl, defaultDescription, foundingYear, htmlToText, location } from "@/lib/site";

const pages = [
  { name: "Home", path: "/", note: "Overview of services, selected work and FAQ" },
  { name: "Services", path: "/services", note: "Website development, mobile apps, SEO and Meta Ads, and how projects run" },
  { name: "Portfolio", path: "/portfolio", note: "Case studies filterable by industry and service" },
  { name: "About", path: "/about", note: "Who we are, how we work and why clients pick us" },
  { name: "Contact", path: "/contact", note: "Project enquiry form, phone and email" },
];

function header() {
  return [
    "# Creatolive",
    "",
    `> ${defaultDescription}`,
    "",
    `Creatolive is a digital marketing and development agency based in ${location.locality}, ${location.region}, ${location.countryName}, working since ${foundingYear} with businesses in India and abroad. Contact: ${brand.email}, ${brand.phone}. Website: ${absoluteUrl("/")}`,
    "",
  ];
}

export function buildLlmsTxt() {
  return [
    ...header(),
    "## Pages",
    ...pages.map((p) => `- [${p.name}](${absoluteUrl(p.path)}): ${p.note}`),
    "",
    "## Services",
    ...serviceCatalog.map(
      (s) => `- [${s.name}](${absoluteUrl(`/services#${s.slug}`)}): ${s.summary}`,
    ),
    "",
    "## Case studies",
    ...projects.map(
      (p) => `- [${p.title}](${absoluteUrl(`/project/${p.slug}`)}): ${p.summary}`,
    ),
    "",
    "## Optional",
    `- [Full text for LLMs](${absoluteUrl("/llms-full.txt")}): services, case studies and FAQ in one file`,
    "",
  ].join("\n");
}

export function buildLlmsFullTxt() {
  const lines = [...header(), "## About", ...aboutIntro.paragraphs, ""];

  lines.push("## Services", "");
  for (const s of serviceCatalog) {
    lines.push(`### ${s.name}`, s.summary, ...(s.detail ? [s.detail] : []), "");
  }

  lines.push("## Case studies", "");
  for (const p of projects) {
    lines.push(
      `### ${p.title}`,
      `URL: ${absoluteUrl(`/project/${p.slug}`)}`,
      `Industry: ${p.industries.join(", ")}`,
      `Services: ${p.services.join(", ")}`,
      p.summary,
    );
    for (const section of p.sections) {
      lines.push("", `#### ${section.title}`, ...(section.paragraphs ?? []));
      if (section.bullets) lines.push(...section.bullets.map((b) => `- ${b}`));
    }
    lines.push("");
  }

  lines.push("## Frequently asked questions", "");
  for (const item of faq.items) {
    lines.push(`### ${item.question}`, htmlToText(item.html), "");
  }

  return lines.join("\n");
}
