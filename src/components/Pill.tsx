/**
 * Pill — Tag/chip component with sage, clay, and bone variants.
 * Used for categories, labels, and tags throughout the site.
 */

interface PillProps {
  children: React.ReactNode;
  variant?: "sage" | "clay" | "bone";
  className?: string;
}

const variantStyles = {
  sage: "bg-sage-tint text-sage",
  clay: "bg-clay-soft text-clay-dark",
  bone: "bg-bone-deep text-ink-soft",
} as const;

export default function Pill({
  children,
  variant = "sage",
  className = "",
}: PillProps) {
  return (
    <span
      className={`inline-block rounded-pill px-3 py-1 text-caption font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
