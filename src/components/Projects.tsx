import { motion } from 'motion/react';

// Import images from assets
import sosoImg from '../assest/muhaimin personal portfolio website/So-So.png';
import kortoImg from '../assest/muhaimin personal portfolio website/Korto.png';
import heyazahImg from '../assest/muhaimin personal portfolio website/Heyazah.jpg';
import careeaseImg from '../assest/muhaimin personal portfolio website/CareEase.png';
import healthcareImg from '../assest/muhaimin personal portfolio website/Heath Care.jpg';
import morphImg from '../assest/muhaimin personal portfolio website/Morph.png';


const projects = [
  {
    title: 'So-So',
    description: "UI Design - It's a holistic healthcare and wellness platform guide focused on sustainable and patient-centered solutions.",
    image: sosoImg,
    platform: 'Figma',
    platformIcon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    link: 'https://www.figma.com/design/nmnrv3ZwdPWbVPR0aJHHUj/Figma-Portfolio?node-id=0-1&p=f&t=T2ZxAhUdLr0NaVGb-0'
  },
  {
    title: 'Korto',
    description: "UI Design - It's a clear vision care website for eye health, featuring modern layouts and intuitive patient-friendly design.",
    image: kortoImg,
    platform: 'Figma',
    platformIcon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    link: 'https://www.figma.com/design/nmnrv3ZwdPWbVPR0aJHHUj/Figma-Portfolio?node-id=0-1&p=f&t=T2ZxAhUdLr0NaVGb-0'
  },
  {
    title: 'Heyazah',
    description: "UI Design - It's a real estate development platform showcasing high-impact projects with a focus on luxury and functionality.",
    image: heyazahImg,
    platform: 'Figma',
    platformIcon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    link: 'https://www.figma.com/design/nmnrv3ZwdPWbVPR0aJHHUj/Figma-Portfolio?node-id=0-1&p=f&t=T2ZxAhUdLr0NaVGb-0'
  },
  {
    title: 'CareEase',
    description: "UI Design - It's a comprehensive medical service platform designed to simplify healthcare workflows and patient management.",
    image: careeaseImg,
    platform: 'Figma',
    platformIcon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    link: 'https://www.figma.com/design/nmnrv3ZwdPWbVPR0aJHHUj/Figma-Portfolio?node-id=0-1&p=f&t=T2ZxAhUdLr0NaVGb-0'
  },
  {
    title: 'Health Care',
    description: "UI Design - It's a future-forward robotic healthcare experience reimagining the digital health ecosystem.",
    image: healthcareImg,
    platform: 'Figma',
    platformIcon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    link: 'https://www.figma.com/design/nmnrv3ZwdPWbVPR0aJHHUj/Figma-Portfolio?node-id=0-1&p=f&t=T2ZxAhUdLr0NaVGb-0'
  },
  {
    title: 'Morph',
    description: "Case Study - It's a smart home application focusing on seamless device integration and intuitive home automation.",
    image: morphImg,
    platform: 'Figma',
    platformIcon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    link: 'https://www.figma.com/design/nmnrv3ZwdPWbVPR0aJHHUj/Figma-Portfolio?node-id=0-1&p=f&t=T2ZxAhUdLr0NaVGb-0'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 w-full mx-auto relative">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#D49474] font-bold">/</span>
            <span className="text-[#E5E5E5] font-bold text-sm tracking-wide">Explore Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-display font-bold text-[#E5E5E5] tracking-wide uppercase leading-[1.1] max-w-2xl mt-4">
            A SHOWCASE OF MY<br />LATEST PROJECTS
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
            A collection of modern UI/UX projects focused on usability, visual clarity, and creating seamless digital experiences.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col cursor-pointer"
          >
            <div className="aspect-[4/3] w-full overflow-hidden mb-6 bg-[#1A1A1A] relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-contain opacity-90"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            
            <h3 className="text-2xl font-bold text-[#E5E5E5] mb-4">
              {project.title}
            </h3>
            
            <p className="text-[#A3A3A3] text-[15px] leading-[1.7] mb-6 line-clamp-3">
              {project.description}
            </p>
            
            <div className="mt-auto flex items-center">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1A1A] hover:bg-[#252525] border border-white/5 transition-colors cursor-pointer"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <img src={project.platformIcon} alt={project.platform} className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-medium text-[#D49474]">{project.platform}</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
