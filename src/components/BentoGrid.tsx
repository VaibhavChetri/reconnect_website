/**
 * BentoGrid — Asymmetric CSS grid layout for bento-style card arrangements.
 * Children receive rounded-card styling and can span multiple cells.
 */

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export default function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)] ${className}`}
    >
      {children}
    </div>
  );
}

/* Helper sub-component for spanning grid cells */

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export function BentoItem({
  children,
  className = "",
  colSpan = 1,
  rowSpan = 1,
}: BentoItemProps) {
  const colClass =
    colSpan === 3
      ? "lg:col-span-3"
      : colSpan === 2
        ? "md:col-span-2"
        : "";
  const rowClass = rowSpan === 2 ? "row-span-2" : "";

  return (
    <div
      className={`rounded-card bg-calcium shadow-card hairline overflow-hidden ${colClass} ${rowClass} ${className}`}
    >
      {children}
    </div>
  );
}
