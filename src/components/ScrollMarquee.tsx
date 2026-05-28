"use client";

/**
 * ScrollMarquee — Infinite horizontal scrolling content strip.
 * Duplicates children for seamless loop using CSS animation.
 * Reduced motion: static display, no scrolling.
 */

import { useReducedMotion } from "framer-motion";

interface ScrollMarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
}

export default function ScrollMarquee({
  children,
  speed = 30,
  className = "",
  pauseOnHover = true,
  direction = "left",
}: ScrollMarqueeProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <div className="flex gap-8">{children}</div>
      </div>
    );
  }

  const animationDirection = direction === "left" ? "normal" : "reverse";

  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className={`flex w-max gap-8 ${pauseOnHover ? "[&:hover]:animation-play-state-paused" : ""}`}
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection,
        }}
        onMouseEnter={(e) => {
          if (pauseOnHover) {
            (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
          }
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) {
            (e.currentTarget as HTMLElement).style.animationPlayState = "running";
          }
        }}
      >
        <div className="flex shrink-0 gap-8">{children}</div>
        <div className="flex shrink-0 gap-8" aria-hidden="true">
          {children}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
