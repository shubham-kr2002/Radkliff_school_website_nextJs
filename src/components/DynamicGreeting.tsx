"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

export default function DynamicGreeting() {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('morning');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get current hour in Asia/Kolkata timezone
    const hourString = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      hour: 'numeric',
      hour12: false
    });
    const hour = parseInt(hourString, 10);

    if (hour >= 5 && hour < 12) setTimeOfDay('morning');
    else if (hour >= 12 && hour < 17) setTimeOfDay('afternoon');
    else if (hour >= 17 && hour < 20) setTimeOfDay('evening');
    else setTimeOfDay('night');
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  const content = {
    morning: {
      title: "Good Morning",
      message: "The sun is up and a brand new day of discovery awaits. Let's make today extraordinary.",
      bgClass: "bg-gradient-to-b from-[#FFF5E1] to-[#FFE0B2]",
      textClass: "text-[#E65100]",
      icon: "wb_sunny",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMgwv0aUkHbs0hA1pYcdPooC1jGdYi6vzODls_-oTSTiq4hB9zh8_Y1ACgscwwFQDPncgZUaV53w6f6FpQ4WJfAw-zYP8uQaxFs-WD_KabZlJk-LrOxPcaFTwI096mNKM38RZPOBVkH-LMsMI4n9uvsw4KiTzbjOr58G77IjsS_B5O4agvcjV0s6gJAgjiLdBePQ5bKnftcOs167CWquP3FKG0rKSE6rlP8k8NQdBE7fcrrcewjqBSJPwi3Fl5yf1KKCo",
    },
    afternoon: {
      title: "Good Afternoon",
      message: "Our little explorers are busy building, learning, and laughing. Adventure is in full swing!",
      bgClass: "bg-gradient-to-b from-[#E3F2FD] to-[#BBDEFB]",
      textClass: "text-[#1565C0]",
      icon: "local_play",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDihA_xg3E2p10wGCBIcWhCneHriObwgwOa7W61c3fOjSIubI29aJxLqEzK2fcUA-c7qswcpP5upEoSCeqclfz9ovLX6ZHskSnjWdm2u6NYmYK5jUFOPyubtEm7vKtXF84wTLK1QbeuGRkhcWah7uNVj8ppGIDM7k6nN-krwYpeHUQ4btl6cR6-o3a8T7FUrNrCY3eZApVG1WHXZUsGYOJ_G3FH0rsimX4kTxUH48H16OHYeif29BDrDA",
    },
    evening: {
      title: "Good Evening",
      message: "As the day winds down, we celebrate the little victories and stories shared today.",
      bgClass: "bg-gradient-to-b from-[#F3E5F5] to-[#E1BEE7]",
      textClass: "text-[#6A1B9A]",
      icon: "wb_twilight",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4MJoWuYyQ2HPMM1HYwdoWna2QkTVR9BnDs6g1Gy1_U8d_dByB4MyXWDZD_oLsXLuqH0BVGh481KE9zASo7gYp5F1GT23KuiEtuyQDszYAjr3TGAp2XBgtXTcLFCl7RI7QYgRXIjjDpIYe91c3_SW3D9k24OUj9-dU44PqQWE7r3qBr80MSs7QpfIlST8jwFpyPnktzIx_HEhOpdPv3FXoXcOTj91GBQ_ohdDrofMC1CxADDOINBla9j12EpJ31nNlQJg",
    },
    night: {
      title: "Good Night",
      message: "As the lanterns dim and the owls take watch, we dream of tomorrow’s discoveries. Rest well, little stars.",
      bgClass: "bg-gradient-to-b from-[#120800] via-[#09102b] to-[#02040a]",
      textClass: "text-[#E0E0E0]",
      icon: "bedtime",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGT8_JFJWsio1FE3EdZPg0NqFGQ0hLHh8AxqrvSCqmRq5C5msyzGDj6ZU_N4QAhELg1VgP6GsH_0Yxz0eQLlHe7Nogj_RYjUOrHpUSyCIHgma10JH42-fDY3AiWTCMm7e2ZC3gMqTLTWqUBr8XT_2Tu5f6SG_phK1eIQnAkUbs9rHSXqfTpSONb8IV3izHAQUbOPE3W9iL6ORQjjloYdwCIBWKKPSutWEo2ZfTDUuV9wQlE-vnUGzKTw",
    }
  };

  const current = content[timeOfDay];

  return (
    <section className={`relative pt-32 pb-24 overflow-hidden ${current.bgClass}`} id="greeting">
      {/* Subtle overlay texture */}
      <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none"></div>
      
      <div className="max-w-container-max mx-auto px-margin-page relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          
          <div className="relative w-full max-w-3xl mx-auto group">
            {timeOfDay === 'night' && (
              <div className="absolute -top-16 -left-12 magical-float opacity-80 z-20">
                <span className="material-symbols-outlined text-brand-lavender text-8xl drop-shadow-[0_0_30px_rgba(220,198,255,0.4)]" style={{ fontVariationSettings: "'FILL' 1" }}>bedtime</span>
              </div>
            )}
            {timeOfDay === 'morning' && (
              <div className="absolute -top-12 -right-10 magical-float opacity-90 z-20" style={{ animationDuration: '8s' }}>
                <span className="material-symbols-outlined text-[#FBC02D] text-8xl drop-shadow-[0_0_40px_rgba(255,235,59,0.8)]" style={{ fontVariationSettings: "'FILL' 1" }}>light_mode</span>
              </div>
            )}

            <div className="drawing-wiggle-anim relative">
              <img 
                alt={`${current.title} scene`} 
                className="relative w-full h-auto rounded-[2rem] shadow-2xl border-4 border-white/20" 
                src={current.image} 
              />
            </div>
          </div>

          <div className="space-y-6 max-w-2xl px-4">
            <h2 className={`font-handwritten text-5xl md:text-6xl lg:text-7xl ${current.textClass} drop-shadow-md transform -rotate-2`}>
              {current.title}
            </h2>
            <p className={`font-body-md text-lg md:text-xl ${timeOfDay === 'night' ? 'text-white/80' : 'text-stone-700/90'} max-w-xl mx-auto leading-relaxed`}>
              {current.message}
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
