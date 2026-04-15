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
    <footer id="contact" className="bg-magazine pt-32 pb-16">
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          <div>
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-10 tracking-tighter italic">Connect //</h2>
            <p className="text-2xl text-gray-500 mb-12 font-light leading-relaxed max-w-lg">
              Let's discuss your ideas and create something amazing together. Fill out the form or reach out directly.
            </p>
            
            <div className="space-y-12">
              <div className="group flex items-center">
                <div className="bg-[#B89B72]/10 p-5 rounded-2xl mr-6 group-hover:bg-[#B89B72] transition-all duration-500">
                  <svg className="w-8 h-8 text-[#B89B72] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-1">WhatsApp</h3>
                  <p className="text-xl font-bold text-gray-900">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="group flex items-center">
                <div className="bg-[#B89B72]/10 p-5 rounded-2xl mr-6 group-hover:bg-[#B89B72] transition-all duration-500">
                  <svg className="w-8 h-8 text-[#B89B72] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-1">Email</h3>
                  <p className="text-xl font-bold text-gray-900">hello@deepak.dev</p>
                </div>
              </div>
              
              <div className="group flex items-center">
                <div className="bg-[#B89B72]/10 p-5 rounded-2xl mr-6 group-hover:bg-[#B89B72] transition-all duration-500">
                  <svg className="w-8 h-8 text-[#B89B72] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-1">Location</h3>
                  <p className="text-xl font-bold text-gray-900">India, Global</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 tracking-tight">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B89B72] text-gray-900 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B89B72] text-gray-900 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="projectType" className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B89B72] text-gray-900 transition-all"
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
                <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B89B72] text-gray-900 transition-all"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-[#B89B72] text-white font-black py-5 px-10 rounded-2xl transition-all uppercase text-xs tracking-[0.3em] shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-16 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p className="text-xs font-bold uppercase tracking-widest">&copy; {new Date().getFullYear()} DEEPAK MATHEW. All rights reserved.</p>
          <div className="flex space-x-12 mt-6 md:mt-0">
             <a href="#" className="hover:text-gray-900 transition-colors text-xs font-bold uppercase tracking-widest">LinkedIn</a>
             <a href="#" className="hover:text-gray-900 transition-colors text-xs font-bold uppercase tracking-widest">GitHub</a>
             <a href="#" className="hover:text-gray-900 transition-colors text-xs font-bold uppercase tracking-widest">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;