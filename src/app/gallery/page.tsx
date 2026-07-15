"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import DynamicGreeting from "@/components/DynamicGreeting";

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <DynamicGreeting />

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
                  src="/gallery/radkliffe-2.jpeg"
                />
              </div>
            </div>
          </div>
        </section>
      
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
            <div className="w-80 h-80 md:w-[450px] md:h-[450px] relative flex-shrink-0 group-hover:-translate-y-2 transition-transform duration-700">
              <div className="absolute inset-0 bg-[#D8F3DC] rounded-full blur-[80px] opacity-20"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-700">
                <img alt="Toddlers playing" className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out" src="/gallery/radkliffe-9.jpeg"/>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 mix-blend-overlay pointer-events-none"></div>
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
            <div className="w-80 h-80 md:w-[480px] md:h-[480px] relative flex-shrink-0 group-hover:-translate-y-2 transition-transform duration-700">
              <div className="absolute inset-0 bg-secondary-container/30 rounded-full blur-[100px] opacity-30"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-[85%] h-[85%] rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-700">
                   <img alt="Children in nursery" className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out" src="/gallery/radkliffe-7.jpeg"/>
                </div>
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
            <div className="w-80 h-80 md:w-[420px] md:h-[420px] relative flex-shrink-0 group-hover:-translate-y-2 transition-transform duration-700">
              <div className="absolute inset-0 bg-tertiary-container/40 rounded-full blur-[90px] opacity-30"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-700">
                <img alt="Early literacy discovery" className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out" src="/gallery/radkliffe-11.jpeg"/>
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
            <div className="w-80 h-80 md:w-[460px] md:h-[460px] relative flex-shrink-0 group-hover:-translate-y-2 transition-transform duration-700">
              <div className="absolute inset-0 bg-surface-container-high/40 rounded-full blur-[100px] opacity-30"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-700">
                <img alt="Inquiry learning" className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out" src="/gallery/radkliffe-10.jpeg"/>
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
            <div className="w-full max-w-5xl relative flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-700">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-[150px] opacity-30"></div>
              <div className="relative w-full aspect-[21/9] rounded-[4rem] overflow-hidden border border-white/20 shadow-xl group-hover:shadow-2xl transition-shadow duration-700">
                <img alt="Academic achievement" className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-out" src="/gallery/radkliffe-12.jpeg"/>
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none"></div>
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
                <Link href="/#enquiry" className="relative bg-primary text-white px-16 py-6 rounded-full font-display-lg text-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-1 transition-all flex items-center gap-6 overflow-hidden">
                  <span className="relative z-10">Enquire Now</span>
                  <span className="material-symbols-outlined text-3xl font-black relative z-10">arrow_forward</span>
                </Link>
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
              <img className="w-full aspect-[4/3] object-cover rounded-sm" alt="Little Builders at Play" src="/gallery/radkliffe-10.jpeg" />
              <div className="mt-4 text-center">
                <span className="font-body-md text-primary italic border-b border-dashed border-outline-variant px-4 py-1">Little Builders at Play</span>
              </div>
            </div>
            <span className="material-symbols-outlined absolute -top-4 -right-4 text-secondary text-4xl group-hover:scale-125 transition-transform">potted_plant</span>
          </div>

          <div className="md:col-span-5 relative mt-12 md:mt-0">
            <div className="polaroid-frame -rotate-3 hover:rotate-0 transition-all duration-500">
              <img className="w-full aspect-square object-cover" alt="Creative Minds" src="/gallery/radkliffe-11.jpeg" />
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
              <img className="w-full aspect-[3/4] object-cover rounded-lg" alt="Master Chefs" src="/gallery/radkliffe-14.jpeg" />
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
              <img className="w-full aspect-video object-cover rounded-lg" alt="Memories in Bloom" src="/gallery/radkliffe-2.jpeg" />
            </div>
            <div className="mt-6 flex items-center justify-between px-4">
              <span className="material-symbols-outlined text-on-tertiary-container bg-tertiary-container p-2 rounded-full shadow-inner">auto_stories</span>
              <span className="font-label-sm text-primary uppercase tracking-widest">Memories in Bloom</span>
              <span className="material-symbols-outlined text-on-secondary-container bg-secondary-container p-2 rounded-full shadow-inner">brush</span>
            </div>
          </div>

          <div className="md:col-span-12 mt-12 relative flex justify-center">
            <div className="max-w-3xl w-full polaroid-frame rotate-1 shadow-2xl hover:scale-[1.02] transition-transform duration-500 group">
              <img className="w-full h-[400px] object-cover" alt="The Whole Wonder Family" src="/gallery/radkliffe-14.jpeg" />
              <div className="mt-6 flex flex-col items-center">
                <p className="font-display-lg text-primary text-[28px] mb-2">The Whole Wonder Family</p>
                <div className="w-24 h-1 bg-outline-variant/30 rounded-full"></div>
              </div>
              <span className="material-symbols-outlined absolute bottom-12 -right-8 text-6xl text-error/40 floating-element" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </div>
          </div>
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
        <div className="flex flex-col gap-16 md:gap-24 items-center relative">
          
          {/* Photo 1: Little Builders */}
          <div className="w-full max-w-xl relative z-10 group">
            <div className="polaroid-frame -rotate-[1deg] group-hover:rotate-0 transition-all duration-1000">
              <div className="washi-tape washi-blue -top-3 left-1/4 rotate-12"></div>
              <img alt="Little Builders at Play" className="w-full aspect-square object-cover" src="/gallery/radkliffe-1.jpeg"/>
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
                <img alt="The Whole Wonder Family" className="w-full aspect-video object-cover" src="/gallery/radkliffe-2.jpeg"/>
              </div>
              <div className="p-8 mt-2 text-center">
                <p className="handwritten text-2xl text-on-surface-variant italic leading-snug">&quot;The whole family together under the morning sun.&quot;</p>
              </div>
            </div>
          </div>

          {/* Photo 4: Group with teacher */}
          <div className="w-full max-w-2xl relative group">
            <div className="relative bg-white p-5 shadow-2xl -rotate-[0.8deg] transition-all duration-1000">
              <img alt="Memories in Bloom" className="w-full aspect-[16/10] object-cover" src="/gallery/radkliffe-3.jpeg"/>
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
              <img alt="Cultural Event" className="w-full aspect-square md:aspect-video object-cover" src="/gallery/radkliffe-4.jpeg"/>
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
                <img alt="Master Chefs" className="w-full aspect-[4/5] object-cover" src="/gallery/radkliffe-14.jpeg"/>
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
