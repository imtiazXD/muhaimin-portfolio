import { motion } from 'motion/react';
import { Sparkle, Instagram, Facebook, Linkedin, Mail, Figma, Dribbble, Globe } from 'lucide-react';

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
                href="#footer-contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 sm:w-24 sm:h-24 lg:w-36 lg:h-36 bg-[#D49474] rounded-full flex flex-col items-center justify-center text-black text-[8px] sm:text-[11px] lg:text-[15px] font-bold shadow-xl hover:bg-[#c58565] transition-colors normal-case shrink-0 tracking-normal leading-[1.1]"
              >
                <span>Start</span>
                <span>Project</span>
              </motion.a>
            </div>
            <span className="block whitespace-nowrap">THE NEXT LEVEL?</span>
          </h2>
        </div>

        {/* Fully Responsive Footer Layout */}
        <div id="footer-contact" className="w-full flex flex-col pt-8 lg:pt-12 pb-8 mt-8 lg:mt-24">
          
          {/* Top Section: Logo & Links */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full gap-8 lg:gap-0">
            
            {/* Logo & Text */}
            <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-4 w-full lg:max-w-[45%] text-center lg:text-left">
              <div className="flex items-center gap-2 text-[14px] lg:text-xl font-display font-bold text-[#D1D1D1]">
                <Sparkle className="text-[#D49474] w-4 h-4 lg:w-5 lg:h-5 fill-current" /> Muhaimin UIUX
              </div>
              <p className="text-[#A3A3A3] text-[11px] lg:text-[15px] font-light leading-relaxed mt-1 lg:mt-4 max-w-[250px] lg:max-w-none">
                Clean design for better user experiences.
              </p>
            </div>

            {/* Links & Icons Grid */}
            <div className="grid grid-cols-3 lg:flex lg:gap-24 w-full lg:w-auto py-6 lg:py-0 border-y border-white/5 lg:border-none">
              
              {/* Col 1 */}
              <div className="flex flex-col gap-4 lg:gap-8 pr-2 lg:pr-0">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'About', href: '#about' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Service', href: '#services' }
                ].map((item) => (
                  <a key={item.name} href={item.href} className="text-[#A3A3A3] hover:text-white transition-colors text-[11px] lg:text-[15px] font-medium">{item.name}</a>
                ))}
              </div>
              
              {/* Col 2 */}
              <div className="flex flex-col gap-4 lg:gap-8 border-l border-white/5 lg:border-none pl-4 lg:pl-0 pr-2 lg:pr-0">
                {[
                  { name: 'Project', href: '#projects' },
                  { name: 'Skill', href: '#skills' },
                  { name: 'Testimonial', href: '#testimonial' },
                  { name: 'Faq', href: '#faq' }
                ].map((item) => (
                  <a key={item.name} href={item.href} className="text-[#A3A3A3] hover:text-white transition-colors text-[11px] lg:text-[15px] font-medium">{item.name}</a>
                ))}
              </div>
              
              {/* Col 3: Icons */}
              <div className="flex justify-center lg:justify-start border-l border-white/5 pl-4 lg:pl-12">
                <div className="grid grid-cols-2 gap-3 lg:gap-5 content-start">
                  <a href="https://www.figma.com/design/nmnrv3ZwdPWbVPR0aJHHUj/Figma-Portfolio?node-id=0-1&p=f&t=T2ZxAhUdLr0NaVGb-0" target="_blank" rel="noopener noreferrer" className="w-7 h-7 lg:w-[42px] lg:h-[42px] rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:border-[#D49474] hover:text-[#D49474] transition-all">
                    <Figma className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  </a>
                  <a href="https://www.instagram.com/muhaimin_uiux/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 lg:w-[42px] lg:h-[42px] rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:border-[#D49474] hover:text-[#D49474] transition-all">
                    <Instagram className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  </a>
                  <a href="https://www.behance.net/Muhaimin_UIUX" target="_blank" rel="noopener noreferrer" className="w-7 h-7 lg:w-[42px] lg:h-[42px] rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:border-[#D49474] hover:text-[#D49474] transition-all font-bold text-[10px] lg:text-[14px]">
                    Bē
                  </a>
                  <a href="https://www.facebook.com/muhaimin.uiux/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 lg:w-[42px] lg:h-[42px] rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:border-[#D49474] hover:text-[#D49474] transition-all">
                    <Facebook className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  </a>
                  <a href="https://dribbble.com/Syed_Muhaimin" target="_blank" rel="noopener noreferrer" className="w-7 h-7 lg:w-[42px] lg:h-[42px] rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:border-[#D49474] hover:text-[#D49474] transition-all">
                    <Dribbble className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  </a>
                  <a href="https://wa.me/8801825297541" target="_blank" rel="noopener noreferrer" className="w-7 h-7 lg:w-[42px] lg:h-[42px] rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:border-[#D49474] hover:text-[#D49474] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 lg:w-4 lg:h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.89 9.89 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.844 9.844 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.005 0C5.37 0 .002 5.368.002 12.004c0 2.092.548 4.129 1.593 5.925L.001 24l6.236-1.638a11.812 11.812 0 005.765 1.468h.004c6.634 0 12.003-5.368 12.004-12.004 0-3.192-1.242-6.196-3.501-8.455"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/syed-muhaimin-615336341/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 lg:w-[42px] lg:h-[42px] rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:border-[#D49474] hover:text-[#D49474] transition-all">
                    <Linkedin className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  </a>
                  <a href="mailto:muhaiminhussain30@gmail.com" className="w-7 h-7 lg:w-[42px] lg:h-[42px] rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:border-[#D49474] hover:text-[#D49474] transition-all">
                    <Mail className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Separator (Desktop only) */}
          <div className="hidden lg:block w-full h-px bg-white/10 my-16" />

          {/* Middle Section: Newsletter */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full gap-6 lg:gap-0 mt-8 lg:mt-0">
            
            {/* Left: Newsletter Text */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[350px] lg:max-w-[450px]">
              <h3 className="text-[14px] lg:text-xl font-bold text-[#E5E5E5] mb-2 lg:mb-4">Let's Build Something Great</h3>
              <p className="text-[#A3A3A3] text-[10px] lg:text-[14px] leading-[1.6]">
                Get updates about my latest UI/UX projects, design insights, and creative work. Delivered occasionally with no unnecessary spam.
              </p>
            </div>
            
            {/* Right: Newsletter Form */}
            <div className="flex flex-col gap-3 lg:gap-4 items-center lg:items-start w-full lg:w-auto">
              <div className="flex gap-2 lg:gap-4 w-full justify-center lg:justify-start">
                <input 
                  type="email" 
                  placeholder="example@gmail.com"
                  className="w-[200px] lg:w-[320px] bg-transparent border border-white/10 rounded-lg lg:rounded-xl px-4 py-2 lg:px-5 lg:py-3.5 text-[11px] lg:text-[14px] text-white focus:outline-none focus:border-[#A3A3A3] transition-colors"
                />
                <button className="bg-transparent border border-white/10 text-white px-6 py-2 lg:px-10 lg:py-3.5 rounded-lg lg:rounded-xl font-bold text-[11px] lg:text-[14px] hover:bg-white/5 transition-all active:scale-95">
                  Join
                </button>
              </div>
              <label className="flex items-center gap-2 lg:gap-3 text-[9px] lg:text-[13px] text-[#A3A3A3] cursor-pointer mt-1">
                <input type="checkbox" className="w-3.5 h-3.5 lg:w-4 lg:h-4 rounded border-white/10 bg-white/5 accent-[#D49474]" />
                I agree to receive updates and design insights.
              </label>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 mt-12 lg:mt-24 text-[10px] lg:text-[13px] text-[#A3A3A3] font-medium pb-4 border-t border-white/5 lg:border-none pt-6 lg:pt-0">
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center lg:text-left">
              <p>©2024 Viroka, Designed by <span className="text-[#E5E5E5]">Muhaimin UIUX</span></p>
              <span className="hidden sm:inline text-white/20">|</span>
              <p>Developed by <span className="text-[#E5E5E5]">Imtiaz Ahmed</span></p>
            </div>
            <div className="flex gap-6 lg:gap-8 mt-2 lg:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
