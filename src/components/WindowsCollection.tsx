import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const windows = [
  {
    id: 1,
    title: "Casement Windows",
    description: "Classic European styling that swings outward, capturing cross-breezes and offering unobstructed views of your landscape. Crafted with precision mortise-and-tenon joinery.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1080&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Picture Windows",
    description: "Frame your world like a work of art. These non-operable expansive windows bring in maximum natural light, featuring slim solid wood profiles that don't distract from the view.",
    image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=1080&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Arched Masterpieces",
    description: "A testament to true craftsmanship. Our curved and arched windows are bent using traditional steam-bending techniques for structural integrity without compromising the natural wood grain.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1080&auto=format&fit=crop"
  }
];

export default function WindowsCollection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });

  return (
    <section className="py-24 bg-[#EFE8D8] text-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={headerRef}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-5xl font-medium mb-4">Windows That Frame Your World</h2>
          <p className="font-sans text-xl text-charcoal/70 max-w-2xl mx-auto font-light">
            Bring the outside in with solid timber frames that insulate naturally and age beautifully.
          </p>
        </motion.div>

        <div className="flex flex-col gap-32">
          {windows.map((window, index) => {
            const isEven = index % 2 === 0;
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-20%" });

            return (
              <div 
                key={window.id} 
                ref={ref}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
              >
                <motion.div 
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="relative aspect-[4/5] rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-2xl">
                    <img 
                      src={window.image} 
                      alt={window.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="w-full lg:w-1/2 space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  <span className="font-serif italic text-2xl text-honey opacity-80">0{index + 1}.</span>
                  <h3 className="font-serif text-4xl font-medium text-walnut">{window.title}</h3>
                  <p className="font-sans text-lg text-charcoal/80 leading-relaxed font-light">
                    {window.description}
                  </p>
                  <button className="group relative overflow-hidden bg-transparent border border-walnut text-walnut px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-walnut hover:text-ivory transition-colors duration-300">
                    <span>View Specifications</span>
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
