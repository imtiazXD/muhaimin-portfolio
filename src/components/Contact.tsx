import { motion } from 'motion/react';
import { Sparkle, Instagram, Facebook, Linkedin, Mail, Figma, Dribbble } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="relative pt-32 overflow-hidden flex flex-col items-center border-t border-white/5">
      {/* Background glow & Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D49474]/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Perspective Grid at the bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'bottom center',
        }}
      />

      <div className="relative z-10 w-full mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center">
        {/* Massive CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center w-full max-w-5xl mx-auto mb-32"
        >
          <h2 className="text-5xl md:text-7xl lg:text-[100px] font-display font-bold text-[#E5E5E5] uppercase tracking-tighter leading-[1.1]">
            Ready to take your<br />
            idea to{' '}
            <span className="inline-flex align-middle justify-center text-center mx-4">
              <a href="#contact" className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#D49474] hover:bg-[#c58565] text-black text-sm md:text-base font-bold tracking-wide transition-transform hover:scale-105 border-4 border-[#151515]">
                Start Project
              </a>
            </span><br className="hidden md:block" />
            the next level?
          </h2>
        </motion.div>

        {/* Footer Top Links */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-20">
          
          <div className="flex flex-col gap-6 max-w-sm">
            <a href="#home" className="flex items-center gap-2 text-lg font-display font-bold tracking-widest text-[#D1D1D1] hover:text-white transition-colors">
              <Sparkle className="text-[#D49474] w-5 h-5 fill-current" /> MUHAIMIN UIUX
            </a>
            <p className="text-[#E5E5E5] text-xl md:text-2xl font-medium tracking-wide">
              Imaginative minds<br />
              for imaginative brands.
            </p>
          </div>

          <div className="flex flex-1 justify-between gap-12 lg:gap-24 w-full lg:w-auto">
            <div className="flex flex-col gap-6 w-full max-w-[200px]">
              <a href="#home" className="text-[#E5E5E5] hover:text-[#D49474] transition-colors font-medium">Home</a>
              <a href="#about" className="text-[#E5E5E5] hover:text-[#D49474] transition-colors font-medium">About</a>
              <a href="#experience" className="text-[#E5E5E5] hover:text-[#D49474] transition-colors font-medium">Experience</a>
              <a href="#services" className="text-[#E5E5E5] hover:text-[#D49474] transition-colors font-medium">Service</a>
            </div>
            
            <div className="flex flex-col gap-6 w-full max-w-[200px] border-r border-white/10 pr-12 lg:pr-24">
              <a href="#projects" className="text-[#E5E5E5] hover:text-[#D49474] transition-colors font-medium">Project</a>
              <a href="#skills" className="text-[#E5E5E5] hover:text-[#D49474] transition-colors font-medium">Skill</a>
              <a href="#testimonial" className="text-[#E5E5E5] hover:text-[#D49474] transition-colors font-medium">Testimonial</a>
              <a href="#faq" className="text-[#E5E5E5] hover:text-[#D49474] transition-colors font-medium">Faq</a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a href="https://www.figma.com/design/nmnrv3ZwdPWbVPR0aJHHUj/Figma-Portfolio?node-id=0-1&t=ROz5jdMTfxzyv1AT-1" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-[#D49474] transition-colors group">
                <Figma size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.instagram.com/muhaimin_uiux/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-[#D49474] transition-colors group">
                <Instagram size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.behance.net/Muhaimin_UIUX" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-[#D49474] transition-colors group">
                <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
                  <path d="M3 12l4.5 0" />
                  <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
                  <path d="M16 6l3 0" />
                </svg>
              </a>
              <a href="https://www.facebook.com/muhaimin.uiux/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-[#D49474] transition-colors group">
                <Facebook size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://dribbble.com/Syed_Muhaimin" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-[#D49474] transition-colors group">
                <Dribbble size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://wa.me/8801825297541" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-[#D49474] transition-colors group">
                <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a0.5 0.5 0 0 0 1 0v-1a0.5 0.5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 0.5 0 0 0 0 -1h-1a0.5 0.5 0 0 0 0 1" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/syed-muhaimin-615336341/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-[#D49474] transition-colors group">
                <Linkedin size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:muhaiminhussain30@gmail.com" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-[#D49474] transition-colors group">
                <Mail size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>

          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-white/10 mb-16" />

        {/* Newsletter & Bottom Footer */}
        <div className="w-full pb-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-16">
            <div className="max-w-md">
              <h3 className="text-xl font-bold text-[#E5E5E5] mb-4">Let's Build Something Great</h3>
              <p className="text-[#A3A3A3] text-sm leading-relaxed">
                Get updates about my latest UI/UX projects, design insights, and creative work. Delivered occasionally with no unnecessary spam.
              </p>
            </div>

            <div className="w-full max-w-md flex flex-col gap-4">
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="example@gmail.com" 
                  className="flex-1 bg-transparent border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#D49474] transition-colors"
                />
                <button className="bg-[#1A1A1A] border border-white/20 text-[#E5E5E5] px-6 rounded-lg font-medium hover:bg-white/5 transition-colors text-sm">
                  Join
                </button>
              </div>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded bg-transparent border border-white/20 flex items-center justify-center group-hover:border-[#D49474] transition-colors">
                  <input type="checkbox" className="appearance-none w-full h-full rounded cursor-pointer checked:bg-[#D49474]" />
                </div>
                <span className="text-[#A3A3A3] text-sm group-hover:text-white transition-colors">I agree to receive updates and design insights.</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
            <p className="text-[#A3A3A3] text-sm">
              ©2024 Viroka, Designed by <span className="text-[#E5E5E5]">Muhaimin UIUX</span> | Developed by <span className="text-[#E5E5E5]">Imtiaz Ahmed</span>
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-[#A3A3A3] hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#A3A3A3] hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
