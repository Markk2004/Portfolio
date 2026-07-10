'use client';

import { useState, useEffect, useRef } from 'react';
import WelcomeIntro from '@/components/WelcomeIntro';
import Header from '@/components/Header';
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
          <section id="hero" className="py-24 max-w-7xl mx-auto px-4 md:px-8">
            <h1 
              ref={mainHeadingRef}
              tabIndex={-1} 
              className="text-4xl md:text-6xl font-bold focus:outline-none"
            >
              {content.hero.greeting} <span className="text-[#06B6D4]">{content.hero.name}</span>
            </h1>
            <p className="text-xl mt-4 text-gray-400 max-w-2xl">{content.hero.description}</p>
          </section>

          <section id="about" className="py-20 border-t border-gray-900 max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-6">{content.about.title}</h2>
            {content.about.paragraphs.map((p, index) => (
              <p key={index} className="text-gray-400 mb-4 max-w-3xl leading-relaxed">{p}</p>
            ))}
          </section>

          <section id="skills" className="py-20 border-t border-gray-900 max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-6">{content.ui.nav.skills}</h2>
          </section>

          <section id="projects" className="py-20 border-t border-gray-900 max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-6">{content.ui.nav.projects}</h2>
          </section>

          <section id="contact" className="py-20 border-t border-gray-900 max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-6">{content.ui.nav.contact}</h2>
          </section>
        </main>

        <Footer content={content} />
      </div>
    </>
  );
}
