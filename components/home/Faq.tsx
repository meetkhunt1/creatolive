"use client";

import { useState } from "react";
import { faq as defaultFaq } from "@/lib/home-content";
import { stripUnbuiltLinks } from "@/lib/routes";
import { ChevronDownIcon } from "@/components/icons";

type Props = {
  title?: string;
  items?: { question: string; html: string }[];
  /** "boxed" = filled cards (home), "plain" = open list with rules (inner pages) */
  variant?: "boxed" | "plain";
};

export default function Faq({
  title = defaultFaq.title,
  items = defaultFaq.items,
  variant = "boxed",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`faq faq--${variant}`} id="faq">
      <div className="container">
        <div className="faq__grid">
          <div className="faq__heading">
            <h2 className="block-title">{title}</h2>
          </div>

          <div>
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;

              return (
                <div
                  className={`faq-item${isOpen ? " is-open" : ""}`}
                  key={item.question}
                >
                  <h3 className="faq-item__heading">
                    <button
                      type="button"
                      id={`${panelId}-trigger`}
                      className="faq-item__trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span className="faq-item__title">{item.question}</span>
                      <span className="faq-item__icon">
                        <ChevronDownIcon />
                      </span>
                    </button>
                  </h3>

                  <div className="faq-item__panel" id={panelId}
                    role="region"
                    aria-labelledby={`${panelId}-trigger`}
                  >
                    <div>
                      <div
                        className="faq-item__content"
                        dangerouslySetInnerHTML={{
                          __html: stripUnbuiltLinks(item.html),
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
