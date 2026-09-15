import React from 'react';
import { Sparkles, Edit3 } from 'lucide-react';
import { Language, translations } from '../translations';
import { motion } from 'motion/react';

interface MenuDemoProps {
  language: Language;
}

export function MenuDemo({ language }: MenuDemoProps) {
  const t = translations[language].menuDemo;

  return (
    <section className="py-24 bg-sky-50 border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">{t.title}</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">{t.subtitle}</p>
            <button className="px-6 py-3 bg-white border border-slate-200 text-sky-600 rounded-xl font-medium shadow-sm flex items-center gap-2 hover:bg-sky-50 transition-colors">
              <Sparkles size={18} />
              {t.btnEdit}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="bg-white rounded-3xl shadow-xl p-6 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sky-400 to-blue-500"></div>
              
              <div className="flex justify-between items-start mb-4 mt-2">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider">
                  {t.badge}
                </span>
                <button className="text-slate-400 hover:text-sky-500 bg-slate-50 p-2 rounded-full transition-colors">
                  <Edit3 size={16} />
                </button>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.itemTitle}</h3>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">{t.itemDesc}</p>
              
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
                <span className="text-2xl font-bold text-slate-900">$24</span>
                <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
                  <Sparkles size={14} className="text-sky-600" />
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 top-10 -right-10 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-48 h-48 bg-sky-100 rounded-full blur-3xl opacity-60"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
