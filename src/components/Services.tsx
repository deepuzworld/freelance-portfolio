import React from 'react';

const Services = () => {
  const services = [
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
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What I Can Do For You</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From simple landing pages to complex web applications, I deliver solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-6 rounded-lg font-medium transition-colors bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;