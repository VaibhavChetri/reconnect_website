"use client";

import { useRef, type ComponentType, type SVGProps } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  KneeSvg,
  SpineSvg,
  HandSvg,
  SkeletonSvg,
} from "@/components/AnatomicalArt";

type SvgComponent = ComponentType<{ className?: string } & SVGProps<SVGSVGElement>>;

export type JourneyStep = {
  number: string;
  badge: string;        // e.g. "Always first"
  title: string;
  body: string;
  bullets: string[];
  artLabel: string;     // visible label on the sticky panel
  art: SvgComponent;
};

const STEPS: JourneyStep[] = [
  {
    number: "01",
    badge: "Always first",
    title: "Medical Assessment",
    body:
      "A detailed review of your condition, history, current medications, and imaging — by our medical team. This decides everything that follows. Care is patient-to-patient, never templated.",
    bullets: [
      "Rheumatologist-led intake",
      "Imaging & medication review",
      "Pain mapping by joint and region",
    ],
    artLabel: "Step 01 — Assessment",
    art: SkeletonSvg,
  },
  {
    number: "02",
    badge: "Built around you",
    title: "Personalised Exercise Program",
    body:
      "Not random workouts. Split across upper body, lower body, back, and the specific joints we’re protecting — we start where your problem is. If you’ve never lifted a dumbbell, we won’t throw numbers at you. A 30-year-old and a busy 40-year-old get different prescriptions.",
    bullets: [
      "Region-by-region split",
      "Age- and severity-scaled",
      "Pain-respecting progression",
    ],
    artLabel: "Step 02 — Exercise",
    art: KneeSvg,
  },
  {
    number: "03",
    badge: "Tied to the plate",
    title: "Nutrition Plan",
    body:
      "A nutrition chart built from a short pre-questionnaire that captures your food preferences (veg / non-veg) and history. Anti-inflammatory and bone-supportive, tied directly to your exercise program.",
    bullets: [
      "Veg / non-veg adapted",
      "Anti-inflammatory pattern",
      "Calcium, Vit D, protein audit",
    ],
    artLabel: "Step 03 — Nutrition",
    art: HandSvg,
  },
  {
    number: "04",
    badge: "Only if needed",
    title: "Psychology Support",
    body:
      "If we detect a mental block to movement — fear, catastrophising, low adherence — we refer you to a clinical psychologist. Never reflexive, always considered. Mindset matters as much as the muscle.",
    bullets: [
      "Referral only when indicated",
      "Clinical psychologist on hand",
      "Treated as load-bearing",
    ],
    artLabel: "Step 04 — Psychology",
    art: SpineSvg,
  },
];

export default function StickyJourneySequence() {
  const prefersReduced = useReducedMotion();

  /* ── Reduced motion: stacked vertical sequence, no pinning ── */
  if (prefersReduced) {
    return (
      <ol className="flex flex-col gap-16 md:gap-24">
        {STEPS.map((s) => (
          <li key={s.number} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <StaticArtPanel step={s} />
            </div>
            <div className="lg:col-span-7">
              <StepCopy step={s} />
            </div>
          </li>
        ))}
      </ol>
    );
  }

  return <SequenceAnimated />;
}

/* ────────────────────────────────────────────────────────────
   Animated pinned sequence:
   - Outer wrapper is tall (≈ steps.length * 100vh).
   - Sticky left column = visual panel that crossfades between steps.
   - Right column = step copy blocks in normal flow.
   ──────────────────────────────────────────────────────────── */

