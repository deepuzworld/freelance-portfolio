import React from 'react';

const Process = () => {
  const steps = [
    {
      title: "Discovery",
      description: "We discuss your goals, target audience, and project requirements to create a clear roadmap.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      )
    },
    {
      title: "Design",
      description: "I create mockups and prototypes that align with your brand and user experience goals.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>
      )
    },
    {
      title: "Development",
      description: "Clean, efficient code brings the design to life with all requested features and functionality.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      )
    },
    {
      title: "Launch & Support",
      description: "Your site goes live with full documentation, training, and ongoing support as needed.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-[1920px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Process</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A proven workflow that ensures quality results and keeps you informed every step of the way.
          </p>
        </div>
        
        {/* Mobile Vertical Layout */}
        <div className="md:hidden">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500">
                    {step.icon}
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="h-full w-0.5 bg-emerald-500 ml-8 mt-2"></div>
                  )}
                </div>
                <div className="ml-8 pb-12">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop Horizontal Layout */}
        <div className="hidden md:block">
          <div className="flex justify-between relative">
            {/* Horizontal line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-emerald-500 z-0"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex-1 text-center">
                <div className="flex justify-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-4 mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;