"use client";

/**
 * CTASection — Reusable call-to-action band with headline, description, and buttons.
 * Supports sage (dark green) and clay (warm accent) variants.
 */

import Section from "./Section";
import Reveal from "./Reveal";
import Button from "./Button";

interface CTASectionProps {
  headline: string;
  description?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  variant?: "clay" | "sage";
}

export default function CTASection({
  headline,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  variant = "sage",
}: CTASectionProps) {
  const isSage = variant === "sage";

  const bgClass = isSage ? "bg-sage-deep" : "bg-clay";
  const textClass = isSage ? "text-bone" : "text-calcium";
  const descClass = isSage ? "text-sage-tint" : "text-clay-soft";

  const primaryVariant = isSage ? "clay" : "sage-outline";
  const secondaryVariant = "ghost";

  return (
    <Section bg={bgClass}>
      <Reveal>
        <div className={`flex flex-col items-center text-center gap-6 ${textClass}`}>
          <h2 className="text-h2 font-display max-w-3xl">{headline}</h2>

          {description && (
            <p className={`text-body-lg max-w-xl ${descClass}`}>{description}</p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Button variant={primaryVariant} size="lg" href={primaryHref} arrow>
              {primaryLabel}
            </Button>

            {secondaryHref && secondaryLabel && (
              <Button
                variant={secondaryVariant}
                size="lg"
                href={secondaryHref}
                className={isSage ? "text-bone/70 hover:text-bone" : "text-calcium/70 hover:text-calcium"}
              >
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
