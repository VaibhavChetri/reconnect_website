"use client";

import { useEffect, useState } from "react";

interface Group {
  id: string;
  label: string;
  count: number;
}

interface FaqGroupNavProps {
  groups: Group[];
}

export default function FaqGroupNav({ groups }: FaqGroupNavProps) {
  const [active, setActive] = useState<string>(groups[0]?.id ?? "");

  /* Scroll-spy: highlight the group whose top is closest to nav line */
  useEffect(() => {
    const sections = groups
      .map((g) => document.getElementById(g.id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that's currently visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [groups]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
    setActive(id);
  };

  return (
    <nav aria-label="FAQ groups" className="flex flex-col gap-2">
      <p className="text-eyebrow text-ink-soft mb-3">Browse</p>
      <ul className="flex flex-col gap-1">
        {groups.map((g) => {
          const isActive = active === g.id;
          return (
            <li key={g.id}>
              <a
                href={`#${g.id}`}
                onClick={(e) => handleClick(e, g.id)}
                className={`group flex items-center justify-between gap-3 py-2.5 pl-4 pr-3 rounded-[12px] transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive
                    ? "bg-clay-soft text-clay-dark"
                    : "text-ink-soft hover:text-ink hover:bg-bone-deep"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="text-body-sm font-medium">{g.label}</span>
                <span
                  className={`text-caption ${
                    isActive ? "text-clay-dark" : "text-ink-soft/60"
                  }`}
                >
                  {String(g.count).padStart(2, "0")}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
