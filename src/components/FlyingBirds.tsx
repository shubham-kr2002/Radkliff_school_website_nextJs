"use client";
import { useEffect, useRef, useCallback } from "react";

// Anime-style bird SVG silhouettes — 3 poses for a flapping cycle
// NOTE: fill is hardcoded because <img>-loaded SVGs don't inherit
// currentColor from the host document.
const BIRD_FILL = "#2C3E50";
const BIRD_SVGS = [
  // Wings up
  `<svg viewBox="0 0 40 20" fill="${BIRD_FILL}" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 12 Q14 4 2 8 Q8 10 14 12 Q10 12 20 12 Z"/>
    <path d="M20 12 Q26 4 38 8 Q32 10 26 12 Q30 12 20 12 Z"/>
    <ellipse cx="20" cy="13" rx="4" ry="2.5"/>
  </svg>`,
  // Wings mid
  `<svg viewBox="0 0 40 20" fill="${BIRD_FILL}" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 12 Q12 8 0 11 Q8 12 16 13 Q12 13 20 13 Z"/>
    <path d="M20 12 Q28 8 40 11 Q32 12 24 13 Q28 13 20 13 Z"/>
    <ellipse cx="20" cy="13" rx="4" ry="2.5"/>
  </svg>`,
  // Wings down
  `<svg viewBox="0 0 40 20" fill="${BIRD_FILL}" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 13 Q14 18 4 19 Q10 16 16 14 Q12 14 20 14 Z"/>
    <path d="M20 13 Q26 18 36 19 Q30 16 24 14 Q28 14 20 14 Z"/>
    <ellipse cx="20" cy="13" rx="4" ry="2.5"/>
  </svg>`,
];

function encodeSvg(svg: string) {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

interface Bird {
  id: number;
  top: number;           // % from top
  duration: number;       // seconds to cross screen
  size: number;          // px
  opacity: number;       // 0-1
  flapDuration: number;   // seconds per flap cycle
  amplitude: number;      // sine wave vertical amplitude in px
  frequency: number;      // sine wave frequency
  delay: number;          // start delay in ms
  depthScale: number;     // perspective scale (closer = bigger)
  color: string;          // dark teal variations
}

export default function FlyingBirds() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);

  const spawnBird = useCallback(() => {
    if (!containerRef.current) return;

    const id = nextId.current++;
    const duration = 14 + Math.random() * 18; // 14–32s
    const depthScale = 0.5 + Math.random() * 0.8; // parallax depth
    const size = Math.round((18 + Math.random() * 22) * depthScale); // 9-36px

    const bird: Bird = {
      id,
      top: 4 + Math.random() * 42,        // 4%–46%
      duration,
      size,
      opacity: (0.25 + Math.random() * 0.45) * depthScale, // farther = more transparent
      flapDuration: 0.35 + Math.random() * 0.3, // 0.35–0.65s
      amplitude: 8 + Math.random() * 20 * depthScale, // vertical wave
      frequency: 1.5 + Math.random() * 2,    // wave frequency
      delay: Math.random() * 500,
      depthScale,
      color: `rgba(38, 70, 83, `, // dark slate teal base
    };

    const el = document.createElement("div");
    el.className = "anime-bird";
    el.setAttribute("data-bird-id", String(id));

    // Build 3-frame sprite from SVGs
    const w = size * 2.5;
    const h = size * 1.4;
    el.style.cssText = `
      position: absolute;
      left: -${w}px;
      top: ${bird.top}%;
      width: ${w}px;
      height: ${h}px;
      opacity: ${bird.opacity};
      pointer-events: none;
      will-change: transform;
      animation: anime-bird-fly ${bird.duration}s linear ${bird.delay}ms forwards,
                 anime-bird-bob ${bird.flapDuration * 3}s ease-in-out ${bird.delay}ms infinite;
      --bird-y: 0px;
      --bird-flap: ${bird.flapDuration}s;
      --bird-amp: ${bird.amplitude}px;
      --bird-freq: ${bird.frequency};
    `;

    // Create sprite with 3 SVG frames
    el.innerHTML = BIRD_SVGS.map(
      (svg) =>
        `<img src="${encodeSvg(svg)}" style="width:100%;height:100%;object-fit:contain;position:absolute;inset:0;" alt=""/>`
    ).join("");

    containerRef.current.appendChild(el);

    // Cleanup after flight completes
    setTimeout(() => {
      el.remove();
    }, (duration + bird.delay / 1000) * 1000 + 1000);
  }, []);

  useEffect(() => {
    // Initial flock: staggered
    const delays = [200, 900, 1800, 3200, 5000];
    const timers = delays.map((d) => setTimeout(spawnBird, d));

    // Continuous spawning: new bird every 3–5 seconds
    const interval = setInterval(spawnBird, 3000 + Math.random() * 2000);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [spawnBird]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-[5] pointer-events-none overflow-hidden"
      aria-hidden="true"
    />
  );
}
