import React from 'react';
import { Globe } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onContactClick: () => void;
}

export function Header({ language, setLanguage, onContactClick }: HeaderProps) {
  const t = translations[language];

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <span className="font-bold text-3xl text-slate-900 tracking-tight">Tably<span className="text-sky-500">.</span></span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
            <a href="#features" className="hover:text-sky-500 transition-colors">{t.nav.features}</a>
            <a href="#about" className="hover:text-sky-500 transition-colors">{t.nav.about}</a>
            <button onClick={onContactClick} className="hover:text-sky-500 transition-colors cursor-pointer">{t.nav.contact}</button>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-lg border border-slate-200">
              <Globe size={16} className="text-slate-400 ml-2" />
              <button 
                onClick={() => setLanguage('cs')}
                className={`px-2 py-1 text-sm rounded-md transition-colors ${language === 'cs' ? 'bg-white shadow-sm text-sky-600 font-semibold' : 'text-slate-500 hover:text-slate-700'}`}
              >
                CS
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm rounded-md transition-colors ${language === 'en' ? 'bg-white shadow-sm text-sky-600 font-semibold' : 'text-slate-500 hover:text-slate-700'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
