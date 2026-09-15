import React from 'react';
import { Percent, Users, ShieldCheck } from 'lucide-react';
import { Language, translations } from '../translations';
import { motion } from 'motion/react';

interface ROIProps {
  language: Language;
}

export function ROI({ language }: ROIProps) {
  const t = translations[language].roi;

  const icons = [
    <Percent size={32} className="text-sky-500" />,
    <ShieldCheck size={32} className="text-blue-500" />,
    <Users size={32} className="text-cyan-500" />
  ];

  const colors = [
    'text-sky-500',
    'text-blue-500',
    'text-cyan-500'
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          >
            {t.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                  {icons[index]}
                </div>
                <span className={`text-4xl md:text-5xl font-extrabold tracking-tight ${colors[index]}`}>
                  {stat.value}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{stat.title}</h3>
              <p className="text-slate-600 leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
