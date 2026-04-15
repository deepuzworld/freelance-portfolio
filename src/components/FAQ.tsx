import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "The timeline depends on the project scope. A basic website typically takes 2-4 weeks, while more complex projects can take 6-12 weeks. We'll provide a detailed timeline after discussing your requirements."
    },
    {
      question: "Do you provide website maintenance?",
      answer: "Yes, I offer ongoing maintenance packages to keep your website secure, updated, and running smoothly. This includes security updates, backups, and performance monitoring."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All websites I build are fully responsive and optimized for mobile devices. This ensures your site looks great and functions perfectly on all screen sizes."
    },
    {
      question: "Do you help with content creation?",
      answer: "Yes, I can help with content strategy and creation, including copywriting, image selection, and SEO optimization to ensure your website effectively communicates your brand message."
    },
    {
      question: "What platforms do you develop on?",
      answer: "I specialize in custom web development using modern technologies like React, Vue.js, and Node.js. For simpler projects, I also work with WordPress and Shopify."
    },
    {
      question: "Do you provide SEO services?",
      answer: "Yes, I implement on-page SEO best practices during development and can provide ongoing SEO services to improve your search engine rankings and organic traffic."
    },
    {
      question: "What is your payment structure?",
      answer: "I typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, I can arrange milestone-based payments."
    },
    {
      question: "Do you offer refunds?",
      answer: "Due to the custom nature of my services, I don't offer refunds once work has begun. However, I'm committed to your satisfaction and will work with you to ensure the final product meets your expectations."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-magazine">
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter italic">FAQ // 01</h2>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Everything you need to know about my services and process.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`bg-white border rounded-[2rem] transition-all duration-500 ${openIndex === index ? 'border-[#B89B72]' : 'border-gray-100 shadow-sm'}`}>
              <button
                className="flex justify-between items-center w-full text-left p-10 outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">{faq.question}</h3>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === index ? 'bg-[#B89B72] text-white rotate-180' : 'bg-gray-50 text-gray-400'}`}>
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                   </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-10 pb-10">
                  <p className="text-lg text-gray-500 font-light leading-relaxed border-t border-gray-100 pt-8">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;