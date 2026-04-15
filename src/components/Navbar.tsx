import React, { useState, useEffect } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Process', href: '/#process' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link to="/#home" className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter">
            DEEPAK <span className="text-gray-300 dark:text-gray-700 font-light">//</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <Link
                smooth
                key={link.name}
                to={link.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <Link 
            smooth 
            to="/#contact" 
            className="hidden md:block border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-black uppercase tracking-[0.1em] text-[10px] py-4 px-10 rounded-sm hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all"
          >
            CONTACT ME
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-900 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-24 left-5 right-5 py-10 bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 px-8">
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link
                  smooth
                  key={link.name}
                  to={link.href}
                  className="text-sm font-black uppercase tracking-[0.2em] text-gray-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                smooth 
                to="/#contact" 
                className="bg-gray-900 text-white font-black uppercase tracking-widest text-xs py-5 rounded-2xl w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT ME
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;