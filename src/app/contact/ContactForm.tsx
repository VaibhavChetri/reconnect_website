"use client";

import { useState } from "react";

const concerns = [
  "Joint Pain (Knee, Hip, Shoulder)",
  "Spine & Disc Issues",
  "Bone Density (Osteoporosis / Osteopenia)",
  "Post-Surgery Recovery",
  "Prevention & General Wellness",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production this would POST to an API route
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-surface-container-lowest rounded-xl hairline-border soft-shadow p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-primary text-3xl">
            check_circle
          </span>
        </div>
        <h3 className="text-title-lg text-on-surface mb-2">
          Thank you for reaching out
        </h3>
        <p className="text-body-md text-on-surface-variant">
          We have received your message and will get back to you within 24 hours.
          In the meantime, you can take the free assessment to help us prepare for
          your consultation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface-container-lowest rounded-xl hairline-border soft-shadow p-6 flex flex-col gap-5"
    >
      {/* Full Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-label-md text-on-surface">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your full name"
          className="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
        />
      </div>

      {/* Phone / Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-label-md text-on-surface">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+91 98765 43210"
            className="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-label-md text-on-surface">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Primary Concern */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="concern" className="text-label-md text-on-surface">
          Primary Concern
        </label>
        <select
          id="concern"
          name="concern"
          required
          defaultValue=""
          className="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors appearance-none"
        >
          <option value="" disabled>
            Select your primary concern
          </option>
          {concerns.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-label-md text-on-surface">
          Brief Message{" "}
          <span className="text-on-surface-variant font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us briefly about your condition, goals, or any questions you have."
          className="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
        />
      </div>

      <button type="submit" className="btn-primary w-full mt-2">
        Book a consultation
      </button>

      <p className="text-caption text-on-surface-variant text-center">
        By submitting, you agree to be contacted regarding your enquiry. We
        respect your privacy and will never share your information.
      </p>
    </form>
  );
}
