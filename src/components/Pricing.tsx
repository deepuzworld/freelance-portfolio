import React, { useState, useRef } from 'react';

const Pricing = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  const plans = [
    {
      name: "Starter",
      price: "15K",
      description: "For personal profiles and simple landing pages",
      features: ["5 Pages", "Responsive", "Contact Forms", "Basic SEO", "Fast Loading"]
    },
    {
      name: "Business",
      price: "25K",
      description: "Ideal for small businesses and growing companies",
      features: ["10 Pages", "Custom Design", "Advanced SEO", "Google Maps", "Blog/News", "Analytics"]
    },
    {
      name: "Enterprise",
      price: "40K+",
      description: "For e-commerce and complex web applications",
      features: ["Unlimited Pages", "Custom Logic", "User Auth", "Payment Systems", "Admin Panel", "Priority Support"]
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-magazine border-t border-gray-100">
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <div className="max-w-xl">
             <h2 className="text-5xl md:text-7xl font-black font-display text-gray-900 tracking-tighter italic">Investment</h2>
             <p className="text-xl text-gray-500 mt-6 font-light">Transparent pricing for quality-driven results.</p>
          </div>
          <div className="mt-8 md:mt-0">
             <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Plans // 2024</span>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
        >
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="group flex-shrink-0 w-[85vw] md:w-auto snap-center bg-white border border-gray-100 p-12 flex flex-col justify-between hover:border-gray-900 transition-all duration-500"
            >
              <div className="space-y-10">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold uppercase tracking-widest text-[#B89B72]">{plan.name}</h3>
                  <span className="text-[10px] font-bold text-gray-300">CURRENCY // INR</span>
                </div>
                
                <div className="space-y-2">
                   <p className="text-6xl font-black font-display text-gray-900">₹{plan.price}</p>
                   <p className="text-xs text-gray-400 font-light uppercase tracking-widest">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 border-t border-gray-100 pt-10">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-[10px] font-bold uppercase tracking-wider text-gray-500">
                      <span className="w-1.5 h-1.5 bg-gray-200 rounded-full mr-4 group-hover:bg-[#B89B72] transition-colors" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="mt-16 w-full py-5 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#B89B72] transition-all">
                Select Plan
              </button>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="flex justify-center space-x-2 mt-8 md:hidden">
          {plans.map((_, index) => (
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

export default Pricing;