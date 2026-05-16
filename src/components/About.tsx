import { motion } from 'motion/react';
import aboutImg from '../assest/muhaimin personal portfolio website/about section pic.png';


export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 w-full mx-auto relative">
      
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col text-left"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#D49474] font-bold">/</span>
            <span className="text-[#E5E5E5] font-bold text-sm tracking-wide">About Me</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-justify lg:text-[64px] font-display font-bold text-[#E5E5E5] mb-10 tracking-wide uppercase leading-none">
            GET TO KNOW ME
          </h2>
          
          <div className="space-y-6 text-[#A3A3A3] text-[15px] md:text-base leading-[1.8] max-w-[540px]">
            <p>
              Hey there! I'm Syed Muhaimin, a UI/UX designer with 2 years of experience and a passion for creating intuitive and visually appealing designs. I've successfully worked on more than 10 projects, and I know how challenging it can be to find reliable help for design.
            </p>
            <p>
              That's why I'm here to make things easy for you. Unlike dealing with freelancers or expensive agencies, I offer unlimited design services through a monthly subscription. Whether it's a website, branding, mobile apps – you name it, I've got it covered.
            </p>
            <p>
              As a designer, I am eager to help businesses enhance their visuals, improve efficiency, and worry less about resources. Let's chat! Choose a plan or book a free call, and I'll figure out how to tackle your business challenges together.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[500px] md:h-[600px] xl:h-[700px] w-full"
        >
          <img 
            src={aboutImg} 
            alt="Syed Muhaimin" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
