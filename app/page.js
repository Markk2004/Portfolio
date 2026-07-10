'use client';

import { useState, useEffect, useRef } from 'react';
import WelcomeIntro from '@/components/WelcomeIntro';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
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
          {/* Accessible focus wrapper after welcome intro completes */}
          <div ref={mainHeadingRef} tabIndex={-1} className="focus:outline-none" aria-label="Main Portfolio Content">
            <Hero content={content} />
          </div>
          <About content={content} />
          <Skills skills={content.skills} content={content} />
          <Projects projects={content.projects} content={content} />
          
          <section id="contact" className="py-24 border-t border-gray-900 bg-[#0B0F14] px-4 md:px-8">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12 text-center">
                {content.ui.nav.contact}
                <span className="block w-12 h-[3px] bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] mx-auto mt-4 rounded-full" />
              </h2>
              <div className="text-center text-gray-400 mb-8 max-w-md mx-auto">
                <p>{content.contact.subtitle}</p>
              </div>
              {/* Contact Form goes here */}
            </div>
          </section>
        </main>

        <Footer content={content} />
      </div>
    </>
  );
}
