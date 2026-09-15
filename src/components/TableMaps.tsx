import React from 'react';
import { Language, translations } from '../translations';
import { motion } from 'motion/react';

interface TableMapsProps {
  language: Language;
}

export function TableMaps({ language }: TableMapsProps) {
  const t = translations[language].tableMaps;
  
  const windowText = language === 'cs' ? 'OKNA' : 'WINDOWS';
  const entranceText = language === 'cs' ? 'VSTUP' : 'ENTRANCE';
  const barText = language === 'cs' ? 'BAR' : 'BAR';

  return (
    <section className="py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.title}</h2>
          <p className="text-lg text-slate-600">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-12">
          {/* Cafe Layout */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center w-full"
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-6">{t.cafe}</h3>
            <div className="w-full aspect-[4/3] bg-slate-50/50 rounded-3xl border border-slate-200 relative shadow-inner overflow-hidden">
              
              {/* Windows - Top */}
              <div className="absolute top-0 left-[15%] right-[15%] h-8 bg-sky-100/60 border-b border-sky-200 rounded-b-2xl flex items-center justify-center">
                <span className="text-[10px] font-bold text-sky-600 tracking-[0.3em]">{windowText}</span>
              </div>

              {/* Entrance - Bottom Left */}
              <div className="absolute bottom-0 left-[15%] w-24 h-6 border-t-2 border-dashed border-slate-300 flex items-center justify-center">
                <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">{entranceText}</span>
              </div>

              {/* Bar - Bottom Right */}
              <div className="absolute bottom-6 right-6 w-[35%] h-16 rounded-2xl border border-sky-200 bg-sky-50 flex items-center justify-center text-sky-800 font-semibold text-sm shadow-sm">
                {barText}
              </div>

              {/* Tables - Row 1 (Near Window) */}
              <div className="absolute top-[22%] left-0 right-0 flex justify-center gap-3 sm:gap-6 px-4">
                {[1, 2, 3, 4, 5].map(num => (
                  <div key={`c1-${num}`} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-sky-300 bg-white shadow-sm flex items-center justify-center text-sky-700 font-bold text-xs hover:bg-sky-50 transition-colors cursor-pointer">{num}</div>
                ))}
              </div>

              {/* Tables - Row 2 */}
              <div className="absolute top-[48%] left-0 right-0 flex justify-center gap-3 sm:gap-6 px-4">
                {[6, 7, 8, 9, 10].map(num => (
                  <div key={`c2-${num}`} className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-sky-300 bg-white shadow-sm flex items-center justify-center text-sky-700 font-bold text-xs hover:bg-sky-50 transition-colors cursor-pointer">{num}</div>
                ))}
              </div>

              {/* Tables - Row 3 (Left side) */}
              <div className="absolute bottom-8 left-[8%] flex gap-4 sm:gap-6">
                 {[11, 12, 13].map(num => (
                  <div key={`c3-${num}`} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-sky-300 bg-white shadow-sm flex items-center justify-center text-sky-700 font-bold text-xs hover:bg-sky-50 transition-colors cursor-pointer">{num}</div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Restaurant Layout */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center w-full"
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-6">{t.restaurant}</h3>
            <div className="w-full aspect-[4/3] bg-slate-50/50 rounded-3xl border border-slate-200 relative shadow-inner overflow-hidden">
              
              {/* Windows - Right side */}
              <div className="absolute top-[15%] bottom-[15%] right-0 w-8 bg-sky-100/60 border-l border-sky-200 rounded-l-2xl flex items-center justify-center">
                <span className="text-[10px] font-bold text-sky-600 tracking-[0.3em] -rotate-90 whitespace-nowrap">{windowText}</span>
              </div>

              {/* Entrance - Bottom Center */}
              <div className="absolute bottom-0 left-[40%] right-[40%] h-6 border-t-2 border-dashed border-slate-300 flex items-center justify-center">
                <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">{entranceText}</span>
              </div>

              {/* Booths - Left side */}
              <div className="absolute top-4 bottom-4 left-0 flex flex-col justify-between py-2">
                {[14, 15, 16, 17, 18].map(num => (
                  <div key={`r1-${num}`} className="w-12 h-10 sm:w-14 sm:h-12 rounded-r-xl border-y border-r border-sky-400 bg-white shadow-sm flex items-center justify-center text-sky-700 font-bold text-xs hover:bg-sky-50 transition-colors cursor-pointer">{num}</div>
                ))}
              </div>

              {/* Middle tables - Column 1 */}
              <div className="absolute top-[12%] bottom-[12%] left-[25%] flex flex-col justify-between">
                {[19, 20, 21, 22].map(num => (
                  <div key={`r2-${num}`} className="w-14 h-8 sm:w-16 sm:h-10 rounded-lg border border-sky-300 bg-white shadow-sm flex items-center justify-center text-sky-700 font-bold text-xs hover:bg-sky-50 transition-colors cursor-pointer">{num}</div>
                ))}
              </div>

              {/* Middle tables - Column 2 */}
              <div className="absolute top-[12%] bottom-[12%] left-[52%] flex flex-col justify-between">
                {[23, 24, 25, 26].map(num => (
                  <div key={`r3-${num}`} className="w-14 h-8 sm:w-16 sm:h-10 rounded-lg border border-sky-300 bg-white shadow-sm flex items-center justify-center text-sky-700 font-bold text-xs hover:bg-sky-50 transition-colors cursor-pointer">{num}</div>
                ))}
              </div>

              {/* VIP Round tables - Near window */}
              <div className="absolute top-[18%] right-[14%]">
                 <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-sky-400 bg-sky-50 shadow-sm flex items-center justify-center text-sky-800 font-bold text-xs hover:bg-sky-100 transition-colors cursor-pointer">VIP 1</div>
              </div>
              <div className="absolute bottom-[18%] right-[14%]">
                 <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-sky-400 bg-sky-50 shadow-sm flex items-center justify-center text-sky-800 font-bold text-xs hover:bg-sky-100 transition-colors cursor-pointer">VIP 2</div>
              </div>
              
              {/* Extra Bar Table - Top center */}
              <div className="absolute top-[6%] left-[45%] w-10 h-10 rounded-full border border-sky-300 bg-white shadow-sm flex items-center justify-center text-sky-700 font-bold text-xs hover:bg-sky-50 transition-colors cursor-pointer">
                27
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
