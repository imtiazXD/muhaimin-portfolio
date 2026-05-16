import { motion } from 'motion/react';
import { Monitor } from 'lucide-react';

// Import images from assets
import dashboardImg from '../assest/muhaimin personal portfolio website/Dashboard.png';
import dashboard1Img from '../assest/muhaimin personal portfolio website/Dashboard(1).png';
import dashboard2Img from '../assest/muhaimin personal portfolio website/Dashboard(2).png';
import mobileImg from '../assest/muhaimin personal portfolio website/Mobile app Design.png';
import mobile1Img from '../assest/muhaimin personal portfolio website/Mobile app Design(1).png';
import webImg from '../assest/muhaimin personal portfolio website/Web Design.jpg';
import web1Img from '../assest/muhaimin personal portfolio website/Web Design(1).jpg';
import web2Img from '../assest/muhaimin personal portfolio website/Web Design(2).jpg';

const services = [
  {
    id: 'dashboard',
    title: 'Dashboard Design',
    description: 'Designing clean and data-focused dashboard interfaces that simplify complex information and improve user workflow, usability, and decision-making.',
    images: [dashboardImg, dashboard1Img, dashboard2Img],
    tags: ['Dashboard UI', 'Admin Panel', 'Design System', '+more'],
    highlight: false,
  },
  {
    id: 'mobile',
    title: 'Mobile app Design',
    description: 'Creating modern and user-friendly mobile app experiences with intuitive navigation, responsive layouts, and visually engaging interfaces.',
    images: [mobileImg, mobile1Img, mobileImg], // Using mobileImg twice as there are only 2 mobile design images
    tags: ['App Design', 'Design system', 'Prototyping', '+more'],
    highlight: true,
  },
  {
    id: 'web',
    title: 'Web Design',
    description: 'Crafting responsive and conversion-focused website designs that balance aesthetics, usability, and seamless user experiences across devices.',
    images: [webImg, web1Img, web2Img],
    tags: ['Web design', 'Landing Page', 'Wireframing', '+more'],
    highlight: false,
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 w-full mx-auto relative">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#D49474] font-bold">/</span>
            <span className="text-[#E5E5E5] font-bold text-sm tracking-wide">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-display font-bold text-[#E5E5E5] tracking-wide uppercase leading-[1.1] max-w-2xl">
            CREATIVE DESIGN<br />SERVICES
          </h2>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="max-w-md lg:mt-12"
        >
          <p className="text-[#A3A3A3] text-[15px] md:text-base leading-[1.8]">
            Crafting modern, user-centered, and visually engaging digital experiences that improve usability and drive better user interaction.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col rounded-[32px] p-2 gap-2 ${
              service.highlight 
                ? 'bg-[#B45A2C]' 
                : 'bg-[#E5E5E5]'
            }`}
          >
            {/* Header */}
            <div className={`px-6 py-4 flex justify-between items-center rounded-[24px] ${
              service.highlight ? 'bg-[#D49474]' : 'bg-[#121212]'
            }`}>
              <h3 className={`text-xl front-medium tracking-wide ${
                 service.highlight ? 'text-white font-semibold' : 'text-[#E5E5E5]'
              }`}>
                {service.title}
              </h3>
              <div className="bg-[#E5E5E5] w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                <Monitor className={`size-5 stroke-[2.5] ${service.highlight ? 'text-[#D49474]' : 'text-[#D49474]'}`} />
              </div>
            </div>

            {/* Body */}
            <div className={`p-6 flex flex-col flex-1 rounded-[24px] ${
              service.highlight ? 'bg-[#D49474]' : 'bg-[#121212]'
            }`}>
              <p className={`text-sm mb-8 leading-[1.7] ${
                service.highlight ? 'text-white/95' : 'text-[#A3A3A3]'
              }`}>
                {service.description}
              </p>

              <div className="flex gap-3 mb-8">
                {service.images.map((img, i) => (
                  <div key={i} className="flex-1 aspect-[4/5] rounded-2xl overflow-hidden bg-black/20">
                    <img 
                      src={img} 
                      alt={`${service.title} example ${i + 1}`} 
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity hover:scale-105 duration-500"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map(tag => (
                  <span 
                    key={tag}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide ${
                      service.highlight 
                        ? 'bg-transparent border border-white/40 text-white' 
                        : 'bg-[#E5E5E5] text-black'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
