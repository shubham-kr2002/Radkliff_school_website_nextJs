import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F5] rounded-t-[3rem] pt-20 pb-8 px-margin-page relative mt-auto border-t border-outline-variant/10 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
      
      {/* Decorative Blob */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/5 rounded-tl-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-16">
        
        {/* Brand & Identity */}
        <div className="flex flex-col items-start max-w-md">
          <Link href="#home" className="inline-block mb-8 group">
            <Image src="/radkliffe-logo-clear.png" alt="Radkliffe International Logo" width={160} height={160} className="object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-sm" />
          </Link>
          <h3 className="font-display-lg text-4xl text-on-surface tracking-tight mb-4">Radkliffe International</h3>
          <p className="font-body-lg text-on-surface-variant leading-relaxed text-lg mb-6">
            AFTD-RBSE English Medium <br/>
            Preparing children for a life filled with wonder, resilience, and empathetic leadership.
          </p>
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2 shadow-sm border border-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-on-surface font-bold text-xs tracking-widest uppercase">Play Group to 5th Grade</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-6 lg:mt-6 w-full max-w-sm">
          <h4 className="font-label-sm text-primary text-sm uppercase tracking-widest font-black mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-primary/30"></span>
            Reach Out To Us
          </h4>
          
          <a href="tel:+919462166070" className="flex items-center gap-5 p-3 -ml-3 rounded-xl hover:bg-white transition-all group shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[24px]">call</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold mb-0.5">Call Us</span>
              <span className="font-body-lg font-semibold text-on-surface">+91 9462166070</span>
            </div>
          </a>
          
          <a href="mailto:radkliffejpr@gmail.com" className="flex items-center gap-5 p-3 -ml-3 rounded-xl hover:bg-white transition-all group shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[24px]">mail</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold mb-0.5">Email Us</span>
              <span className="font-body-lg font-semibold text-on-surface break-all">radkliffejpr@gmail.com</span>
            </div>
          </a>

          <div className="flex items-start gap-5 p-3 -ml-3 rounded-xl bg-white shadow-sm border border-outline-variant/10">
            <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary flex-shrink-0">
              <span className="material-symbols-outlined text-[24px]">location_on</span>
            </div>
            <div className="flex flex-col pt-1">
              <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold mb-1">Visit Us</span>
              <span className="font-body-md text-on-surface leading-relaxed text-sm">
                C-401 Sidharth nagar, 80ft Road<br/>
                Near Terminal-2, Jawahar Circle<br/>
                Jaipur, Rajasthan
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 max-w-6xl mx-auto border-t border-outline-variant/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-on-surface-variant/80 font-label-sm text-xs tracking-widest uppercase text-center md:text-left">
            © {new Date().getFullYear()} Radkliffe International. All Rights Reserved.
        </p>
        <div className="flex gap-8 items-center text-on-surface-variant/60">
          <p className="text-[10px] uppercase tracking-widest font-bold">Reg.No. 19654/18-19/142</p>
          <span className="material-symbols-outlined text-xl hidden md:block hover:text-error transition-colors cursor-pointer">favorite</span>
        </div>
      </div>
    </footer>
  );
}
