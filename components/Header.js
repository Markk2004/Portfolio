'use client';

import { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ locale, content, onLocaleChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const nav = content.ui.nav;

  const menuItems = [
    { href: '#hero', label: nav.home, id: 'hero' },
    { href: '#about', label: nav.about, id: 'about' },
    { href: '#portfolio', label: nav.portfolio, id: 'portfolio' },
    { href: '#contact', label: nav.contact, id: 'contact' },
  ];

  useEffect(() => {
    const sections = ['hero', 'about', 'portfolio', 'contact'].map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { threshold: [0.2, 0.5], rootMargin: '-20% 0px -55% 0px' });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-900 bg-[#0B0F14]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:px-8">
        {/* Logo / Name */}
        <a href="#" className="text-xl font-bold tracking-tight text-white hover:text-[#06B6D4] transition-colors">
          JK<span className="text-[#06B6D4]">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={`text-sm font-medium transition-colors ${activeSection === item.id ? 'text-cyan-300' : 'text-gray-300 hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <LanguageSwitcher locale={locale} onChange={onLocaleChange} />
        </nav>

        {/* Mobile Menu Button & Switcher */}
        <div className="flex items-center space-x-4 md:hidden">
          <LanguageSwitcher locale={locale} onChange={onLocaleChange} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-400 hover:text-white focus:outline-none p-1 cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="md:hidden border-t border-gray-900 bg-[#0B0F14] px-4 py-4 space-y-3"
        >
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={`block rounded-lg px-3 py-2 text-base font-semibold transition-all ${activeSection === item.id ? 'bg-[#111827] text-cyan-300' : 'text-gray-300 hover:bg-[#111827] hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
