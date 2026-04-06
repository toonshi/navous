"use client";

import React from "react";

// A single simplified person silhouette rendered as inline SVG.
// size: controls overall scale (px). opacity: 0–1.
function Person({ size = 20, opacity = 0.06 }: { size?: number; opacity?: number }) {
  const h = size;
  const w = h * 0.5;
  const r = w * 0.42; // head radius
  const headCy = r;
  const bodyTop = r * 2 + 1;
  const torsoH = h * 0.38;
  const legH = h * 0.32;
  const cx = w / 2;

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="currentColor"
      style={{ opacity, display: "block" }}
      aria-hidden="true"
    >
      {/* Head */}
      <circle cx={cx} cy={headCy} r={r} />
      {/* Torso */}
      <rect x={cx - w * 0.22} y={bodyTop} width={w * 0.44} height={torsoH} rx={w * 0.1} />
      {/* Legs */}
      <rect x={cx - w * 0.26} y={bodyTop + torsoH} width={w * 0.2} height={legH} rx={w * 0.08} />
      <rect x={cx + w * 0.06} y={bodyTop + torsoH} width={w * 0.2} height={legH} rx={w * 0.08} />
    </svg>
  );
}

// Each entry defines one animated figure in the crowd layer.
const figures: { cls: string; size: number; opacity: number }[] = [
  { cls: "crowd-r1", size: 22, opacity: 0.055 },
  { cls: "crowd-r2", size: 18, opacity: 0.045 },
  { cls: "crowd-r3", size: 26, opacity: 0.06  },
  { cls: "crowd-r4", size: 20, opacity: 0.05  },
  { cls: "crowd-r5", size: 16, opacity: 0.04  },
  { cls: "crowd-r6", size: 24, opacity: 0.055 },
  { cls: "crowd-l1", size: 20, opacity: 0.05  },
  { cls: "crowd-l2", size: 24, opacity: 0.06  },
  { cls: "crowd-l3", size: 18, opacity: 0.045 },
  { cls: "crowd-l4", size: 22, opacity: 0.055 },
  { cls: "crowd-l5", size: 16, opacity: 0.04  },
  { cls: "crowd-d1", size: 19, opacity: 0.048 },
  { cls: "crowd-d2", size: 23, opacity: 0.058 },
  { cls: "crowd-u1", size: 21, opacity: 0.052 },
  { cls: "crowd-u2", size: 17, opacity: 0.043 },
];

export default function CrowdBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none text-white select-none"
    >
      {figures.map((f) => (
        <span key={f.cls} className={`crowd-figure ${f.cls}`}>
          <Person size={f.size} opacity={f.opacity} />
        </span>
      ))}
    </div>
  );
}
