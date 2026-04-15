import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import heroImg from '../assets/hero-character.png';

const Hero = () => {
  return (
    <section id="home" className="pt-40 pb-24 bg-magazine min-h-[95vh] flex items-center">
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12 w-full">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-16 md:mb-0">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tighter">
              Hi, I'm <span className="text-[#B89B72]">Deepak</span>
              <br />
              Freelance Developer
            </h1>
            <p className="text-2xl text-gray-500 mb-12 max-w-xl leading-relaxed font-light">
              I create stunning websites and applications that help businesses grow. With expertise in modern web technologies, I deliver high-quality solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-6">
              <Link 
                smooth
                to="/#portfolio" 
                className="bg-gray-900 border-2 border-gray-900 hover:bg-[#B89B72] hover:border-[#B89B72] text-white font-bold py-5 px-12 rounded-full transition-all text-center uppercase text-xs tracking-[0.3em] shadow-2xl"
              >
                View My Work
              </Link>
              <Link 
                smooth
                to="/#pricing" 
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold py-5 px-12 rounded-full transition-all text-center uppercase text-xs tracking-[0.3em]"
              >
                See Pricing
              </Link>
            </div>
            
            <div className="mt-16 flex flex-wrap gap-16">
              <div>
                <div className="text-5xl font-black text-gray-900 tracking-tighter">50+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mt-2">Projects Completed</div>
              </div>
              <div>
                <div className="text-5xl font-black text-gray-900 tracking-tighter">30+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mt-2">Happy Clients</div>
              </div>
              <div>
                <div className="text-5xl font-black text-gray-900 tracking-tighter">5+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mt-2">Years of Exp.</div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-xl aspect-square flex items-center justify-center">
              {/* Animated Circles behind image */}
              <div className="absolute inset-0 bg-[#B89B72]/10 rounded-full animate-pulse" />
              <div className="absolute inset-10 border border-[#B89B72]/20 rounded-full" />
              <div className="absolute inset-20 border border-[#B89B72]/30 rounded-full" />
              
              <div className="relative w-[110%] h-[110%] overflow-hidden rounded-full border-[12px] border-white shadow-2xl bg-white/50 backdrop-blur-sm">
                <img 
                  src={heroImg} 
                  alt="Deepak Mathew" 
                  className="w-full h-full object-cover object-top scale-110 fade-in pt-10"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 z-20">
                <div className="text-[#B89B72] font-black text-3xl tracking-tighter">5.0 Rating</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-black mt-1">Global Client Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;