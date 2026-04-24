import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import DoorsCarousel from './components/DoorsCarousel';
import WindowsCollection from './components/WindowsCollection';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import BlogStrip from './components/BlogStrip';
import Footer from './components/Footer';

// Custom Cursor Component
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      // Check if hovering over a clickable element
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('.group') !== null // Added group for clickable cards
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      id="custom-cursor"
      className={isHovering ? 'hovering' : ''}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ivory text-charcoal">
      <div className="film-grain" />
      <CustomCursor />
      
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <div id="doors"><DoorsCarousel /></div>
        <div id="windows"><WindowsCollection /></div>
        <div id="about"><WhyChooseUs /></div>
        <Process />
        <div id="gallery"><Gallery /></div>
        <Testimonials />
        <div id="custom-projects"><CTASection /></div>
        <BlogStrip />
      </main>
      
      <div id="contact"><Footer /></div>
    </div>
  );
}
