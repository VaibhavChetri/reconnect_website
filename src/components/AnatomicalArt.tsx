/**
 * Anatomical line-art SVGs for decorative watermarks and motifs.
 * All accept className for sizing/positioning.
 */

interface SvgProps {
  className?: string;
}

export function KneeSvg({ className }: SvgProps) {
  return (
    <svg
      viewBox="0 0 200 320"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Femur */}
      <path d="M90 20c0 0-4 60-2 100s6 40 10 50" />
      <path d="M110 20c0 0 4 60 2 100s-6 40-10 50" />
      {/* Knee joint */}
      <ellipse cx="100" cy="175" rx="28" ry="18" />
      <path d="M75 170c8 10 42 10 50 0" />
      {/* Tibia */}
      <path d="M85 190c-2 40-4 80-2 110" />
      <path d="M115 190c2 40 4 80 2 110" />
      {/* Patella */}
      <ellipse cx="100" cy="165" rx="12" ry="14" strokeDasharray="3 2" />
    </svg>
  );
}

export function SpineSvg({ className }: SvgProps) {
  return (
    <svg
      viewBox="0 0 100 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Vertebrae */}
      {Array.from({ length: 18 }, (_, i) => {
        const y = 20 + i * 20;
        const w = 12 + Math.sin(i * 0.4) * 4;
        return (
          <g key={i}>
            <rect x={50 - w} y={y} width={w * 2} height={14} rx="4" />
            <line x1={50 - w - 6} y1={y + 7} x2={50 - w} y2={y + 7} />
            <line x1={50 + w} y1={y + 7} x2={50 + w + 6} y2={y + 7} />
          </g>
        );
      })}
      {/* Spinal cord */}
      <line x1="50" y1="16" x2="50" y2="384" strokeDasharray="2 3" opacity="0.4" />
    </svg>
  );
}

export function HandSvg({ className }: SvgProps) {
  return (
    <svg
      viewBox="0 0 200 280"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Carpals */}
      <ellipse cx="100" cy="220" rx="35" ry="22" />
      <ellipse cx="100" cy="220" rx="20" ry="14" strokeDasharray="2 2" />
      {/* Metacarpals & phalanges */}
      {[
        { base: [60, 200], mid: [45, 150], tip: [38, 100], end: [35, 65] },
        { base: [78, 195], mid: [70, 135], tip: [65, 80], end: [62, 40] },
        { base: [100, 195], mid: [100, 130], tip: [100, 70], end: [100, 30] },
        { base: [122, 195], mid: [130, 135], tip: [135, 80], end: [138, 45] },
        { base: [140, 205], mid: [155, 160], tip: [162, 115], end: [165, 80] },
      ].map((finger, i) => (
        <g key={i}>
          <line x1={finger.base[0]} y1={finger.base[1]} x2={finger.mid[0]} y2={finger.mid[1]} />
          <line x1={finger.mid[0]} y1={finger.mid[1]} x2={finger.tip[0]} y2={finger.tip[1]} />
          <line x1={finger.tip[0]} y1={finger.tip[1]} x2={finger.end[0]} y2={finger.end[1]} />
          <circle cx={finger.mid[0]} cy={finger.mid[1]} r="3" />
          <circle cx={finger.tip[0]} cy={finger.tip[1]} r="2.5" />
        </g>
      ))}
    </svg>
  );
}

export function HipSvg({ className }: SvgProps) {
  return (
    <svg
      viewBox="0 0 260 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Pelvis */}
      <path d="M40 60c20-40 60-50 90-50s70 10 90 50c5 10 4 40-10 60" />
      <path d="M40 60c-14 20-15 50-10 60" />
      {/* Acetabulum */}
      <circle cx="90" cy="110" r="24" />
      <circle cx="170" cy="110" r="24" />
      {/* Femoral heads */}
      <circle cx="90" cy="110" r="16" strokeDasharray="3 2" />
      <circle cx="170" cy="110" r="16" strokeDasharray="3 2" />
      {/* Femur shafts */}
      <line x1="80" y1="130" x2="65" y2="195" />
      <line x1="180" y1="130" x2="195" y2="195" />
      {/* Sacrum */}
      <path d="M110 55c5 15 10 40 20 40s15-25 20-40" strokeDasharray="2 2" />
    </svg>
  );
}

export function SkeletonSvg({ className }: SvgProps) {
  return (
    <svg
      viewBox="0 0 200 600"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Skull */}
      <ellipse cx="100" cy="35" rx="28" ry="32" />
      <path d="M85 55c5 5 25 5 30 0" />
      {/* Spine */}
      {Array.from({ length: 20 }, (_, i) => {
        const y = 72 + i * 14;
        const w = 8 + Math.sin(i * 0.35) * 3;
        return <rect key={`v${i}`} x={100 - w} y={y} width={w * 2} height={10} rx="3" />;
      })}
      {/* Ribs */}
      {Array.from({ length: 10 }, (_, i) => {
        const y = 82 + i * 14;
        const spread = 20 + i * 2.5;
        return (
          <g key={`r${i}`}>
            <path d={`M${100 - 8} ${y + 5}c-${spread * 0.5} ${4 + i}-${spread} ${2 + i * 0.5}-${spread} ${-2 + i * 0.3}`} />
            <path d={`M${100 + 8} ${y + 5}c${spread * 0.5} ${4 + i} ${spread} ${2 + i * 0.5} ${spread} ${-2 + i * 0.3}`} />
          </g>
        );
      })}
      {/* Pelvis */}
      <path d="M70 360c-15 25-10 45 5 50s25-5 25-5" />
      <path d="M130 360c15 25 10 45-5 50s-25-5-25-5" />
      {/* Arms */}
      <path d="M72 90c-25 10-40 50-45 100s-5 60 0 80" />
      <path d="M128 90c25 10 40 50 45 100s5 60 0 80" />
      {/* Legs */}
      <line x1="80" y1="410" x2="70" y2="520" />
      <line x1="120" y1="410" x2="130" y2="520" />
      <line x1="70" y1="520" x2="68" y2="580" />
      <line x1="130" y1="520" x2="132" y2="580" />
      {/* Feet */}
      <path d="M68 580c-8 5-12 8-15 8" />
      <path d="M132 580c8 5 12 8 15 8" />
    </svg>
  );
}
