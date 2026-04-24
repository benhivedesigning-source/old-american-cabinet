import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-walnut text-ivory py-20 relative overflow-hidden">
      <div className="wood-grain opacity-10" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center overflow-hidden">
                <div className="w-8 h-8 border border-walnut flex items-center justify-center">
                  <span className="font-serif font-bold text-walnut text-xl leading-none">O</span>
                </div>
              </div>
              <span className="font-serif font-semibold text-2xl tracking-wide">Old American Cabinet</span>
            </div>
            <p className="font-sans text-ivory/60 mb-8 max-w-sm">
              American Craftsmanship. Timeless Beauty. Handcrafting premium doors and windows for generations.
            </p>
            <div className="flex items-center gap-4 text-sm font-semibold opacity-70">
               <ShieldCheck size={20} className="text-gold" />
               Better Business Bureau Accredited
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold uppercase tracking-widest text-gold mb-6 text-sm">Products</h4>
            <ul className="space-y-4 text-ivory/70 opacity-90">
              <li><a href="#" className="hover:text-gold hover:translate-x-1 inline-block transition-transform">Front Doors</a></li>
              <li><a href="#" className="hover:text-gold hover:translate-x-1 inline-block transition-transform">Barn Doors</a></li>
              <li><a href="#" className="hover:text-gold hover:translate-x-1 inline-block transition-transform">French Doors</a></li>
              <li><a href="#" className="hover:text-gold hover:translate-x-1 inline-block transition-transform">Windows</a></li>
              <li><a href="#" className="hover:text-gold hover:translate-x-1 inline-block transition-transform">Custom Projects</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold uppercase tracking-widest text-gold mb-6 text-sm">Company</h4>
            <ul className="space-y-4 text-ivory/70 opacity-90">
              <li><a href="#" className="hover:text-gold hover:translate-x-1 inline-block transition-transform">Our Story</a></li>
              <li><a href="#" className="hover:text-gold hover:translate-x-1 inline-block transition-transform">The Workshop</a></li>
              <li><a href="#" className="hover:text-gold hover:translate-x-1 inline-block transition-transform">Gallery</a></li>
              <li><a href="#" className="hover:text-gold hover:translate-x-1 inline-block transition-transform">Journal</a></li>
              <li><a href="#" className="hover:text-gold hover:translate-x-1 inline-block transition-transform">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-bold uppercase tracking-widest text-gold mb-6 text-sm">Newsletter</h4>
            <p className="text-ivory/70 mb-6 text-sm">Join our newsletter for design inspiration and artisan news.</p>
            <form className="relative flex items-center border-b border-ivory/30 pb-2 bg-transparent overflow-hidden group">
              {/* Subtle wood interaction behind input */}
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-transparent border-none outline-none w-full text-ivory placeholder:text-ivory/30 font-sans z-10"
              />
              <button className="text-gold p-2 group-hover:translate-x-1 transition-transform z-10">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-ivory/40">
          <p>&copy; {new Date().getFullYear()} Old American Cabinet. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-ivory transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ivory transition-colors">Terms of Service</a>
            <span className="flex items-center gap-1"><ShieldCheck size={14}/> SSL Secure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
