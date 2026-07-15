import React from 'react';

export default function EnquirySection() {
  return (
    <section id="enquiry" className="relative min-h-[100svh] flex flex-col items-center justify-center bg-surface px-6 md:px-12 py-12 md:py-8 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-container rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-container rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative z-10 items-center justify-center">
        
        {/* Contact Info (Left on Desktop, Bottom on Mobile) */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center space-y-6">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-primary font-label-sm uppercase tracking-widest text-[10px] md:text-xs font-extrabold">Get In Touch</span>
            </div>
            <h2 className="font-display-lg text-3xl md:text-4xl lg:text-5xl text-on-surface leading-[1.1] tracking-tight mb-4">
              Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Journey</span>
            </h2>
            <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed mb-4">
              We would love to hear from you. Drop by for a visit or send us an enquiry, and let&apos;s talk about your child&apos;s magical future at Radkliffe.
            </p>
          </div>

          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-secondary text-xl">call</span>
              </div>
              <div>
                <p className="font-label-sm uppercase tracking-widest text-[10px] text-on-surface-variant font-bold mb-0.5">Phone</p>
                <a href="tel:+919876543210" className="font-body-md text-sm font-medium text-on-surface hover:text-primary transition-colors">+91 98765 43210</a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-tertiary text-xl">mail</span>
              </div>
              <div>
                <p className="font-label-sm uppercase tracking-widest text-[10px] text-on-surface-variant font-bold mb-0.5">Email</p>
                <a href="mailto:admissions@radkliffe.edu" className="font-body-md text-sm font-medium text-on-surface hover:text-primary transition-colors">admissions@radkliffe.edu</a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-full bg-[#FFF176] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                <span className="material-symbols-outlined text-[#F57F17] text-xl">location_on</span>
              </div>
              <div>
                <p className="font-label-sm uppercase tracking-widest text-[10px] text-on-surface-variant font-bold mb-0.5">Address</p>
                <p className="font-body-md text-sm font-medium text-on-surface leading-relaxed">
                  Radkliffe Campus,<br />
                  123 Magic Forest Lane,<br />
                  Wonderland District, 400001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enquiry Form (Right on Desktop, Top on Mobile) */}
        <div className="lg:col-span-7 order-1 lg:order-2 relative">
          {/* Decorative Blob Behind Form */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          
          <div className="relative bg-white/70 backdrop-blur-xl border border-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] paper-cut-shadow-lg overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-tertiary"></div>
            
            <h3 className="font-display-lg text-2xl md:text-3xl text-on-surface mb-4">Enquire Now</h3>
            
            <form className="space-y-3 md:space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-1">
                  <label className="font-label-sm text-[10px] font-bold text-on-surface-variant uppercase tracking-wider ml-2">First Name*</label>
                  <input type="text" placeholder="John" minLength={2} className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-primary px-4 py-2 md:py-2.5 rounded-full font-body-md text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm" required />
                </div>
                <div className="space-y-1">
                  <label className="font-label-sm text-[10px] font-bold text-on-surface-variant uppercase tracking-wider ml-2">Last Name*</label>
                  <input type="text" placeholder="Doe" minLength={2} className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-primary px-4 py-2 md:py-2.5 rounded-full font-body-md text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm" required />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-label-sm text-[10px] font-bold text-on-surface-variant uppercase tracking-wider ml-2">Email*</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-primary px-4 py-2 md:py-2.5 rounded-full font-body-md text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-1">
                  <label className="font-label-sm text-[10px] font-bold text-on-surface-variant uppercase tracking-wider ml-2">Mobile* (10 Digits)</label>
                  <input type="tel" pattern="[0-9]{10}" title="10 digit mobile number" placeholder="9876543210" className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-primary px-4 py-2 md:py-2.5 rounded-full font-body-md text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm" required />
                </div>
                <div className="space-y-1">
                  <label className="font-label-sm text-[10px] font-bold text-on-surface-variant uppercase tracking-wider ml-2">Pin Code*</label>
                  <input type="text" pattern="[0-9]{6}" title="6 digit pin code" placeholder="123456" className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-primary px-4 py-2 md:py-2.5 rounded-full font-body-md text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-1">
                  <label className="font-label-sm text-[10px] font-bold text-on-surface-variant uppercase tracking-wider ml-2">Country*</label>
                  <input type="text" placeholder="India" className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-primary px-4 py-2 md:py-2.5 rounded-full font-body-md text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm" required />
                </div>
                <div className="space-y-1">
                  <label className="font-label-sm text-[10px] font-bold text-on-surface-variant uppercase tracking-wider ml-2">State / District*</label>
                  <input type="text" placeholder="Maharashtra" className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-primary px-4 py-2 md:py-2.5 rounded-full font-body-md text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-1">
                  <label className="font-label-sm text-[10px] font-bold text-on-surface-variant uppercase tracking-wider ml-2">City*</label>
                  <input type="text" placeholder="Mumbai" className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-primary px-4 py-2 md:py-2.5 rounded-full font-body-md text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm" required />
                </div>
                <div className="space-y-1">
                  <label className="font-label-sm text-[10px] font-bold text-on-surface-variant uppercase tracking-wider ml-2">Location*</label>
                  <input type="text" placeholder="Andheri West" className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-primary px-4 py-2 md:py-2.5 rounded-full font-body-md text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm" required />
                </div>
              </div>
              
              <div className="pt-2">
                <button type="submit" className="w-full tactile-button bg-[#FFF176] text-[#2C3333] font-bold px-6 py-3 rounded-full border-b-[4px] border-[#FBC02D] text-sm md:text-base hover:-translate-y-1 transition-transform shadow-xl flex items-center justify-center gap-2">
                  Submit Enquiry <span className="material-symbols-outlined text-lg">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
