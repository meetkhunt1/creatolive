import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ScrollTop from "@/components/layout/ScrollTop";
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
  title: "Digital Marketing & Web Development Agency | Creatolive",
  description:
    "Creatolive is a result-oriented digital marketing agency. We help ambitious brands scale with web and app development, SEO, Google/Meta ads, social media and branding.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Font variables sit on <html> because the tokens in :root reference them.
  return (
    <html lang="en-US" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body>
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
