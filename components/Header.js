'use client';

import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ locale, content, onLocaleChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const nav = content.ui.nav;

  const menuItems = [
    { href: '#about', label: nav.about },
    { href: '#skills', label: nav.skills },
    { href: '#projects', label: nav.projects },
    { href: '#contact', label: nav.contact },
  ];

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
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
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
              className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-300 hover:bg-[#111827] hover:text-white transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
