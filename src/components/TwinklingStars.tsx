/**
 * src/components/TwinklingStars.tsx
 *
 * 24 small ✦ stars sprinkled across the home sky. CSS-driven for low CPU.
 * Lives inside the home sky layer (z-20, pointer-events-none).
 */
export default function TwinklingStars() {
  // Generate 24 stars with deterministic-but-varied positions.
  // Using a fixed seed (index-based) so SSR == CSR.
  const stars = Array.from({ length: 24 }, (_, i) => {
    const left = ((i * 37 + 11) % 100) + (i % 3) * 0.4; // spread across width
    const top = ((i * 23 + 7) % 60) + 4; // top 4–64% of sky
    const size = 8 + (i % 4) * 4; // 8, 12, 16, 20
    const delay = (i * 0.27) % 4; // 0–4s stagger
    const duration = 2.4 + (i % 5) * 0.4; // 2.4–4.4s
    return { i, left, top, size, delay, duration };
  });

  return (
    <div
      className="twinkle-layer absolute inset-0 pointer-events-none z-[20]"
      aria-hidden="true"
    >
      {stars.map((s) => (
        <span
          key={s.i}
          className="twinkle-star absolute"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: `${s.size}px`,
            color: "#FFE9A8",
            textShadow:
              "0 0 8px rgba(255,233,168,0.6), 0 0 14px rgba(255,233,168,0.35)",
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            lineHeight: 1,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
