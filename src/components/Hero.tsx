import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-[#F8F7F0] dark:bg-gray-900">
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-12 md:mb-0">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-tighter">
              Hi, I'm <span className="text-[#C5A059]">Deepak</span>
              <br />
              Freelance Developer
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-xl leading-relaxed">
              I create stunning websites and applications that help businesses grow. With expertise in modern web technologies, I deliver high-quality solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
              <Link 
                smooth
                to="/#portfolio" 
                className="bg-[#12141D] hover:bg-black text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs transition-all shadow-2xl hover:scale-105 text-center"
              >
                VIEW MY WORK
              </Link>
              <Link 
                smooth
                to="/#pricing" 
                className="border-2 border-[#12141D] text-[#12141D] dark:border-white dark:text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs transition-all hover:bg-gray-50 dark:hover:bg-gray-800 text-center"
              >
                SEE PRICING
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-100 dark:border-gray-800">
              <div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-gray-500 dark:text-gray-500 uppercase text-xs font-bold tracking-widest mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white">30+</div>
                <div className="text-gray-500 dark:text-gray-500 uppercase text-xs font-bold tracking-widest mt-1">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white">5+</div>
                <div className="text-gray-500 dark:text-gray-500 uppercase text-xs font-bold tracking-widest mt-1">Years of Exp.</div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center relative">
            <div className="relative group">
              <div className="w-80 h-80 md:w-[450px] md:h-[450px] bg-white dark:bg-gray-800 rounded-full overflow-hidden border-8 border-white/50 dark:border-gray-800/50 shadow-2xl relative z-10">
                <img 
                  src="/home/heyy/.gemini/antigravity/brain/7ede7e1d-0ede-4549-bdb7-8685d327017f/developer_illustration_1776281167655.png" 
                  alt="Deepak Illustration" 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-2xl z-20 border border-gray-100 dark:border-gray-700">
                <div className="text-[#C5A059] font-black text-3xl">5.0 Rating</div>
                <div className="text-gray-400 dark:text-gray-500 uppercase text-[10px] font-black tracking-[0.2em] mt-1">Direct Client Reviews</div>
              </div>
              {/* Decorative backgrounds */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full -z-0 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;