import React, { useState, useRef } from 'react';

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  const projects = [
    // ... projects data ...
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with payment integration",
      tags: ["React", "Node.js", "MongoDB"],
      image: "ecommerce"
    },
    {
      title: "Corporate Website",
      description: "Modern responsive website for a financial services company",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "corporate"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile application for banking transactions",
      tags: ["React Native", "Firebase"],
      image: "banking"
    },
    {
      title: "Restaurant Booking System",
      description: "Online reservation system with real-time availability",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      image: "restaurant"
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-[#F8F7F0] dark:bg-gray-800">
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">Selected Works</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A showcase of my recent projects, demonstrating expertise in building scalable and high-performance applications.
          </p>
        </div>
        
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        >
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all flex-shrink-0 w-[85vw] md:w-auto snap-center border border-gray-100 dark:border-gray-800 group">
              <div className="h-64 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 transform transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center group/btn">
                  <span className="text-[#C5A059] group-hover/btn:underline font-black uppercase tracking-widest text-xs cursor-pointer">
                    View Project
                  </span>
                  <svg className="w-4 h-4 ml-2 text-[#C5A059] transform transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* mobile dots */}
        <div className="flex justify-center space-x-2 mt-4 md:hidden">
          {projects.map((_, index) => (
            <div 
              key={index} 
              className={`h-2 transition-all duration-300 rounded-full ${index === activeIndex ? 'w-8 bg-[#C5A059]' : 'w-2 bg-gray-300 dark:bg-gray-700'}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-20">
          <button className="bg-[#12141D] hover:bg-black text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs transition-all shadow-xl hover:scale-105">
            LOAD MORE PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;