import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Shield, Leaf, Ruler, Truck, Hammer, Star } from 'lucide-react';

const features = [
  { icon: Hammer, title: "All-Natural Hardwood", desc: "Sourced responsibly, crafted meticulously." },
  { icon: Star, title: "100% Made in USA", desc: "Handcrafted in our American workshops." },
  { icon: Ruler, title: "Fully Custom Sizes", desc: "If you can measure it, we can build it." },
  { icon: Leaf, title: "Eco-Sourced Timber", desc: "FSC certified sustainable harvesting." },
  { icon: Shield, title: "Lifetime Guarantee", desc: "Warrantied against warping and rot." },
  { icon: Truck, title: "Free Shipping", desc: "White-glove delivery on orders over $500." }
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-24 bg-walnut text-ivory relative border-y-8 border-[#2A1508]" ref={ref}>
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-sans text-sm uppercase tracking-widest text-[#D4A855] font-semibold mb-2 block">Our Promise</span>
          <h2 className="font-serif text-5xl font-medium">Why Choose Old American Cabinet</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-[#2A1508]/50 p-8 pt-10 rounded-2xl border border-gold/10 hover:border-gold/30 transition-colors group cursor-default"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <Icon className="text-gold" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-medium mb-3">{feature.title}</h3>
                <p className="font-sans text-ivory/70 font-light leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
