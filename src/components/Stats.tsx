import React from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "15+", label: "Years of Craftsmanship" },
    { value: "48", label: "States Served" },
    { value: "Lifetime", label: "Warranty" },
  ];

  return (
    <section className="bg-walnut text-gold py-10 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596484552834-6a58f850d0d8?q=80&w=400&auto=format&fit=crop')] opacity-10 mix-blend-overlay bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gold/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
            >
              <div className="font-serif text-4xl md:text-5xl font-medium mb-1">
                {stat.value}
              </div>
              <div className="font-sans text-sm md:text-sm uppercase tracking-widest text-[#D4A855]/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
