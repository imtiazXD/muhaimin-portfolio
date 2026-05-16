/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkGallery } from './components/WorkGallery';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Testimonial } from './components/Testimonial';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#151515] text-[#ededed] selection:bg-[#D49474]/30 selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WorkGallery />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Skills />
        <Testimonial />
        <Faq />
        <Contact />
      </main>
    </div>
  );
}

