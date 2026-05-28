"use client";

/**
 * TiltCard — 3D perspective tilt with spring physics.
 *
 * Mouse position drives rotateX/rotateY; framer-motion springs
 * smooth out the motion so it never feels jerky. Children render
 * with translateZ(40px) so they "pop" above the card surface on
 * hover. A soft brand-blue spotlight follows the cursor.
 *
 * Reduced-motion: tilt + translateZ + spotlight disabled; falls
 * back to a static container so layout never breaks.
 *
 * Inspiration: 21st.dev "Interactive Card" pattern, re-skinned
 * to Reconnect's Apple-blue palette.
 */

import { useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees (default 8) — lower = subtler */
  maxTilt?: number;
  /** Lift on hover (default 1.02) */
  scale?: number;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  scale = 1.02,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 250, damping: 22 });
  const ySpring = useSpring(y, { stiffness: 250, damping: 22 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [`${maxTilt}deg`, `-${maxTilt}deg`]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [`-${maxTilt}deg`, `${maxTilt}deg`]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    x.set(px - 0.5);
    y.set(py - 0.5);
    setGlare({ x: px * 100, y: py * 100 });
  };

  const reset = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  // Reduced-motion: render a static container, no transform/spotlight
  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      whileHover={{ scale }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`relative ${className}`}
    >
      {/* The card content — pushed forward in 3D so it lifts on hover */}
      <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }} className="h-full">
        {children}
      </div>

      {/* Cursor-following glare — sits above everything, ignores clicks */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(0,100,224,0.18), transparent 55%)`,
          transform: "translateZ(60px)",
        }}
      />
    </motion.div>
  );
}
