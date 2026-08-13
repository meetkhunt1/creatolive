import { closingCta } from "@/lib/portfolio-content";
import { isBuiltHref } from "@/lib/routes";

type Cta = { label: string; href: string };

type Props = {
  title?: string;
  subtitle?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
};

/** Closing "let's work together" band used across the inner pages.
 *  Defaults to the portfolio copy; About and Services pass their own. */
export default function CtaBand({
  title = closingCta.title,
  subtitle = closingCta.subtitle,
  primaryCta = closingCta.primaryCta,
  secondaryCta = closingCta.secondaryCta,
}: Props) {
  return (
    <section className="cta-band">
      <div className="container">
        <div className="section-header">
          <h2 className="title">{title}</h2>
          {subtitle ? <h2 className="title">{subtitle}</h2> : null}
          <div className="btn-row btn-row--center">
            {isBuiltHref(primaryCta.href) ? (
              <a className="btn btn--primary" href={primaryCta.href}>
                {primaryCta.label}
              </a>
            ) : null}
            {isBuiltHref(secondaryCta.href) ? (
              <a className="btn btn--secondary" href={secondaryCta.href}>
                {secondaryCta.label}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
