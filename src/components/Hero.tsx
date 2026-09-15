import React from 'react';
import { ArrowRight, ChefHat } from 'lucide-react';
import { Language, translations } from '../translations';
import { motion } from 'motion/react';

interface HeroProps {
  language: Language;
  onContactClick: () => void;
}

export function Hero({ language, onContactClick }: HeroProps) {
  const t = translations[language].hero;

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden relative">
      {/* Animated Gradient Spheres */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-center">
        <motion.div
          animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 md:top-[10%] left-[-10%] md:left-[15%] w-72 h-72 md:w-[32rem] md:h-[32rem] rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 opacity-90"
        />
        <motion.div
          animate={{ x: [0, -80, 50, 0], y: [0, 80, -100, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[-10%] md:right-[10%] w-64 h-64 md:w-[28rem] md:h-[28rem] rounded-full bg-gradient-to-bl from-cyan-300 to-sky-500 opacity-90"
        />
        <motion.div
          animate={{ x: [0, 50, -100, 0], y: [0, 50, -50, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] left-[20%] md:left-[30%] w-80 h-80 md:w-[36rem] md:h-[36rem] rounded-full bg-gradient-to-tr from-blue-300 to-indigo-500 opacity-80"
        />
      </div>

      {/* Frosted Glass Overlay */}
      <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-sm font-medium mb-8"
        >
          <ChefHat size={16} />
          <span>Next Gen Restaurant OS</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight"
        >
          {t.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          {t.subtitle}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button onClick={onContactClick} className="w-full sm:w-auto px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-medium transition-all shadow-lg shadow-sky-200 flex items-center justify-center gap-2 group">
            {t.cta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 rounded-full font-medium transition-all hover:bg-slate-50 border border-slate-200">
            {t.secondaryCta}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
