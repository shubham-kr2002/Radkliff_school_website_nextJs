/**
 * src/components/PaperSwan.tsx
 *
 * A serene white origami swan that glides slowly across the screen.
 * Powered by `randomDrift` from `@/lib/motion`. The inner SVG has a
 * tiny CSS bob (swan-bob keyframe in globals.css) for life.
 *
 * Mount this once per page where you want the swan to appear.
 */
"use client";
import { useEffect, useRef } from "react";
import { randomDrift } from "@/lib/motion";

const SWAN_SVG = `<svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <!-- Body: triangular paper shape -->
  <path d="M14 38 L62 26 L78 44 L24 50 Z" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="0.6" />
  <!-- Body highlight fold -->
  <path d="M14 38 L62 26 L62 50 L24 50 Z" fill="#F9FAFB" />
  <!-- Wing fold (raised, on top of body) -->
  <path d="M30 30 L62 26 L56 40 L36 42 Z" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="0.5" />
  <!-- Wing crease lines -->
  <path d="M36 32 L56 36" stroke="#D1D5DB" strokeWidth="0.4" fill="none" />
  <path d="M40 28 L54 32" stroke="#D1D5DB" strokeWidth="0.4" fill="none" />
  <!-- Neck: curved S-shape -->
  <path d="M62 28 Q70 18 78 14 Q84 12 86 16" stroke="#FFFFFF" strokeWidth="6" fill="none" strokeLinecap="round" />
  <path d="M62 28 Q70 18 78 14 Q84 12 86 16" stroke="#E5E7EB" strokeWidth="0.6" fill="none" />
  <!-- Head -->
  <ellipse cx="86" cy="15" rx="4" ry="3" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="0.6" />
  <!-- Beak -->
  <path d="M89 15 L96 14 L89 17 Z" fill="#FBC02D" />
  <!-- Tail (pointed back) -->
  <path d="M14 38 L4 34 L18 44 Z" fill="#FAFAFA" stroke="#E5E7EB" strokeWidth="0.5" />
  <!-- Water reflection ripple under body -->
  <ellipse cx="46" cy="54" rx="34" ry="2" fill="rgba(199,231,247,0.5)" />
</svg>`;

export interface PaperSwanProps {
  /** Initial top position as CSS value (e.g. "20%" or "120px"). Default "30%". */
  initialTop?: string;
  /** Initial left position as CSS value. Default "20%". */
  initialLeft?: string;
  /** Pixel width of the swan. Default 96. */
  size?: number;
}

export default function PaperSwan({
  initialTop = "30%",
  initialLeft = "20%",
  size = 96,
}: PaperSwanProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cleanup = randomDrift(el, {
      duration: [12000, 18000],
      maxStep: 400,
      rotation: 10,
    });
    return cleanup;
  }, []);

  return (
    <div
      ref={ref}
      className="absolute pointer-events-none"
      style={{
        top: initialTop,
        left: initialLeft,
        width: `${size}px`,
        height: `${size * 0.6}px`,
        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.12))",
        willChange: "transform",
      }}
      aria-hidden="true"
    >
      <div
        className="paper-swan-svg"
        style={{ width: "100%", height: "100%" }}
        dangerouslySetInnerHTML={{ __html: SWAN_SVG }}
      />
    </div>
  );
}
