import React, { useEffect } from 'react';
import { X, Mail, Phone } from 'lucide-react';
import { Language, translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export function ContactModal({ isOpen, onClose, language }: ContactModalProps) {
  const t = translations[language].modal;

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-3xl shadow-2xl z-[101] overflow-hidden"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900">{t.title}</h3>
                <button 
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                  aria-label={t.close}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <a href="mailto:info@tably.cz" className="flex items-center gap-4 p-4 rounded-2xl bg-sky-50 hover:bg-sky-100 border border-sky-100 transition-colors group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-sky-500 shadow-sm group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-sky-600 mb-1">{t.email}</p>
                    <p className="text-lg font-bold text-slate-900">info@tably.cz</p>
                  </div>
                </a>

                <a href="tel:+420123456789" className="flex items-center gap-4 p-4 rounded-2xl bg-sky-50 hover:bg-sky-100 border border-sky-100 transition-colors group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-sky-500 shadow-sm group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-sky-600 mb-1">{t.phone}</p>
                    <p className="text-lg font-bold text-slate-900">+420 123 456 789</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
