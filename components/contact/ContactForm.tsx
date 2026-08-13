"use client";

import { useState } from "react";
import {
  budgetOptions,
  formLabels,
  helpOptions,
} from "@/lib/contact-content";
import {
  EmailFieldIcon,
  MessageFieldIcon,
  NameFieldIcon,
  PhoneFieldIcon,
  TextFieldIcon,
  WebsiteFieldIcon,
} from "@/components/field-icons";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Enquiry form. Validation and the success state run client-side; there is
 * no submit endpoint wired up yet — point `submitTo` at your handler
 * (API route, Formspree, CRM webhook…) when one exists.
 */
export default function ContactForm({ submitTo }: { submitTo?: string }) {
  const [help, setHelp] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "failed">(
    "idle",
  );

  const showOther = help.includes("Other");

  const toggleHelp = (value: string) =>
    setHelp((current) =>
      current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value],
    );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const next: Errors = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "Please add your name.";
    const email = String(data.get("email") ?? "").trim();
    if (!email) next.email = "Please add your email address.";
    else if (!EMAIL_RE.test(email)) next.email = "That email doesn't look right.";
    if (!String(data.get("phone") ?? "").trim())
      next.phone = "Please add a phone number.";
    if (!String(data.get("message") ?? "").trim())
      next.message = "Tell us a little about the project.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    if (!submitTo) {
      // No endpoint configured — show the success state without a request.
      setState("sent");
      return;
    }

    setState("sending");
    try {
      const response = await fetch(submitTo, { method: "POST", body: data });
      setState(response.ok ? "sent" : "failed");
    } catch {
      setState("failed");
    }
  };

  if (state === "sent") {
    return (
      <div className="contact-form-card">
        <p className="contact-form__status">{formLabels.success}</p>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        {/* I Need Help With ------------------------------------ */}
        <fieldset className="field field--choice">
          <legend className="field__legend">{formLabels.help}</legend>
          <div className="choice-grid">
            {helpOptions.map((option) => (
              <div key={option}>
                <input
                  type="checkbox"
                  id={`help-${option}`}
                  name="help"
                  value={option}
                  checked={help.includes(option)}
                  onChange={() => toggleHelp(option)}
                />
                <label htmlFor={`help-${option}`}>{option}</label>
              </div>
            ))}
          </div>
        </fieldset>

        {/* Other project type (revealed by the "Other" pill) --- */}
        {showOther ? (
          <div className="field">
            <div className="field__control">
              <span className="field__icon">
                <TextFieldIcon />
              </span>
              <input
                type="text"
                name="helpOther"
                placeholder="Other project type"
                aria-label="Other project type"
              />
            </div>
          </div>
        ) : null}

        {/* Budget --------------------------------------------- */}
        <fieldset className="field field--choice">
          <legend className="field__legend">{formLabels.budget}</legend>
          <div className="choice-grid">
            {budgetOptions.map((option) => (
              <div key={option}>
                <input
                  type="radio"
                  id={`budget-${option}`}
                  name="budget"
                  value={option}
                  checked={budget === option}
                  onChange={() => setBudget(option)}
                />
                <label htmlFor={`budget-${option}`}>{option}</label>
              </div>
            ))}
          </div>
        </fieldset>

        {/* Name ----------------------------------------------- */}
        <div className="field">
          <div className="field__control">
            <span className="field__icon">
              <NameFieldIcon />
            </span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              aria-label="Name"
              aria-invalid={Boolean(errors.name)}
              required
            />
          </div>
          {errors.name ? <span className="field__error">{errors.name}</span> : null}
        </div>

        {/* Email ---------------------------------------------- */}
        <div className="field">
          <div className="field__control">
            <span className="field__icon">
              <EmailFieldIcon />
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              aria-label="Email address"
              aria-invalid={Boolean(errors.email)}
              required
            />
          </div>
          {errors.email ? (
            <span className="field__error">{errors.email}</span>
          ) : null}
        </div>

        {/* Phone ---------------------------------------------- */}
        <div className="field">
          <div className="field__control">
            <span className="field__icon">
              <PhoneFieldIcon />
            </span>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              aria-label="Phone"
              aria-invalid={Boolean(errors.phone)}
              required
            />
          </div>
          {errors.phone ? (
            <span className="field__error">{errors.phone}</span>
          ) : null}
        </div>

        {/* Website -------------------------------------------- */}
        <div className="field">
          <div className="field__control">
            <span className="field__icon">
              <WebsiteFieldIcon />
            </span>
            <input
              type="url"
              name="website"
              placeholder="Website URL (if applicable)"
              aria-label="Website URL"
            />
          </div>
        </div>

        {/* Message -------------------------------------------- */}
        <div className="field field--textarea">
          <div className="field__control">
            <span className="field__icon">
              <MessageFieldIcon />
            </span>
            <textarea
              name="message"
              rows={10}
              placeholder="Message"
              aria-label="Message"
              aria-invalid={Boolean(errors.message)}
              required
            />
          </div>
          {errors.message ? (
            <span className="field__error">{errors.message}</span>
          ) : null}
        </div>

        <div className="contact-form__footer">
          <button
            type="submit"
            className="contact-form__submit"
            disabled={state === "sending"}
          >
            {state === "sending" ? formLabels.sending : formLabels.submit}
          </button>
          {state === "failed" ? (
            <p className="contact-form__status">{formLabels.error}</p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
