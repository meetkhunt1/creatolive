import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import Faq from "@/components/home/Faq";
import { brand } from "@/lib/home-content";
import { contactIntro } from "@/lib/contact-content";

export const metadata: Metadata = {
  title: "Contact | Creatolive",
  description:
    "Tell us about your project. Creatolive builds websites, apps and campaigns for ambitious brands — get in touch for a scoped proposal.",
};

export default function ContactPage() {
  return (
    <>
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
                <h4>{contactIntro.officeHeading}</h4>
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
