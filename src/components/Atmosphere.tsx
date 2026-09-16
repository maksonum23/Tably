import React from 'react';
import { Language, translations } from '../translations';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Heart } from 'lucide-react';

interface AtmosphereProps {
  language: Language;
}

export function Atmosphere({ language }: AtmosphereProps) {
  const t = translations[language].atmosphere;

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-rose-100">
              <Sparkles size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              {t.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            {/* The 3D render placeholder image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Cozy Cafe 3D Vibe" 
                className="w-full h-[400px] object-cover saturate-150 contrast-105"
              />
              
              {/* Floating UI Elements simulating a 3D overlay/Sims vibe */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center border border-slate-100"
              >
                <MapPin className="text-rose-500" size={24} />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/3 right-1/4 bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center border border-slate-100"
              >
                <Heart className="text-rose-400" size={24} fill="currentColor" />
              </motion.div>
            </div>
            
            {/* Decorative blurs */}
            <div className="absolute -z-10 top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
            <div className="absolute -z-10 top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
