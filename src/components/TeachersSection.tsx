import React from 'react';
import Image from 'next/image';

export default function TeachersSection() {
  const teachers = [
    {
      name: "Pushpa",
      role: "Lead Educator",
      image: "/t1.jpeg",
      quote: "Every child is an artist of their own future.",
      bgColor: "bg-[#F5A988]"
    },
    {
      name: "Reena Singh",
      role: "Creative Arts Director",
      image: "/t2.jpeg",
      quote: "Imagination is the seed from which knowledge grows.",
      bgColor: "bg-[#6BCBE8]"
    },
    {
      name: "Kanchan Jain",
      role: "Early Childhood Specialist",
      image: "/t3.jpeg",
      quote: "Nurturing curiosity today creates the thinkers of tomorrow.",
      bgColor: "bg-[#F9DE74]"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-surface-container-low px-6 md:px-12 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-16 md:mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
            <span className="text-secondary font-label-sm uppercase tracking-widest text-xs font-extrabold">Our Mentors</span>
          </div>
          <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-on-surface leading-[1.1] tracking-tight">
            Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Heart</span> of Radkliff International
          </h2>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Our exceptional educators are more than just teachers; they are guides, storytellers, and dream-weavers dedicated to unlocking your child's magical potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          {teachers.map((teacher, index) => (
            <div key={index} className="group relative flex flex-col items-center">
              {/* Image Container with Blob-like Background */}
              <div className={`relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[4rem] ${teacher.bgColor}/20 p-2 overflow-visible transition-transform duration-500 group-hover:-translate-y-4`}>
                <div className={`absolute inset-0 ${teacher.bgColor}/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="w-full h-full rounded-[3.5rem] overflow-hidden relative border-4 border-white shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={teacher.image}
                    alt={`Portrait of ${teacher.name}`}
                    fill
                    priority
                    sizes="(min-width: 768px) 20rem, 16rem"
                    className="object-cover object-[center_20%] scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
              
              {/* Teacher Info */}
              <div className="mt-8 text-center space-y-2 relative z-10 bg-white/60 backdrop-blur-md px-8 py-6 rounded-3xl paper-cut-shadow -mt-8 border border-white/50 w-[90%] group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="font-display-lg text-2xl md:text-3xl text-on-surface">{teacher.name}</h3>
                <p className="font-label-sm uppercase tracking-widest text-[10px] md:text-xs text-primary font-bold">{teacher.role}</p>
                <div className="w-12 h-1 bg-secondary/30 mx-auto rounded-full my-3"></div>
                <p className="font-body-md text-sm md:text-base text-on-surface-variant italic">
                  "{teacher.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
