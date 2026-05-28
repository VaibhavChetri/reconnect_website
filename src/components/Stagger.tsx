"use client";

/**
 * Stagger — Children animate in with stagger delay using framer-motion.
 * Each child fades up (y: 20, opacity: 0 -> 0, 1).
 * Reduced motion: opacity-only transitions.
 */

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
}

export default function Stagger({
  children,
  className = "",
  staggerDelay = 0.08,
  delay = 0,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const childVariants = prefersReduced
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.4 },
        },
      }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        },
      };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={childVariants}>
              {child}
            </motion.div>
          ))
        : (
            <motion.div variants={childVariants}>{children}</motion.div>
          )}
    </motion.div>
  );
}
