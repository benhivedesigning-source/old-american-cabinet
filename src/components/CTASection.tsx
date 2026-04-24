import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className="relative py-32 bg-walnut text-ivory overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity grayscale-[0.3]"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1510001099195-2cc6770fa324?q=80&w=2000&auto=format&fit=crop)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="font-sans text-sm uppercase tracking-widest text-gold font-bold mb-6 block">Bespoke Creations</span>
          <h2 className="font-serif text-5xl md:text-7xl font-medium mb-6 text-white leading-tight">
            Don't See What You're Looking For? <br/><span className="text-gold italic font-light">We'll Build It.</span>
          </h2>
          <p className="font-sans text-xl text-ivory/80 max-w-2xl mx-auto mb-10 font-light">
            Every home is different. Every door we make is one-of-a-kind. Share your vision, and our master craftsmen will bring it to life.
          </p>
          
          <button className="relative inline-flex items-center justify-center px-8 py-4 font-semibold text-walnut transition-all duration-200 bg-gold font-sans rounded-full hover:bg-gold/90 focus:outline-none shadow-[0_0_20px_rgba(212,168,85,0.4)] animate-pulse hover:animate-none">
            Start Your Custom Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
