import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0]);

  // Typing effect state
  const headline = "Crafted From Nature. Built for Your Home.";
  const [displayedHeadline, setDisplayedHeadline] = useState("");

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedHeadline(headline.substring(0, i + 1));
      i++;
      if (i === headline.length) clearInterval(intervalId);
    }, 50); // Speed of typing

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-walnut text-ivory">
      {/* Wood dust particles effect could be done with a small canvas or CSS animation, we'll use a simple CSS approach here */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-30 mix-blend-screen bg-[url('https://images.unsplash.com/photo-1444465693019-aa0b63924f0c?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="wood-grain z-20" />

      {/* Split Screen Background */}
      <div className="absolute inset-0 flex">
        {/* Left: Grand Wooden Door */}
        <div
          className="w-1/2 h-full bg-cover bg-center brightness-[0.6] grayscale-[0.2]"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1510001099195-2cc6770fa324?q=80&w=1080&auto=format&fit=crop)' }}
        />
        {/* Right: Floor to ceiling window */}
        <div
          className="w-1/2 h-full bg-cover bg-center brightness-[0.6] grayscale-[0.2]"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506377711776-db12c1fa0b54?q=80&w=1080&auto=format&fit=crop)' }}
        />
      </div>

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-walnut via-walnut/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-walnut/60 to-transparent z-10" />

      {/* Content */}
      <motion.div
        className="relative z-30 flex flex-col items-center justify-center h-full text-center px-6 max-w-5xl mx-auto pt-20"
        style={{ y: yText, opacity: opacityText }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-6 tracking-tight text-ivory">
          {displayedHeadline}
        </h1>
        
        <motion.p 
          className="text-lg md:text-xl font-sans max-w-2xl text-ivory/80 mb-10 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Custom hardwood doors & windows handcrafted in the USA &mdash; made to last a lifetime.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <button className="group relative overflow-hidden bg-gold text-walnut px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-transform hover:scale-105">
            <span className="relative z-10">Explore Doors</span>
            <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
          
          <button className="group px-8 py-4 rounded-full font-semibold flex items-center gap-2 border border-ivory/30 hover:bg-ivory hover:text-walnut transition-all duration-300">
            <span>View Windows</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
