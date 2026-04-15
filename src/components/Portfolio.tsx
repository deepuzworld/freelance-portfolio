import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with payment integration",
      tags: ["React", "Node.js", "MongoDB"],
      image: "ecommerce"
    },
    {
      title: "Corporate Website",
      description: "Modern responsive website for a financial services company",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "corporate"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile application for banking transactions",
      tags: ["React Native", "Firebase"],
      image: "banking"
    },
    {
      title: "Restaurant Booking System",
      description: "Online reservation system with real-time availability",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      image: "restaurant"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Portfolio</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Check out some of my recent projects and see the quality of my work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 border-2 border-dashed w-full" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium flex items-center">
                    Live Demo
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </button>
                  {/* <button className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 font-medium flex items-center">
                    View Code
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-gray-700 font-medium py-3 px-8 rounded-full transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;