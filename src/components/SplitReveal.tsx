"use client";

/**
 * SplitReveal — Mask/line headline reveal that splits text by words.
 * Each word animates translateY(110%) to 0 with stagger.
 * Reduced motion: simple opacity fade.
 */

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface SplitRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
}

export default function SplitReveal({
  children,
  className = "",
  as: Tag = "h2",
  delay = 0,
}: SplitRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();

  const words = children.split(" ");

  if (prefersReduced) {
    return (
      <div ref={ref}>
        <Tag className={className}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay }}
          >
            {children}
          </motion.span>
        </Tag>
      </div>
    );
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: "110%" },
    visible: {
      y: "0%",
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div ref={ref}>
      <Tag className={className}>
        <motion.span
          className="flex flex-wrap"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
              <motion.span className="inline-block" variants={wordVariants}>
                {word}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </Tag>
    </div>
  );
}
