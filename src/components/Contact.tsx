import { motion } from 'motion/react';
import { Sparkle, Instagram, Facebook, Linkedin, Mail, Figma, Dribbble } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="relative pt-16 lg:pt-32 overflow-hidden flex flex-col items-center border-t border-white/5">
      {/* Background glow & Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-[#D49474]/10 blur-[100px] lg:blur-[150px] rounded-full pointer-events-none" />
      
      {/* Perspective Grid at the bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none z-0 opacity-50 lg:opacity-100"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'bottom center',
        }}
      />

      <div className="relative z-10 w-full mx-auto px-4 md:px-12 lg:px-20 flex flex-col items-center">
        {/* Massive CTA Section - Matches Screenshot */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-24 relative w-full px-2">
          <h2 className="w-full text-[8vw] sm:text-[7vw] lg:text-[6.5vw] font-display font-bold leading-[1.1] uppercase text-[#E5E5E5] tracking-tight">
            <span className="block whitespace-nowrap">READY TO TAKE YOUR</span>
            <div className="flex items-center justify-center gap-2 sm:gap-5 lg:gap-6 my-1 sm:my-2 lg:my-3">
              <span className="whitespace-nowrap">IDEA TO</span>
              <motion.a 
                href="mailto:muhaiminhussain30@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 sm:w-24 sm:h-24 lg:w-36 lg:h-36 bg-[#D49474] rounded-full flex items-center justify-center text-black text-[8px] sm:text-[11px] lg:text-[15px] font-bold shadow-xl hover:bg-[#c58565] transition-colors normal-case shrink-0"
              >
                Start Project
              </motion.a>
            </div>
            <span className="block whitespace-nowrap">THE NEXT LEVEL?</span>
          </h2>
        </div>

        {/* ============================== */}
        {/* MOBILE LAYOUT (Preserved) */}
        {/* ============================== */}
        <div className="w-full lg:hidden flex flex-col gap-6 border-t border-white/5 pt-8">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center text-center gap-2 mb-2">
            <div className="flex items-center gap-2 text-base font-display font-bold tracking-widest text-[#D1D1D1]">
              <Sparkle className="text-[#D49474] w-4 h-4 fill-current" /> Muhaimin UIUX
            </div>
            <p className="text-[#A3A3A3] text-xs font-light max-w-[250px] leading-relaxed">
              Clean design for better user experiences.
            </p>
          </div>

          {/* Links 3-Column Grid */}
          <div className="grid grid-cols-3 gap-0 py-6 border-y border-white/5 w-full">
            {/* Column 1: Navigation */}
            <div className="flex flex-col gap-4 text-[11px] text-left pr-2">
              {['Home', 'About', 'Experience', 'Service'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-[#A3A3A3] hover:text-white transition-colors">{item}</a>
              ))}
            </div>
            
            {/* Column 2: Portfolio */}
            <div className="flex flex-col gap-4 text-[11px] text-left border-l border-white/5 pl-4 pr-2">
              {['Project', 'Skill', 'Testimonial', 'Faq'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-[#A3A3A3] hover:text-white transition-colors">{item}</a>
              ))}
            </div>
            
            {/* Column 3: Social Icons Grid */}
            <div className="flex justify-center border-l border-white/5 pl-4">
              <div className="grid grid-cols-2 gap-2.5 content-start">
                <a href="#" className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:border-[#D49474] hover:text-[#D49474] transition-all">
                  <Figma size={12} />
                </a>
                <a href="#" className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:border-[#D49474] hover:text-[#D49474] transition-all">
                  <Instagram size={12} />
                </a>
                <a href="#" className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:border-[#D49474] hover:text-[#D49474] transition-all font-bold text-[9px]">
                  Bē
                </a>
                <a href="#" className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:border-[#D49474] hover:text-[#D49474] transition-all">
                  <Facebook size={12} />
                </a>
                <a href="#" className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:border-[#D49474] hover:text-[#D49474] transition-all">
                  <Dribbble size={12} />
                </a>
                <a href="#" className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:border-[#D49474] hover:text-[#D49474] transition-all font-bold text-[9px]">
                  W
                </a>
                <a href="#" className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:border-[#D49474] hover:text-[#D49474] transition-all">
                  <Linkedin size={12} />
                </a>
                <a href="#" className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:border-[#D49474] hover:text-[#D49474] transition-all">
                  <Mail size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Section (Mobile) */}
          <div className="w-full flex flex-col items-center text-center py-8 max-w-[400px] mx-auto">
            <h3 className="text-base font-bold text-[#E5E5E5] mb-2">Let's Build Something Great</h3>
            <p className="text-[#A3A3A3] text-[10px] leading-relaxed mb-6">
              Get updates about my latest UI/UX projects, design insights, and creative work. Delivered occasionally with no unnecessary spam.
            </p>
            
            <div className="w-full flex flex-row gap-2 mb-4">
              <input 
                type="email" 
                placeholder="example@gmail.com"
                className="flex-1 bg-transparent border border-white/10 rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none focus:border-[#A3A3A3] transition-colors"
              />
              <button className="bg-transparent border border-white/10 hover:bg-white/10 text-white px-4 py-2 rounded-lg font-bold text-[11px] transition-all active:scale-95">
                Join
              </button>
            </div>
            
            <label className="flex items-center justify-center gap-2 text-[9px] text-[#A3A3A3] cursor-pointer">
              <input type="checkbox" className="w-3 h-3 rounded border-white/10 bg-white/5 accent-white/20" />
              I agree to receive updates and design insights.
            </label>
          </div>
        </div>

        {/* ============================== */}
        {/* DESKTOP LAYOUT (New 4-Column Design) */}
        {/* ============================== */}
        <div className="hidden lg:flex flex-col w-full">
          {/* 4-Column Links Grid */}
          <div className="grid grid-cols-4 gap-8 py-20 w-full mt-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[#D49474] font-bold text-sm mb-2 tracking-wide">Quick links</h4>
              {['Home', 'About', 'Experience', 'Service', 'Project', 'Skill', 'Testimonial'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-white font-bold text-sm hover:text-[#D49474] transition-colors">{item}</a>
              ))}
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[#D49474] font-bold text-sm mb-2 tracking-wide">Portfolio</h4>
              {['Figma', 'Behance', 'Dribbble'].map((item) => (
                <a key={item} href="#" className="text-white font-bold text-sm hover:text-[#D49474] transition-colors">{item}</a>
              ))}
            </div>
            
            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[#D49474] font-bold text-sm mb-2 tracking-wide">Social Link</h4>
              {['Linkedin', 'Instagraam', 'Facebook'].map((item) => (
                <a key={item} href="#" className="text-white font-bold text-sm hover:text-[#D49474] transition-colors">{item}</a>
              ))}
            </div>
            
            {/* Column 4 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[#D49474] font-bold text-sm mb-2 tracking-wide">Contact</h4>
              <a href="mailto:muhaiminhussain30@gmail.com" className="text-white font-bold text-sm hover:text-[#D49474] transition-colors">muhaiminhussain30@gmail.com</a>
              <a href="tel:01825297541" className="text-white font-bold text-sm hover:text-[#D49474] transition-colors">01825297541</a>
              <a href="#" className="text-white font-bold text-sm hover:text-[#D49474] transition-colors">Whatsapp</a>
            </div>
          </div>

          {/* Desktop Separator */}
          <div className="w-full h-px bg-white/10" />

          {/* Desktop Newsletter Section */}
          <div className="w-full flex justify-between items-center py-16">
            {/* Left: Text */}
            <div className="max-w-md">
              <h3 className="text-xl font-bold text-[#E5E5E5] mb-4">Let's Build Something Great</h3>
              <p className="text-[#A3A3A3] text-sm leading-relaxed">
                Get updates about my latest UI/UX projects, design insights, and creative work. Delivered occasionally with no unnecessary spam.
              </p>
            </div>
            
            {/* Right: Form */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="example@gmail.com"
                  className="w-[300px] bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A3A3A3] transition-colors"
                />
                <button className="bg-[#E5E5E5] text-black px-10 py-3 rounded-xl font-bold text-sm hover:bg-white transition-all active:scale-95 shadow-lg">
                  Join
                </button>
              </div>
              <label className="flex items-center gap-3 text-[12px] text-[#A3A3A3] cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 accent-[#D49474]" />
                I agree to receive updates and design insights.
              </label>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Shared for both Mobile and Desktop) */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6 py-6 lg:py-10 text-[9px] lg:text-[12px] text-[#A3A3A3] font-medium border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center lg:text-left">
            <p>©2024 Viroka, Designed by <span className="text-[#E5E5E5]">Muhaimin UIUX</span></p>
            <span className="hidden sm:inline text-white/20">|</span>
            <p>Developed by <span className="text-[#E5E5E5]">Imtiaz Ahmed</span></p>
          </div>
          <div className="flex gap-4 lg:gap-6 mt-2 lg:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
}
