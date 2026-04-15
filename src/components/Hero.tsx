import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import heroImg from '../assets/hero-character.png';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-20 min-h-screen flex flex-col items-center bg-magazine">
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12 w-full">
        
        {/* Giant Hero Text + Character */}
        <div className="relative flex flex-col items-center justify-center mb-16">
          <h1 className="text-[15vw] md:text-[18vw] font-black leading-none text-gray-900/5 select-none font-display pointer-events-none">
            PORTFOLIO
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] md:w-[40vw] max-w-md">
            <img 
              src={heroImg} 
              alt="Professional Developer" 
              className="w-full h-auto drop-shadow-2xl fade-in"
            />
          </div>
          <div className="absolute bottom-[5vw] left-1/2 -translate-x-1/2 text-center">
             <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-[#B89B72]">Deepak Mathew</h2>
          </div>
        </div>

        {/* Bio Section - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 border-t border-gray-200 pt-16">
          
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">Biography</h3>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-800">
              Hi, I'm <span className="font-bold text-gray-900 border-b-2 border-[#B89B72]">Deepak</span>. <br/>
              A Full-stack Developer who questions the "why" to build things that feel "right". I bridge the gap between complex logic and effortless design.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">Experience</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">Lead Web Architect</h4>
                  <p className="text-sm text-gray-500">Global Tech Solutions</p>
                </div>
                <span className="text-xs font-bold text-[#B89B72]">2022 — PRE</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">Senior React Developer</h4>
                  <p className="text-sm text-gray-500">Creative Pixel Agency</p>
                </div>
                <span className="text-xs font-bold text-gray-400">2020 — 2022</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">Freelance UI Engineer</h4>
                  <p className="text-sm text-gray-500">Digital Nomads Corp</p>
                </div>
                <span className="text-xs font-bold text-gray-400">2018 — 2020</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">Contact</h3>
              <div className="flex flex-col space-y-2">
                <a href="mailto:hello@deepak.dev" className="text-lg hover:text-[#B89B72] transition-colors">hello@deepak.dev</a>
                <a href="https://linkedin.com" className="text-lg hover:text-[#B89B72] transition-colors">LinkedIn // Deepak</a>
              </div>
            </div>
            <div className="flex gap-4">
              <Link smooth to="/#portfolio" className="bg-[#1A1A1A] text-white px-8 py-4 rounded-none uppercase font-bold text-xs tracking-widest hover:bg-[#B89B72] transition-all">
                View Work
              </Link>
              <Link smooth to="/#contact" className="border border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-none uppercase font-bold text-xs tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all">
                Hire Me
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;