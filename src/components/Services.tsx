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
      title: "Static/Informative Websites",
      description: "Perfect for personal profiles, portfolios, and landing pages. Clean, fast-loading, and SEO-optimized.",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Modern UI/UX"]
    },
    {
      title: "Business Websites",
      description: "Professional corporate websites with contact forms, Google Maps integration, and content management.",
      features: ["Contact Forms", "Maps Integration", "CMS Integration", "Analytics Setup"]
    },
    {
      title: "Dynamic/E-commerce",
      description: "Full-featured e-commerce platforms with admin panels, payment gateways, and inventory management.",
      features: ["Admin Dashboard", "Payment Gateway", "User Auth", "Database Integration"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-magazine">
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">What I Can Do For You</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
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
              className="bg-white border border-gray-100 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full min-w-[85vw] md:min-w-0 snap-center group hover:-translate-y-2"
            >
              <div className="flex-grow">
                <div className="w-14 h-14 bg-[#B89B72]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#B89B72] transition-colors duration-500">
                  <span className="text-2xl font-black text-[#B89B72] group-hover:text-white">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-500 mb-8 font-light leading-relaxed">{service.description}</p>
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-5 h-5 text-[#B89B72] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link 
                to={`/service/${service.title.toLowerCase().replace('/', '-').replace(' ', '-')}`}
                className="w-full py-4 bg-gray-50 hover:bg-gray-900 text-gray-900 hover:text-white rounded-2xl font-bold transition-all text-center uppercase text-[10px] tracking-widest mt-auto shadow-sm"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="flex justify-center space-x-2 mt-8 md:hidden">
          {services.map((_, index) => (
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

export default Services;