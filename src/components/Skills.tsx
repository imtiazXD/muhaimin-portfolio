import { motion } from 'motion/react';
import figmaLogo from '../assest/muhaimin personal portfolio website/Figma.png';
import framerLogo from '../assest/muhaimin personal portfolio website/Framer.png';
import canvaLogo from '../assest/muhaimin personal portfolio website/Canba.png';
import photoshopLogo from '../assest/muhaimin personal portfolio website/Photoshop.png';

const skills = [
  {
    name: 'FIGMA',
    role: 'DESIGN TOOL',
    description: 'Figma is a collaborative design tool for creating and prototyping user interfaces, ideal for team projects with real-time feedback.',
    logo: figmaLogo
  },
  {
    name: 'FRAMER',
    role: 'VISUAL DESIGN',
    description: 'Basic knowledge of creating responsive website layouts, simple animations, and interactive user experiences using Framer.',
    logo: framerLogo
  },
  {
    name: 'CANVA',
    role: 'DESIGN',
    description: 'Basic knowledge of creating social media designs, presentations, and simple visual content with clean layouts and typography.',
    logo: canvaLogo
  },
  {
    name: 'PHOTOSHOP',
    role: 'DESIGN',
    description: 'Basic knowledge of photo editing, image retouching, and creating simple visual assets with attention to composition and detail.',
    logo: photoshopLogo
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 w-full mx-auto relative">
      <div className="relative z-10 flex flex-col gap-16 lg:gap-24">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col text-left"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#D49474] font-bold">/</span>
              <span className="text-[#E5E5E5] font-bold text-sm tracking-wide">My Skill</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-display font-bold text-[#E5E5E5] tracking-wide uppercase leading-[1.1] max-w-2xl">
              FAVOURITE STACK
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md lg:pb-4"
          >
            <p className="text-[#A3A3A3] text-[15px] md:text-base leading-[1.8]">
              Crafting modern, user-centered, and visually engaging digital experiences that improve usability and drive better user interaction.
            </p>
          </motion.div>
        </div>

        {/* Skills List */}
        <div className="flex flex-col gap-12 lg:ml-auto lg:w-[65%]">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-8 items-start"
            >
              {/* Logo */}
              <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 flex items-center justify-center">
                <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
              </div>

              {/* Content */}
              <div className="flex flex-col w-full">
                <h3 className="text-xl md:text-2xl font-bold text-[#E5E5E5] uppercase font-display tracking-wide mb-1">
                  {skill.name}
                </h3>
                
                <h4 className="text-[#E5E5E5] font-semibold text-sm md:text-base tracking-wide uppercase mb-4">
                  {skill.role}
                </h4>

                <p className="text-[#A3A3A3] leading-[1.8] text-[15px] md:text-base max-w-3xl">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
