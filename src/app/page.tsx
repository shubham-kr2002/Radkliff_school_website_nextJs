"use client";
import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import DynamicGreeting from "@/components/DynamicGreeting";
import EnquirySection from "@/components/EnquirySection";
import TeachersSection from "@/components/TeachersSection";
import FlyingBirds from "@/components/FlyingBirds";
import TwinklingStars from "@/components/TwinklingStars";

export default function Home() {
  const handleEnquiryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', '/#enquiry');
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section: Pure Storytelling */}
        <section id="home" className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 md:pt-20 pb-16 md:pb-24 overflow-hidden">
          {/* Sky Layer */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#D8F3FF] via-[#F0FBFF] to-[#F7FEFF] z-0">
            <div className="cloud-shadow absolute top-1/4 left-0 w-96 h-48 bg-black rounded-full"></div>
            {/* Sun */}
            <div className="absolute top-20 right-[15%] w-40 h-40 bg-[#FFD600]/10 rounded-full blur-3xl sun-glow"></div>
            <div className="absolute top-28 right-[18%] w-20 h-20 bg-[#FFF176] rounded-full shadow-[0_0_50px_rgba(255,241,118,0.5)] z-10 wiggle-element"></div>
            {/* Clouds */}
            <div className="floating-cloud absolute top-[15%] left-[-10%] opacity-60" style={{ animationDuration: '50s' }}>
              <span className="material-symbols-outlined text-[120px] text-white select-none">cloud</span>
            </div>
            <div className="floating-cloud absolute top-[30%] left-[60%] opacity-40" style={{ animationDuration: '45s', animationDelay: '-20s' }}>
              <span className="material-symbols-outlined text-[120px] text-white select-none">cloud</span>
            </div>
            {/* Flying Birds */}
            <FlyingBirds />
            {/* Twinkling Stars */}
            <TwinklingStars />
          </div>

          {/* Hero Content */}
          <div className="relative z-40 max-w-7xl mx-auto px-6 md:px-12 w-full mt-4 md:mt-0 flex-1 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-8 items-center w-full">
              
              {/* Left Side: Content */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                <div className="inline-block px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm mb-3 md:mb-8 mt-2 lg:mt-0">
                  <span className="text-tertiary font-label-sm uppercase tracking-widest text-[10px] md:text-sm font-extrabold">Welcome to Wonder</span>
                </div>
                <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-[#2E4F4F] mb-3 md:mb-8 tracking-tight leading-[1.1] drop-shadow-sm">
                    Where Every Little <br className="hidden lg:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary font-black pr-2">Dream</span> Finds Its Wings
                </h1>
                <p className="font-body-lg text-base sm:text-lg md:text-2xl text-[#2C3333]/80 max-w-2xl mb-6 md:mb-12 font-medium leading-relaxed">
                    A handcrafted sanctuary of learning where curiosity is the compass and imagination is the destination.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full sm:w-auto">
                  <Link href="#enquiry" onClick={handleEnquiryClick} className="flex items-center justify-center tactile-button magical-glow bg-[#FFF176] text-[#2C3333] font-bold px-8 md:px-12 py-3 md:py-5 rounded-full border-b-[4px] md:border-b-[6px] border-[#FBC02D] text-base md:text-lg hover:-translate-y-1 transition-transform shadow-xl">
                      Enquire Now
                  </Link>
                  <Link className="bg-white/60 backdrop-blur-md border border-white/60 text-[#2E4F4F] font-bold flex items-center justify-center gap-3 px-8 py-3 md:py-5 rounded-full hover:bg-white transition-all group text-base md:text-lg shadow-lg" href="/programs">
                      Explore the Forest
                      <span className="material-symbols-outlined text-lg md:text-xl group-hover:translate-x-1 transition-transform">trending_flat</span>
                  </Link>
                </div>
              </div>

              {/* Right Side: Illustration & Graphics */}
              <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2 relative w-full pt-2 lg:pt-0">
                {/* Premium Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-tertiary/20 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '6s' }}></div>
                
                {/* Illustration Container */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] flex items-center justify-center group">
                  <div className="relative w-full h-full flex items-center justify-center floating-element group-hover:scale-105 transition-transform duration-700 ease-out">
                    <Image src="/hero-illustration.png" alt="Hero Illustration" fill className="object-contain drop-shadow-[0_15px_30px_rgba(46,79,79,0.3)]" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Landscape Transition */}
          <div className="absolute bottom-0 -left-[5%] w-[110%] z-30 pointer-events-none opacity-80">
            <svg className="w-full h-40 paper-cut-shadow-sm animate-[float-up_10s_ease-in-out_infinite]" preserveAspectRatio="none" viewBox="0 0 1440 320">
              <path d="M0,160L80,144C160,128,320,96,480,112C640,128,800,192,960,208C1120,224,1280,192,1360,176L1440,160V320H0Z" fill="#C8E6C9"></path>
            </svg>
          </div>
        </section>

        {/* Narrative Block: The Experience */}
        <section className="py-12 md:py-20 bg-surface px-margin-page relative">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="w-full aspect-[4/5] rounded-[3rem] overflow-hidden paper-cut-shadow-lg rotate-[-2deg] transition-transform hover:rotate-0 duration-700 relative">
                <Image 
                  fill 
                  alt="Children playing with blocks" 
                  className="object-cover" 
                  src="/gallery/radkliffe-1.jpeg"
                />
              </div>
              {/* Magical Detail */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary-container rounded-full flex items-center justify-center paper-cut-shadow wiggle-element opacity-50" style={{ animationDuration: '20s' }}>
                <span className="material-symbols-outlined text-secondary text-4xl">palette</span>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8 max-w-lg">
              <h2 className="font-display-lg text-display-lg-mobile md:text-[44px] text-on-surface leading-tight">The Garden of Discovery</h2>
              <p className="font-body-md text-body-lg text-on-surface-variant leading-relaxed opacity-90">
                  Every lesson is a canvas. In our sanctuary, watercolor mathematics and dramatic science aren't just subjects—they're experiences that nurture the whole child's spirit.
              </p>
              <div className="pt-4">
                <div className="h-1 w-20 bg-tertiary-fixed-dim/40 rounded-full sway-element"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: About Radkliff International */}
        <section id="about" className="relative py-16 md:py-24 bg-surface-container-low overflow-hidden px-6 md:px-12">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
            {/* Left: Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center relative order-2 lg:order-1">
              <div className="relative w-full max-w-[500px] aspect-square rounded-[3rem] p-4 md:p-6 group">
                <div className="absolute inset-0 bg-white shadow-2xl rounded-[3rem] rotate-[-2deg] group-hover:rotate-0 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-tertiary/5 rounded-[3rem] rotate-[3deg] group-hover:rotate-0 transition-transform duration-700"></div>
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-secondary-container/30 via-surface to-tertiary-container/20">
                  <Image src="/about-image-2.png" alt="About Radkliff International" fill className="object-contain group-hover:scale-105 transition-transform duration-1000" />
                </div>
                {/* Magical Washi Tape */}
                <div className="washi-tape bg-secondary/40 top-0 left-8 rotate-12"></div>
                <div className="washi-tape bg-tertiary/40 -bottom-4 right-8 -rotate-12"></div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left order-1 lg:order-2">
              <div className="inline-block px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 self-center lg:self-start">
                <span className="text-primary font-label-sm uppercase tracking-widest text-[10px] md:text-xs font-extrabold">Who We Are</span>
              </div>
              <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-on-surface mb-6 tracking-tight leading-[1.15]">
                Nurturing the <span className="text-tertiary italic font-black">Future</span>, One Child at a Time.
              </h2>
              <p className="font-body-lg text-base md:text-xl text-on-surface-variant/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Nestled in the heart of our community, Radkliff International is a premium sanctuary for early childhood development. We believe that every child is a unique universe of potential waiting to be discovered.
              </p>
              
              {/* Features List */}
              <div className="space-y-6 md:space-y-4 mb-10 text-left max-w-xl mx-auto lg:mx-0">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center shrink-0 shadow-sm mt-1">
                    <span className="material-symbols-outlined text-secondary text-2xl">psychology</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface text-lg md:text-xl mb-1">Holistic Growth</h3>
                    <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">We blend academic foundations with emotional, social, and creative development.</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                  <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center shrink-0 shadow-sm mt-1">
                    <span className="material-symbols-outlined text-tertiary text-2xl">local_florist</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface text-lg md:text-xl mb-1">Modern Curriculum</h3>
                    <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">Nature-inspired, inquiry-based learning that fuels curiosity and imagination.</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                  <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center shrink-0 shadow-sm mt-1">
                    <span className="material-symbols-outlined text-primary text-2xl">shield_person</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface text-lg md:text-xl mb-1">Safe & Nurturing</h3>
                    <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">A highly secure, warm environment where children feel completely at home.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-center lg:justify-start">
                <Link className="inline-flex items-center justify-center gap-3 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:-translate-y-1 transform duration-300" href="/programs">
                  Explore Programs
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Principal's Desk */}
        <section className="relative py-16 md:py-24 bg-white overflow-hidden px-6 md:px-12">
          {/* Decorative Blooms */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative z-10">
            {/* Image (Top on mobile, Right on desktop) */}
            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center relative">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-8 border-primary/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] group bg-white">
                <Image 
                  src="/principal-ai-portrait.png" 
                  alt="Principal Hemlata Yadav" 
                  fill 
                  className="object-cover drop-shadow-xl group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
              <div className="absolute -bottom-2 -right-2 md:bottom-4 md:right-4 w-20 h-20 md:w-24 md:h-24 bg-tertiary-container rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="material-symbols-outlined text-tertiary text-3xl md:text-4xl">school</span>
              </div>
            </div>

            {/* Content (Bottom on mobile, Left on desktop) */}
            <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
                <span className="text-secondary font-label-sm uppercase tracking-widest text-xs font-extrabold">From the Principal&apos;s Desk</span>
              </div>
              
              <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-on-surface leading-[1.1] tracking-tight">
                Hemlata Yadav
              </h2>
              
              <div className="space-y-1">
                <p className="font-bold text-xl md:text-2xl text-tertiary">M.Sc., M.Ed.</p>
                <p className="font-label-sm text-sm uppercase tracking-wider text-on-surface-variant font-semibold">Principal, Radkliff International</p>
              </div>

              <div className="h-1 w-16 bg-primary/30 mx-auto md:mx-0 rounded-full"></div>

              <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
                Leading with <span className="font-bold text-primary">25+ years of educational experience</span>, she brings a wealth of knowledge, deep compassion, and visionary leadership to Radkliff International. 
              </p>
              
              <p className="font-body-md text-base text-on-surface-variant/90 leading-relaxed">
                Her dedication to holistic child development has profoundly shaped our core philosophy. She ensures every child receives the perfect blend of academic excellence and emotional intelligence, creating a foundation that lasts a lifetime.
              </p>
              
              <blockquote className="border-l-4 border-secondary/50 pl-4 text-left italic text-on-surface-variant/80 font-body-md mt-6">
                &quot;Education is not just about teaching facts; it is about awakening the lifelong curiosity within each child&apos;s heart.&quot;
              </blockquote>
            </div>
          </div>
        </section>

        <TeachersSection />

        <EnquirySection />

      </main>
      <Footer />
    </>
  );
}
