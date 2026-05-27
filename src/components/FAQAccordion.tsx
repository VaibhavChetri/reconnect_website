"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Will this replace my doctor or medication?",
    answer:
      "Not at all. Reconnect works alongside your existing treatment. Our programs are designed by a rheumatologist and are meant to complement your medical care, not replace it. We coordinate with your treating doctor when needed.",
  },
  {
    question: "How is this different from physiotherapy?",
    answer:
      "Physiotherapy focuses on rehabilitation after injury or surgery. Reconnect focuses on progressive strength training designed specifically for people with joint, bone, or musculoskeletal conditions. We build long-term strength, not just short-term relief.",
  },
  {
    question: "Can I join if I am already on medication for arthritis?",
    answer:
      "Yes. Many of our members are on medication. Our medical assessment takes your current treatment into account, and your program is designed around your specific condition, medications, and limitations.",
  },
  {
    question: "I have never exercised before. Is this safe for me?",
    answer:
      "Absolutely. Every program begins with a thorough medical assessment. Your exercises start at a level that is appropriate for you and progress gradually. Our coaches are trained to work with people who have never stepped into a gym.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-surface-container-lowest rounded-[var(--radius-card)] hairline-border overflow-hidden transition-all duration-200"
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
              <p className="text-body-md text-on-surface-variant px-6 pb-5">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
