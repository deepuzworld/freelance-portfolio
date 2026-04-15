import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      projectType: '',
      message: ''
    });
  };

  return (
    <footer id="contact" className="bg-[#F8F7F0] dark:bg-gray-900 pt-24 pb-12">
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter italic">
              Connect <span className="text-gray-300 dark:text-gray-700 font-light">//</span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-md leading-relaxed">
              Let's discuss your ideas and create something amazing together. Fill out the form or reach out directly.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="bg-[#F3EFE0] dark:bg-gray-800 p-5 rounded-2xl mr-6">
                  <svg className="w-8 h-8 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="uppercase text-[10px] font-black tracking-[0.2em] text-gray-400 mb-1">WhatsApp</h3>
                  <p className="text-xl font-black text-gray-900 dark:text-white">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-[#F3EFE0] dark:bg-gray-800 p-5 rounded-2xl mr-6">
                  <svg className="w-8 h-8 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="uppercase text-[10px] font-black tracking-[0.2em] text-gray-400 mb-1">Email</h3>
                  <p className="text-xl font-black text-gray-900 dark:text-white">hello@deepak.dev</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-[#F3EFE0] dark:bg-gray-800 p-5 rounded-2xl mr-6">
                  <svg className="w-8 h-8 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="uppercase text-[10px] font-black tracking-[0.2em] text-gray-400 mb-1">Location</h3>
                  <p className="text-xl font-black text-gray-900 dark:text-white">India, Global</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-12 rounded-[3.5rem] shadow-2xl border border-white dark:border-gray-700">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-10">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-700 border-none rounded-2xl focus:ring-4 focus:ring-[#C5A059]/10 text-gray-900 dark:text-white font-medium"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-700 border-none rounded-2xl focus:ring-4 focus:ring-[#C5A059]/10 text-gray-900 dark:text-white font-medium"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="projectType" className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-700 border-none rounded-2xl focus:ring-4 focus:ring-[#C5A059]/10 text-gray-900 dark:text-white font-medium"
                  required
                >
                  <option value="">Select Project Type</option>
                  <option value="static">Static/Informative Website</option>
                  <option value="business">Business Website</option>
                  <option value="ecommerce">E-commerce Website</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-700 border-none rounded-2xl focus:ring-4 focus:ring-[#C5A059]/10 text-gray-900 dark:text-white font-medium resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#12141D] hover:bg-black text-white font-black uppercase tracking-[0.3em] text-xs py-5 rounded-2xl transition-all shadow-xl hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Deepak Mathew. All rights reserved.
          </p>
          <div className="flex space-x-10">
            {['Linkedin', 'Github', 'Twitter'].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs font-black uppercase tracking-widest transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
  );
};

export default Footer;