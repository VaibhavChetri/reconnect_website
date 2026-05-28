"use client";

/**
 * AnimatedCounter — Number that counts up on scroll into view.
 * Uses framer-motion useInView + animate for smooth counting.
 * Reduced motion: shows final value immediately.
 */

import { useRef, useEffect } from "react";
import {
  useInView,
  useMotionValue,
  useTransform,
  animate,
  motion,
  useReducedMotion,
} from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;

    if (prefersReduced) {
      motionValue.set(value);
      return;
    }

    const controls = animate(motionValue, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [isInView, value, duration, motionValue, prefersReduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
