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
      price: "₹15,000",
      description: "Perfect for personal profiles and simple landing pages",
      features: ["Up to 5 pages", "Mobile responsive design", "Contact form integration", "Basic SEO optimization", "Fast loading speed"],
      popular: false
    },
    {
      name: "Business",
      price: "₹25,000",
      description: "Ideal for small businesses and growing companies",
      features: ["Up to 10 pages", "Custom design & branding", "Advanced SEO optimization", "Google Maps integration", "Analytics dashboard"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹40,000",
      description: "For e-commerce and complex web applications",
      features: ["Unlimited pages", "Custom functionality", "User authentication", "Admin dashboard", "Payment gateway integration"],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-12 bg-magazine">
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
            Choose the plan that fits your needs. All plans include quality code, responsive design, and ongoing support.
          </p>
        </div>
        
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        >
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-[2rem] p-10 shadow-xl flex-shrink-0 w-[85vw] md:w-auto snap-center flex flex-col transition-all duration-500 group hover:-translate-y-2 ${
                plan.popular 
                  ? 'bg-white border-2 border-[#B89B72] relative ring-8 ring-[#B89B72]/5' 
                  : 'bg-white border border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#B89B72] text-white text-[11px] font-black px-8 py-3 rounded-full uppercase tracking-[0.2em] shadow-2xl z-30">
                  Most Popular
                </div>
              )}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-6 font-light text-sm">{plan.description}</p>
                <div className="text-4xl font-black text-gray-900 mb-8">{plan.price}<span className="text-lg text-[#B89B72] ml-1">+</span></div>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <svg className="w-5 h-5 text-[#B89B72] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className={`w-full py-4 rounded-2xl font-bold transition-all uppercase text-[10px] tracking-widest mt-auto ${
                plan.popular
                  ? 'bg-gray-900 hover:bg-[#B89B72] text-white shadow-xl'
                  : 'bg-gray-50 hover:bg-gray-900 text-gray-900 hover:text-white'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="flex justify-center space-x-2 mt-8 md:hidden">
          {plans.map((_, index) => (
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

export default Pricing;