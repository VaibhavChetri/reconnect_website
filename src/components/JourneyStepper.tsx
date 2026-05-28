"use client";

/**
 * JourneyStepper — 4-step horizontal flow: Assessment, Exercise, Nutrition, Psychology.
 * Steps are connected by a thin line. Stacks vertically on mobile.
 */

import Reveal from "./Reveal";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Assessment",
    description: "Comprehensive biomechanical and lifestyle evaluation to map your starting point.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="14" cy="14" r="10" />
        <path d="M14 8v6l4 3" />
        <circle cx="14" cy="14" r="2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Exercise",
    description: "Targeted movement protocols designed around your body's unique mechanics.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M6 14h4m8 0h4" />
        <rect x="10" y="10" width="8" height="8" rx="1" />
        <path d="M4 12v4M24 12v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Nutrition",
    description: "Anti-inflammatory nutrition plans that fuel recovery from within.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M14 4v8" strokeLinecap="round" />
        <path d="M10 4c0 4 0 8 4 8s4-4 4-8" />
        <path d="M14 12v12" strokeLinecap="round" />
        <ellipse cx="14" cy="24" rx="4" ry="1" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Psychology",
    description: "Mental resilience training to sustain long-term wellness habits.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M14 24c-5 0-8-4-8-8 0-5 4-12 8-12s8 7 8 12c0 4-3 8-8 8z" />
        <path d="M14 12c1.5 0 3 1.5 3 4" />
        <circle cx="12" cy="14" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

interface JourneyStepperProps {
  className?: string;
}

export default function JourneyStepper({ className = "" }: JourneyStepperProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative ${className}`}
    >
      {/* Connecting line — desktop only */}
      <div
        className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-line"
        aria-hidden="true"
      />

      {steps.map((step, i) => (
        <Reveal key={step.number} delay={i * 0.1}>
          <div className="flex flex-col items-center text-center relative px-4">
            {/* Number */}
            <span className="text-eyebrow text-clay mb-3">{step.number}</span>

            {/* Icon circle */}
            <div className="w-16 h-16 rounded-full bg-sage-tint flex items-center justify-center text-sage mb-5 relative z-10">
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="text-h4 font-display text-ink mb-2">{step.title}</h3>

            {/* Description */}
            <p className="text-body-sm text-ink-soft max-w-[240px]">
              {step.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
