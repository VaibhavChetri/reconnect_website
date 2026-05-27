"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Will this replace my doctor or medication?",
    answer:
      "Not at all. Reconnect is designed to work alongside your existing medical treatment — not instead of it. Your program is created by a rheumatologist and takes your current medications, diagnosis, and treatment plan into account. We coordinate with your treating physician when needed.",
  },
  {
    question: "How is this different from physiotherapy?",
    answer:
      "Physiotherapy typically focuses on short-term rehabilitation after injury or surgery. Reconnect is a structured, progressive strength training program designed for people with chronic musculoskeletal conditions. We build long-term strength, improve bone density, and reduce pain through graded loading — not just stretches and hot packs.",
  },
  {
    question: "I'm on medication for arthritis — is this safe?",
    answer:
      "Yes. Every program begins with a medical assessment conducted by Dr. Shruthi Desai, a practising rheumatologist. She reviews your diagnosis, imaging, medications (including biologics, DMARDs, and steroids), and any contraindications before designing your plan. Safety is the starting point, not an afterthought.",
  },
  {
    question: "I've never exercised before — can I still join?",
    answer:
      "Absolutely. Many of our members have never set foot in a gym. Your program starts at a level appropriate for your current strength and pain levels, then progresses gradually. Our coaches are trained to work with complete beginners who have medical conditions — this is not a bootcamp.",
  },
  {
    question: "What conditions do you cover?",
    answer:
      "Reconnect programs are designed for osteoarthritis, rheumatoid arthritis, ankylosing spondylitis, disc bulges and chronic back pain, osteoporosis and osteopenia, frozen shoulder, post-joint-replacement recovery, and other musculoskeletal and autoimmune conditions. If you are unsure whether your condition is covered, take the free assessment or book a consultation.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Most members report noticeable improvement in pain and mobility within 4 to 8 weeks. Strength and bone density changes take longer — typically 3 to 6 months. The key is consistency with a well-designed program, which is exactly what we provide. We track your progress with regular check-ins so you can see the numbers move.",
  },
  {
    question: "Can I do this from home?",
    answer:
      "Yes. Most of our programs are designed for home workouts with minimal equipment — resistance bands, light dumbbells, and your own bodyweight. Video demonstrations guide you through every movement. You do not need a gym membership to get started.",
  },
  {
    question: "What if I have a flare-up during the program?",
    answer:
      "Flare-ups happen, and we plan for them. Your program includes flare-up protocols — modified routines that keep you moving safely without aggravating the inflammation. On the Care and Elite plans, Dr. Shruthi is available to adjust your protocol in real time. We never push through pain blindly.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-primary text-on-primary py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">
          <p className="text-label-md text-on-primary/70 uppercase tracking-widest mb-4">
            FAQ
          </p>
          <h1 className="text-display-lg-mobile md:text-display-lg text-on-primary max-w-3xl mx-auto mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-body-lg text-on-primary/80 max-w-2xl mx-auto">
            Honest answers to the things people ask before joining. If your
            question is not here, get in touch — we are happy to talk.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 md:py-20">
        <div className="max-w-[800px] mx-auto px-5 md:px-16">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-surface-container-lowest rounded-xl hairline-border overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-title-lg text-on-surface pr-4">
                    {faq.question}
                  </span>
                  <span
                    className="material-symbols-outlined text-on-surface-variant shrink-0 transition-transform duration-300"
                    style={{
                      transform:
                        openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: openIndex === index ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="text-body-md text-on-surface-variant px-6 pb-5 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-container-low py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">
          <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface mb-4">
            Still have questions?
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
            We would rather answer your questions than have you wonder. Reach out
            directly or take the free assessment to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get in touch
            </Link>
            <Link href="/assessment" className="btn-amber">
              Take the free assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
