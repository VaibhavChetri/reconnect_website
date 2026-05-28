"use client";

/**
 * Accordion — Animated height accordion with single-open behavior.
 * Uses framer-motion AnimatePresence for smooth height transitions.
 * Arrow icon rotates on open.
 */

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface AccordionItem {
  trigger: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`divide-y divide-line ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index}>
            <button
              className="flex w-full items-center justify-between py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span className="text-h4 font-display text-ink pr-4">
                {item.trigger}
              </span>
              <motion.span
                className="shrink-0 text-ink-soft"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={
                  prefersReduced
                    ? { duration: 0 }
                    : { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                }
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M5 8l5 5 5-5" />
                </svg>
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={prefersReduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={prefersReduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={prefersReduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.3, ease: "easeOut" },
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 text-body text-ink-soft">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