function SequenceAnimated() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={wrapRef}
      className="relative"
      style={{ minHeight: `${STEPS.length * 90}vh` }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* ── Sticky visual panel ─────────────────────────────── */}
        <aside className="lg:col-span-5">
          <div className="sticky top-32">
            <div className="relative aspect-square rounded-[20px] overflow-hidden bg-bone-deep hairline">
              {STEPS.map((step, i) => {
                const start = i / STEPS.length;
                const end = (i + 1) / STEPS.length;
                return (
                  <StickyArtFrame
                    key={step.number}
                    step={step}
                    progress={scrollYProgress}
                    start={start}
                    end={end}
                  />
                );
              })}

              {/* progress dots */}
              <div className="absolute top-5 right-5 flex flex-col gap-2 z-10">
                {STEPS.map((step, i) => {
                  const start = i / STEPS.length;
                  const end = (i + 1) / STEPS.length;
                  return (
                    <ProgressDot
                      key={step.number}
                      progress={scrollYProgress}
                      start={start}
                      end={end}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </aside>

        {/* ── Step copy column ────────────────────────────────── */}
        <div className="lg:col-span-7 flex flex-col gap-32 lg:gap-48">
          {STEPS.map((step) => (
            <StepCopy key={step.number} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Sticky art frame: crossfades by scroll position ───────── */

function StickyArtFrame({
  step,
  progress,
  start,
  end,
}: {
  step: JourneyStep;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const span = end - start;
  // Clamp offsets to [0, 1] — WAAPI rejects out-of-range keyframe offsets
  const clamp = (v: number) => Math.min(1, Math.max(0, v));
  const o1 = clamp(start - span * 0.25);
  const o2 = clamp(start + span * 0.15);
  const o3 = clamp(end - span * 0.15);
  const o4 = clamp(end + span * 0.25);
  const opacity = useTransform(progress, [o1, o2, o3, o4], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, end], [1, 1.06]);
  const Art = step.art;

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex flex-col items-center justify-center p-10"
    >
      {/* x-ray glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 55%, rgba(0,100,224,0.10) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <motion.div style={{ scale }} className="relative">
        <Art className="w-60 sm:w-72 md:w-80 text-sage opacity-80" />
      </motion.div>

      <div className="relative mt-6 text-center">
        <p className="text-eyebrow text-clay mb-2">{step.number}</p>
        <p className="text-h4 font-display text-ink">{step.artLabel}</p>
      </div>
    </motion.div>
  );
}

/* ── Sticky-panel progress dot ─────────────────────────────── */

function ProgressDot({
  progress,
  start,
  end,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const clamp = (v: number) => Math.min(1, Math.max(0, v));
  const scale = useTransform(progress, [start, (start + end) / 2], [1, 1.6]);
  const opacity = useTransform(
    progress,
    [clamp(start - 0.05), clamp(start + 0.05), clamp(end - 0.05), clamp(end + 0.05)],
    [0.3, 1, 1, 0.3]
  );
  return (
    <motion.span
      style={{ scale, opacity }}
      className="block w-2 h-2 rounded-full bg-clay"
      aria-hidden="true"
    />
  );
}

/* ── Step copy block (animates in on enter) ────────────────── */

function StepCopy({ step }: { step: JourneyStep }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 35%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="relative">
      <span className="section-number absolute -top-14 lg:-top-16 -left-2 select-none pointer-events-none">
        {step.number}
      </span>

      <p className="relative inline-block text-eyebrow text-clay-dark bg-clay-soft rounded-pill px-3 py-1 mb-5">
        {step.badge}
      </p>

      <h3 className="relative text-h2 font-display text-ink mb-5">{step.title}</h3>
      <p className="relative text-body-lg text-ink-soft mb-6 max-w-xl">{step.body}</p>

      <ul className="relative flex flex-col gap-2 max-w-md">
        {step.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-body text-ink">
            <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-clay shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ── Static art panel used in reduced-motion fallback ──────── */

function StaticArtPanel({ step }: { step: JourneyStep }) {
  const Art = step.art;
  return (
    <div className="relative aspect-square rounded-[20px] overflow-hidden bg-bone-deep hairline flex flex-col items-center justify-center p-10">
      <Art className="w-60 text-sage opacity-80" />
      <p className="text-eyebrow text-clay mt-6">{step.number}</p>
      <p className="text-h4 font-display text-ink mt-1">{step.artLabel}</p>
    </div>
  );
}
