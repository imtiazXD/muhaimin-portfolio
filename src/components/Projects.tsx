import { motion } from 'motion/react';

// Import images from assets
import carelinkImg from '../assest/muhaimin personal portfolio website/Carelink.jpg';
import kortoImg from '../assest/muhaimin personal portfolio website/Korto.jpg';
import morphImg from '../assest/muhaimin personal portfolio website/Morph.png';
import healthcareImg from '../assest/muhaimin personal portfolio website/Heath Care.jpg';
import blabImg from '../assest/muhaimin personal portfolio website/Digital agency B-Lab.jpg';
import visuverseImg from '../assest/muhaimin personal portfolio website/VisuVerse.jpg';
import careeaseImg from '../assest/muhaimin personal portfolio website/CareEase.png';
import mobileDesignImg from '../assest/muhaimin personal portfolio website/Mobile app Design.png';


const projects = [
  {
    title: 'Carelink',
    description: 'Designed a comprehensive healthcare platform focused on patient care and medical services, featuring intuitive navigation and a professional, trustworthy aesthetic.',
    image: carelinkImg,
    platform: 'Figma',
    platformIcon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    link: '#'
  },
  {
    title: 'CareEase',
    description: 'A streamlined healthcare application designed to simplify patient management and appointment scheduling, focusing on user accessibility and efficient data handling.',
    image: careeaseImg,
    platform: 'Figma',
    platformIcon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    link: '#'
  },
  {
    title: 'Korto',
    description: 'Designed a modern healthcare website focused on eye care services, creating a clean and trustworthy user experience with accessible layouts, smooth navigation, and patient-friendly design.',
    image: kortoImg,
    platform: 'Figma',
    platformIcon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    link: '#'
  },
  {
    title: 'Morph',
    description: 'Designed a creative and collaborative digital experience that encourages idea sharing, teamwork, and seamless interaction through modern and engaging user interfaces.',
    image: morphImg,
    platform: 'Figma',
    platformIcon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    link: '#'
  },
  {
    title: 'Health Care',
    description: 'Designed a clean and user-friendly healthcare experience focused on accessibility, patient trust, and smooth interaction through modern UI and intuitive navigation.',
    image: healthcareImg,
    platform: 'Figma',
    platformIcon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    link: '#'
  },
  {
    title: 'Mobile App Design',
    description: 'A high-fidelity mobile application design focusing on modern aesthetics, smooth transitions, and user-centric navigation for a seamless digital experience.',
    image: mobileDesignImg,
    platform: 'Figma',
    platformIcon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    link: '#'
  },
  {
    title: 'B-Lab Digital Agency',
    description: 'A modern and bold digital agency website design, showcasing services and creative work through high-impact visuals and streamlined user flows.',
    image: blabImg,
    platform: 'Behance',
    platformIcon: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Behance_logo.svg',
    link: '#'
  },
  {
    title: 'VisuVerse',
    description: 'A futuristic and immersive visual experience designed for creative professionals, focusing on portfolio showcase and interactive design elements.',
    image: visuverseImg,
    platform: 'Behance',
    platformIcon: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Behance_logo.svg',
    link: '#'
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
            whileHover={{ y: -10 }}
            className="flex flex-col group cursor-pointer"
          >
            <div className="aspect-[4/3] w-full overflow-hidden mb-6 bg-[#1A1A1A] relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-[#E5E5E5] mb-4 group-hover:text-[#D49474] transition-colors">
              {project.title}
            </h3>
            
            <p className="text-[#A3A3A3] text-[15px] leading-[1.7] mb-6 line-clamp-3">
              {project.description}
            </p>
            
            <div className="mt-auto flex items-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1A1A] group-hover:bg-[#252525] border border-white/5 transition-all group-hover:border-[#D49474]/30">
                <div className="w-4 h-4 flex items-center justify-center">
                  <img src={project.platformIcon} alt={project.platform} className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-medium text-[#D49474]">{project.platform}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mt-20"
      >
        <button className="bg-[#D49474] text-black px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#c58565] transition-colors">
          View More Projects
        </button>
      </motion.div>
    </section>
  );
}
