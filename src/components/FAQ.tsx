import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Language, translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';

interface FAQProps {
  language: Language;
}

export function FAQ({ language }: FAQProps) {
  const t = translations[language].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t.title}</h2>
        </div>

        <div className="space-y-4">
          {t.items.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-white rounded-2xl border transition-all ${isOpen ? 'border-sky-200 shadow-md' : 'border-slate-100 shadow-sm'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-sky-600' : 'text-slate-800'}`}>
                    {item.q}
                  </span>
                  <ChevronDown 
                    className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-sky-500' : ''}`}
                    size={20}
                  />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
