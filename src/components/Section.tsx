/**
 * Section — Full-width section wrapper with section-py padding and container-site centering.
 * Supports optional background class and fullBleed mode (no max-width constraint).
 */

interface SectionProps {
  bg?: string;
  className?: string;
  children: React.ReactNode;
  id?: string;
  fullBleed?: boolean;
}

export default function Section({
  bg,
  className = "",
  children,
  id,
  fullBleed = false,
}: SectionProps) {
  return (
    <section id={id} className={`section-py ${bg ?? ""} ${className}`}>
      {fullBleed ? children : <div className="container-site">{children}</div>}
    </section>
  );
}
