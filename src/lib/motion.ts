/**
 * src/lib/motion.ts
 *
 * The single import surface for animejs in this project.
 * Components MUST go through these wrappers — they must never
 * `import animejs` directly. This keeps the motion vocabulary
 * consistent, prefers-reduced-motion safe, and easy to swap.
 *
 * animejs v4 API (import { animate, stagger, ... } from 'animejs').
 */
import { animate, stagger, type AnimationParams, type AnimationPlayState } from "animejs";

/** Returns true if the user has asked for reduced motion. SSR-safe. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * flyAcross — for paper planes, drifting leaves, etc.
 * Animates a single element from one side of the viewport to the other
 * with a subtle Y-arc and rotation. Respects reduced motion.
 *
 * Returns a cleanup function that pauses and clears the animation.
 */
export function flyAcross(
  el: HTMLElement,
  opts: {
    /** Direction of travel. Default "leftToRight". */
    direction?: "leftToRight" | "rightToLeft";
    /** Duration in ms. Default random 18_000–28_000. */
    duration?: number;
    /** Vertical arc amplitude in px. Default 40. */
    arc?: number;
    /** Final rotation in degrees. Default ±10. */
    rotation?: number;
    /** Delay before start in ms. Default 0. */
    delay?: number;
  } = {},
): () => void {
  if (prefersReducedMotion()) {
    el.style.opacity = "0";
    return () => {};
  }

  const {
    direction = "leftToRight",
    duration = 18000 + Math.random() * 10000,
    arc = 40,
    rotation = (Math.random() - 0.5) * 20,
    delay = 0,
  } = opts;

  const startX = direction === "leftToRight" ? -120 : window.innerWidth + 120;
  const endX = direction === "leftToRight" ? window.innerWidth + 120 : -120;
  const midX = (startX + endX) / 2;
  // Push Y in the opposite direction of the arc so the path is a gentle hump.
  const baseTop = parseFloat(el.style.top || "0");
  const midY = baseTop - arc;
  const endY = baseTop;

  el.style.opacity = "0";
  el.style.transform = `translate(${startX}px, ${baseTop}px) rotate(0deg)`;

  // Phase 1: appear, move to mid (with arc up).
  const anim = animate(el, {
    opacity: [0, 1, 1, 1, 0],
    x: [startX, midX, endX],
    y: [baseTop, midY, endY],
    rotate: [0, rotation * 0.5, rotation],
    duration: [duration * 0.1, duration * 0.4, duration * 0.5],
    delay,
    ease: "inOutQuad",
  });

  return () => {
    try {
      (anim as unknown as AnimationPlayState).pause?.();
    } catch {
      /* noop */
    }
  };
}

/**
 * flutterLoop — for butterflies, fairies, anything that hovers.
 * Continuous gentle sine bobbing + two-frame wing flap.
 * Returns a cleanup function.
 */
export function flutterLoop(
  el: HTMLElement,
  opts: {
    /** Vertical amplitude in px. Default 18. */
    amplitude?: number;
    /** Bob period in ms. Default 1800. */
    period?: number;
    /** Slight rotation tilt in degrees. Default ±6. */
    rotation?: number;
  } = {},
): () => void {
  if (prefersReducedMotion()) {
    el.style.opacity = "0.7";
    return () => {};
  }

  const { amplitude = 18, period = 1800, rotation = (Math.random() - 0.5) * 12 } = opts;

  const baseTop = parseFloat(el.style.top || "0");
  const baseLeft = parseFloat(el.style.left || "0");

  const anim = animate(el, {
    y: [
      { to: -amplitude, duration: period / 2, ease: "inOutSine" },
      { to: amplitude * 0.4, duration: period, ease: "inOutSine" },
      { to: 0, duration: period / 2, ease: "inOutSine" },
    ],
    rotate: [
      { to: rotation, duration: period / 2, ease: "inOutSine" },
      { to: -rotation * 0.6, duration: period / 2, ease: "inOutSine" },
      { to: 0, duration: period, ease: "inOutSine" },
    ],
    x: [
      { to: amplitude * 0.5, duration: period, ease: "inOutSine" },
      { to: -amplitude * 0.3, duration: period, ease: "inOutSine" },
      { to: 0, duration: period, ease: "inOutSine" },
    ],
    loop: true,
    alternate: false,
  });

  return () => {
    try {
      (anim as unknown as AnimationPlayState).pause?.();
    } catch {
      /* noop */
    }
  };
}

/**
 * confettiBurst — physics-style burst for form success / celebrations.
 * Spawns confetti rects from an origin point and animates them with
 * gravity, drift, spin, and fade.
 *
 * @param container - parent element to append confetti nodes to
 * @param origin - {x, y} in viewport coords (default: center of container)
 * @param opts.count, opts.colors, opts.duration
 *
 * Returns a cleanup function (rarely needed; the function self-cleans).
 */
