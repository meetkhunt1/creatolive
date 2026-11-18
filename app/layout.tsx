import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ScrollTop from "@/components/layout/ScrollTop";
import JsonLd from "@/components/seo/JsonLd";
import {
  defaultDescription,
  ogImage,
  organizationSchema,
  siteName,
  siteUrl,
  websiteSchema,
} from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Digital Marketing & Web Development Agency | Creatolive",
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Digital marketing agency",
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName,
    locale: "en_IN",
    url: "/",
    images: [ogImage],
  },
  twitter: { card: "summary_large_image", images: [ogImage.url] },
  alternates: {
    types: { "text/plain": [{ url: "/llms.txt", title: "llms.txt" }] },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Font variables sit on <html> because the tokens in :root reference them.
  return (
    <html lang="en-IN" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {/* Lifted out of the flow so the page background runs behind it —
            see `.page-top` in app/styles/header.css. */}
        <div className="page-top">
          <TopBar />
          <SiteHeader />
        </div>
        <main id="main">{children}</main>
        <SiteFooter />
        <ScrollTop />
      </body>
    </html>
  );
}
