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
      id: "01",
      title: "E-commerce Platform",
      description: "A full-featured online store with payment integration",
      tags: ["React", "Node.js", "MongoDB"],
      color: "bg-blue-500"
    },
    {
      id: "02",
      title: "Corporate Website",
      description: "Modern responsive website for a financial services company",
      tags: ["HTML", "CSS", "JavaScript"],
      color: "bg-amber-400"
    },
    {
      id: "03",
      title: "Mobile Banking App",
      description: "Secure mobile application for banking transactions",
      tags: ["React Native", "Firebase"],
      color: "bg-emerald-500"
    },
    {
      id: "04",
      title: "Restaurant Booking",
      description: "Online reservation system with real-time availability",
      tags: ["Vue.js", "Express"],
      color: "bg-rose-500"
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-magazine border-t border-gray-100">
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12">
        
        <div className="relative mb-24 overflow-hidden">
          <h2 className="text-[12vw] font-black font-display text-gray-900/5 leading-none absolute -left-8 top-0 select-none">CONTENT</h2>
          <div className="relative pt-[4vw] pl-[2vw]">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 font-display italic">Selected Work</h3>
            <p className="text-gray-400 mt-4 tracking-[0.2em] font-bold uppercase text-xs">Projects // 2018 — 2024</p>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group flex-shrink-0 w-[85vw] md:w-auto h-[600px] snap-center flex flex-col relative overflow-hidden"
            >
              {/* Background Color/Image Placeholder */}
              <div className={`absolute inset-0 ${project.color} opacity-90 transition-transform duration-700 group-hover:scale-105`} />
              
              <div className="relative h-full p-10 flex flex-col justify-between text-white">
                <span className="text-6xl font-black font-display opacity-40 italic">{project.id}</span>
                
                <div className="space-y-4">
                  <h4 className="text-3xl font-bold font-display tracking-tight leading-tight">{project.title}</h4>
                  <p className="text-sm text-white/80 font-light max-w-[200px] leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-[10px] font-bold uppercase tracking-widest border border-white/30 px-3 py-1 bg-white/10 backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                 <button className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all bg-white text-black px-8 py-3 font-bold text-xs uppercase tracking-widest">
                    View Project
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
              className={`h-1 transition-all duration-300 ${index === activeIndex ? 'w-12 bg-gray-900' : 'w-4 bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;