/**
 * Card — Elevated card with optional hover-lift effect.
 * Uses calcium background, card radius, card shadow, and hairline border.
 */

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingStyles = {
  sm: "p-5",
  md: "p-7",
  lg: "p-9",
} as const;

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={`bg-calcium rounded-card shadow-card hairline ${paddingStyles[padding]} ${hover ? "hover-lift" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
