"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { testimonials } from "@/lib/content/testimonials";

const AUTO_ADVANCE_MS = 7000;

export default function TestimonialsSlider() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const prefersReduced = useReducedMotion();
  const total = testimonials.length;

  const go = useCallback(
    (newI: number, direction: 1 | -1) => {
      setDir(direction);
      setI(((newI % total) + total) % total);
    },
    [total]
  );

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

  /* Auto-advance (paused on hover or reduced-motion) */
  useEffect(() => {
    if (paused || prefersReduced) return;
    const id = setTimeout(next, AUTO_ADVANCE_MS);
    return () => clearTimeout(id);
  }, [i, paused, prefersReduced, next]);

  const t = testimonials[i];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ═══ Slide content ═════════════════════════════════════════════ */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.article
            key={t.name}
            custom={dir}
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, x: dir * 40 }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, x: -dir * 40 }}
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

      {/* ═══ Bottom: dot pagination + progress bar ═══════════════════ */}
      <div className="mt-10 pt-6 border-t border-line flex flex-col gap-5">
        {/* Progress bar (resets each slide) */}
        {!prefersReduced && (
          <div className="h-px bg-line overflow-hidden">
            <motion.div
              key={`progress-${i}-${paused}`}
              className="h-full bg-clay"
              initial={{ width: "0%" }}
              animate={{ width: paused ? "0%" : "100%" }}
              transition={{
                duration: paused ? 0 : AUTO_ADVANCE_MS / 1000,
                ease: "linear",
              }}
            />
          </div>
        )}

        <div className="flex items-center justify-between gap-6">
          <div
            className="flex items-center gap-2"
            role="tablist"
            aria-label="Testimonial slides"
          >
            {testimonials.map((slide, idx) => (
              <button
                key={slide.name}
                role="tab"
                aria-selected={idx === i}
                aria-label={`Slide ${idx + 1}: ${slide.name}`}
                onClick={() => go(idx, idx > i ? 1 : -1)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === i
                    ? "w-10 bg-clay"
                    : "w-5 bg-line hover:bg-ink-soft/40"
                }`}
              />
            ))}
          </div>

          <p className="text-caption text-ink-soft italic hidden sm:block">
            Stories shared with explicit consent. Outcomes vary by individual.
          </p>
        </div>
      </div>
    </div>
  );
}

// (Manual prev/next arrows removed — auto-advance + hover-pause + keyboard ←→
// handle navigation now.)
