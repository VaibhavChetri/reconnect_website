/**
 * Eyebrow — Numbered eyebrow label for section headings.
 * Renders uppercase text with optional leading number and dash.
 */

interface EyebrowProps {
  number?: string;
  children: React.ReactNode;
}

export default function Eyebrow({ number, children }: EyebrowProps) {
  return (
    <p className="text-eyebrow text-clay">
      {number && (
        <span>
          {number} &mdash;{" "}
        </span>
      )}
      {children}
    </p>
  );
}
