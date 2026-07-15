"use client";

import { useEffect, useState } from 'react';

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
      iconColor: "text-[#FBC02D]",
      shadowColor: "rgba(255,235,59,0.8)",
      circleBg: "bg-white/40"
    },
    afternoon: {
      title: "Good Afternoon",
      message: "Our little explorers are busy building, learning, and laughing. Adventure is in full swing!",
      bgClass: "bg-gradient-to-b from-[#E3F2FD] to-[#BBDEFB]",
      textClass: "text-[#1565C0]",
      icon: "local_play",
      iconColor: "text-[#42A5F5]",
      shadowColor: "rgba(66,165,245,0.8)",
      circleBg: "bg-white/50"
    },
    evening: {
      title: "Good Evening",
      message: "As the day winds down, we celebrate the little victories and stories shared today.",
      bgClass: "bg-gradient-to-b from-[#F3E5F5] to-[#E1BEE7]",
      textClass: "text-[#6A1B9A]",
      icon: "wb_twilight",
      iconColor: "text-[#AB47BC]",
      shadowColor: "rgba(171,71,188,0.8)",
      circleBg: "bg-white/30"
    },
    night: {
      title: "Good Night",
      message: "As the lanterns dim and the owls take watch, we dream of tomorrow's discoveries. Rest well, little stars.",
      bgClass: "bg-gradient-to-b from-[#120800] via-[#09102b] to-[#02040a]",
      textClass: "text-[#E0E0E0]",
      icon: "bedtime",
      iconColor: "text-[#FFF59D]",
      shadowColor: "rgba(255,245,157,0.6)",
      circleBg: "bg-white/10"
    }
  };

  const current = content[timeOfDay];

  return (
    <section className={`relative pt-24 pb-20 overflow-hidden ${current.bgClass}`} id="greeting">
      {/* Subtle overlay texture */}
      <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none"></div>
      
      <div className="max-w-container-max mx-auto px-4 md:px-margin-page relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Pure CSS Graphic instead of image */}
          <div className={`relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full flex items-center justify-center border-4 border-white/30 shadow-2xl ${current.circleBg} backdrop-blur-md animate-[float-up_6s_ease-in-out_infinite] group`}>
             {/* Glow effect */}
             <div className="absolute inset-0 rounded-full blur-2xl opacity-50 transition-all duration-700" style={{ backgroundColor: current.shadowColor.replace('0.8', '0.4').replace('0.6', '0.3') }}></div>
             
             {/* Dynamic Icon */}
             <span 
                className={`material-symbols-outlined ${current.iconColor} text-7xl md:text-9xl transition-transform duration-700 group-hover:scale-110 relative z-10`} 
                style={{ 
                  fontVariationSettings: "'FILL' 1", 
                  filter: `drop-shadow(0 0 20px ${current.shadowColor})` 
                }}>
                  {current.icon}
              </span>

              {/* Magical sparkles */}
              <span className={`material-symbols-outlined absolute -top-4 -right-4 ${current.iconColor} text-3xl animate-ping opacity-70`}>auto_awesome</span>
              <span className={`material-symbols-outlined absolute -bottom-4 -left-4 ${current.iconColor} text-4xl animate-[pulse_3s_infinite] opacity-50`}>auto_awesome</span>
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
