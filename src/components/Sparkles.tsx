"use client";
import { useEffect, useState } from "react";

export default function Sparkles() {
  const [sparkles, setSparkles] = useState<{ id: number; left: string; top: string; size: string; rotate: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const newSparkle = {
        id,
        left: Math.random() * 100 + "vw",
        top: Math.random() * 80 + "vh",
        size: Math.random() * 12 + 4 + "px",
        rotate: Math.random() * 180,
      };
      
      setSparkles(prev => [...prev, newSparkle]);

      // Remove sparkle after 8s
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== id));
      }, 8000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {sparkles.map(s => (
        <span
          key={s.id}
          className="material-symbols-outlined fixed text-white/40 pointer-events-none transition-all duration-[8000ms] z-[10] wiggle-element select-none"
          style={{
            left: s.left,
            top: s.top,
            fontSize: s.size,
            transform: `translateY(-100px) rotate(${s.rotate}deg)`,
          }}
        >
          auto_awesome
        </span>
      ))}
    </>
  );
}
