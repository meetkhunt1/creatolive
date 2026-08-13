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

/**
 * Applies the stored theme before first paint so the page never flashes
 * the wrong palette. Kept tiny and dependency-free on purpose.
 */
const themeScript = `
(function(){
  try {
    var stored = localStorage.getItem('creatolive-theme');
    document.documentElement.dataset.theme = stored === 'light' ? 'light' : 'dark';
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Font variables sit on <html> because the tokens in :root reference them.
  return (
    <html
      lang="en-US"
      data-theme="dark"
      className={`${dmSans.variable} ${dmMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <TopBar />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <ScrollTop />
      </body>
    </html>
  );
}
