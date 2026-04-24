import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const articles = [
  {
    category: "Guides",
    title: "How to Choose the Right Wood for Your Front Door",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
  },
  {
    category: "Style",
    title: "Barn Doors: Style Guide for 2025",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop"
  },
  {
    category: "Architecture",
    title: "Window Styles That Transform Natural Light",
    image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=800&auto=format&fit=crop"
  }
];

export default function BlogStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-24 bg-ivory text-charcoal border-b border-walnut/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-sans text-sm uppercase tracking-widest text-[#C68642] font-semibold mb-2 block">Journal</span>
            <h2 className="font-serif text-5xl font-medium">Design Inspiration</h2>
          </motion.div>
          <motion.a 
            href="#" 
            className="hidden md:flex items-center gap-2 uppercase tracking-widest text-sm font-semibold hover:text-gold transition-colors"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            View All Articles <ArrowUpRight size={16} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href="#"
              className="group block"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl mb-6 relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-gold mb-3 block">{article.category}</span>
              <h3 className="font-serif text-2xl font-medium leading-snug group-hover:text-gold transition-colors">
                {article.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
