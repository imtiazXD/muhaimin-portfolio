import { motion, AnimatePresence } from 'motion/react';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I offer UI/UX design services including website design, dashboard design, mobile app design, wireframing, prototyping, and responsive interface design."
  },
  {
    question: "Which tools do you use for design?",
    answer: "I mainly use Figma for UI/UX design and prototyping, along with tools like Photoshop, Canva, and Framer when needed."
  },
  {
    question: "Do you design responsive websites?",
    answer: "Yes, I create responsive and user-friendly designs optimized for desktop, tablet, and mobile devices."
  },
  {
    question: "Can you redesign existing websites or apps?",
    answer: "Yes, I can improve outdated interfaces by creating modern, clean, and user-focused redesign solutions."
  },
  {
    question: "Do you work on freelance projects?",
    answer: "Yes, I'm available for freelance, collaborative, and project-based UI/UX design work."
  },
  {
    question: "How can we work together?",
    answer: "You can contact me through email or social platforms to discuss your project, goals, and design requirements."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 w-full mx-auto relative">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="sticky top-24"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#D49474] font-bold">/</span>
            <span className="text-[#E5E5E5] font-bold text-sm tracking-wide">Faq</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-display font-bold text-[#E5E5E5] tracking-wide uppercase leading-[1.1] mb-10">
            FREQUENTLY ASK<br className="hidden lg:block" /> QUESTION
          </h2>
          <a href="mailto:muhaiminhussain30@gmail.com" className="inline-flex bg-[#D49474] text-black px-8 py-3.5 rounded font-bold hover:bg-[#c58565] transition-colors shadow-lg">
            Email Me
          </a>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`border rounded-[24px] overflow-hidden transition-all duration-300 ${
                  isOpen ? 'bg-[#D49474] border-transparent' : 'bg-[#151515] border-white/10 hover:border-white/20'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                >
                  <span className={`font-semibold text-base md:text-lg pr-4 ${isOpen ? 'text-white' : 'text-[#E5E5E5]'}`}>
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <X className="text-white shrink-0" size={20} strokeWidth={2.5} />
                  ) : (
                    <Plus className="text-[#A3A3A3] shrink-0" size={20} strokeWidth={2.5} />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-white/90 text-[15px] md:text-base leading-[1.7]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
