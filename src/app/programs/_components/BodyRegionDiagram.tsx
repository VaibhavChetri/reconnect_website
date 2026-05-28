"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type RegionId = "neck" | "shoulder" | "back" | "hip" | "knee";

type Region = {
  id: RegionId;
  label: string;
  short: string;
  blurb: string;
  conditions: string[];
  track: string;
  trackName: string;
  cx: number;
  cy: number;
};

const REGIONS: Region[] = [
  {
    id: "neck",
    label: "Neck & Cervical",
    short: "Neck",
    blurb: "Cervical pain, posture loss, nerve symptoms.",
    conditions: ["Cervical spondylosis", "Posture-related pain", "Nerve compression"],
    track: "/programs/manage",
    trackName: "Manage",
    cx: 100,
    cy: 38,
  },
  {
    id: "shoulder",
    label: "Shoulder",
    short: "Shoulder",
    blurb: "Frozen shoulder, impingement, rotator cuff.",
    conditions: ["Frozen shoulder", "Rotator cuff", "Impingement"],
    track: "/programs/manage",
    trackName: "Manage",
    cx: 138,
    cy: 70,
  },
  {
    id: "back",
    label: "Spine & Back",
    short: "Back",
    blurb: "Disc bulge, sciatica, chronic back pain.",
    conditions: ["Disc bulge", "Sciatica", "Chronic back pain"],
    track: "/programs/manage",
    trackName: "Manage",
    cx: 100,
    cy: 130,
  },
  {
    id: "hip",
    label: "Hip & Pelvis",
    short: "Hip",
    blurb: "Hip OA, post-replacement, instability.",
    conditions: ["Hip osteoarthritis", "Post-replacement", "Instability"],
    track: "/programs/recover",
    trackName: "Recover",
    cx: 100,
    cy: 180,
  },
  {
    id: "knee",
    label: "Knee",
    short: "Knee",
    blurb: "Knee OA, ligament rehab, post-surgical.",
    conditions: ["Knee osteoarthritis", "Ligament rehab", "Post-surgical"],
    track: "/programs/recover",
    trackName: "Recover",
    cx: 86,
    cy: 240,
  },
];

