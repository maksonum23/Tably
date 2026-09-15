import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language, translations } from '../translations';
import { motion } from 'motion/react';

interface CTAProps {
  language: Language;
  onContactClick: () => void;
}

export function CTA({ language, onContactClick }: CTAProps) {
  const t = translations[language].contact;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-sky-600"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.title}</h2>
          <p className="text-xl text-sky-100 mb-10 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <button onClick={onContactClick} className="px-8 py-4 bg-white text-sky-600 hover:bg-sky-50 rounded-full font-bold transition-all shadow-xl flex items-center justify-center gap-2 mx-auto group">
            {t.cta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
