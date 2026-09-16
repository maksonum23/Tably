import React from 'react';
import { CalendarCheck, Map, Monitor } from 'lucide-react';
import { Language, translations } from '../translations';
import { motion } from 'motion/react';

interface FeaturesProps {
  language: Language;
}

export function Features({ language }: FeaturesProps) {
  const t = translations[language].features;

  const features = [
    {
      id: 'reservation',
      icon: <CalendarCheck className="text-sky-500" size={32} />,
      title: t.reservation.title,
      description: t.reservation.description,
      bg: 'bg-sky-50',
    },
    {
      id: 'maps',
      icon: <Map className="text-blue-500" size={32} />,
      title: t.maps.title,
      description: t.maps.description,
      bg: 'bg-blue-50',
    },
    {
      id: 'websites',
      icon: <Monitor className="text-cyan-500" size={32} />,
      title: t.websites.title,
      description: t.websites.description,
      bg: 'bg-cyan-50',
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.title}</h2>
          <p className="text-lg text-slate-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
