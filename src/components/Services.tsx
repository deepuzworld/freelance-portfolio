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
    // ... same services data ...
    {
      title: "Static/Informative Websites",
      description: "Perfect for personal profiles, portfolios, and landing pages. Clean, fast-loading, and SEO-optimized.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Fast Loading",
        "Modern UI/UX"
      ]
    },
    {
      title: "Business Websites",
      description: "Professional corporate websites with contact forms, Google Maps integration, and content management.",
      features: [
        "Contact Forms",
        "Maps Integration",
        "CMS Integration",
        "Analytics Setup"
      ]
    },
    {
      title: "Dynamic/E-commerce",
      description: "Full-featured e-commerce platforms with admin panels, payment gateways, and inventory management.",
      features: [
        "Admin Dashboard",
        "Payment Gateway",
        "User Authentication",
        "Database Integration"
      ]
    }
  ];

  return (
    <section id="services" className="py-32 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">What I Can Do For You</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From simple landing pages to complex web applications, I deliver solutions tailored to your business needs.
          </p>
        </div>
        
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-12 shadow-xl hover:shadow-2xl transition-all flex flex-col h-full min-w-[85vw] md:min-w-0 snap-center relative overflow-hidden group border border-gray-100 dark:border-gray-700"
            >
              {/* Number indicator */}
              <div className="absolute top-10 left-12 w-14 h-14 bg-[#F8F7F0] dark:bg-gray-700 rounded-2xl flex items-center justify-center text-xl font-black text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
                {index + 1}
              </div>
              
              <div className="flex-grow pt-20">
                <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6 leading-tight">{service.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-10 leading-relaxed font-medium">{service.description}</p>
                <ul className="space-y-4 mb-12">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-[#C5A059] mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300 font-bold text-sm tracking-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link 
                to={`/service/${service.title.toLowerCase().replace('/', '-').replace(' ', '-')}`}
                className="w-full py-5 px-6 rounded-2xl font-black tracking-[0.2em] uppercase text-[10px] transition-all bg-[#F9F9F9] hover:bg-gray-900 hover:text-white text-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white block text-center mt-auto shadow-sm"
              >
                LEARN MORE
              </Link>
            </div>
          ))}
        </div>

        {/* Desktop grid handles alignment, so we only show dots on mobile */}
        <div className="flex justify-center space-x-2 mt-4 md:hidden">
          {services.map((_, index) => (
            <div 
              key={index} 
              className={`h-2 transition-all duration-300 rounded-full ${index === activeIndex ? 'w-8 bg-emerald-500' : 'w-2 bg-gray-300 dark:bg-gray-700'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;