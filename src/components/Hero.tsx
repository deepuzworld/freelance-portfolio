import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import heroImg from '../assets/hero-character.png';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-magazine min-h-[90vh] flex items-center">
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12 w-full">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Hi, I'm <span className="text-[#B89B72]">Deepak</span>
              <br />
              Freelance Developer
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed font-light">
              I create stunning websites and applications that help businesses grow. With expertise in modern web technologies, I deliver high-quality solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                smooth
                to="/#portfolio" 
                className="bg-gray-900 border-2 border-gray-900 hover:bg-[#B89B72] hover:border-[#B89B72] text-white font-bold py-4 px-10 rounded-full transition-all text-center uppercase text-xs tracking-widest shadow-xl"
              >
                View My Work
              </Link>
              <Link 
                smooth
                to="/#pricing" 
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold py-4 px-10 rounded-full transition-all text-center uppercase text-xs tracking-widest"
              >
                See Pricing
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-12">
              <div>
                <div className="text-4xl font-black text-gray-900">50+</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mt-1">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-black text-gray-900">30+</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mt-1">Clients</div>
              </div>
              <div>
                <div className="text-4xl font-black text-gray-900">5+</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mt-1">Experience</div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-[#B89B72]/10 rounded-full blur-3xl" />
              <img 
                src={heroImg} 
                alt="Deepak Mathew" 
                className="relative w-full h-auto drop-shadow-2xl fade-in z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 z-20">
                <div className="text-[#B89B72] font-black text-xl">5.0 Rating</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest font-bold">Client Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;