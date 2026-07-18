"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleEnquiryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '/#enquiry');
      setIsDrawerOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 w-full z-[150] transition-all duration-500 md:py-4 md:px-margin-page">
        <div className="w-full md:max-w-container-max mx-auto bg-white/80 backdrop-blur-md border-b md:border border-white/50 rounded-b-3xl md:rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-on-background/5">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center wiggle-element shrink-0">
              <Image src="/radkliffe-logo-clear.png" alt="Radkliff International Logo" width={56} height={56} className="object-contain" />
            </div>
            <span className="font-display-lg text-[18px] md:text-[24px] text-on-surface tracking-tight leading-none pt-1">Radkliff International</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-2">
            <Link className="font-label-sm px-4 py-2 rounded-full text-on-surface-variant hover:bg-secondary-container/50 hover:text-secondary transition-all" href="/">Home</Link>
            <Link className="font-label-sm px-4 py-2 rounded-full text-on-surface-variant hover:bg-secondary-container/50 hover:text-secondary transition-all" href="/#about">About</Link>
            <Link className="font-label-sm px-4 py-2 rounded-full text-on-surface-variant hover:bg-secondary-container/50 hover:text-secondary transition-all" href="/programs">Programs</Link>
            <Link className="font-label-sm px-4 py-2 rounded-full text-on-surface-variant hover:bg-secondary-container/50 hover:text-secondary transition-all" href="/gallery">Gallery</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link href="/#enquiry" onClick={handleEnquiryClick} className="hidden md:flex items-center justify-center tactile-button bg-[#FFF176] text-on-background font-bold px-6 py-2.5 rounded-full border-b-4 border-[#FBC02D] text-sm uppercase tracking-widest hover:-translate-y-1 transition-transform">
                Enquiry
            </Link>
            <button className="bg-primary/5 hover:bg-primary/10 p-2 rounded-full transition-colors lg:hidden flex items-center justify-center" onClick={() => setIsDrawerOpen(true)}>
              <span className="material-symbols-outlined text-primary">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* NavigationDrawer */}
      <div 
        className={`fixed inset-0 bg-on-background/20 backdrop-blur-sm z-[200] transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsDrawerOpen(false)}
      ></div>
      
      <aside 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-[210] shadow-2xl p-8 flex flex-col transition-transform duration-400 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0">
              <Image src="/radkliffe-logo-clear.png" alt="Radkliff International Logo" width={48} height={48} className="object-contain" />
            </div>
            <span className="font-display-lg text-[16px] md:text-[20px] text-on-surface leading-tight">Radkliff International</span>
          </div>
          <button className="p-2 hover:bg-surface-container rounded-full transition-colors" onClick={() => setIsDrawerOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <nav className="flex flex-col gap-4">
          <Link href="/" className="font-display-lg text-[24px] text-on-surface hover:text-secondary transition-colors py-2 flex items-center justify-between group" onClick={() => setIsDrawerOpen(false)}>
              Home <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
          </Link>
          <Link href="/#about" className="font-display-lg text-[24px] text-on-surface hover:text-secondary transition-colors py-2 flex items-center justify-between group" onClick={() => setIsDrawerOpen(false)}>
              About <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
          </Link>
          <Link href="/programs" className="font-display-lg text-[24px] text-on-surface hover:text-secondary transition-colors py-2 flex items-center justify-between group" onClick={() => setIsDrawerOpen(false)}>
              Programs <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
          </Link>
          <Link href="/gallery" className="font-display-lg text-[24px] text-on-surface hover:text-secondary transition-colors py-2 flex items-center justify-between group" onClick={() => setIsDrawerOpen(false)}>
              Gallery <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
          </Link>
        </nav>
        
        <div className="mt-auto">
          <Link href="/#enquiry" onClick={handleEnquiryClick} className="w-full flex items-center justify-center tactile-button bg-[#FFF176] text-on-background font-bold px-8 py-5 rounded-full border-b-[6px] border-[#FBC02D] text-headline-md hover:-translate-y-1 transition-transform">
              Enquiry
          </Link>
          <p className="text-center mt-6 font-label-sm text-on-surface-variant opacity-60">Join our sanctuary of learning.</p>
        </div>
      </aside>
    </>
  );
}
