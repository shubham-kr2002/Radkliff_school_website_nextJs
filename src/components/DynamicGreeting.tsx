"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
      highlight: "Little Explorers",
      message: "The sun is up and a brand new day of discovery awaits. Let's make today extraordinary.",
      bgClass: "bg-gradient-to-br from-[#FDFBF7] to-[#FFF5E1]",
      blobClass: "bg-[#FFE0B2]",
      textClass: "text-[#E65100]",
      highlightClass: "text-[#F57C00]",
      messageClass: "text-stone-600",
      btnClass: "bg-[#F57C00] hover:bg-[#E65100] text-white shadow-[#F57C00]/30",
      floating: [
        { icon: 'wb_sunny', class: 'top-[15%] left-[5%] text-[#FBC02D] text-5xl animate-[float-up_6s_ease-in-out_infinite]' },
        { icon: 'flight', class: 'top-[25%] left-[45%] text-[#64B5F6] text-4xl animate-[float-horizontal_8s_ease-in-out_infinite]' },
        { icon: 'menu_book', class: 'top-[10%] right-[10%] text-[#81C784] text-5xl animate-[sway_7s_ease-in-out_infinite]' },
        { icon: 'cruelty_free', class: 'bottom-[20%] left-[10%] text-[#FFB74D] text-6xl animate-[bounce_4s_infinite]' },
      ],
      imgSrc: "/gallery/gallery-new-7.jpeg"
    },
    afternoon: {
      title: "Good Afternoon",
      highlight: "Active Minds",
      message: "Our little explorers are busy building, learning, and laughing. Adventure is in full swing!",
      bgClass: "bg-gradient-to-br from-[#F5F9FF] to-[#E3F2FD]",
      blobClass: "bg-[#BBDEFB]",
      textClass: "text-[#1565C0]",
      highlightClass: "text-[#42A5F5]",
      messageClass: "text-stone-600",
      btnClass: "bg-[#42A5F5] hover:bg-[#1E88E5] text-white shadow-[#42A5F5]/30",
      floating: [
        { icon: 'local_florist', class: 'top-[15%] left-[5%] text-[#E91E63] text-5xl animate-[float-up_6s_ease-in-out_infinite]' },
        { icon: 'architecture', class: 'top-[30%] left-[40%] text-[#4CAF50] text-4xl animate-[float-horizontal_8s_ease-in-out_infinite]' },
        { icon: 'sports_soccer', class: 'bottom-[25%] right-[15%] text-[#FF9800] text-5xl animate-[sway_7s_ease-in-out_infinite]' },
        { icon: 'emoji_nature', class: 'bottom-[15%] left-[8%] text-[#9C27B0] text-6xl animate-[bounce_5s_infinite]' },
      ],
      imgSrc: "/px1.jpeg"
    },
    evening: {
      title: "Good Evening",
      highlight: "Dreamers",
      message: "As the day winds down, we celebrate the little victories and stories shared today.",
      bgClass: "bg-gradient-to-br from-[#FCF8FF] to-[#F3E5F5]",
      blobClass: "bg-[#E1BEE7]",
      textClass: "text-[#6A1B9A]",
      highlightClass: "text-[#AB47BC]",
      messageClass: "text-stone-600",
      btnClass: "bg-[#AB47BC] hover:bg-[#8E24AA] text-white shadow-[#AB47BC]/30",
      floating: [
        { icon: 'wb_twilight', class: 'top-[15%] left-[8%] text-[#FF7043] text-6xl animate-[float-up_6s_ease-in-out_infinite]' },
        { icon: 'auto_awesome', class: 'top-[25%] left-[45%] text-[#FBC02D] text-4xl animate-[pulse_4s_ease-in-out_infinite]' },
        { icon: 'park', class: 'bottom-[20%] right-[10%] text-[#4DB6AC] text-5xl animate-[sway_7s_ease-in-out_infinite]' },
        { icon: 'stars', class: 'bottom-[15%] left-[10%] text-[#FFCA28] text-5xl animate-[float-horizontal_5s_infinite]' },
      ],
      imgSrc: "/gallery/gallery-new-12.jpeg"
    },
    night: {
      title: "Good Night",
      highlight: "Little Stars",
      message: "As the lanterns dim and the owls take watch, we dream of tomorrow's discoveries.",
      bgClass: "bg-gradient-to-br from-[#050B14] to-[#0A1128]",
      blobClass: "bg-[#1A237E]/40",
      textClass: "text-white",
      highlightClass: "text-[#FFCA28]",
      messageClass: "text-blue-100/80",
      btnClass: "bg-[#FFCA28] hover:bg-[#FFB300] text-[#0A1128] font-bold shadow-[#FFCA28]/20",
      floating: [
        { icon: 'bedtime', class: 'top-[12%] left-[10%] text-[#FFF59D] text-6xl animate-[float-up_6s_ease-in-out_infinite]' },
        { icon: 'nights_stay', class: 'top-[30%] left-[40%] text-[#9FA8DA] text-4xl animate-[float-horizontal_8s_ease-in-out_infinite]' },
        { icon: 'auto_awesome', class: 'bottom-[30%] right-[15%] text-[#FFF59D] text-5xl animate-[pulse_3s_ease-in-out_infinite]' },
        { icon: 'starlight', class: 'bottom-[15%] left-[15%] text-[#E0E0E0] text-5xl animate-[sway_7s_infinite]' },
      ],
      imgSrc: "/gallery/gallery-new-14.jpeg"
    }
  };

  const current = content[timeOfDay];

  return (
    <section className={`relative min-h-[100svh] pt-24 pb-12 flex items-center justify-center overflow-hidden transition-colors duration-[2000ms] ${current.bgClass}`} id="greeting">
      
      {/* Background Organic Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute -right-[10%] -top-[10%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-60 transition-colors duration-[2000ms] ${current.blobClass}`}></div>
        <div className={`absolute -left-[10%] bottom-[10%] w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-40 transition-colors duration-[2000ms] ${current.blobClass}`}></div>
      </div>

      {/* Floating Elements layer */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
        {current.floating.map((item, i) => (
           <span key={i} className={`material-symbols-outlined absolute opacity-80 ${item.class}`} style={{ fontVariationSettings: "'FILL' 1" }}>
              {item.icon}
           </span>
        ))}
      </div>

      {/* Subtle paper texture overlay */}
      <div className="absolute inset-0 z-10 paper-texture opacity-40 pointer-events-none mix-blend-overlay"></div>
      
      {/* Split Layout Content */}
      <div className="relative z-20 w-full max-w-container-max mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
        
        {/* Left Side: Text and CTA */}
        <div className="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/40 shadow-sm">
             <span className={`font-label-sm uppercase tracking-widest text-[10px] md:text-xs font-bold ${current.highlightClass}`}>Welcome to Radkliff International</span>
             <span className="material-symbols-outlined text-sm text-[#FFB300]">auto_awesome</span>
          </div>
          
          <h1 className={`font-display-lg text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[1.1] ${current.textClass}`}>
            {current.title} <br className="hidden lg:block" />
            <span className={current.highlightClass}>{current.highlight}</span>
          </h1>
          
          <p className={`font-body-lg text-lg md:text-xl max-w-lg leading-relaxed ${current.messageClass}`}>
            {current.message}
          </p>

          <div className="pt-4">
             <Link href="#programs" className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-label-sm uppercase tracking-wider text-sm transition-all hover:scale-105 shadow-xl ${current.btnClass}`}>
               Apply Today
               <span className="material-symbols-outlined text-lg">arrow_forward</span>
             </Link>
          </div>
        </div>

        {/* Right Side: Hero Visual */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center order-1 lg:order-2">
           {/* Normal circle frame so the full portrait image fits without cropping. */}
           <div className="relative w-[90%] h-[90%] z-20 rounded-full overflow-hidden bg-white shadow-2xl">
              <Image
                src={current.imgSrc}
                alt="Happy child learning at Radkliff International"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
           </div>
           
           {/* Decorative overlapping blob behind image */}
           <div className={`absolute top-[10%] right-[0%] w-[70%] h-[70%] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-50 z-10 animate-[blob-morph_10s_ease-in-out_infinite_reverse] ${current.blobClass}`}></div>
        </div>

      </div>
    </section>
  );
}
