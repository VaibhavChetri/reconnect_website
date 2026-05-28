/**
 * SectionHeader — Combines Eyebrow + H2 title + optional description paragraph.
 * Supports left or center alignment.
 */

import Eyebrow from "./Eyebrow";

interface SectionHeaderProps {
  eyebrow?: string;
  eyebrowNumber?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  eyebrowNumber,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-5 ${alignClass} ${className}`}>
      {eyebrow && <Eyebrow number={eyebrowNumber}>{eyebrow}</Eyebrow>}
      <h2 className="text-h2 text-ink">{title}</h2>
      {description && (
        <p
          className={`text-body-lg text-ink-soft ${
            align === "center" ? "max-w-2xl" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
