import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const doors = [
  {
    id: 1,
    name: "Classic Barn Door",
    tagline: "Rustic charm for modern living",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Grand Pivot Entry",
    tagline: "Make a monumental first impression",
    image: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Timeless French Doors",
    tagline: "Let the natural light pour in",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Classic Dutch Door",
    tagline: "A welcoming farmhouse classic",
    image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Interior Sliding",
    tagline: "Space-saving elegant dividers",
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Modern Panel Door",
    tagline: "Clean lines, solid hardwood",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Arched Mahogany Entry",
    tagline: "Classic curves, rich tones",
    image: "https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Glass Paneled Oak",
    tagline: "Brighten your entryway",
    image: "https://images.unsplash.com/photo-1534126511673-b6899657816a?q=80&w=800&auto=format&fit=crop",
  }
];

export default function DoorsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-10%" });

  // Duplicate the array to create a seamless infinite scrolling effect
  const repeatedDoors = [...doors, ...doors];

  return (
    <section className="py-24 bg-ivory text-charcoal overflow-hidden" ref={inViewRef}>
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-sans text-sm uppercase tracking-widest text-[#C68642] font-semibold mb-2 block">Our Collection</span>
          <h2 className="font-serif text-5xl font-medium">Doors That Make a Statement</h2>
        </motion.div>
      </div>

      <div className="pl-6 md:pl-[calc((100vw-80rem)/2+1.5rem)] pb-12 cursor-grab active:cursor-grabbing overflow-hidden">
        <motion.div 
          ref={containerRef}
          className="flex gap-6 w-max animate-marquee hover:pause-marquee pb-10"
        >
          {repeatedDoors.map((door, index) => (
            <div
              key={`${door.id}-${index}`}
              className="min-w-[320px] md:min-w-[420px] h-[550px] relative rounded-2xl overflow-hidden group flex-shrink-0"
            >
              {/* Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${door.image})` }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="font-sans text-sm tracking-widest opacity-80 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {door.tagline}
                </span>
                <h3 className="font-serif text-3xl font-medium mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-50">
                  {door.name}
                </h3>
                <button className="flex items-center gap-2 text-gold font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  Build Yours <ArrowRight size={16} />
                </button>
              </div>

              {/* Hover glowing border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 rounded-2xl transition-colors duration-500 shadow-[inset_0_0_0_transparent] group-hover:shadow-[inset_0_0_30px_rgba(212,168,85,0.2)]" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
