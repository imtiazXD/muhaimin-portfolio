import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import profileImg from '../assest/muhaimin personal portfolio website/hero section profile pic.png';



export function Hero() {
  return (
    <>
      {/* Background glow behind image */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D49474]/15 blur-[120px] rounded-full pointer-events-none z-0" />
      
      {/* Decorative large low-opacity circle on the right */}
      <div className="absolute top-[40%] right-[-100px] w-[300px] h-[300px] bg-[#D49474]/5 rounded-full pointer-events-none z-0" />

      <section id="home" className="pt-24 pb-6 md:pt-32 md:pb-8 px-6 md:px-12 lg:px-20 min-h-[90dvh] flex flex-col w-full mx-auto relative z-10 overflow-hidden">
        
        {/* Top Part: Greeting */}
        <div className="relative z-10 w-full mb-1">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#E5E5E5] text-lg md:text-xl lg:text-[22px] font-bold tracking-wide"
          >
            Hey, 👋 I'm a UIUX Designer
          </motion.h2>
        </div>

        {/* Massive Title using flex justify-between for perfect stretch */}
        <div className="relative z-10 w-full mt-2">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.2
                }
              }
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

        {/* Center overspilling image container */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[400px] sm:w-[500px] lg:w-[650px] h-[70vh] max-h-[850px] z-30 pointer-events-none flex justify-center items-end"
        >
           <img 
            src={profileImg} 
            alt="Muhaimin" 
            className="h-full object-cover object-center border-b-0 mask-image-bottom drop-shadow-2xl opacity-100"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
            }}
          />
        </motion.div>

        {/* Middle/Bottom Floating Elements */}
        
        {/* Decorative sphere (left) */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-10 lg:left-[5%] top-[55%] w-20 h-20 lg:w-28 lg:h-28 rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.8),inset_10px_10px_20px_rgba(255,255,255,0.3)] opacity-100 z-20" 
          style={{ background: 'radial-gradient(circle at 30% 30%, #555 0%, #151515 80%)' }} 
        />
        
        {/* Play badge (right middle) */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
          className="absolute right-6 lg:right-[8%] top-[48%] hidden lg:flex items-center justify-center w-[120px] h-[120px] z-40"
        >
          <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            <text className="text-[12px] font-bold tracking-[0.25em] fill-[#D49474] uppercase">
              <textPath href="#circlePath" startOffset="0%">
                NO LIMITS - NO WIRES • NO LIMITS - NO WIRES •
              </textPath>
            </text>
          </svg>
          <div className="bg-[#111] p-3.5 rounded-full border border-white/5 z-10 shadow-xl">
            <Play className="fill-[#1A2544] text-[#1A2544] ml-0.5" size={18} />
          </div>
        </motion.div>

        {/* Bottom row */}
        <div className="relative z-40 w-full mt-auto pb-2 flex flex-col lg:flex-row justify-between items-end gap-10 lg:gap-0">
          
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-2.5 text-sm md:text-[15px] font-bold text-[#E5E5E5] tracking-wide mt-32 lg:mt-0">
            <p className="flex items-center gap-2">
              <span className="opacity-90">Gmail:</span> muhaiminhussain30@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <span className="opacity-90">Whats app:</span> 01825297541
            </p>
          </div>

          {/* Right: Intro & Links */}
          <div className="flex flex-col gap-6 lg:text-left lg:max-w-md w-full lg:w-auto">
            <p className="text-[#A3A3A3] text-[15px] md:text-base leading-relaxed">
              I'm a UI/UX designer focused on creating clean, modern, and user-friendly digital experiences. I have experience working on live, remote, and freelance projects, combining strong visual design with usability to build interfaces that are both functional and impactful.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-[15px] font-medium text-[#c0c0c0]">
              <span className="text-[#D49474] font-bold">/</span> <a href="https://www.figma.com/design/nmnrv3ZwdPWbVPR0aJHHUj/Figma-Portfolio?node-id=0-1&t=ROz5jdMTfxzyv1AT-1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Figma</a>
              <span className="text-[#D49474] font-bold">/</span> <a href="https://www.behance.net/Muhaimin_UIUX" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Behance</a>
              <span className="text-[#D49474] font-bold">/</span> <a href="https://www.linkedin.com/in/syed-muhaimin-615336341/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Linkedin</a>
              <span className="text-[#D49474] font-bold">/</span> <a href="https://dribbble.com/Syed_Muhaimin" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Dribbble</a>
              <span className="text-[#D49474] font-bold">/</span> <a href="https://www.facebook.com/muhaimin.uiux/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
              <span className="text-[#D49474] font-bold">/</span> <a href="https://www.instagram.com/muhaimin_uiux/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>

        </div>

      </section>
    </>
  );
}
