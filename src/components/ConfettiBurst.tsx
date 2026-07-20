/**
 * src/components/ConfettiBurst.tsx
 *
 * Fires a one-shot pastel confetti burst when `trigger` becomes true.
 * Used by SuccessModal after enquiry form submission.
 *
 * `origin` defaults to the center of the viewport.
 */
"use client";
import { useEffect, useRef } from "react";
import { confettiBurst } from "@/lib/motion";

export interface ConfettiBurstProps {
  trigger: boolean;
  /** Origin in viewport coordinates. Defaults to center. */
  origin?: { x: number; y: number };
  /** Number of particles. Default 50. */
  count?: number;
  /** Color palette. Defaults to brand pastels. */
  colors?: string[];
}

export default function ConfettiBurst({
  trigger,
  origin,
  count = 50,
  colors = ["#FFD6A5", "#DCC6FF", "#C7E7F7", "#FFE9A8", "#FFF1E9"],
}: ConfettiBurstProps) {
  const layerRef = useRef<HTMLDivElement>(null);
  const lastFired = useRef<number>(0);

  useEffect(() => {
    if (!trigger || !layerRef.current) return;
    // Throttle: don't fire more than once per 600ms.
    const now = Date.now();
    if (now - lastFired.current < 600) return;
    lastFired.current = now;

    const o = origin ?? {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2 - 40,
    };

    const cleanup = confettiBurst(layerRef.current, o, { count, colors });
    // Defensive cleanup in case the component unmounts mid-burst.
    return cleanup;
  }, [trigger, origin, count, colors]);

  return (
    <div
      ref={layerRef}
      className="fixed inset-0 pointer-events-none z-[100]"
      aria-hidden="true"
    />
  );
}
