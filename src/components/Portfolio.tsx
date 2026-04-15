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
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with payment integration",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Corporate Website",
      description: "Modern responsive website for a financial services company",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile application for banking transactions",
      tags: ["React Native", "Firebase"],
    },
    {
      title: "Restaurant Booking System",
      description: "Online reservation system with real-time availability",
      tags: ["Vue.js", "Express", "PostgreSQL"],
    }
  ];

  return (
    <section id="portfolio" className="py-12 bg-magazine">
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">My Portfolio</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
            Check out some of my recent projects and see the quality of my work.
          </p>
        </div>
        
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        >
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex-shrink-0 w-[85vw] md:w-auto snap-center group">
              <div className="h-48 bg-gray-100 border-b border-gray-50 group-hover:bg-[#B89B72]/10 transition-colors duration-500 flex items-center justify-center">
                <span className="text-4xl font-black text-gray-200 group-hover:text-[#B89B72] transition-colors duration-500">{index + 1}</span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-6 font-light text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-50 text-gray-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full group-hover:bg-[#B89B72]/10 group-hover:text-[#B89B72] transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-[#B89B72] hover:text-gray-900 font-bold text-xs uppercase tracking-[0.2em] flex items-center transition-colors">
                  Live Demo
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* mobile dots */}
        <div className="flex justify-center space-x-2 mt-8 md:hidden">
          {projects.map((_, index) => (
            <div 
              key={index} 
              className={`h-2 transition-all duration-300 rounded-full ${index === activeIndex ? 'w-8 bg-[#B89B72]' : 'w-2 bg-gray-200'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;