/**
 * src/components/PaperPlanes.tsx
 *
 * Global floating layer: 3 paper planes + 2 origami butterflies that
 * drift across the viewport on every page. Animejs-driven.
 *
 * Mount in src/app/layout.tsx once.
 */
"use client";
import { useEffect, useRef } from "react";
import { flyAcross, randomDrift } from "@/lib/motion";

const PLANE_SVG = `<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M2 20 L58 6 L34 20 L58 34 Z" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="0.6" />
  <path d="M34 20 L58 6 L40 18 Z" fill="#F3F4F6" />
  <path d="M34 20 L2 20 L40 18 Z" fill="#FAFAFA" />
</svg>`;

const BUTTERFLY_SVGS = [
  // Peach
  `<svg viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="12" cy="10" rx="10" ry="7" fill="#FFD6A5" />
    <ellipse cx="28" cy="10" rx="10" ry="7" fill="#FFD6A5" />
    <ellipse cx="13" cy="22" rx="7" ry="5" fill="#FFC18C" />
    <ellipse cx="27" cy="22" rx="7" ry="5" fill="#FFC18C" />
    <rect x="19" y="6" width="2" height="20" rx="1" fill="#7C5E48" />
  </svg>`,
  // Lavender
  `<svg viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="12" cy="10" rx="10" ry="7" fill="#DCC6FF" />
    <ellipse cx="28" cy="10" rx="10" ry="7" fill="#DCC6FF" />
    <ellipse cx="13" cy="22" rx="7" ry="5" fill="#BFA8F0" />
    <ellipse cx="27" cy="22" rx="7" ry="5" fill="#BFA8F0" />
    <rect x="19" y="6" width="2" height="20" rx="1" fill="#5D4B82" />
  </svg>`,
  // Sky
  `<svg viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="12" cy="10" rx="10" ry="7" fill="#C7E7F7" />
    <ellipse cx="28" cy="10" rx="10" ry="7" fill="#C7E7F7" />
    <ellipse cx="13" cy="22" rx="7" ry="5" fill="#9FCFEA" />
    <ellipse cx="27" cy="22" rx="7" ry="5" fill="#9FCFEA" />
    <rect x="19" y="6" width="2" height="20" rx="1" fill="#345C6B" />
  </svg>`,
];

export default function PaperPlanes() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    const cleanups: Array<() => void> = [];

    // === 3 paper planes ===
    for (let i = 0; i < 3; i++) {
      const plane = document.createElement("div");
      plane.className = "paper-plane absolute pointer-events-none";
      plane.style.cssText = `
        top: ${10 + i * 18 + Math.random() * 6}%;
        width: ${50 + i * 8}px;
        height: ${33 + i * 5}px;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.12));
        will-change: transform, opacity;
        opacity: 0;
      `;
      plane.innerHTML = PLANE_SVG;
      layer.appendChild(plane);

      const direction = i % 2 === 0 ? "leftToRight" : "rightToLeft";
      const delay = i * 2200 + Math.random() * 1500;

      const spawn = () => {
        cleanups.push(
          flyAcross(plane, {
            direction,
            duration: 18000 + i * 2500 + Math.random() * 4000,
            arc: 35 + Math.random() * 25,
            rotation: (Math.random() - 0.5) * 16,
            delay,
          }),
        );
      };
      spawn();
      // Re-spawn after the flight is roughly done.
      const cycle = 18000 + i * 2500 + delay;
      const id = window.setInterval(spawn, cycle + 2500);
      cleanups.push(() => window.clearInterval(id));
    }

    // === 2 butterflies ===
    for (let i = 0; i < 2; i++) {
      const butterfly = document.createElement("div");
      butterfly.className = "origami-butterfly absolute pointer-events-none";
      butterfly.style.cssText = `
        top: ${20 + i * 30}%;
        left: ${15 + i * 50}%;
        width: ${36 + i * 6}px;
        height: ${27 + i * 4}px;
        filter: drop-shadow(0 1px 2px rgba(0,0,0,0.15));
        will-change: transform, opacity;
        opacity: 0.85;
      `;
      butterfly.innerHTML = BUTTERFLY_SVGS[i % BUTTERFLY_SVGS.length].replace(
        "<svg ",
        '<svg class="butterfly-svg" ',
      );
      layer.appendChild(butterfly);

      cleanups.push(
        randomDrift(butterfly, {
          duration: [6000, 11000 + i * 1500],
          maxStep: (280 + i * 60) * 4,
          rotation: 22,
        }),
      );
    }

    return () => {
      cleanups.forEach((fn) => fn());
      cleanups.length = 0;
    };
  }, []);

  return (
    <div
      ref={layerRef}
      className="fixed inset-0 pointer-events-none z-[6] overflow-hidden"
      aria-hidden="true"
    />
  );
}
