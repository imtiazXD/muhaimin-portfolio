import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download, Sparkle } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { name: 'Home', href: '#home', active: true },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Services', href: '#services' },
  { name: 'Project', href: '#projects' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 inset-x-0 z-[100]">
      <nav className="w-full mx-auto px-6 lg:px-20 h-20 md:h-24 flex items-center justify-between border-b border-white/5 backdrop-blur-sm lg:backdrop-blur-none bg-[#151515]/20 lg:bg-transparent">
        <a href="#home" className="flex items-center gap-2 text-lg font-display font-bold tracking-widest text-[#D1D1D1] hover:text-white transition-colors">
          MUHAIMIN <Sparkle className="text-[#D49474] w-5 h-5 fill-current" /> UIUX
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`text-sm font-semibold transition-colors px-6 py-2 rounded-full ${
                  item.active 
                    ? 'bg-[#D49474] text-black' 
                    : 'text-[#A3A3A3] hover:text-white'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#cv" className="flex items-center gap-3 text-[13px] font-bold tracking-widest text-[#e5e5e5] hover:text-white transition-colors">
            GET THE CV 
            <span className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg transition-transform hover:scale-105">
              <Download size={18} strokeWidth={2.5} />
            </span>
          </a>
          <a href="#contact" className="bg-[#D49474] text-black px-7 py-3 rounded-xl hover:bg-[#c58565] transition-all font-bold text-sm tracking-wide shadow-lg active:scale-95">
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-[calc(100%+12px)] left-6 right-6 bg-[#1A1A1A]/95 backdrop-blur-2xl border border-white/10 rounded-[24px] py-8 px-6 flex flex-col items-center gap-6 shadow-2xl z-[110]"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-lg font-bold ${item.active ? 'text-[#D49474]' : 'text-[#A3A3A3]'} hover:text-white`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="w-full h-px bg-white/10 my-2" />
            <a href="#cv" className="flex items-center gap-3 text-sm font-bold text-white uppercase tracking-widest">
              Get the CV <Download size={18} />
            </a>
            <a href="#contact" className="w-full bg-[#D49474] text-black py-4 rounded-2xl text-center font-bold tracking-widest text-sm shadow-lg">
              GET STARTED
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
