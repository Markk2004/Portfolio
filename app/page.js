'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import WelcomeIntro from '@/components/WelcomeIntro';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PortfolioTabs from '@/components/PortfolioTabs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import Reveal from '@/components/Reveal';
import { getLocaleContent } from '@/lib/portfolio-content';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [locale, setLocale] = useState('en');
  const mainHeadingRef = useRef(null);

  const content = getLocaleContent(locale);
  const completeIntro = useCallback(() => setIntroComplete(true), []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = content.metadata.title;
    if (introComplete && mainHeadingRef.current) {
      mainHeadingRef.current.focus();
    }
  }, [content.metadata.title, introComplete, locale]);

  return (
    <>
      <CustomCursor />
      <WelcomeIntro onComplete={completeIntro} />
      
      <div 
        className="site-background flex min-h-screen flex-col"
      >
        <Header locale={locale} content={content} onLocaleChange={setLocale} />
        
        <main className="flex-1">
          <div ref={mainHeadingRef} tabIndex={-1} className="focus:outline-none" aria-label="Main Portfolio Content">
            <Hero content={content} />
          </div>
          <Reveal><About content={content} /></Reveal>
          <Reveal delay={80}><PortfolioTabs skills={content.skills} projects={content.projects} content={content} /></Reveal>
          <Reveal delay={160}><Contact locale={locale} content={content} /></Reveal>
        </main>

        <Footer content={content} />
      </div>
    </>
  );
}
