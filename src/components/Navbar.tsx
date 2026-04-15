import React, { useState, useEffect } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#FCFBF7]/90 backdrop-blur-md border-b border-gray-100 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          <Link to="/#home" className="text-xl font-black font-display tracking-tighter text-gray-900 italic">
            DEEPAK //
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-12">
            {navLinks.map((link) => (
              <Link
                smooth
                key={link.name}
                to={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <Link smooth to="/#contact" className="hidden md:block border-2 border-gray-900 text-gray-900 px-6 py-2 uppercase font-bold text-[10px] tracking-widest hover:bg-gray-900 hover:text-white transition-all">
            Contact Me
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1.5 group cursor-pointer">
              <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
              <span className={`block h-0.5 w-4 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-[#FCFBF7] border-b border-gray-100 transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="flex flex-col space-y-6 p-10 text-center">
            {navLinks.map((link) => (
              <Link
                smooth
                key={link.name}
                to={link.href}
                className="text-xs font-bold uppercase tracking-[0.4em] text-gray-500 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link smooth to="/#contact" className="border-2 border-gray-900 text-gray-900 px-6 py-4 uppercase font-bold text-[10px] tracking-widest" onClick={() => setIsMenuOpen(false)}>
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;