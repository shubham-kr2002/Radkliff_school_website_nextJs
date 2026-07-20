"use client";
import React from 'react';
import Link from 'next/link';
import ConfettiBurst from '@/components/ConfettiBurst';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-on-background/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Rainbow Arc */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-full opacity-20" viewBox="0 0 1000 1000">
          <path className="rainbow-arc" d="M100,600 Q500,100 900,600" fill="none" stroke="#ba1a1a" strokeWidth="40" strokeLinecap="round"></path>
          <path className="rainbow-arc" d="M120,620 Q500,150 880,620" fill="none" stroke="#ffdcc5" strokeWidth="40" strokeLinecap="round" style={{ animationDelay: '0.2s' }}></path>
          <path className="rainbow-arc" d="M140,640 Q500,200 860,640" fill="none" stroke="#cee9d3" strokeWidth="40" strokeLinecap="round" style={{ animationDelay: '0.4s' }}></path>
          <path className="rainbow-arc" d="M160,660 Q500,250 840,660" fill="none" stroke="#accbdb" strokeWidth="40" strokeLinecap="round" style={{ animationDelay: '0.6s' }}></path>
        </svg>

        {/* Random Sparkles */}
        <div className="sparkle absolute top-1/4 left-1/4 text-secondary float-animation" style={{ animationDelay: '0.5s' }}>
          <span className="material-symbols-outlined text-4xl">auto_awesome</span>
        </div>
        <div className="sparkle absolute top-1/3 right-1/4 text-tertiary-fixed float-animation" style={{ animationDelay: '1.2s' }}>
          <span className="material-symbols-outlined text-2xl">star</span>
        </div>
        <div className="sparkle absolute bottom-1/4 left-1/3 text-primary-fixed-dim float-animation" style={{ animationDelay: '0.8s' }}>
          <span className="material-symbols-outlined text-3xl">flare</span>
        </div>
      </div>

      {/* Confetti — animejs-powered pastel burst */}
      <ConfettiBurst trigger={isOpen} />

      {/* Success Message Content */}
      <div className="relative z-10 w-full max-w-lg flex flex-col items-center">
        {/* Paper-Cut Bird Animation */}
        <div className="animate-bird mb-12 relative">
          <div className="relative w-48 h-48">
            {/* The Bird (Simplified Paper Style) */}
            <div className="absolute inset-0 bg-secondary rounded-full transform rotate-45 paper-shadow" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
              <div className="paper-texture absolute inset-0"></div>
            </div>
            {/* Wings */}
            <div className="animate-wings absolute -left-12 top-10 w-24 h-16 bg-secondary-fixed rounded-full transform -rotate-12 paper-shadow">
              <div className="paper-texture absolute inset-0"></div>
            </div>
            <div className="animate-wings absolute -right-12 top-10 w-24 h-16 bg-secondary-fixed rounded-full transform rotate-12 paper-shadow" style={{ animationDelay: '0.1s' }}>
              <div className="paper-texture absolute inset-0"></div>
            </div>
            {/* Beak with Note */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform translate-y-8 flex flex-col items-center">
              <div className="w-4 h-4 bg-tertiary rotate-45 mb-1"></div>
              {/* Thank You Note */}
              <div className="bg-surface-container-low p-6 rounded-lg paper-shadow rotate-3 transform border-2 border-outline-variant/20 relative">
                <div className="paper-texture absolute inset-0"></div>
                <span className="font-headline-md text-headline-md text-primary block text-center">Thank You!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content Container */}
        <div className="bg-surface-container-lowest/60 backdrop-blur-md p-8 md:p-12 rounded-xl text-center paper-shadow border border-white/40 -rotate-1">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
              Booking Confirmed!
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-sm mx-auto">
              We can&apos;t wait to meet your little explorer! A magic messenger is flying a confirmation to your inbox right now.
          </p>
          {/* Back to Meadow Button */}
          <button onClick={onClose} className="inline-flex items-center gap-2 bg-[#FFD54F] hover:bg-[#FFC107] text-on-background px-8 py-4 rounded-full font-label-sm text-label-sm transition-all duration-300 transform hover:scale-105 hover:-rotate-1 border-b-4 border-yellow-700/30 active:translate-y-1 active:border-b-0">
            <span className="material-symbols-outlined">park</span>
            <span>Back to Meadow</span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-16 -left-8 pointer-events-none transform -rotate-12 opacity-80">
          <span className="material-symbols-outlined text-6xl text-tertiary-fixed-dim">eco</span>
        </div>
        <div className="absolute -top-24 -right-12 pointer-events-none transform rotate-12 opacity-80">
          <span className="material-symbols-outlined text-8xl text-secondary-container">cloud</span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

