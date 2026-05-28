"use client";

/**
 * MagneticButton — Button that subtly follows the cursor when hovered.
 * Wraps the standard Button component with magnetic mouse-tracking behavior.
 * Reduced motion: no magnetic effect, renders as a normal button.
 */

import { useRef, useState, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Button, { type ButtonProps } from "./Button";

interface MagneticButtonProps extends ButtonProps {
  strength?: number;
}

export default function MagneticButton({
  strength = 0.3,
  ...buttonProps
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReduced = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setPosition({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (prefersReduced) {
    return <Button {...buttonProps} />;
  }

  return (
    <motion.div
      ref={ref}
      className="inline-block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.5 }}
    >
      <Button {...buttonProps} />
    </motion.div>
  );
}
