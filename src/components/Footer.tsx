import React from 'react';
import { Language, translations } from '../translations';

interface FooterProps {
  language: Language;
  onContactClick: () => void;
}

export function Footer({ language, onContactClick }: FooterProps) {
  const t = translations[language].footer;
  const nav = translations[language].nav;

  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-900">
            <span className="font-bold text-3xl tracking-tight">Tably<span className="text-sky-500">.</span></span>
          </div>
          
          <nav className="flex gap-6 text-sm text-slate-500">
            <a href="#features" className="hover:text-sky-500 transition-colors">{nav.features}</a>
            <a href="#about" className="hover:text-sky-500 transition-colors">{nav.about}</a>
            <button onClick={onContactClick} className="hover:text-sky-500 transition-colors cursor-pointer">{nav.contact}</button>
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-100 text-center text-slate-400 text-sm">
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
