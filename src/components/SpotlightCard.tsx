"use client";

/**
 * SpotlightCard — Cursor-following radial-gradient highlight.
 *
 * Wrap any card surface. A soft brand-blue light "follows" the
 * cursor inside the card's bounds, fading out on mouse-leave.
 * Reduced-motion: light stays off; card still renders normally.
 *
 * Inspiration: 21st.dev "Spotlight Card" pattern, re-skinned to
 * Reconnect's Apple-blue palette.
 */

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Override the brand-blue with custom rgba if you need it cool/sage */
  spotlightColor?: string;
  /** Radius of the light pool in px (default 400) */
  spotlightSize?: number;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(0, 100, 224, 0.22)",
  spotlightSize = 400,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const prefersReduced = useReducedMotion();

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || prefersReduced) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => !prefersReduced && setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(${spotlightSize}px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 55%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
