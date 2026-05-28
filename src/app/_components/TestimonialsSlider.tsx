"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { testimonials } from "@/lib/content/testimonials";

export default function TestimonialsSlider() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const prefersReduced = useReducedMotion();
  const total = testimonials.length;

  const go = useCallback((newI: number, direction: 1 | -1) => {
    setDir(direction);
    setI(((newI % total) + total) % total);
  }, [total]);

  const next = useCallback(() => go(i + 1, 1), [i, go]);
  const prev = useCallback(() => go(i - 1, -1), [i, go]);

  /* Keyboard: ← / → */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const t = testimonials[i];

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.article
            key={t.name}
            custom={dir}
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, x: dir * 32 }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, x: -dir * 32 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            {/* Portrait */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[20px] overflow-hidden shadow-soft xray-glow">
                {/* TODO: replace with consented patient photo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.image}
                  alt={t.imageAlt}
                  loading="lazy"
                  className="w-full h-[380px] md:h-[460px] object-cover"
                />
              </div>
            </div>

            {/* Quote + meta */}
            <div className="lg:col-span-7">
              <p className="text-eyebrow text-clay mb-6">A member story</p>
              <blockquote className="text-h2 font-display text-ink leading-tight">
                <span className="text-clay">“</span>
                {t.quote}
                <span className="text-clay">”</span>
              </blockquote>
              <p className="text-body text-ink-soft mt-6 max-w-xl">{t.story}</p>

              <div className="mt-8 pt-6 border-t border-line flex flex-wrap items-end gap-8">
                <div>
                  <p className="text-caption text-ink-soft">Member</p>
                  <p className="text-body font-medium text-ink">
                    {t.name}, {t.age}
                  </p>
                  <p className="text-body-sm text-ink-soft">
                    {t.condition} · {t.location}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-h3 font-display text-clay">{t.metric}</p>
                  <p className="text-caption text-ink-soft">{t.metricLabel}</p>
                </div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-10 flex items-center justify-between gap-6 border-t border-line pt-6">
        <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial slides">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={idx === i}
              aria-label={`Slide ${idx + 1}`}
              onClick={() => go(idx, idx > i ? 1 : -1)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === i ? "w-8 bg-clay" : "w-4 bg-line hover:bg-ink-soft/40"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ArrowButton onClick={prev} direction="left" />
          <ArrowButton onClick={next} direction="right" />
        </div>
      </div>

      <p className="text-caption text-ink-soft mt-6 italic">
        Stories shared with explicit consent. Outcomes vary by individual.
      </p>
    </div>
  );
}

function ArrowButton({ onClick, direction }: { onClick: () => void; direction: "left" | "right" }) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
      className="w-11 h-11 rounded-full border border-line text-ink hover:border-clay hover:text-clay transition-colors duration-300 flex items-center justify-center"
    >
      <svg
        width="16" height="16" viewBox="0 0 16 16" fill="none"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        className={direction === "left" ? "rotate-180" : ""}
        aria-hidden="true"
      >
        <path d="M3 8h10m0 0L9 4m4 4L9 12" />
      </svg>
    </button>
  );
}
