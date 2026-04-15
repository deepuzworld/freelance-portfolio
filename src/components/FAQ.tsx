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
    <section id="faq" className="py-20 bg-white dark:bg-gray-900 text-center">
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about my services and process.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-700 py-6">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</h3>
                <svg 
                  className={`w-5 h-5 text-emerald-600 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="mt-4 pr-8">
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;