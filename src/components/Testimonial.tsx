import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import abuTaherImg from '../assest/muhaimin personal portfolio website/Md Abu Taher testimonial.png';
import saadmanImg from '../assest/muhaimin personal portfolio website/Saadman testimonial.png';

const testimonials = [
  {
    quote: "Working with him was a great experience. He understood the project requirements clearly and delivered a clean, modern, and user-friendly design that perfectly matched our brand identity.",
    author: "Md Abu Taher",
    role: "Co-Founder of Buraq Lab",
    image: abuTaherImg
  },
  {
    quote: "Very professional and creative UI/UX designer. The entire workflow was smooth, communication was excellent, and the final result exceeded our expectations in both usability and visual quality.",
    author: "Md Saadman",
    role: "Co-Founder of Digiwinners",
    image: saadmanImg
  }
];

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonial" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 w-full mx-auto relative overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20 relative z-10">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#D49474] font-bold">/</span>
            <span className="text-[#E5E5E5] font-bold text-sm tracking-wide">Testimonial</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-display font-bold text-[#E5E5E5] tracking-wide uppercase leading-[1.1] max-w-2xl mt-4">
            WHAT CLIENTS SAY<br />ABOUT ME
          </h2>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="max-w-md lg:mt-16"
        >
          <p className="text-[#A3A3A3] text-[15px] md:text-base leading-[1.8]">
            Real feedback from clients and collaborators highlighting the quality, creativity, and user-focused approach behind every design project.
          </p>
        </motion.div>
      </div>

      <div className="relative h-[450px] md:h-[350px] lg:h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 relative z-10 w-full"
          >
            <div className="max-w-3xl">
              <p className="text-2xl md:text-3xl lg:text-[40px] font-bold tracking-wide leading-[1.4] text-[#E5E5E5] mb-12">
                {testimonials[currentIndex].quote}
              </p>

              <div className="flex items-center gap-4">
                <button 
                  onClick={prev}
                  className="w-12 h-12 bg-[#D49474] hover:bg-[#c58565] text-black flex items-center justify-center transition-colors rounded group"
                >
                  <ChevronLeft size={24} strokeWidth={2.5} className="group-active:scale-90 transition-transform" />
                </button>
                <button 
                  onClick={next}
                  className="w-12 h-12 bg-[#D49474] hover:bg-[#c58565] text-black flex items-center justify-center transition-colors rounded group"
                >
                  <ChevronRight size={24} strokeWidth={2.5} className="group-active:scale-90 transition-transform" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-24 h-32 md:w-28 md:h-36 bg-[#252525] shrink-0 overflow-hidden">
                 <img 
                   src={testimonials[currentIndex].image} 
                   alt={testimonials[currentIndex].author} 
                   className="w-full h-full object-cover" 
                 />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#E5E5E5] mb-1">{testimonials[currentIndex].author}</h4>
                <p className="text-sm text-[#A3A3A3]">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
