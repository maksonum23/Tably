import React from 'react';
import { PenTool, Layout } from 'lucide-react';
import { Language, translations } from '../translations';
import { motion } from 'motion/react';

interface CustomWebsitesProps {
  language: Language;
}

export function CustomWebsites({ language }: CustomWebsitesProps) {
  const t = translations[language].customWeb;

  return (
    <section className="py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-sky-100">
              <PenTool size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">{t.title}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Minimalist Browser Mockup */}
            <div className="relative z-10 rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden flex flex-col">
              {/* Browser Header */}
              <div className="bg-slate-50 border-b border-slate-200 p-3 flex items-center gap-2">
                <div className="flex gap-1.5 ml-1">
                  <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="mx-auto w-1/2 h-5 bg-white rounded-md border border-slate-200 flex items-center justify-center">
                  <div className="w-1/3 h-2 bg-slate-100 rounded-full"></div>
                </div>
              </div>
              
              {/* Browser Body with Animated Layout Assembly */}
              <div className="p-4 sm:p-6 bg-slate-50 aspect-[4/3] sm:aspect-[16/10] flex flex-col gap-4">
                
                {/* Mock Nav */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="w-full h-10 bg-white rounded-lg border border-slate-200 flex justify-between items-center px-4 shadow-sm"
                >
                   <div className="w-16 h-3 bg-sky-200 rounded-full"></div>
                   <div className="flex gap-3">
                     <div className="w-8 h-2 bg-slate-100 rounded-full"></div>
                     <div className="w-8 h-2 bg-slate-100 rounded-full"></div>
                     <div className="w-8 h-2 bg-slate-100 rounded-full"></div>
                   </div>
                </motion.div>

                {/* Mock Hero */}
                <div className="flex gap-4 h-32 sm:h-40">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex-1 bg-gradient-to-br from-sky-50 to-blue-100 rounded-xl border border-sky-200 flex flex-col justify-center p-5 gap-3 shadow-inner"
                  >
                    <div className="w-3/4 h-4 sm:h-5 bg-sky-300 rounded-full"></div>
                    <div className="w-1/2 h-4 sm:h-5 bg-sky-300 rounded-full"></div>
                    <div className="w-24 h-8 sm:h-10 bg-sky-500 rounded-lg mt-2 shadow-sm"></div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="w-1/3 bg-slate-200 rounded-xl border border-slate-300 relative overflow-hidden flex items-center justify-center"
                  >
                     <Layout className="text-slate-300" size={32} />
                  </motion.div>
                </div>

                {/* Mock Cards */}
                <div className="grid grid-cols-3 gap-4 flex-1">
                  {[1, 2, 3].map((i) => (
                     <motion.div
                       key={i}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.5, delay: 0.8 + (i * 0.15) }}
                       className="bg-white rounded-xl border border-slate-200 p-3 sm:p-4 flex flex-col gap-3 shadow-sm"
                     >
                        <div className="w-full h-12 sm:h-16 bg-slate-100 rounded-lg"></div>
                        <div className="w-3/4 h-2 bg-slate-200 rounded-full mt-auto"></div>
                        <div className="w-1/2 h-2 bg-slate-200 rounded-full"></div>
                     </motion.div>
                  ))}
                </div>

              </div>
            </div>

            {/* Decorative background blurs */}
            <div className="absolute -z-10 top-10 -right-10 w-48 h-48 bg-sky-200 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
