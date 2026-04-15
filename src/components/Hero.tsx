import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-[1920px] mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="text-emerald-600">Alex</span>
              <br />
              Freelance Developer
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              I create stunning websites and applications that help businesses grow. With expertise in modern web technologies, I deliver high-quality solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                smooth
                to="/#portfolio" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-lg text-center"
              >
                View My Work
              </Link>
              <Link 
                smooth
                to="/#pricing" 
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-gray-800 font-medium py-3 px-8 rounded-full transition-colors text-center"
              >
                See Pricing
              </Link>
            </div>
            
            {/* <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">30+</div>
                <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </div> */}
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-emerald-500 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="text-emerald-600 font-bold">5.0 Rating</div>
                <div className="text-gray-600 dark:text-gray-400">on Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;