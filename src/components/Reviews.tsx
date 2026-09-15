import React from 'react';
import { Star, ThumbsUp, ThumbsDown, MessageSquare, MapPin } from 'lucide-react';
import { Language, translations } from '../translations';
import { motion } from 'motion/react';

interface ReviewsProps {
  language: Language;
}

export function Reviews({ language }: ReviewsProps) {
  const t = translations[language].reviews;

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            {/* Mock UI diagram for feedback */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-md mx-auto">
              <div className="flex gap-1 justify-center mb-8">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} className="text-amber-400 fill-amber-400" size={36} />
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center gap-3 relative group">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <ThumbsUp size={28} />
                  </div>
                  <span className="font-semibold text-slate-700">{t.good}</span>
                  
                  {/* Decorative line */}
                  <div className="absolute top-[110%] left-1/2 w-px h-6 bg-slate-200"></div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center gap-3 relative">
                  <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center">
                    <ThumbsDown size={28} />
                  </div>
                  <span className="font-semibold text-slate-700">{t.bad}</span>
                  
                  {/* Decorative line */}
                  <div className="absolute top-[110%] left-1/2 w-px h-6 bg-slate-200"></div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center gap-2 text-center pt-2">
                  <div className="w-12 h-12 bg-white shadow-md border border-slate-100 rounded-xl flex items-center justify-center text-slate-700 relative z-10">
                    <MapPin size={24} className="text-blue-500" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Google Maps</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center pt-2">
                  <div className="w-12 h-12 bg-white shadow-md border border-slate-100 rounded-xl flex items-center justify-center text-slate-700 relative z-10">
                    <MessageSquare size={24} className="text-slate-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Private Inbox</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-30"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">{t.title}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
