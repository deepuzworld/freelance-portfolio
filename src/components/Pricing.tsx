import React from 'react';

const Pricing = () => {
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
        "Social media integration",
        "30 days free support",
        "Fast loading speed",
        "Free domain setup help"
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
        "Blog/News section",
        "Analytics dashboard",
        "60 days free support",
        "Content management system",
        "Email integration",
        "Performance optimization"
      ],
      popular: true
    },
    {
      name: "Dynamic",
      price: "₹40,000",
      description: "For e-commerce and complex web applications",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "User authentication",
        "Admin dashboard",
        "Payment gateway integration",
        "Database integration",
        "API development",
        "90 days free support",
        "Advanced security features",
        "Real-time updates",
        "Third-party integrations",
        "Priority support"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include quality code, responsive design, and ongoing support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-8 shadow-lg ${
                plan.popular 
                  ? 'border-2 border-emerald-500 relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900' 
                  : 'bg-white dark:bg-gray-900'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-sm font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
              <div className="text-3xl font-bold text-emerald-600 mb-6">{plan.price}<span className="text-lg">+</span></div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                plan.popular
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
              }`}>
                Get Started
              </button>
            </div>
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