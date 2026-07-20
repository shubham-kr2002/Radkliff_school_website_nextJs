/**
 * src/components/OrigamiDecorations.tsx
 *
 * A small swarm of colorful origami shapes (crane, heart, flower, star,
 * boat, butterfly) that float gently between sections. CSS-driven for low
 * CPU; positions are deterministic from a `seed` so SSR == CSR.
 *
 * Mount as a section divider:
 *   <OrigamiDecorations count={4} seed={1} />
 */
import React from "react";

const PASTEL_PALETTE = [
  "#FFD6A5", // peach
  "#DCC6FF", // lavender
  "#C7E7F7", // sky
  "#FFE9A8", // soft yellow
  "#cee9d3", // mint
];

// ----- Inline origami SVGs (all ~40 px viewBox) -----
const CRANE_SVG = `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M4 28 L18 14 L22 18 L18 22 L28 22 L34 18 L20 32 L8 30 Z" fill="currentColor" />
  <path d="M18 14 L22 18" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" fill="none" />
  <path d="M18 22 L28 22" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" fill="none" />
</svg>`;

const HEART_SVG = `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M20 32 C20 32 6 24 6 14 C6 9 10 6 14 6 C17 6 19 8 20 10 C21 8 23 6 26 6 C30 6 34 9 34 14 C34 24 20 32 20 32 Z" fill="currentColor" />
  <path d="M20 10 L20 32" stroke="rgba(255,255,255,0.45)" strokeWidth="0.6" fill="none" />
</svg>`;

const FLOWER_SVG = `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <ellipse cx="20" cy="8"  rx="5" ry="7" fill="currentColor" />
  <ellipse cx="20" cy="32" rx="5" ry="7" fill="currentColor" />
  <ellipse cx="8"  cy="20" rx="7" ry="5" fill="currentColor" />
  <ellipse cx="32" cy="20" rx="7" ry="5" fill="currentColor" />
  <circle  cx="20" cy="20" r="4" fill="#FFF1E9" />
</svg>`;

const STAR_SVG = `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M20 4 L24 16 L36 16 L26 24 L30 36 L20 28 L10 36 L14 24 L4 16 L16 16 Z" fill="currentColor" />
  <path d="M20 4 L20 28" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" fill="none" />
</svg>`;

const BOAT_SVG = `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M4 24 L36 24 L32 32 L8 32 Z" fill="currentColor" />
  <path d="M20 24 L20 6 L8 22 L20 22 Z" fill="currentColor" opacity="0.85" />
  <path d="M20 24 L20 6 L32 22 L20 22 Z" fill="currentColor" opacity="0.7" />
</svg>`;

const BUTTERFLY_SVG = `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <ellipse cx="12" cy="14" rx="9" ry="6" fill="currentColor" />
  <ellipse cx="28" cy="14" rx="9" ry="6" fill="currentColor" />
  <ellipse cx="14" cy="26" rx="6" ry="4" fill="currentColor" opacity="0.85" />
  <ellipse cx="26" cy="26" rx="6" ry="4" fill="currentColor" opacity="0.85" />
  <rect x="19" y="10" width="2" height="20" rx="1" fill="rgba(0,0,0,0.4)" />
</svg>`;

const SHAPES = [
  { svg: CRANE_SVG,     name: "crane" },
  { svg: HEART_SVG,     name: "heart" },
  { svg: FLOWER_SVG,    name: "flower" },
  { svg: STAR_SVG,      name: "star" },
  { svg: BOAT_SVG,      name: "boat" },
  { svg: BUTTERFLY_SVG, name: "butterfly" },
];

export interface OrigamiDecorationsProps {
  /** Number of decorations to render. Default 6. */
  count?: number;
  /** Color palette. Defaults to brand pastels. */
  colorPalette?: string[];
  /** Deterministic seed for positions. */
  seed?: number;
  /** Vertical position range as % of section height. Default [10, 90]. */
  verticalRange?: [number, number];
  /** Size range in px. Default [28, 56]. */
  sizeRange?: [number, number];
  /** Optional className for the wrapper. */
  className?: string;
}

/** Cheap deterministic pseudo-random from seed + index. */
function seeded(seed: number, i: number, salt: number): number {
  const x = Math.sin(seed * 9301 + i * 49297 + salt * 233280) * 233280;
  return x - Math.floor(x);
}

export default function OrigamiDecorations({
  count = 6,
  colorPalette = PASTEL_PALETTE,
  seed = 1,
  verticalRange = [10, 90],
  sizeRange = [28, 56],
  className = "",
}: OrigamiDecorationsProps) {
  const items = Array.from({ length: count }, (_, i) => {
    const shape = SHAPES[i % SHAPES.length];
    const color = colorPalette[i % colorPalette.length];
    const top =
      verticalRange[0] +
      seeded(seed, i, 1) * (verticalRange[1] - verticalRange[0]);
    const left = seeded(seed, i, 2) * 92 + 4; // 4–96% across width
    const size =
      sizeRange[0] + seeded(seed, i, 3) * (sizeRange[1] - sizeRange[0]);
    const delay = seeded(seed, i, 4) * 4; // 0–4s stagger
    const duration = 3.2 + seeded(seed, i, 5) * 1.6; // 3.2–4.8s
    const rot = (seeded(seed, i, 6) - 0.5) * 20; // ±10°
    return { i, shape, color, top, left, size, delay, duration, rot };
  });

  return (
    <div
      className={`relative w-full pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {items.map((it) => (
        <span
          key={it.i}
          className="origami-decor absolute"
          style={{
            top: `${it.top}%`,
            left: `${it.left}%`,
            width: `${it.size}px`,
            height: `${it.size}px`,
            color: it.color,
            transform: `rotate(${it.rot}deg)`,
            animationDelay: `${it.delay}s`,
            animationDuration: `${it.duration}s`,
          }}
          dangerouslySetInnerHTML={{ __html: it.shape.svg }}
        />
      ))}
    </div>
  );
}
