import React from 'react';
import { Language, translations } from '../translations';
import { motion } from 'motion/react';
import { MapPin, Heart } from 'lucide-react';

interface AboutProps {
  language: Language;
}

export function About({ language }: AboutProps) {
  const t = translations[language].aboutUs;

  return (
    <section id="about" className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-100 text-rose-600 font-semibold text-sm shadow-sm mb-6">
            <Heart size={16} className="fill-rose-500 text-rose-500" />
            {t.badge}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
            {t.title}
          </h2>
          
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center border-4 border-slate-50 text-white shadow-sm">
              <MapPin size={24} />
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed pt-2">
              {t.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative blurs */}
      <div className="absolute -z-0 bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute -z-0 top-0 right-0 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
}
