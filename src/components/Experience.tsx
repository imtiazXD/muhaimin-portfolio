import { motion } from 'motion/react';
import buraqLogo from '../assest/muhaimin personal portfolio website/Buraq-Lab.png';
import digiwinnersLogo from '../assest/muhaimin personal portfolio website/digiwinners.png';
import ostadLogo from '../assest/muhaimin personal portfolio website/Ostad.png';

const experiences = [
  {
    company: 'BURAQ LAB',
    role: 'JUNIOR UIUX DESIGNER',
    date: '[ SEP 2025 - PRESENT ]',
    description: 'Designed clean and modern UI/UX experiences focused on usability, accessibility, and user engagement. Created intuitive web interfaces and design systems to improve overall product experience.',
    logo: buraqLogo
  },
  {
    company: 'DIGIWINNERS',
    role: 'FREELANCE UIUX DESIGNER (PROJECT BASED)',
    date: '[ NOV 2025 - PRESENT ]',
    description: 'Worked as a freelance UI/UX designer on project-based products, crafting responsive and conversion-focused user interfaces for web and mobile platforms.',
    logo: digiwinnersLogo
  },
  {
    company: 'OSTAD',
    role: 'INTERNSHIP UIUX DESIGNER',
    date: '[ AUG 2024 - APR 2025 ]',
    description: 'Completed a professional UI/UX Design course focused on real-world product design and user-centered experiences. Learned wireframing, user flow, design systems, responsive web design, prototyping, usability principles, visual hierarchy, typography, color theory, and modern UI design practices using Figma.',
    logo: ostadLogo
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 w-full mx-auto relative">
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
              <span className="text-[#E5E5E5] font-bold text-sm tracking-wide">Experience</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-display font-bold text-[#E5E5E5] tracking-wide uppercase leading-[1.1] max-w-2xl">
              EXPLORE MY<br />
              DESIGN JOURNEY
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md"
          >
            <p className="text-[#A3A3A3] text-[15px] md:text-base leading-[1.8]">
              Passionate UI/UX designer with experience creating modern, user-focused, and responsive digital experiences through freelance, internship, and collaborative projects.
            </p>
          </motion.div>
        </div>

        {/* Experience List */}
        <div className="flex flex-col gap-12 lg:ml-auto lg:w-[65%]">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-8 items-start"
            >
              {/* Logo */}
              <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded bg-white overflow-hidden flex items-center justify-center p-2">
                <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
              </div>

              {/* Content */}
              <div className="flex flex-col w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#E5E5E5] uppercase font-display tracking-wide">
                    {exp.company}
                  </h3>
                  <span className="text-[#A3A3A3] text-sm md:text-base font-medium tracking-wider uppercase">
                    {exp.date}
                  </span>
                </div>
                
                <h4 className="text-[#E5E5E5] font-semibold text-sm md:text-base tracking-wide uppercase mb-4">
                  {exp.role}
                </h4>

                <p className="text-[#A3A3A3] leading-[1.8] text-[15px] md:text-base max-w-3xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
