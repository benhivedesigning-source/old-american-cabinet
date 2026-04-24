import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const steps = [
  { id: "01", title: "Design", desc: "Collaborate with our master designers" },
  { id: "02", title: "Select Wood", desc: "Choose your premium hardwood species" },
  { id: "03", title: "Handcraft", desc: "Our artisans build it millimeter-perfect" },
  { id: "04", title: "Quality Check", desc: "Rigorous 50-point inspection" },
  { id: "05", title: "Deliver", desc: "White-glove installation or delivery" }
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className="relative py-32 bg-charcoal text-ivory overflow-hidden" ref={ref}>
      {/* Background with Slow Image Pan */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <motion.div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540545939265-1886cfc72ba1?q=80&w=2000&auto=format&fit=crop)' }}
          animate={{ scale: [1, 1.1, 1], x: [0, -20, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-sans text-sm uppercase tracking-widest text-[#D4A855] font-semibold mb-2 block">Our Workshop</span>
          <h2 className="font-serif text-5xl font-medium">How It's Made</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
          {/* Horizontal Line connecting steps (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-10 right-10 h-px bg-ivory/20" />
          
          {/* Vertical Line connecting steps (Mobile) */}
          <div className="block md:hidden absolute left-[39px] top-10 bottom-10 w-px bg-ivory/20" />

          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              className="flex md:flex-col items-center gap-6 md:gap-4 w-full md:w-1/5 relative mb-10 md:mb-0"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Step Circle */}
              <div className="w-20 h-20 rounded-full border-2 border-[#D4A855] bg-charcoal flex items-center justify-center font-serif text-2xl relative z-10 shadow-[0_0_15px_rgba(212,168,85,0.2)]">
                {step.id}
              </div>
              
              <div className="text-left md:text-center">
                <h3 className="font-serif text-xl font-medium text-[#D4A855] mb-2">{step.title}</h3>
                <p className="font-sans text-sm text-ivory/70 max-w-[200px] mx-auto hidden md:block">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
