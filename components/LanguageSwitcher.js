'use client';

export default function LanguageSwitcher({ locale, onChange }) {
  return (
    <div 
      className="flex items-center space-x-1 rounded-lg border border-slate-800 bg-[#111827] p-1" 
      role="group" 
      aria-label="Language Selector"
    >
      <button
        type="button"
        onClick={() => onChange('en')}
        className={`min-h-11 min-w-11 rounded-md px-3 text-xs font-semibold transition-all duration-200 ${
          locale === 'en'
            ? 'bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] text-white shadow-md'
            : 'text-gray-400 hover:text-white'
        }`}
        aria-current={locale === 'en' ? 'true' : 'false'}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => onChange('th')}
        className={`min-h-11 min-w-11 rounded-md px-3 text-xs font-semibold transition-all duration-200 ${
          locale === 'th'
            ? 'bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] text-white shadow-md'
            : 'text-gray-400 hover:text-white'
        }`}
        aria-current={locale === 'th' ? 'true' : 'false'}
      >
        TH
      </button>
    </div>
  );
}
