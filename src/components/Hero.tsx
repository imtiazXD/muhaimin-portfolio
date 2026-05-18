import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import profileImg from '../assest/muhaimin personal portfolio website/hero section profile pic.png';



export function Hero() {
  return (
    <>
      {/* Background glow behind image */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D49474]/15 blur-[120px] rounded-full pointer-events-none z-0" />
      

      <section id="home" className="pt-24 pb-6 md:pt-32 md:pb-8 px-6 md:px-12 lg:px-20 min-h-[100dvh] lg:h-dvh flex flex-col w-full mx-auto relative z-10 overflow-x-hidden lg:overflow-hidden">
        
        {/* Top Part: Greeting (Shared) */}
        <div className="relative z-50 w-full mb-1 sm:mb-2 text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#E5E5E5] text-[13px] sm:text-[15px] md:text-xl lg:text-[22px] font-bold tracking-normal lg:tracking-wide"
          >
            Hey, 👋 I'm a UIUX Designer
          </motion.h2>
        </div>

        {/* Title: PC Version (Staggered) */}
        <div className="hidden lg:block relative z-10 w-full mt-2">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
            }}
            className="w-full flex justify-between items-center font-display font-bold text-[#D49474] text-[13vw] leading-none uppercase tracking-tighter"
          >
            {['M','U','H','A','I','M','I','N',' ','U','I','U','X'].map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={char === ' ' ? 'w-[3vw]' : ''}
              >
                {char !== ' ' ? char : ''}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Title: Mobile Version (Centered) */}
        <div className="lg:hidden relative z-50 w-full mb-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#D49474] text-[10.5vw] sm:text-[9vw] font-display font-bold leading-none uppercase tracking-tighter px-1 whitespace-nowrap"
          >
            MUHAIMIN UIUX
          </motion.h1>
        </div>

        {/* Profile Image - Rich & Full like PC */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="relative lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0 w-[92%] max-w-[340px] sm:max-w-[480px] lg:w-[650px] lg:h-[70vh] lg:max-h-[850px] mx-auto z-30 flex justify-center items-end mt-2 lg:mt-0"
        >
          {/* Mobile Glow */}
          <div className="absolute inset-0 bg-[#D49474]/15 blur-[60px] rounded-full lg:hidden" />
          
          <img 
            src={profileImg} 
            alt="Muhaimin" 
            className="h-[38vh] lg:h-full w-full object-cover object-top mask-image-bottom drop-shadow-2xl z-10"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
            }}
          />
        </motion.div>

        {/* Bottom row: Description & Contact - Compact but readable */}
        <div className="relative z-40 w-full mt-6 lg:mt-auto pb-4 flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 lg:gap-0 text-center lg:text-left">
          
          {/* Description & Links */}
          <div className="flex flex-col gap-4 lg:gap-6 lg:max-w-md w-full lg:w-auto">
            <p className="text-[#A3A3A3] text-[14px] md:text-base leading-snug lg:leading-relaxed px-6 lg:px-0">
              I’m a UI/UX designer focused on creating clean, modern, and user-friendly digital experiences. I have experience working on live, remote, and freelance projects, combining strong visual design with usability to build interfaces that are both functional and impactful.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-[13px] lg:text-[14px] font-bold text-[#c0c0c0] tracking-wide">
              <span className="flex items-center gap-2"><span className="text-[#D49474] font-bold">/</span> <a href="https://www.figma.com/design/nmnrv3ZwdPWbVPR0aJHHUj/Figma-Portfolio?node-id=0-1&p=f&t=T2ZxAhUdLr0NaVGb-0" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Figma</a></span>
              <span className="flex items-center gap-2"><span className="text-[#D49474] font-bold">/</span> <a href="https://www.behance.net/Muhaimin_UIUX" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Behance</a></span>
              <span className="flex items-center gap-2"><span className="text-[#D49474] font-bold">/</span> <a href="https://www.linkedin.com/in/syed-muhaimin-615336341/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Linkedin</a></span>
              <span className="flex items-center gap-2"><span className="text-[#D49474] font-bold">/</span> <a href="https://dribbble.com/Syed_Muhaimin" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Dribbble</a></span>
            </div>
          </div>

          {/* Left/Mobile-Bottom: Contact Info */}
          <div className="flex flex-col gap-2.5 text-sm md:text-[15px] font-bold text-[#E5E5E5] tracking-wide order-2 lg:order-1 mt-4 lg:mt-0">
            <p className="flex flex-col lg:flex-row items-center gap-1 lg:gap-2">
              <span className="opacity-70 font-medium">Gmail:</span> <a href="mailto:muhaiminhussain30@gmail.com" className="hover:text-[#D49474] transition-colors">muhaiminhussain30@gmail.com</a>
            </p>
            <p className="flex flex-col lg:flex-row items-center gap-1 lg:gap-2">
              <span className="opacity-70 font-medium">Whats app:</span> <a href="https://wa.me/8801825297541" target="_blank" rel="noopener noreferrer" className="hover:text-[#D49474] transition-colors">01825297541</a>
            </p>
          </div>
        </div>

      </section>
    </>
  );
}
