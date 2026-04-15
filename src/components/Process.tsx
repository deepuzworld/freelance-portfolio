import React from 'react';

const Process = () => {
  const steps = [
    {
      title: "Discovery",
      description: "We discuss your goals, target audience, and project requirements to create a clear roadmap.",
      number: "01"
    },
    {
      title: "Design",
      description: "I create mockups and prototypes that align with your brand and user experience goals.",
      number: "02"
    },
    {
      title: "Development",
      description: "Clean, efficient code brings the design to life with all requested features and functionality.",
      number: "03"
    },
    {
      title: "Launch & Support",
      description: "Your site goes live with full documentation, training, and ongoing support as needed.",
      number: "04"
    }
  ];

  return (
    <section id="process" className="py-12 bg-magazine">
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter">Our Proven Process</h2>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            A meticulous workflow that ensures exceptional quality and keeps you informed at every milestone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="flex flex-col h-full bg-white border border-gray-100 p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="mb-10 flex justify-between items-start">
                  <div className="w-16 h-16 bg-[#B89B72]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#B89B72] transition-colors duration-500">
                    <span className="text-2xl font-black text-[#B89B72] group-hover:text-white">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 right-[-1rem] w-8 h-[2px] bg-gray-100 z-0"></div>
                  )}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">{step.title}</h3>
                <p className="text-lg text-gray-500 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;