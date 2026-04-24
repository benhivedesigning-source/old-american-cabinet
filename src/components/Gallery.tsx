import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';

const categories = ['All', 'Doors', 'Windows', 'Exterior', 'Interior', 'Barn Style'];

const galleryImages = [
  { id: 1, category: 'Doors', src: 'https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?q=80&w=800&auto=format&fit=crop', title: 'Walnut Arched Door' },
  { id: 2, category: 'Interior', src: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=800&auto=format&fit=crop', title: 'Modern Living Check' },
  { id: 3, category: 'Windows', src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop', title: 'Picture Window Oak' },
  { id: 4, category: 'Exterior', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', title: 'Grand Entryway' },
  { id: 5, category: 'Barn Style', src: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?q=80&w=800&auto=format&fit=crop', title: 'Sliding Barn Door' },
  { id: 6, category: 'Windows', src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop', title: 'Casement Series' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section className="py-24 bg-[#FAF7F0] text-charcoal border-t border-walnut/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           className="text-center mb-16"
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
        >
          <span className="font-sans text-sm uppercase tracking-widest text-honey font-semibold mb-2 block">Our Work</span>
          <h2 className="font-serif text-5xl font-medium mb-12">Project Gallery</h2>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-walnut text-ivory' 
                    : 'bg-transparent text-walnut border border-walnut/30 hover:border-walnut'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry Grid (Approximated with CSS Grid) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={img.id}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-charcoal cursor-pointer"
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-serif text-2xl drop-shadow-md">View Project</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
