"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RegionId = "neck" | "shoulder" | "back" | "hip" | "knee";

const REGIONS: Array<{
  id: RegionId;
  label: string;
  blurb: string;
  track: string;
  cx: number;
  cy: number;
}> = [
  { id: "neck",     label: "Neck & Cervical", blurb: "Cervical pain, posture loss, nerve symptoms.", track: "/programs/manage",  cx: 100, cy: 38  },
  { id: "shoulder", label: "Shoulder",        blurb: "Frozen shoulder, impingement, rotator cuff.",  track: "/programs/manage",  cx: 138, cy: 70  },
  { id: "back",     label: "Spine & Back",    blurb: "Disc bulge, sciatica, chronic back pain.",     track: "/programs/manage",  cx: 100, cy: 130 },
  { id: "hip",      label: "Hip & Pelvis",    blurb: "Hip OA, post-replacement, instability.",       track: "/programs/recover", cx: 100, cy: 180 },
  { id: "knee",     label: "Knee",            blurb: "Knee OA, ligament rehab, post-surgical.",      track: "/programs/recover", cx: 86,  cy: 240 },
];

export default function BodyRegionDiagram() {
  const [active, setActive] = useState<RegionId>("knee");
  const prefersReduced = useReducedMotion();
  const region = REGIONS.find((r) => r.id === active)!;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-8 items-center">
      {/* SVG silhouette */}
      <div className="relative mx-auto sm:mx-0">
        <svg
          viewBox="0 0 200 320"
          className="w-[160px] sm:w-[180px] h-auto text-ink-soft/30"
          aria-label="Body region selector"
        >
          {/* Outline silhouette — thin line-art */}
          <g fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" strokeLinecap="round">
            {/* head */}
            <ellipse cx="100" cy="28" rx="16" ry="20" />
            {/* neck */}
            <path d="M92 47 L92 56 Q100 60 108 56 L108 47" />
            {/* torso */}
            <path d="M70 60 Q60 80 60 110 L65 175 Q70 195 80 200 L120 200 Q130 195 135 175 L140 110 Q140 80 130 60 Z" />
            {/* arms */}
            <path d="M60 70 Q40 95 38 140 Q40 165 50 170" />
            <path d="M140 70 Q160 95 162 140 Q160 165 150 170" />
            {/* legs */}
            <path d="M82 200 L78 270 Q78 295 86 308 L96 308 Q98 290 96 270 L98 220" />
            <path d="M118 200 L122 270 Q122 295 114 308 L104 308 Q102 290 104 270 L102 220" />
          </g>

          {/* Hot dots */}
          {REGIONS.map((r) => {
            const isActive = r.id === active;
            return (
              <g key={r.id} style={{ cursor: "pointer" }} onClick={() => setActive(r.id)}>
                {!prefersReduced && isActive && (
                  <motion.circle
                    cx={r.cx}
                    cy={r.cy}
                    r="14"
                    fill="rgba(0,100,224,0.18)"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: [0.6, 1.2, 1], opacity: [0, 0.8, 1] }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
                <circle
                  cx={r.cx}
                  cy={r.cy}
                  r="6"
                  fill={isActive ? "var(--color-clay)" : "var(--color-calcium)"}
                  stroke={isActive ? "var(--color-clay)" : "var(--color-ink-soft)"}
                  strokeWidth="1.25"
                />
                <title>{r.label}</title>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Buttons + active blurb */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap gap-2">
          {REGIONS.map((r) => {
            const isActive = r.id === active;
            return (
              <button
                key={r.id}
                onClick={() => setActive(r.id)}
                className={`rounded-pill px-3.5 py-1.5 text-caption font-medium transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive
                    ? "bg-clay text-calcium"
                    : "bg-bone-deep text-ink-soft hover:bg-clay-soft hover:text-clay-dark"
                }`}
                aria-pressed={isActive}
              >
                {r.label}
              </button>
            );
          })}
        </div>

        <div className="hairline-b" />

        <div>
          <p className="text-eyebrow text-ink-soft mb-2">Focus area</p>
          <h4 className="text-h4 font-display text-ink mb-2">{region.label}</h4>
          <p className="text-body-sm text-ink-soft mb-4 max-w-md">{region.blurb}</p>
          <a
            href={region.track}
            className="inline-flex items-center gap-2 text-body-sm font-medium text-clay group"
          >
            See the relevant track
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
