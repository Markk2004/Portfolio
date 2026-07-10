'use client';

export default function LanguageSwitcher({ locale, onChange }) {
  return (
    <div 
      className="flex items-center space-x-1 bg-[#111827] border border-gray-800 rounded-full p-1" 
      role="group" 
      aria-label="Language Selector"
    >
      <button
        type="button"
        onClick={() => onChange('en')}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer ${
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
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer ${
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
