import React from "react";

/** Tiny 4-pointed star, slightly irregular to feel hand-drawn */
export function Sparkle({ size = 20, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 1.5 L11.8 8.2 L18.5 10 L11.8 11.9 L10 18.5 L8.1 11.9 L1.5 10 L8.1 8.2 Z"
        fill={color}
      />
    </svg>
  );
}

/** Wobbly wavy underline — inline SVG that stretches to fit */
export function WiggleLine({ color = "currentColor", className = "" }: { color?: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 120 8"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 4 Q7.5 0.5 15 4 Q22.5 7.5 30 4 Q37.5 0.5 45 4 Q52.5 7.5 60 4 Q67.5 0.5 75 4 Q82.5 7.5 90 4 Q97.5 0.5 105 4 Q112.5 7.5 120 4"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Hand-drawn curved arrow pointing right */
export function CurvedArrowRight({ size = 44, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.7)}
      viewBox="0 0 44 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 18 Q12 3 34 14"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M28 8 L36 14 L29 20"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/** Hand-drawn map-pin / location drop */
export function MapPin({ size = 18, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.3)}
      viewBox="0 0 18 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M9 2 C4.6 2 1 5.6 1 10 C1 15.5 9 22.5 9 22.5 C9 22.5 17 15.5 17 10 C17 5.6 13.4 2 9 2 Z"
        stroke={color}
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="10" r="3" stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

/** Tiny scattered dots — decorative texture */
export function ScatterDots({ color = "currentColor", className = "" }: { color?: string; className?: string }) {
  return (
    <svg
      width="48"
      height="36"
      viewBox="0 0 48 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="6" cy="8" r="2.5" fill={color} opacity="0.55" />
      <circle cx="20" cy="4" r="1.8" fill={color} opacity="0.4" />
      <circle cx="34" cy="10" r="2" fill={color} opacity="0.6" />
      <circle cx="12" cy="22" r="1.5" fill={color} opacity="0.35" />
      <circle cx="28" cy="28" r="2.2" fill={color} opacity="0.5" />
      <circle cx="42" cy="20" r="1.6" fill={color} opacity="0.45" />
      <circle cx="4" cy="30" r="1.8" fill={color} opacity="0.3" />
      <circle cx="40" cy="4" r="2" fill={color} opacity="0.4" />
    </svg>
  );
}

/** A loose hand-drawn circle — for highlighting */
export function LooseCircle({ size = 80, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.55)}
      viewBox="0 0 80 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 22 C4 10 16 2 30 1.5 C50 1 76 8 78 22 C80 34 66 42 46 43 C26 44 4 36 6 22 Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
