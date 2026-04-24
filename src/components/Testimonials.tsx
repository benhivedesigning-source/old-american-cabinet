import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "Aspen, CO",
    quote: "The custom pivot door Old American Cabinet built for our entryway is a masterpiece. It completely transformed the look of our home. True artisans.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Austin, TX",
    quote: "We replaced every window in our craftsman home with Old American Cabinet casement windows. The attention to detail and wood grain matching is incredible.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Eleanor Vance",
    location: "Portland, OR",
    quote: "From the initial design consultation to white-glove delivery, the experience was flawless. Our french doors are the highlight of our dining room.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-ivory text-charcoal relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 bottom-0 left-6 border-l border-walnut/10 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-6 border-r border-walnut/10 hidden md:block" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={isInView ? { opacity: 1, scale: 1 } : {}}
           transition={{ duration: 0.6 }}
        >
          <Quote className="mx-auto text-gold mb-8 opacity-40" size={64} strokeWidth={1} />
        </motion.div>

        <div className="relative h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute w-full"
            >
              <div className="flex justify-center gap-1 mb-6 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={20} />
                ))}
              </div>
              
              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-walnut mb-10 italic">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold/50 p-1"
                />
                <div className="text-left">
                  <h4 className="font-serif font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="font-sans text-sm text-charcoal/60 uppercase tracking-widest">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-gold' : 'bg-charcoal/20 hover:bg-gold/50'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
