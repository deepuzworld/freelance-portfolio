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
      features: [
        "Up to 5 pages",
        "Mobile responsive design",
        "Contact form integration",
        "Basic SEO optimization",
        "Fast loading speed"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "₹25,000",
      description: "Ideal for small businesses and growing companies",
      features: [
        "Up to 10 pages",
        "Custom design & branding",
        "Advanced SEO optimization",
        "Google Maps integration",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹40,000",
      description: "For e-commerce and complex web applications",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "User authentication",
        "Admin dashboard",
        "Payment gateway integration"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
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
              className={`rounded-[2rem] p-12 shadow-2xl flex-shrink-0 w-[85vw] md:w-auto snap-center flex flex-col transition-all duration-500 ${
                plan.popular 
                  ? 'border-[3px] border-emerald-500 relative bg-white dark:bg-gray-800 ring-[12px] ring-emerald-500/5 md:scale-110 md:-mt-8 z-10' 
                  : 'bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 md:mt-0'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-8 py-2 rounded-xl shadow-lg">
                  Most Popular
                </div>
              )}
              <div className="flex-grow">
                <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-3">{plan.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium text-sm leading-relaxed">{plan.description}</p>
                <div className="text-5xl font-black text-emerald-600 mb-10 flex items-baseline">
                  {plan.price}
                  <span className="text-2xl ml-1 text-emerald-400 font-bold">+</span>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300 font-bold text-sm tracking-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className={`w-full py-4 px-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg transition-all ${
                plan.popular
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
              }`}>
                GET STARTED
              </button>
            </div>
          ))}
        </div>

        {/* mobile dots */}
        <div className="flex justify-center space-x-2 mt-4 md:hidden">
          {plans.map((_, index) => (
            <div 
              key={index} 
              className={`h-2 transition-all duration-300 rounded-full ${index === activeIndex ? 'w-8 bg-emerald-500' : 'w-2 bg-gray-300 dark:bg-gray-700'}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Need a custom solution? <a href="#contact" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium">Contact me</a> for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;