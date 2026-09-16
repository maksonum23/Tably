/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { TableMaps } from './components/TableMaps';
import { Atmosphere } from './components/Atmosphere';
import { CustomWebsites } from './components/CustomWebsites';
import { Reviews } from './components/Reviews';
import { ROI } from './components/ROI';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { Language } from './translations';

export default function App() {
  const [language, setLanguage] = useState<Language>('cs');
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-sky-200 selection:text-sky-900">
      <Header language={language} setLanguage={setLanguage} onContactClick={openContact} />
      
      <main>
        <Hero language={language} onContactClick={openContact} />
        <Features language={language} />
        <TableMaps language={language} />
        <Atmosphere language={language} />
        <CustomWebsites language={language} />
        <Reviews language={language} />
        <ROI language={language} />
        <About language={language} />
        <FAQ language={language} />
        <CTA language={language} onContactClick={openContact} />
      </main>

      <Footer language={language} onContactClick={openContact} />

      <ContactModal isOpen={isContactOpen} onClose={closeContact} language={language} />
    </div>
  );
}

