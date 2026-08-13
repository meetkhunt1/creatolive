import { brand } from "@/lib/home-content";
import { MailIcon, PhoneIcon } from "@/components/icons";
import ThemeToggle from "./ThemeToggle";

/** Slim utility strip above the header: consult CTA, contact details, theme. */
export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar__inner">
          <div className="topbar__left">
            <a className="btn--chip btn--chip-sm" href="/contact">
              Book A Free Consult
            </a>
          </div>

          <div className="topbar__right">
            <ul className="topbar__links">
              <li>
                <a href={brand.phoneHref}>
                  <span>
                    <PhoneIcon />
                  </span>
                  <span>{brand.phone}</span>
                </a>
              </li>
              <li className="topbar__address">
                <a href={brand.emailHref}>
                  <span>
                    <MailIcon />
                  </span>
                  <span>{brand.email}</span>
                </a>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
