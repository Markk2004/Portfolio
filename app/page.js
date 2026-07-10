'use client';

import { useState, useEffect, useRef } from 'react';
import WelcomeIntro from '@/components/WelcomeIntro';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getLocaleContent } from '@/lib/portfolio-content';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [locale, setLocale] = useState('en');
  const mainHeadingRef = useRef(null);

  const content = getLocaleContent(locale);

  useEffect(() => {
    if (introComplete && mainHeadingRef.current) {
      mainHeadingRef.current.focus();
    }
  }, [introComplete]);

  return (
    <>
      <WelcomeIntro onComplete={() => setIntroComplete(true)} />
      
      <div 
        className={`flex flex-col min-h-screen transition-opacity duration-700 ease-in-out ${
          introComplete ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden pointer-events-none'
        }`}
        aria-hidden={!introComplete}
      >
        <Header locale={locale} content={content} onLocaleChange={setLocale} />
        
        <main className="flex-1">
          <div ref={mainHeadingRef} tabIndex={-1} className="focus:outline-none" aria-label="Main Portfolio Content">
            <Hero content={content} />
          </div>
          <About content={content} />
          <Skills skills={content.skills} content={content} />
          <Projects projects={content.projects} content={content} />
          <Contact locale={locale} content={content} />
        </main>

        <Footer content={content} />
      </div>
    </>
  );
}
