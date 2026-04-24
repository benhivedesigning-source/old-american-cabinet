import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = ['Doors', 'Windows', 'Custom Projects', 'Gallery', 'About', 'Contact'];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-walnut/90 backdrop-blur-md py-4 shadow-lg text-ivory'
          : 'bg-transparent py-6 text-ivory'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center overflow-hidden">
             {/* Simple badge logo */}
             <div className="w-8 h-8 border border-walnut flex items-center justify-center">
               <span className="font-serif font-bold text-walnut text-xl leading-none">O</span>
             </div>
          </div>
          <span className="font-serif font-semibold text-2xl tracking-wide">Old American Cabinet</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium tracking-wide uppercase group relative"
            >
              <span className="relative z-10">{link}</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="bg-gold hover:bg-gold/90 text-walnut px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-[0_0_15px_rgba(212,168,85,0.4)] hover:shadow-[0_0_25px_rgba(212,168,85,0.6)]">
            Get a Free Quote
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden absolute top-full left-0 w-full bg-walnut/95 backdrop-blur-md overflow-hidden`}
        initial={{ height: 0 }}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-ivory text-lg font-serif"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="bg-gold text-walnut px-6 py-3 rounded-full font-semibold text-center mt-4">
            Get a Free Quote
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
