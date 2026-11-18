import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/site";
import ContactForm from "@/components/contact/ContactForm";
import Faq from "@/components/home/Faq";
import { brand } from "@/lib/home-content";
import { contactIntro } from "@/lib/contact-content";

const description =
  "Contact Creatolive in Rajkot, India. Call +91 7574985477 or email info@creatolive.com to get a scoped proposal for your website, app, SEO or Meta Ads project.";

export const metadata: Metadata = pageMetadata({
  title: "Contact Creatolive — Get a Project Quote",
  absoluteTitle: true,
  description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: "/contact", name: "Contact Creatolive", description, type: "ContactPage" }),
          breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
        ]}
      />
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-intro">
              <h1 className="block-title contact-intro__title">
                {contactIntro.title}
              </h1>
              <div className="contact-intro__desc">
                <p>{contactIntro.description}</p>
              </div>

              <div className="contact-office">
                <h2>{contactIntro.officeHeading}</h2>
                <ul>
                  <li>
                    <a href={brand.phoneHref}>{brand.phone}</a>
                  </li>
                  <li>
                    <a href={brand.emailHref}>{brand.email}</a>
                  </li>
                  {brand.address ? (
                    <li>
                      <span>{brand.address}</span>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Faq variant="plain" />
    </>
  );
}
