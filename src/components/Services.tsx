import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  const services = [
    {
      id: "A",
      title: "Static/Informative",
      description: "Perfect for personal profiles, portfolios, and landing pages. Clean, fast-loading, and SEO-optimized.",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Modern UI/UX"]
    },
    {
      id: "B",
      title: "Business Solutions",
      description: "Professional corporate websites with contact forms, Google Maps integration, and content management.",
      features: ["Contact Forms", "Maps Integration", "CMS Integration", "Analytics Setup"]
    },
    {
      id: "C",
      title: "Dynamic Systems",
      description: "Full-featured e-commerce platforms with admin panels, payment gateways, and inventory management.",
      features: ["Admin Dashboard", "Payment Gateway", "User Auth", "DB Integration"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-magazine">
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-gray-100 pb-12">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-black font-display text-gray-900 tracking-tighter italic">Capabilities</h2>
            <p className="text-xl text-gray-500 mt-6 font-light">
              Designing and developing digital products that solve real problems.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
             <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Services // 01 — 03</span>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-16 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group flex-shrink-0 w-[85vw] md:w-auto snap-center space-y-8"
            >
              <span className="text-4xl font-black font-display text-[#B89B72]/20 group-hover:text-[#B89B72] transition-colors duration-500 italic">
                {service.id} //
              </span>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-bold font-display text-gray-900 leading-tight">{service.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{service.description}</p>
              </div>

              <ul className="space-y-4 border-t border-gray-100 pt-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-900 transition-colors">
                    <span className="w-2 h-2 bg-[#B89B72] mr-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to={`/service/${service.title.toLowerCase().replace(' ', '-')}`}
                className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-[#B89B72] hover:border-[#B89B72] transition-all"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="flex justify-center space-x-2 mt-8 md:hidden">
          {services.map((_, index) => (
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

export default Services;