import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-on-background rounded-t-[3rem] pt-24 pb-12 px-margin-page relative overflow-hidden mt-auto">
      {/* Hand-drawn decorative line at top */}
      <div className="absolute top-0 left-0 w-full px-margin-page py-12">
        <div className="hand-drawn-line"></div>
      </div>
      
      <div className="relative z-10 max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col items-start space-y-6">
            <div className="w-24 h-24 flex items-center justify-center">
              <Image src="/radkliffe-logo-clear.png" alt="Radkliffe Logo" width={96} height={96} className="object-contain" />
            </div>
            <div>
              <h3 className="font-display-lg text-2xl text-primary-container tracking-tight">Radkliffe International School</h3>
              <p className="text-white/60 font-label-sm text-[10px] tracking-widest uppercase mt-2">
                Reg.No. 19654/18-19/142
              </p>
            </div>
            <p className="font-body-md text-white/80 leading-relaxed text-sm">
              AFTD-RBSE English Medium <br/>
              <span className="text-brand-peach font-bold mt-1 block">Play Group & Nursery | LKG | UKG | 1st to 5th</span>
            </p>
            <div className="inline-block border border-white/20 rounded-full px-4 py-1">
              <span className="text-secondary font-bold text-sm tracking-widest">FUN • PLAY • LEARN</span>
            </div>
          </div>

          {/* Column 2: Key Features */}
          <div className="flex flex-col space-y-6 lg:pl-8">
            <h4 className="font-display-lg text-xl text-primary-container border-b border-white/10 pb-2">Key Features</h4>
            <ul className="space-y-3 font-body-md text-white/70 text-sm">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-lavender text-[18px]">check_circle</span>
                Homely Environment
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-lavender text-[18px]">check_circle</span>
                Child Centric Approach
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-lavender text-[18px]">check_circle</span>
                Activity Based Learning
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-lavender text-[18px]">check_circle</span>
                Co-Curricular Activities
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-lavender text-[18px]">check_circle</span>
                Pick up & Drop Facility
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col space-y-6 lg:pl-8">
            <h4 className="font-display-lg text-xl text-primary-container border-b border-white/10 pb-2">Explore</h4>
            <ul className="space-y-3 font-body-md text-white/70 text-sm">
              <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#programs" className="hover:text-white transition-colors">Programs</Link></li>
              <li><Link href="#gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="#memories" className="hover:text-white transition-colors">Memories</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-display-lg text-xl text-primary-container border-b border-white/10 pb-2">Contact Us</h4>
            <div className="space-y-4 font-body-md text-white/70 text-sm">
              <a href="tel:+919462166070" className="flex items-start gap-3 hover:text-white transition-colors group">
                <span className="material-symbols-outlined text-brand-peach mt-0.5 group-hover:scale-110 transition-transform">call</span>
                <span>+91 9462166070</span>
              </a>
              <a href="mailto:radkliffejpr@gmail.com" className="flex items-start gap-3 hover:text-white transition-colors group">
                <span className="material-symbols-outlined text-brand-peach mt-0.5 group-hover:scale-110 transition-transform">mail</span>
                <span className="break-all">radkliffejpr@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 group">
                <span className="material-symbols-outlined text-brand-peach mt-0.5">location_on</span>
                <span>
                  C-401 Sidharth nagar, 80ft Road<br/>
                  Near Terminal-2, Jawahar Circle<br/>
                  Jaipur, Rajasthan
                </span>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-secondary/90 italic text-sm font-semibold">"Parents Satisfaction Is Our Motto"</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 font-label-sm text-[12px] tracking-widest uppercase text-center md:text-left">
              © {new Date().getFullYear()} Radkliffe International School. All Rights Reserved.
          </p>
          <div className="flex gap-6 opacity-40">
            <span className="material-symbols-outlined text-xl text-white">child_care</span>
            <span className="material-symbols-outlined text-xl text-white">favorite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