export default function BodyRegionDiagram() {
  const [active, setActive] = useState<RegionId>("knee");
  const [hovered, setHovered] = useState<RegionId | null>(null);
  const prefersReduced = useReducedMotion();
  const region = REGIONS.find((r) => r.id === active)!;

  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] gap-8 md:gap-10 items-start">
      {/* ═══ Silhouette ═════════════════════════════════════════ */}
      <div className="relative mx-auto md:mx-0 w-full max-w-[240px] aspect-[200/320]">
        {/* Soft brand-blue radial backdrop */}
        <div
          className="absolute inset-0 rounded-[28px] pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 45%, rgba(0,100,224,0.07), transparent 70%)",
          }}
          aria-hidden="true"
        />

        <svg
          viewBox="0 0 200 320"
          className="relative w-full h-full text-ink-soft/30"
          aria-label="Body region selector"
        >
          {/* Outline silhouette */}
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <ellipse cx="100" cy="28" rx="16" ry="20" />
            <path d="M92 47 L92 56 Q100 60 108 56 L108 47" />
            <path d="M70 60 Q60 80 60 110 L65 175 Q70 195 80 200 L120 200 Q130 195 135 175 L140 110 Q140 80 130 60 Z" />
            <path d="M60 70 Q40 95 38 140 Q40 165 50 170" />
            <path d="M140 70 Q160 95 162 140 Q160 165 150 170" />
            <path d="M82 200 L78 270 Q78 295 86 308 L96 308 Q98 290 96 270 L98 220" />
            <path d="M118 200 L122 270 Q122 295 114 308 L104 308 Q102 290 104 270 L102 220" />
          </g>

          {/* Hot dots — bigger touch targets, animated rings */}
          {REGIONS.map((r) => {
            const isActive = r.id === active;
            const isHovered = r.id === hovered;
            const isHighlighted = isActive || isHovered;
            return (
              <g
                key={r.id}
                style={{ cursor: "pointer" }}
                onClick={() => setActive(r.id)}
                onMouseEnter={() => setHovered(r.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(r.id)}
                onBlur={() => setHovered(null)}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                aria-label={`Select ${r.label}`}
              >
                {/* Invisible larger hit area (24px) */}
                <circle cx={r.cx} cy={r.cy} r="18" fill="transparent" />

                {/* Outer pulsing ring (active only) */}
                {!prefersReduced && isActive && (
                  <motion.circle
                    cx={r.cx}
                    cy={r.cy}
                    r="14"
                    fill="none"
                    stroke="var(--color-clay)"
                    strokeWidth="1.5"
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: [0.8, 1.6, 0.8], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}

                {/* Mid halo (active OR hover) */}
                <motion.circle
                  cx={r.cx}
                  cy={r.cy}
                  r="11"
                  fill="rgba(0,100,224,0.18)"
                  initial={false}
                  animate={{
                    opacity: isHighlighted ? 1 : 0,
                    scale: isHighlighted ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: `${r.cx}px ${r.cy}px` }}
                />

                {/* The dot itself */}
                <motion.circle
                  cx={r.cx}
                  cy={r.cy}
                  r={isActive ? 6 : 5}
                  fill={isActive ? "var(--color-clay)" : "var(--color-calcium)"}
                  stroke={isHighlighted ? "var(--color-clay)" : "var(--color-ink-soft)"}
                  strokeWidth={isHighlighted ? 2 : 1.25}
                  initial={false}
                  animate={{ scale: isHovered && !isActive ? 1.2 : 1 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: `${r.cx}px ${r.cy}px` }}
                />

                <title>{r.label}</title>
              </g>
            );
          })}
        </svg>

        {/* Click hint */}
        <p className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-caption text-ink-soft/70 italic whitespace-nowrap">
          Tap a dot to explore
        </p>
      </div>

      {/* ═══ Selectable region cards + active blurb ═══════════════ */}
      <div className="flex flex-col gap-5">
        {/* Region chips — full-width grid, big tap targets */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {REGIONS.map((r) => {
            const isActive = r.id === active;
            return (
              <button
                key={r.id}
                onClick={() => setActive(r.id)}
                onMouseEnter={() => setHovered(r.id)}
                onMouseLeave={() => setHovered(null)}
                aria-pressed={isActive}
                className={`group relative overflow-hidden rounded-[12px] px-3 py-2.5 text-caption font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hairline ${
                  isActive
                    ? "bg-clay text-calcium border-clay shadow-soft"
                    : "bg-calcium text-ink-soft hover:text-ink hover:border-clay/40"
                }`}
              >
                <span className="relative z-10">{r.short}</span>
                {/* Hover sweep */}
                {!isActive && (
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,100,224,0.08), transparent 60%)",
                    }}
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active region card — animated swap */}
        <div className="relative glow-card glow-card-static bg-calcium rounded-[18px] p-6 md:p-7 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={region.id}
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-eyebrow text-clay">Focus area</p>
                <span className="text-caption text-ink-soft bg-bone-deep rounded-pill px-2.5 py-0.5">
                  Track: {region.trackName}
                </span>
              </div>

              <h4 className="text-h3 font-display text-ink mb-2">{region.label}</h4>
              <p className="text-body text-ink-soft mb-4">{region.blurb}</p>

              <ul className="flex flex-wrap gap-1.5 mb-5">
                {region.conditions.map((c) => (
                  <li
                    key={c}
                    className="text-caption text-ink bg-bone-deep rounded-pill px-3 py-1"
                  >
                    {c}
                  </li>
                ))}
              </ul>

              <a
                href={region.track}
                className="group inline-flex items-center gap-2 text-body-sm font-medium text-clay"
              >
                See the {region.trackName} track
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M3 8h10m0 0L9 4m4 4L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
