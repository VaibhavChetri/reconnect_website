import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Reconnect Wellness. Book a consultation with Dr. Shruthi Desai or ask us anything about our doctor-led strength training programs.",
};

const contactDetails = [
  {
    icon: "location_on",
    label: "Clinic Address",
    value: "Reconnect Wellness Clinic\nIndiranagar, Bengaluru 560038\nKarnataka, India",
  },
  {
    icon: "call",
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: "mail",
    label: "Email",
    value: "hello@reconnectwellness.in",
    href: "mailto:hello@reconnectwellness.in",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-on-primary py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">
          <p className="text-label-md text-on-primary/70 uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="text-display-lg-mobile md:text-display-lg text-on-primary max-w-3xl mx-auto mb-6">
            Let&apos;s talk about your journey to recovery.
          </h1>
          <p className="text-body-lg text-on-primary/80 max-w-2xl mx-auto">
            Whether you have a question about our programs, want to discuss your
            condition, or are ready to book a consultation — we are here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-6">
                Reach us directly
              </h2>
              <p className="text-body-lg text-on-surface-variant mb-8">
                We respond to all enquiries within 24 hours on working days. For
                urgent medical concerns, please contact your treating physician
                directly.
              </p>

              <div className="flex flex-col gap-6">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-xl">
                        {detail.icon}
                      </span>
                    </div>
                    <div>
                      <p className="text-label-md text-on-surface-variant mb-1">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-body-md text-primary hover:underline"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-body-md text-on-surface whitespace-pre-line">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-surface-container-high rounded-xl aspect-[16/9] flex items-center justify-center">
                <p className="text-body-md text-on-surface-variant text-center p-4">
                  Embedded map showing clinic location in Indiranagar, Bengaluru
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-6">
                Book a consultation
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Before you book nudge */}
      <section className="bg-surface-container-low py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16">
          <div className="bg-surface-container-lowest rounded-xl hairline-border soft-shadow p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-14 h-14 rounded-full bg-accent-amber/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-accent-amber text-3xl">
                lightbulb
              </span>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-title-lg text-on-surface mb-2">
                Before you book
              </h3>
              <p className="text-body-md text-on-surface-variant">
                Not sure if Reconnect is right for your condition? Our free
                assessment takes 3 minutes and gives you a clear picture of where
                you stand — no commitment, no pressure. It helps us (and you)
                understand your needs before a consultation.
              </p>
            </div>
            <Link href="/assessment" className="btn-amber shrink-0">
              Take the free assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
