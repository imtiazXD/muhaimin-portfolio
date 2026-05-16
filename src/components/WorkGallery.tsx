import { motion } from 'motion/react';

import soso from '../assest/muhaimin personal portfolio website/So-So.png';
import korto from '../assest/muhaimin personal portfolio website/Korto.png';
import heyazah from '../assest/muhaimin personal portfolio website/Heyazah.jpg';
import careease from '../assest/muhaimin personal portfolio website/CareEase.png';
import healthcare from '../assest/muhaimin personal portfolio website/Heath Care.jpg';
import morph from '../assest/muhaimin personal portfolio website/Morph.png';


const galleryImages = [
  soso,
  korto,
  heyazah,
  careease,
  healthcare,
  morph
];

export function WorkGallery() {
  // Double the images for seamless infinite scroll
  const items = [...galleryImages, ...galleryImages];

  return (
    <section className="w-full relative z-20 py-12 md:py-16 overflow-hidden">
      {/* Optional fade out at edges */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#151515] to-transparent z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#151515] to-transparent z-10" />

      <motion.div 
        animate={{ x: [0, "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: 'linear', 
          duration: 30 // adjust speed
        }}
        className="flex gap-6 w-max"
      >
        {items.map((src, idx) => (
            <div 
              key={idx} 
              className="w-[300px] md:w-[450px] lg:w-[600px] shrink-0 group"
            >
              <div className="relative bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-[#D49474]/50 group-hover:shadow-[#D49474]/10">
                {/* Browser-style Top Bar */}
                <div className="h-6 md:h-8 bg-[#252525] flex items-center px-3 md:px-4 gap-1.5 border-b border-white/5">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/10" />
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/10" />
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/10" />
                </div>
                
                {/* Image Container */}
                <div className="p-1 md:p-2 bg-[#252525]">
                  <img 
                    src={src} 
                    alt={`Work preview ${idx}`} 
                    className="w-full h-auto object-top rounded-sm transition-transform duration-700 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                </div>

                {/* Inner Glow/Overlay */}
                <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-xl" />
              </div>
            </div>
        ))}
      </motion.div>
    </section>
  );
}