export function confettiBurst(
  container: HTMLElement,
  origin: { x: number; y: number },
  opts: {
    count?: number;
    colors?: string[];
    duration?: number;
  } = {},
): () => void {
  const count = opts.count ?? 50;
  const colors = opts.colors ?? ["#FFD6A5", "#DCC6FF", "#C7E7F7", "#FFE9A8", "#FFF1E9"];
  const baseDuration = opts.duration ?? 3200;

  if (prefersReducedMotion()) {
    // Visual cue without motion: a quick flash of the colors at the origin.
    const flash = document.createElement("div");
    flash.style.cssText = `
      position: absolute; left: ${origin.x}px; top: ${origin.y}px;
      width: 12px; height: 12px; border-radius: 50%;
      background: ${colors[0]}; transform: translate(-50%, -50%);
      pointer-events: none; opacity: 0.6;
    `;
    container.appendChild(flash);
    setTimeout(() => flash.remove(), 600);
    return () => {};
  }

  const rects: HTMLElement[] = [];
  for (let i = 0; i < count; i++) {
    const r = document.createElement("div");
    const size = 6 + Math.random() * 8;
    const color = colors[Math.floor(Math.random() * colors.length)];
    r.style.cssText = `
      position: absolute;
      left: ${origin.x}px;
      top: ${origin.y}px;
      width: ${size}px;
      height: ${size * 0.5}px;
      background: ${color};
      border-radius: 1px;
      pointer-events: none;
      will-change: transform, opacity;
      transform: translate(-50%, -50%);
    `;
    container.appendChild(r);
    rects.push(r);
  }

  const vh = window.innerHeight;
  const vw = window.innerWidth;

  const anim = animate(rects, {
    x: () => (Math.random() - 0.5) * 360,
    y: () => vh * 0.45 + Math.random() * vh * 0.4,
    rotate: () => (Math.random() - 0.5) * 720,
    opacity: [
      { to: 1, duration: 80 },
      { to: 1, duration: () => baseDuration * 0.6 },
      { to: 0, duration: () => baseDuration * 0.3 },
    ],
    duration: () => baseDuration + Math.random() * 600,
    delay: stagger(60),
    ease: "outCubic",
  });

  // Self-clean after the longest animation.
  const maxEnd = baseDuration + count * 60 + 400;
  const timer = setTimeout(() => {
    rects.forEach((r) => r.remove());
  }, maxEnd);

  return () => {
    try {
      (anim as unknown as AnimationPlayState).pause?.();
    } catch {
      /* noop */
    }
    rects.forEach((r) => r.remove());
    clearTimeout(timer);
  };
}

/**
 * randomDrift — smooth, endless random walk for butterflies, leaves, etc.
 * On each step, picks a new random target within `maxStep` px of the current
 * position, eases there over a random duration in [min, max] ms, then picks
 * another target. The element appears to wander naturally across the screen
 * without ever returning to a fixed point.
 *
 * Respects prefers-reduced-motion. Returns a cleanup function.
 */
export function randomDrift(
  el: HTMLElement,
  opts: {
    /** Duration range in ms. Default [3500, 7000]. */
    duration?: [number, number];
    /** Max distance from current position in px per step. Default 220. */
    maxStep?: number;
    /** Max rotation in degrees (random ±). Default 18. */
    rotation?: number;
  } = {},
): () => void {
  if (prefersReducedMotion()) {
    el.style.opacity = "0.7";
    return () => {};
  }

  const {
    duration: durRange = [3500, 7000],
    maxStep = 220,
    rotation = 18,
  } = opts;

  let cancelled = false;
  let currentAnim: { pause?: () => void } | null = null;

  const step = () => {
    if (cancelled) return;
    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    // Pick a target up to maxStep px away, but clamp to viewport so the
    // element never wanders off-screen (the layer has overflow-hidden).
    let tx = rect.left + (Math.random() - 0.5) * 2 * maxStep;
    let ty = rect.top + (Math.random() - 0.5) * 2 * maxStep;
    tx = Math.max(0, Math.min(vw, tx));
    ty = Math.max(0, Math.min(vh, ty));
    const dur = durRange[0] + Math.random() * (durRange[1] - durRange[0]);
    const rot = (Math.random() - 0.5) * 2 * rotation;

    currentAnim = animate(el, {
      x: tx - rect.left,
      y: ty - rect.top,
      rotate: rot,
      duration: dur,
      ease: "inOutSine",
      onComplete: step,
    }) as unknown as { pause?: () => void };
  };

  step();

  return () => {
    cancelled = true;
    try {
      currentAnim?.pause?.();
    } catch {
      /* noop */
    }
  };
}

/**
 * twinkleOnce — one-shot opacity flicker used by TwinklingStars as a
 * starting point; the real loop is pure CSS via .twinkle-star.
 * Exposed here for future components that want a JS-driven twinkle.
 */
export function twinkleOnce(
  el: HTMLElement,
  opts: { duration?: number } = {},
): () => void {
  if (prefersReducedMotion()) {
    el.style.opacity = "0.7";
    return () => {};
  }
  const anim = animate(el, {
    opacity: [0.2, 1, 0.4, 1, 0.2],
    scale: [0.9, 1.1, 0.95, 1.05, 0.9],
    duration: opts.duration ?? 2400,
    loop: true,
    ease: "inOutSine",
  });
  return () => {
    try {
      (anim as unknown as AnimationPlayState).pause?.();
    } catch {
      /* noop */
    }
  };
}

// Re-export `stagger` so callers don't need to import animejs directly.
export { stagger };
export type { AnimationParams };
