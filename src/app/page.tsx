"use client";
import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import SuccessModal from "@/components/SuccessModal";
import DynamicGreeting from "@/components/DynamicGreeting";

export default function Home() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  return (
    <>
      <SuccessModal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)} />
      <Header />
      <main>
        <section id="home">

        {/* Hero Section: Pure Storytelling */}
        <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-16 md:pt-20 pb-16 md:pb-24 overflow-hidden">
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
          </div>

          {/* Hero Content */}
          <div className="relative z-40 max-w-container-max mx-auto px-margin-page text-center mb-10 md:mb-16 md:mb-24">
            <div className="p-4 md:p-8 mx-auto inline-flex flex-col items-center">
              
              <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mt-8 md:mt-12 mb-6 animate-[bounce_4s_infinite]">
                <Image src="/radkliffe-logo-clear.png" alt="Radkliffe Logo" width={160} height={160} className="object-contain drop-shadow-2xl" />
              </div>

              <h1 className="font-display-lg text-4xl md:text-6xl lg:text-7xl text-[#2E4F4F] mb-6 max-w-4xl mx-auto tracking-tight leading-[1.1] drop-shadow-sm">
                  Where Every Little <span className="text-secondary italic font-body-lg font-bold">Dream</span> Finds Its Wings
              </h1>
              <p className="font-body-lg text-lg md:text-xl text-[#2C3333] max-w-xl mx-auto mb-10 font-medium leading-relaxed">
                  A handcrafted sanctuary of learning where curiosity is the compass and imagination is the destination.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button onClick={() => setIsSuccessModalOpen(true)} className="tactile-button bg-[#FFF176] text-[#2C3333] font-bold px-10 py-4 rounded-full border-b-[6px] border-[#FBC02D] text-lg hover:-translate-y-1 transition-transform">
                    Book a Visit
                </button>
                <Link className="text-secondary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform group text-lg" href="#programs">
                    Explore the Forest
                    <span className="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform">trending_flat</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Landscape Transition */}
          <div className="absolute bottom-4 md:bottom-24 -left-[5%] w-[110%] z-30 pointer-events-none sway-element opacity-70" style={{ animationDuration: '25s' }}>
            <svg className="w-full h-40 paper-cut-shadow-sm" preserveAspectRatio="none" viewBox="0 0 1440 320">
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMgwv0aUkHbs0hA1pYcdPooC1jGdYi6vzODls_-oTSTiq4hB9zh8_Y1ACgscwwFQDPncgZUaV53w6f6FpQ4WJfAw-zYP8uQaxFs-WD_KabZlJk-LrOxPcaFTwI096mNKM38RZPOBVkH-LMsMI4n9uvsw4KiTzbjOr58G77IjsS_B5O4agvcjV0s6gJAgjiLdBePQ5bKnftcOs167CWquP3FKG0rKSE6rlP8k8NQdBE7fcrrcewjqBSJPwi3Fl5yf1KKCo"
                />
              </div>
              {/* Magical Detail */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary-container rounded-full flex items-center justify-center paper-cut-shadow wiggle-element" style={{ animationDuration: '20s' }}>
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

        {/* Narrative Block: The Journey */}
        <section className="py-12 md:py-20 bg-surface-container-low px-margin-page relative">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-8 max-w-lg">
              <h2 className="font-display-lg text-display-lg-mobile md:text-[44px] text-on-surface leading-tight">The Journey Ahead</h2>
              <p className="font-body-md text-body-lg text-on-surface-variant leading-relaxed opacity-90">
                  We prepare children for a life filled with wonder, resilience, and empathetic leadership. Lessons under whispering oaks teach them to root deep and reach high.
              </p>
              <Link className="inline-flex items-center gap-3 text-primary font-bold hover:text-secondary transition-colors group" href="#about">
                <span className="material-symbols-outlined">auto_stories</span>
                Read Our Full Story
              </Link>
            </div>
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-[3rem] overflow-hidden paper-cut-shadow-lg rotate-[2deg] transition-transform hover:rotate-0 duration-700 relative">
                <Image 
                  fill
                  alt="Teacher and students celebration" 
                  className="object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs7yWGDM75IsoUY9JeCmyrXzJR67AgZAvRpwIAk9369C4dns2qq5JzppnGPKhWH6CLRMtfLiQ65WmlR7ZToEfYrdFtCOwQFannNkJhosatrINjLVwL8wBMdAk1pBgcWfxOWsP0lzKjRtjIsJHYnwARWdeIAQ5W_wQx30_9hHBD7YVOiJQYkUg-k2wvW0GuHDiz3oAXhs-n5Ia4U9H3TZsSHriIeiwZ_MSqshafW30DHn83_7CLfHKs6hkhe1NUA-bF1k0"
                />
              </div>
            </div>
          </div>
        </section>
      
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
                    Welcome to the Radkliffe Express. Our whimsical learning adventure starts at the platform of curiosity and travels through the hills of wonder.
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
                <div className="relative z-10 transition-transform duration-700 hover:scale-[1.02]">
                  <div className="drawing-wiggle-anim relative">
                    <img alt="Radkliffe Express Train" className="w-full h-auto rounded-[3rem] shadow-2xl border-4 border-white paper-texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjMtpjCvzjGwqHKwfnFd90dF7hSoHGfrQv_f3TNcNISNVei-EuUJYHF5BKWLjbtIBRXrK-vfNX2NHZ8eJOKbXdS9kKpyVGULXkr0XWe9pX8zU1Z2MnHCGzBu2iVkQnA_zjjhZ4MfRyH3wBrpiR7Ol7hyGg9DbMOwHYfiljIf89-wlt0_WbR036iTcP7hGEN8a1N8e6Hg7ZsGDvEP_GxLoR7r7aLg0L6onuk--k8vHYmoHXQHn_eWv2ng"/>
                    <div className="absolute top-10 left-1/4 w-full h-full pointer-events-none" id="train-musical-notes"></div>
                  </div>
                  {/* Child Photography Accent */}
                  <div className="absolute -bottom-12 -right-4 md:-right-8 w-48 md:w-64 magical-float z-20">
                    <div className="relative p-1 bg-white/60 backdrop-blur-lg rounded-full cloud-mask shadow-inner">
                      <div className="overflow-hidden rounded-full border-4 border-white shadow-2xl aspect-square relative">
                        <img alt="Children in Heritage Costumes" className="w-full h-full object-cover object-top opacity-95 transition-opacity hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8T8pd_v7xjo0Wp0PXHH0NVIlkI6C0DLm0mZB-Ss0zmXph8gNxHPhS5BQZ0-BzhfR4u4yH9pimPhK7ojBSUlHqCuq2pFAv1V6UXf8TKEjhw5Iive2U-roYfXV24XCPyOxqOAUGlGpk943q2vodDd2RzAUrpX7rBmzcF62yVLKa6ZdMh6jxucw-XwNF8zWP56d9KTVhpf5m5Azbdd7KtP6i0KTaXtPlMRN-6N6cwenXlAAE9P4wD3b7gqE3gVpOfVNArhY"/>
                      </div>
                    </div>
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

        <DynamicGreeting />
      
        <section id="programs" className="relative pt-16 md:pt-20 pb-16 md:pb-20 px-4 max-w-screen-xl mx-auto overflow-visible watercolor-paper text-on-background">

        {/* Storytelling Layer */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-tertiary/5 rounded-full blur-[100px] float-animation"></div>
          <div className="absolute top-[40%] right-[5%] w-96 h-96 bg-secondary/5 rounded-full blur-[120px] float-animation" style={{ animationDelay: '-2s' }}></div>
          <div className="absolute top-[70%] left-[5%] w-80 h-80 bg-primary/5 rounded-full blur-[100px] float-animation" style={{ animationDelay: '-4s' }}></div>
        </div>
        
        {/* Section Header */}
        <section className="max-w-3xl mx-auto text-center mb-10 md:mb-16 relative z-10 px-4">
          <h2 className="font-display-lg text-4xl md:text-7xl text-primary mb-8 leading-tight">The Curiosity Forest</h2>
          <p className="font-body-lg text-lg md:text-2xl text-on-surface-variant leading-relaxed opacity-80">A winding trail where every step marks a new chapter in a child&apos;s journey of discovery.</p>
        </section>

        {/* Trail Exploration */}
        <div className="relative max-w-6xl mx-auto">
          {/* Continuous SVG Trail Line */}
          <div className="absolute inset-0 flex justify-center pointer-events-none z-0 opacity-20">
            <svg className="h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 3500" width="400" xmlns="http://www.w3.org/2000/svg">
              <path className="trail-path" d="M200 0C250 200 50 450 50 700C50 950 350 1200 350 1450C350 1700 100 1950 100 2200C100 2450 300 2700 300 3000 C300 3200 200 3300 200 3500" stroke="#8B5E3C" strokeDasharray="2 35" strokeLinecap="round" strokeWidth="8"></path>
            </svg>
          </div>

          {/* Stop 1: Play Group */}
          <div className="relative flex flex-col md:flex-row items-center justify-start gap-8 md:gap-12 mb-10 md:mb-16 md:mb-24 z-10 px-4 group">
            <div className="w-80 h-80 md:w-[450px] md:h-[450px] relative flex-shrink-0">
              <div className="absolute inset-0 bg-[#D8F3DC] rounded-full blur-[80px] opacity-30 pulse-glow"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden photo-mask-natural">
                <img alt="Toddlers playing" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC55TAvSI_HOzEMKq_J5MPAh76VZZmEq0-DlddWsBiH54quHWgaBNHpbGXYzp7iHT7qtHinwK0qPjsp3MsMJnb6WwaEUwMtmqkp0FhUOEr6DHykQ3M_Zx85pQje5ce4INqdtOMg3EnD-C9FGWrrwwnR7v-Nc_Hw-TN4qy5ltj5QIVMGAEmK89_qxW2LXXnDIbnGal10vmcdH6wS4aK7_qmdr7YBffvrSXd1heRqC6HJ7Hdw9evUXMXrLd6UiY8Op5VTnQo"/>
                <div className="paper-grain-overlay"></div>
              </div>
              <div className="absolute bottom-10 right-10 text-primary opacity-40 float-animation">
                <span className="material-symbols-outlined text-4xl">nest_eco_leaf</span>
              </div>
            </div>
            <div className="flex flex-col items-start max-w-md text-glow">
              <span className="font-label-sm text-primary text-xs uppercase font-black tracking-widest mb-4 opacity-60">Root Level • Age 2+</span>
              <h3 className="font-display-lg text-3xl md:text-5xl text-on-surface mb-6">Play Group</h3>
              <p className="text-on-surface-variant font-body-lg leading-relaxed text-lg">Tiny explorers begin here, discovering wonder in every pebble and leaf through sensory-rich play that builds the foundation of inquiry.</p>
            </div>
          </div>

          {/* Stop 2: Nursery */}
          <div className="relative flex flex-col md:flex-row-reverse items-center justify-start gap-8 md:gap-12 mb-10 md:mb-16 md:mb-24 z-10 px-4 group">
            <div className="w-80 h-80 md:w-[480px] md:h-[480px] relative flex-shrink-0">
              <div className="absolute inset-0 bg-secondary-container/30 rounded-full blur-[100px] opacity-40 pulse-glow"></div>
              <div className="relative w-full h-full photo-mask-drift flex items-center justify-center">
                <img alt="Children in nursery" className="w-[85%] h-[85%] object-cover rounded-[20%] grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWZle2LiswaHOoCleakGelHsQXZqS_UN5qOk_78RyhRXQe60NOwufHKsdaGNo3hi4cvLAQxId-P2V3WNd5PWEa3uJh7_rSa5R4lfBQ4GR_3-ovJCNmSNwpLPu1zHA8F8oCXDUxQES82wuBtyhTTlgeSDXD2rJ5c4HLEe_9Xp1uzRANm8VaA0HKeL2-MVCmwJabHXieBe3zh8Zt-tIUvhyB4eofQirmCBxIgyHv9CvOEiCNwyD6tI4phqQbuYeqhVibCEw"/>
                <div className="paper-grain-overlay"></div>
              </div>
              <div className="absolute top-10 left-10 text-secondary opacity-40 sway-animation">
                <span className="material-symbols-outlined text-4xl">filter_vintage</span>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end text-left md:text-right max-w-md text-glow">
              <span className="font-label-sm text-secondary text-xs uppercase font-black tracking-widest mb-4 opacity-60">Nurture Level • Age 3+</span>
              <h3 className="font-display-lg text-3xl md:text-5xl text-on-surface mb-6">Nursery</h3>
              <p className="text-on-surface-variant font-body-lg leading-relaxed text-lg">The Nurture Grove. Here, curiosity is fed through song, rhythmic storytelling, and the gentle magic of seasonal changes in nature.</p>
            </div>
          </div>

          {/* Stop 3: LKG */}
          <div className="relative flex flex-col md:flex-row items-center justify-start gap-8 md:gap-12 mb-10 md:mb-16 md:mb-24 z-10 px-4 group">
            <div className="w-80 h-80 md:w-[420px] md:h-[420px] relative flex-shrink-0">
              <div className="absolute inset-0 bg-tertiary-container/40 rounded-full blur-[90px] opacity-30 pulse-glow"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <img alt="Early literacy discovery" className="w-full h-full object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJdVWQfDzK_KhOV9SwvSqP1lY9QedNXpJ70RKbU7oINrGkaLJ6F9bZPADeaGS5Cu1WBTMY5i_lexMdaWOzCEzkL7UQYzoaGjjTl67cazwugWVKaBccFWT1SL3phy1_fxur90mjWqkePaLrD_N_1F0nfiTHEnqWHevNGhFhxqHY_myCk2XygLp_d4gMQFJpXzIKMPt_zOevsRAxi3gDDySjhZT85nVQ2ItaooTfAonQFeYWxnrUnR_YuQ"/>
              </div>
              <div className="absolute -top-5 right-20 text-tertiary opacity-40 float-animation" style={{ animationDelay: '-3s' }}>
                <span className="material-symbols-outlined text-4xl">potted_plant</span>
              </div>
            </div>
            <div className="flex flex-col items-start max-w-md text-glow">
              <span className="font-label-sm text-tertiary text-xs uppercase font-black tracking-widest mb-4 opacity-60">Discovery Level • Age 4+</span>
              <h3 className="font-display-lg text-3xl md:text-5xl text-on-surface mb-6">Lower Kindergarten</h3>
              <p className="text-on-surface-variant font-body-lg leading-relaxed text-lg">Crossing the bridge to early literacy. Students begin to recognize mathematical patterns and engage in deeper collaborative play.</p>
            </div>
          </div>

          {/* Stop 4: UKG */}
          <div className="relative flex flex-col md:flex-row-reverse items-center justify-start gap-8 md:gap-12 mb-10 md:mb-16 md:mb-24 z-10 px-4 group">
            <div className="w-80 h-80 md:w-[460px] md:h-[460px] relative flex-shrink-0">
              <div className="absolute inset-0 bg-surface-container-high/40 rounded-full blur-[100px] opacity-40 pulse-glow"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <img alt="Inquiry learning" className="w-full h-full object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDihA_xg3E2p10wGCBIcWhCneHriObwgwOa7W61c3fOjSIubI29aJxLqEzK2fcUA-c7qswcpP5upEoSCeqclfz9ovLX6ZHskSnjWdm2u6NYmYK5jUFOPyubtEm7vKtXF84wTLK1QbeuGRkhcWah7uNVj8ppGIDM7k6nN-krwYpeHUQ4btl6cR6-o3a8T7FUrNrCY3eZApVG1WHXZUsGYOJ_G3FH0rsimX4kTxUH48H16OHYeif29BDrDA"/>
              </div>
              <div className="absolute bottom-5 left-1/4 text-primary-fixed-dim opacity-40 sway-animation" style={{ animationDelay: '-1s' }}>
                <span className="material-symbols-outlined text-5xl">nature_people</span>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end text-left md:text-right max-w-md text-glow">
              <span className="font-label-sm text-on-surface-variant text-xs uppercase font-black tracking-widest mb-4 opacity-60">Horizon Level • Age 5+</span>
              <h3 className="font-display-lg text-3xl md:text-5xl text-on-surface mb-6">Upper Kindergarten</h3>
              <p className="text-on-surface-variant font-body-lg leading-relaxed text-lg">Sharpening minds through inquiry. This phase fosters the independence needed for the exciting academic paths that lie just over the horizon.</p>
            </div>
          </div>

          {/* Stop 5: Primary Academy */}
          <div className="relative flex flex-col items-center text-center gap-8 md:gap-16 z-10 px-4 group">
            <div className="w-full max-w-5xl relative flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-[150px] opacity-50 pulse-glow"></div>
              <div className="relative w-full aspect-[21/9] rounded-[4rem] overflow-hidden border border-white/20 paper-shadow">
                <img alt="Academic achievement" className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[3s]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm9wIZOP0kEuzbEUs2vcNoRDlrYMdxRd4Vrvm0iUsoQVj3s9Q5eTmJhkrgqH0hnPO6IEmsgJUrtnsmgxlXs35a7T9ShaGogAOtBwPeKu8seHN19kF3ZcFlaqzpXIyUW1yJ9NjVh4SHAb_FB68du9aZWDhT0HNEDA5CDAWGC6IpolGcyHozl5dLA-bOty9BOkCNeboBa9GUpn5BmvEdaN98mutMNhKmhh1-UhgeRZMcxinJVe1YFJngaDJRvYJiyWaXA0A"/>
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
                <div className="paper-grain-overlay"></div>
              </div>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-primary opacity-60 float-animation">
                <span className="material-symbols-outlined text-6xl">rewarded_ads</span>
              </div>
            </div>
            <div className="max-w-3xl">
              <span className="font-label-sm text-primary text-sm uppercase font-black tracking-[0.2em] mb-6 block opacity-70">The Great Canopy • Grade 1-5</span>
              <h3 className="font-display-lg text-4xl md:text-7xl text-on-surface mb-8">Primary Academy</h3>
              <p className="text-on-surface-variant font-body-lg text-xl md:text-2xl leading-relaxed mb-10 md:mb-16 px-4">The ultimate destination where seeds of curiosity bloom into excellence. Reaching new heights in critical thinking, character building, and academic mastery.</p>
              
              <div className="relative inline-block group/btn">
                <div className="absolute inset-0 bg-primary blur-2xl opacity-20 group-hover/btn:opacity-40 transition-opacity"></div>
                <button className="relative bg-primary text-white px-16 py-6 rounded-full font-display-lg text-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-1 transition-all flex items-center gap-6 overflow-hidden">
                  <span className="relative z-10">Enroll Your Explorer</span>
                  <span className="material-symbols-outlined text-3xl font-black relative z-10">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      
        </section>
        <section id="gallery" className="pt-16 md:pt-20 pb-16 md:pb-20 px-gutter max-w-container-max mx-auto relative overflow-hidden">

        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 opacity-20 pointer-events-none">
          <span className="material-symbols-outlined text-[120px] text-tertiary floating-element">filter_vintage</span>
        </div>
        <div className="absolute top-1/4 -right-10 opacity-10 pointer-events-none rotate-12">
          <span className="material-symbols-outlined text-[200px] text-secondary floating-element" style={{ animationDelay: '-2s' }}>flutter_dash</span>
        </div>

        {/* Header */}
        <div className="text-center mb-10 md:mb-16 relative">
          <h2 className="font-display-lg text-primary mb-4 drop-shadow-sm text-5xl md:text-6xl">A World of Imagination</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto italic text-xl">
            Step into the scrapbook of our daily adventures, where every page is a new discovery and every child is the hero of their own tale.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="w-16 h-1 bg-tertiary-fixed-dim rounded-full"></div>
            <div className="w-4 h-1 bg-secondary-fixed-dim rounded-full"></div>
            <div className="w-16 h-1 bg-tertiary-fixed-dim rounded-full"></div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 relative group">
            <div className="hand-drawn-border p-3 bg-surface-container-low shadow-lg rotate-1 hover:rotate-0 transition-all duration-500">
              <img className="w-full aspect-[4/3] object-cover rounded-sm" alt="Little Builders at Play" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4MJoWuYyQ2HPMM1HYwdoWna2QkTVR9BnDs6g1Gy1_U8d_dByB4MyXWDZD_oLsXLuqH0BVGh481KE9zASo7gYp5F1GT23KuiEtuyQDszYAjr3TGAp2XBgtXTcLFCl7RI7QYgRXIjjDpIYe91c3_SW3D9k24OUj9-dU44PqQWE7r3qBr80MSs7QpfIlST8jwFpyPnktzIx_HEhOpdPv3FXoXcOTj91GBQ_ohdDrofMC1CxADDOINBla9j12EpJ31nNlQJg" />
              <div className="mt-4 text-center">
                <span className="font-body-md text-primary italic border-b border-dashed border-outline-variant px-4 py-1">Little Builders at Play</span>
              </div>
            </div>
            <span className="material-symbols-outlined absolute -top-4 -right-4 text-secondary text-4xl group-hover:scale-125 transition-transform">potted_plant</span>
          </div>

          <div className="md:col-span-5 relative mt-12 md:mt-0">
            <div className="polaroid-frame -rotate-3 hover:rotate-0 transition-all duration-500">
              <img className="w-full aspect-square object-cover" alt="Creative Minds" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0hENQ4MRQAFAakrpP3HRqAvxEUKC_p_KL7qbSBxmOxg-O-bsw9L2MFPrQcRGoqvs1yOhNrRWZmIVbtq6ImhqxcJj_P8oLUzjmVtdibfFdowQWAHlhlN1BQTKU6uR5INvYfLtRxulWHaoIa3ZhvnbbXBpW5aqE4-2UjYt4Lhj14kn9uaWG-N1YAtePTQqHnEKL_fRlRRoE6nklobspJVQ6pUAOzS21-I80RTUMiEu2UaGwgDJtiHTNTMI-EIpU20KlHQg" />
              <div className="mt-4">
                <p className="font-display-lg text-primary text-[24px] text-center tracking-tight">Creative Minds</p>
              </div>
            </div>
            <div className="washi-tape -top-2 left-1/2 -translate-x-1/2 rotate-2"></div>
          </div>

          <div className="md:col-span-5 relative md:-mt-20 z-10 group">
            <div className="hand-drawn-border p-4 bg-primary-container shadow-xl rotate-2 hover:rotate-0 transition-all duration-500">
              <div className="absolute -top-6 -left-6 z-20">
                <span className="material-symbols-outlined text-tertiary text-5xl floating-element">nest_eco_leaf</span>
              </div>
              <img className="w-full aspect-[3/4] object-cover rounded-lg" alt="Master Chefs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWTBuyr3CowU5iWyIv2O4JS_PwjmWcmkU4nBjnkqvF-HF7Ri9TqfZCiT1xxMD8f5vSA54kkJVmZWQlR2v09ST7sbdpcnPTdgrYFCKPCGg8nnpFQtbUbFjSTvzP2nXmZwCJqCLR9rT085j1o7uYJayZ2ib7XwZWlI89TOpjxzapYUGvcgceqlnCDczpjUp27eORsWOdNwzzwOYsVxbmyOhp777HR6Lh6fssYnufuGGEq1Llwg6aLb8wMjf0gNSD65X14bE" />
              <div className="p-4">
                <h3 className="font-headline-md text-on-surface mb-2">Master Chefs</h3>
                <p className="font-body-md text-on-surface-variant">Exploring flavors and textures in our magical kitchen corner.</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 relative group mt-10 md:mt-0">
            <div className="relative bg-surface-container p-2 rounded-xl shadow-2xl rotate-[-1deg] hover:rotate-1 transition-all duration-700">
              <div className="washi-tape top-4 -left-4 -rotate-45 bg-secondary/30"></div>
              <div className="washi-tape top-4 -right-4 rotate-45 bg-tertiary/30"></div>
              <img className="w-full aspect-video object-cover rounded-lg" alt="Memories in Bloom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm6vuaWNcWoYti7dkb6652YXNIMO6PFs74kKUjmfAbkrq6ap1bNkNbAuGlFH8skbeC8LffO7Hku0fSmIPR9vowReO6vBBu_9STEgHX7whmvBoBEqPTZZzn0b1N4Z2YQS2E96RqxwtAb7U4Kzyf3jTt0LIaFptA67WsC9xs9Bf5DhK7LwL8AW51iMp5VXQohS6VchfCJ1Nh91vhKghYOKtmMbj69297_OVZkQkW01UtVXVVoLvFAIaUHduqT_yYsYsG3bI" />
            </div>
            <div className="mt-6 flex items-center justify-between px-4">
              <span className="material-symbols-outlined text-on-tertiary-container bg-tertiary-container p-2 rounded-full shadow-inner">auto_stories</span>
              <span className="font-label-sm text-primary uppercase tracking-widest">Memories in Bloom</span>
              <span className="material-symbols-outlined text-on-secondary-container bg-secondary-container p-2 rounded-full shadow-inner">brush</span>
            </div>
          </div>

          <div className="md:col-span-12 mt-12 relative flex justify-center">
            <div className="max-w-3xl w-full polaroid-frame rotate-1 shadow-2xl hover:scale-[1.02] transition-transform duration-500 group">
              <img className="w-full h-[400px] object-cover" alt="The Whole Wonder Family" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHuKZhkM2uC5UjyYZuRWsJfQkLVkRybDnJ8gUWVwGd_BVcw4BkV6f8IjsGB_MK8pQeCztSgWFSnqXeSGRsQ7Ud4CQ66UGHMMJb8hh-KqYHV5hj_XwiwrEqLpJpax4i-pMqPu34rHZyDp7tq5UzvlYes7JziHYxzZnFqANxw8ESCSog7GjynCM5JPgp8YqAtTTh7jiHWyW1H8MBH4TpAAvFYg5AdBlk8NsPRGh9ytBamAet9MuLjzkMAM75HJsDWmMYkEg" />
              <div className="mt-6 flex flex-col items-center">
                <p className="font-display-lg text-primary text-[28px] mb-2">The Whole Wonder Family</p>
                <div className="w-24 h-1 bg-outline-variant/30 rounded-full"></div>
              </div>
              <span className="material-symbols-outlined absolute bottom-12 -right-8 text-6xl text-error/40 floating-element" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center pb-20">
          <button className="bg-surface-container-high hover:bg-surface-variant px-12 py-4 rounded-full font-label-sm text-primary transition-all duration-300 border-b-4 border-primary/20 active:translate-y-1 active:border-b-0 shadow-md">
            Add Your Wonders
          </button>
          <p className="mt-6 font-body-md text-on-surface-variant/60 italic">
            &quot;Every child is an artist. The problem is how to remain an artist once he grows up.&quot;
          </p>
        </div>
      
        </section>
        <section id="memories" className="pt-16 md:pt-20 pb-16 md:pb-20 px-gutter max-w-container-max mx-auto relative font-body-md text-on-surface">

        <div className="text-center mb-10 md:mb-16 md:mb-24 relative">
          <p className="font-handwritten text-3xl md:text-4xl text-on-surface-variant max-w-2xl mx-auto italic leading-tight">Collecting the tiny moments that make our big world wonderful.</p>
          <div className="mt-12 flex justify-center items-center">
            <span className="material-symbols-outlined text-outline-variant/30 text-lg">favorite</span>
          </div>
        </div>

        {/* Organic Scrapbook Grid */}
        <div className="flex flex-col gap-24 md:gap-40 items-center relative">
          
          {/* Photo 1: Little Builders */}
          <div className="w-full max-w-xl relative z-10 group">
            <div className="polaroid-frame -rotate-[1deg] group-hover:rotate-0 transition-all duration-1000">
              <div className="washi-tape washi-blue -top-3 left-1/4 rotate-12"></div>
              <img alt="Little Builders at Play" className="w-full aspect-square object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYOz_WX2G7Np9iDOxfl_uCw92TWofBhyyaIzKfgCIVJ6Oi3JvWGDYhKX7LWx37WxY8TvmHfU3DMsqZxII0XTjDZisKtB42673N9nppzKk0TN34PG6snQRkNR3kuYfZSUsWSMzzR2Zo6HEFVkplQjdvcS1jHrl_ubIpRS7yCYk4KINjkfShxPqBYwOY2kHQ7XBPbz-kr268A5olW501hwCZ8VDhgRJxYW8VkYgdjrh7t1tgkv9DOSrSmNsSeRuQS9eS6C8"/>
              <div className="mt-10 text-center">
                <p className="handwritten text-4xl text-primary/80">Tiny hands, big dreams.</p>
              </div>
            </div>
          </div>

          {/* Photo 2: Group Photo */}
          <div className="w-full max-w-3xl relative">
            <div className="relative p-2 bg-white shadow-2xl rotate-[0.5deg] group transition-all duration-1000">
              <div className="clip-decoration"></div>
              <div className="p-1 border border-outline-variant/5">
                <img alt="The Whole Wonder Family" className="w-full aspect-video object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrNdIT24aFjDBvMUMnSPynGlgyCZn3yHn2RYcVaA9960BD_r6YMKllGHprlnlF1HT0QwB6IsJXZU8-uycUcAHYe7xUQ3zwwDm4LzTkuJ_Z1y7J6UpX3B3GV6-K1asvQyJmLqWoV_05094O7uWd_H0_jz_G64b6-9RwCjiZk7TtbUCU_BAxUlUkqZ4l1aBY-IEfd4YKyQeemTqxxtR7TDrP08MoG2rjoySAwHP06REVxvVwFwbGF-euhnrlusAKbsZ2sOM"/>
              </div>
              <div className="p-8 mt-2 text-center">
                <p className="handwritten text-2xl text-on-surface-variant italic leading-snug">&quot;The whole family together under the morning sun.&quot;</p>
              </div>
            </div>
          </div>

          {/* Photo 4: Group with teacher */}
          <div className="w-full max-w-2xl relative group">
            <div className="relative bg-white p-5 shadow-2xl -rotate-[0.8deg] transition-all duration-1000">
              <img alt="Memories in Bloom" className="w-full aspect-[16/10] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9uRVWoGffLnNx11gO7EE5ieBG6nfCUDtISf0kOQBf8giv3oOpdHnE353z-0czP_MpgNBa6nDKcnD00ajW4_e84yf_5G_is0NJXRkkPvx5MCc_qtzrm5EGLHXYt4aO1E0iWSbMH9aw6LJAhOT9uvK4tqQPnMVSHbPI8r9IrsMsQAUsEMEj3vmB5D62VW00UQgUckA4kgWhKlrVDn-nNbxx_kTR2ZAuZ6y9pXEuszlgVF0jFzV4cdWxw-YDdESgHuk-3zY"/>
              <div className="washi-tape washi-pink -bottom-3 -right-4 rotate-12"></div>
              <div className="mt-8 flex items-center justify-center gap-6">
                <span className="w-12 h-px bg-outline-variant/20"></span>
                <p className="handwritten text-4xl text-primary/90">Celebrating Together</p>
                <span className="w-12 h-px bg-outline-variant/20"></span>
              </div>
            </div>
          </div>

          {/* Photo 5: Cultural Event */}
          <div className="w-full max-w-4xl relative">
            <div className="polaroid-frame rotate-[1deg] shadow-2xl bg-white transition-all duration-1000">
              <img alt="Cultural Event" className="w-full aspect-square md:aspect-video object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPslQQmt3FPZCoCUp6jIvUNaUyhaHARsfSXeCrV7B1agfW8BK3tXo2QNyo_YfjMGxZga8qUkdJnSbSkVgez7G8Cv5TnW4UAtnN-XVn6YvpOcJCVpWsFesJlbTi8bTWr8b20bKecGxQVG6fQgifBMoEhwvnRJhN8dXDYp_Mv6RVQOKSVgqHwGGfTWeWN3BWaaJDvSMaIcqzhkEZBuZNGKITMkoj5IAYhdcwOlnPKRncEDtshzQt9sFDm3r76x2CR_kTJzI"/>
              <div className="p-12 text-center">
                <p className="handwritten text-5xl text-primary mb-4">Heritage and Heart</p>
                <p className="text-on-surface-variant font-body-md italic text-xl leading-relaxed max-w-lg mx-auto">&quot;Every costume tells a story of our vibrant roots.&quot;</p>
              </div>
              <div className="washi-tape washi-blue top-1/2 -left-4 -rotate-90"></div>
            </div>
          </div>

          {/* Photo 3: Cooking Activity */}
          <div className="w-full max-w-lg relative group">
            <div className="relative p-6 bg-white/50 rounded-[4rem] rotate-[1.5deg] transition-all duration-1000">
              <div className="washi-tape washi-green -top-2 right-1/3 -rotate-12"></div>
              <div className="organic-border">
                <img alt="Master Chefs" className="w-full aspect-[4/5] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-9wpbpFA1W6CHe1SUtbROswcVJutB7_KJE82wU76BtP7qq38ROMWaMRu7QZv_bSBqtsEvUnny0ORni0aJJMoCZdwp6v2h0TW04AdB96kVxJv0dff4Bd8UIOqUGM8eJkI2Qo4qmEUjLS_JyBr60WEBa6g6rleSJh8Jms4KnQGJER-FtAJALB_gSYa61Ae5PU5Q4y5dC3Zll2RX9LCD4h1VnkiyaTJKNTvDTSxRoD0Aiy0T2cP2bvEsEjUWXA5MC_CuSQs"/>
              </div>
              <div className="absolute -bottom-4 right-8 bg-white px-8 py-3 shadow-xl rotate-[-4deg] border border-outline-variant/10">
                <p className="handwritten text-2xl text-tertiary">Our Master Chefs!</p>
              </div>
            </div>
          </div>

        </div>

        {/* Final Quote */}
        <div className="mt-32 md:mt-48 text-center">
          <p className="font-handwritten text-4xl text-on-surface-variant italic leading-relaxed">&quot;We do not remember days,<br/>we remember moments.&quot;</p>
        </div>
      
        </section>
      </main>
      <Footer />
    </>
  );
}
