import Link from "next/link";
import { brand, footer, socials } from "@/lib/home-content";
import { keepBuilt } from "@/lib/routes";

// Columns keep only links to pages that exist; a column left with none is
// dropped entirely rather than rendering a bare heading — see lib/routes.ts.
const footerColumns = footer.columns
  .map((col) => ({ ...col, links: keepBuilt(col.links) }))
  .filter((col) => col.links.length > 0);

export default function SiteFooter() {
  return (
    <>
      <footer className="site-footer" id="site-footer">
        <div className="container">
          <div className="footer-grid">
            {footerColumns.map((col) => (
              <div className="footer-col" key={col.heading}>
                <h3 className="footer-col__heading">{col.heading}</h3>
                <div className={col.twoUp ? "footer-col__links" : undefined}>
                  <ul>
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="footer-col footer-col--contact">
              <h3 className="footer-col__heading">{footer.contactHeading}</h3>
              <a href={brand.phoneHref} className="footer-phone">
                {brand.phone}
              </a>
              <a href={brand.emailHref} className="footer-phone">
                {brand.email}
              </a>
              {brand.address ? (
                <address className="footer-address">{brand.address}</address>
              ) : null}

              {footer.badges.length > 0 ? (
                <div className="footer-badges">
                  {footer.badges.map((badge) => (
                    <img
                      key={badge.src}
                      src={badge.src}
                      alt={badge.alt}
                      loading="lazy"
                      width={53}
                      height={57}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Oversized word-mark spanning the footer */}
        <div className="footer-wordmark">
          <div className="container">
            <Link
              href="/"
              className="footer-wordmark__link"
              aria-label={brand.name}
            >
              <svg
                className="footer-wordmark__svg"
                viewBox="0 0 1000 190"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-hidden="true"
              >
                {/* textLength pins the logotype to the full container width */}
                <text
                  x="0"
                  y="152"
                  fontSize="190"
                  textLength="1000"
                  lengthAdjust="spacing"
                >
                  {brand.name.toUpperCase()}
                </text>
              </svg>
            </Link>

            {brand.awardBadge ? (
              <div className="footer-wordmark__award">
                <a
                  href={brand.awardBadge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={brand.awardBadge.src}
                    alt={brand.awardBadge.alt}
                    loading="lazy"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </footer>

      <div className="site-info">
        <div className="container">
          <div className="site-info__inner">
            <div>
              <Link href="/">{brand.copyright}</Link>
            </div>
            <div className="social-icons">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <img src={social.icon} alt="" loading="lazy" width={28} height={28} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
