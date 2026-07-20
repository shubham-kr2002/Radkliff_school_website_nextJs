"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PaperSwan from "@/components/PaperSwan";
import OrigamiDecorations from "@/components/OrigamiDecorations";

export default function ProgramsPage() {

  const skills = [
    { title: "Cognitive\nSkills", bg: "bg-[#F5A988]", icon: "emoji_objects", shadow: "shadow-[#E2906C]", delay: "0s" },
    { title: "Language\nSkills", bg: "bg-[#6BCBE8]", icon: "menu_book", shadow: "shadow-[#53AFD0]", delay: "0.2s" },
    { title: "Life\nSkills", bg: "bg-[#61C588]", icon: "handshake", shadow: "shadow-[#4FA670]", delay: "0.4s" },
    { title: "Socio-\nEmotional\nSkills", bg: "bg-[#F38CB5]", icon: "volunteer_activism", shadow: "shadow-[#D97298]", delay: "0.6s" },
    { title: "Nurturing\nIndividual\nPotential", bg: "bg-[#DCE0E3]", icon: "auto_awesome", shadow: "shadow-[#BDC3C7]", delay: "0s" },
    { title: "Fine Motor\nSkills", bg: "bg-[#F9DE74]", icon: "palette", shadow: "shadow-[#E6C653]", delay: "0.2s" },
    { title: "Thinking\nSkills", bg: "bg-[#F593B6]", icon: "science", shadow: "shadow-[#D97698]", delay: "0.4s" },
    { title: "Gross Motor\nSkills", bg: "bg-[#55B481]", icon: "directions_run", shadow: "shadow-[#439669]", delay: "0.6s" },
  ];

  const programs = [
    {
      title: "Play Group & Nursery",
      age: "2 - 4 Years",
      desc: "Our youngest learners begin their journey in a warm, loving environment. We focus on sensory exploration, basic motor skills, and fostering a love for learning through play, music, and art.",
      img: "/prog-playgroup.png",
      color: "bg-[#FFF8E7]",
      accent: "text-[#FBC02D]"
    },
    {
      title: "LKG (Lower Kindergarten)",
      age: "4 - 5 Years",
      desc: "As children grow, we introduce structured learning integrated with imaginative play. The focus shifts to foundational language, early mathematics, and building social relationships.",
      img: "/prog-lkg.png",
      color: "bg-[#F0FBFF]",
      accent: "text-[#53AFD0]"
    },
    {
      title: "UKG (Upper Kindergarten)",
      age: "5 - 6 Years",
      desc: "Preparing for primary school, our UKG program emphasizes cognitive development, reading, writing, and logical thinking, ensuring children are confident and school-ready.",
      img: "/prog-ukg.png",
      color: "bg-[#F9FBE7]",
      accent: "text-[#8BC34A]"
    },
    {
      title: "Classes 1 to 5",
      age: "6 - 11 Years",
      desc: "Our primary program offers a robust academic curriculum balanced with extracurricular activities. We nurture critical thinking, leadership, and a deep understanding of core subjects.",
      img: "/prog-primary.png",
      color: "bg-[#FCE4EC]",
      accent: "text-[#F06292]"
    }
  ];

  return (
    <>
      <Header />
      <main className="bg-[#FAF9F6]">
        
        {/* Curriculum Banner */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FFF8D6] rounded-full blur-[100px] -z-10"></div>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
              <h1 className="font-display-lg text-4xl sm:text-5xl md:text-[56px] leading-[1.1] text-[#195995] mb-6 tracking-tight">
                A Scientifically Designed, Play-Based Curriculum
              </h1>
              <p className="font-body-md text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto lg:mx-0">
                The Seven Petal Approach is our proprietary learning method that supports holistic development, language, logic, creativity, physical movement, social-emotional learning, and more, all through structured play.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center relative order-1 lg:order-2">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] floating-element">
                {/* Yellow decorative blobs matching screenshot */}
                <div className="absolute top-10 -left-10 w-24 h-24 bg-[#FFEB3B] rounded-full mix-blend-multiply opacity-80"></div>
                <div className="absolute top-20 -left-20 w-16 h-16 bg-[#FF9800] rounded-full mix-blend-multiply opacity-80"></div>
                
                <Image src="/programme-deer.png" alt="Curriculum Deer" fill className="object-contain drop-shadow-2xl z-10" />

                <div className="absolute bottom-10 -right-10 w-48 h-48 bg-[#FFF176] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] z-0 -rotate-12 animate-[spin_30s_linear_infinite]"></div>
              </div>
              {/* Origami swan drifting in the curriculum banner */}
              <PaperSwan initialTop="60%" initialLeft="10%" size={110} />
            </div>
          </div>
        </section>

        {/* Origami decorations between sections */}
        <section className="relative h-24 md:h-32 pointer-events-none" aria-hidden="true">
          <OrigamiDecorations count={5} seed={1} verticalRange={[10, 90]} sizeRange={[32, 56]} />
        </section>

        {/* Section: The Journey Begins */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-peach/20 via-surface-container-low to-surface-container-low paper-texture pt-16 md:pt-20 pb-16 md:pb-24 px-margin-page" id="about">
          {/* Drifting Clouds Background Layer */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 z-0">
            <span className="material-symbols-outlined text-[180px] absolute top-10 -left-40 text-white cloud-drift-anim" style={{ animationDelay: '-5s' }}>cloud</span>
            <span className="material-symbols-outlined text-[200px] absolute bottom-40 -left-40 text-white cloud-drift-anim" style={{ animationDelay: '-15s', animationDuration: '90s' }}>cloud</span>
          </div>

          <div className="max-w-container-max mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-10 order-2 lg:order-1 text-center lg:text-left relative">
                <h1 className="font-display-lg text-5xl md:text-6xl lg:text-7xl text-on-background leading-[1.1] tracking-tight">The Journey Begins.</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-90">
                    Welcome to the Radkliff Express. Our whimsical learning adventure starts at the platform of curiosity and travels through the hills of wonder.
                </p>
                <div className="pt-8">
                  <Link href="#programs" className="wooden-sign inline-block px-14 py-6 rounded-2xl text-white font-headline-md text-xl transform hover:-rotate-1 hover:scale-105 active:scale-95 transition-all duration-300 relative shadow-xl">
                    Join the Adventure
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-8 md:gap-16 pointer-events-none">
                      <div className="w-1.5 h-8 bg-stone-500/30 rounded-full"></div>
                      <div className="w-1.5 h-8 bg-stone-500/30 rounded-full"></div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Train Illustration */}
              <div className="w-full lg:w-1/2 relative order-1 lg:order-2 group py-8">
                {/* Secondary Image Container */}
                <div className="relative w-2/3 aspect-square mx-auto rotate-[-6deg] group-hover:-rotate-[2deg] transition-all duration-700 z-30">
                  <div className="relative w-full h-full p-3 bg-white rounded-2xl shadow-2xl">
                    <div className="washi-tape top-2 right-4 rotate-12"></div>
                    <img alt="Children in Heritage Costumes" className="w-full h-full object-cover object-top opacity-95 transition-opacity hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8T8pd_v7xjo0Wp0PXHH0NVIlkI6C0DLm0mZB-Ss0zmXph8gNxHPhS5BQZ0-BzhfR4u4yH9pimPhK7ojBSUlHqCuq2pFAv1V6UXf8TKEjhw5Iive2U-roYfXV24XCPyOxqOAUGlGpk943q2vodDd2RzAUrpX7rBmzcF62yVLKa6ZdMh6jxucw-XwNF8zWP56d9KTVhpf5m5Azbdd7KtP6i0KTaXtPlMRN-6N6cwenXlAAE9P4wD3b7gqE3gVpOfVNArhY"/>
                  </div>
                </div>
                <span className="material-symbols-outlined absolute -top-12 -left-6 text-brand-peach text-5xl animate-pulse" style={{ animationDuration: '3s' }}>auto_awesome</span>
              </div>
            </div>
          </div>

          {/* Smooth Rolling Hills Transition */}
          <div className="absolute bottom-0 left-0 w-full z-20">
            <svg className="w-full h-80 block translate-y-px" preserveAspectRatio="none" viewBox="0 0 1200 240">
              <path d="M0,140 C200,90 400,190 600,120 C800,50 1000,160 1200,120 V240 H0 Z" fill="#7a5230" opacity="0.3"></path>
              <path d="M0,170 C300,120 600,220 900,140 C1050,100 1200,170 1200,170 V240 H0 Z" fill="#3a1e06" opacity="0.6"></path>
              <path d="M0,190 C400,150 800,240 1200,180 V240 H0 Z" fill="#120800"></path>
            </svg>
          </div>
        </section>

        {/* Origami decorations before programs breakdown */}
        <section className="relative h-24 md:h-32 pointer-events-none" aria-hidden="true">
          <OrigamiDecorations count={4} seed={2} verticalRange={[10, 90]} sizeRange={[36, 60]} />
        </section>

        {/* Programs Breakdown */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-on-surface mb-6">
                Programs for Every Stage
              </h2>
              <p className="font-body-md text-lg text-on-surface-variant max-w-2xl mx-auto">
                Carefully crafted journeys designed to nurture your child&apos;s unique potential at every step of their early years.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              {programs.map((prog, idx) => (
                <div key={idx} className={`${prog.color} rounded-[3rem] p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-500`}>
                  {/* Background decoration */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/40 rounded-full blur-3xl"></div>
                  
                  <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-8 shadow-lg">
                    <Image src={prog.img} alt={prog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md mb-4 shadow-sm">
                      <span className={`font-label-sm uppercase tracking-widest text-xs font-extrabold ${prog.accent}`}>{prog.age}</span>
                    </div>
                    <h3 className="font-display-lg text-3xl md:text-4xl text-on-surface mb-4">{prog.title}</h3>
                    <p className="font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed mb-8">
                      {prog.desc}
                    </p>
                    <Link href="/#enquiry" className="inline-flex items-center gap-2 font-bold text-on-surface hover:translate-x-2 transition-transform">
                      Enquire Now <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
