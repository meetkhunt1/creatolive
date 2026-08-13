/* ============================================================
   CONTACT PAGE CONTENT
   Copy, office details and the enquiry form's field options.
   ============================================================ */

export const contactIntro = {
  title: "Let's work together",
  description:
    "The next step is to take action. Simply fill out the form so we can arrange a chat to learn more about your project requirements.",
  officeHeading: "Get in touch",
};

/** Checkbox pills — "I Need Help With". `other` reveals a free-text field.
 *  Kept in step with the four live services in ./services-content.ts;
 *  "Other" catches anything outside them. */
export const helpOptions = [
  "New Website",
  "Meta Ads",
  "Mobile App",
  "SEO",
  "Existing Site Help",
  "Other",
];

/** Radio pills — budget bands. Adjust to your own pricing. */
export const budgetOptions = [
  "Below ₹50k",
  "₹50k - ₹1L",
  "₹1L - ₹3L",
  "₹3L - ₹5L",
  "₹5L+",
  "Unsure",
];

export const formLabels = {
  help: "I Need Help With",
  budget: "Budget",
  submit: "Send A Message",
  sending: "Sending…",
  success:
    "Thanks — your message is on its way. We'll be in touch within one business day.",
  error: "Something went wrong. Please email us instead and we'll pick it up.",
};
