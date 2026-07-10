import TypingRole from '@/components/ui/TypingRole';
import { roles } from '@/lib/content/roles';

export default function Hero({ content }) {
  return (
    <section id="hero" className="relative flex min-h-[82dvh] items-center overflow-hidden px-4 py-16 md:px-8 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_24%,rgba(255,255,255,0.03),transparent_38%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(255,255,255,0.02),transparent_34%)]" aria-hidden="true" />

      {/* Top-right corner circuit */}
      <svg className="circuit-tr" viewBox="0 0 480 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ maskImage: 'linear-gradient(to bottom-left, black 25%, transparent 75%)' }}>
        <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
          <path d="M340 0 L340 40 L280 40 L280 90 L320 130 L320 180 L260 180 L220 220 L160 220 L120 260 L120 310" strokeWidth="1.4" />
          <path d="M340 40 L400 40 L440 80 L480 80" strokeWidth="1.2" />
          <path d="M440 80 L440 130 L480 130" strokeWidth="0.9" />
          <path d="M280 90 L240 90 L200 50 L200 0" strokeWidth="1.0" />
          <path d="M200 50 L160 50 L160 0" strokeWidth="0.8" />
          <path d="M320 180 L380 180 L420 220 L480 220" strokeWidth="1.1" />
          <path d="M420 220 L420 280 L460 320 L480 320" strokeWidth="0.8" />
          <path d="M120 260 L80 260 L40 300 L40 380 L80 420" strokeWidth="0.7" strokeDasharray="5 4" />
          <circle cx="340" cy="0" r="3.5" fill="white" stroke="none" />
          <circle cx="340" cy="40" r="2.5" fill="white" stroke="none" />
          <circle cx="280" cy="40" r="2" fill="white" stroke="none" />
          <circle cx="280" cy="90" r="2" fill="white" stroke="none" />
          <circle cx="320" cy="130" r="3" fill="white" stroke="none" />
          <circle cx="320" cy="180" r="2" fill="white" stroke="none" />
          <circle cx="220" cy="220" r="3" fill="white" stroke="none" />
          <circle cx="160" cy="220" r="2" fill="white" stroke="none" />
          <circle cx="120" cy="260" r="2.5" fill="white" stroke="none" />
          <circle cx="400" cy="40" r="2" fill="white" stroke="none" />
          <circle cx="440" cy="80" r="3" fill="white" stroke="none" />
          <circle cx="440" cy="130" r="2" fill="white" stroke="none" />
          <circle cx="200" cy="50" r="2.5" fill="white" stroke="none" />
          <circle cx="160" cy="50" r="2" fill="white" stroke="none" />
          <circle cx="200" cy="0" r="3" fill="white" stroke="none" />
          <circle cx="160" cy="0" r="2" fill="white" stroke="none" />
          <circle cx="380" cy="180" r="2" fill="white" stroke="none" />
          <circle cx="420" cy="220" r="3" fill="white" stroke="none" />
          <circle cx="420" cy="280" r="2" fill="white" stroke="none" />
          <circle cx="80" cy="260" r="2.5" fill="white" stroke="none" />
          <circle cx="40" cy="300" r="2" fill="white" stroke="none" />
          <circle cx="40" cy="380" r="2" fill="white" stroke="none" />
          <rect x="348" y="100" width="56" height="36" rx="3" strokeWidth="0.9" />
          <line x1="348" y1="110" x2="336" y2="110" strokeWidth="0.8" />
          <line x1="348" y1="124" x2="336" y2="124" strokeWidth="0.8" />
          <line x1="404" y1="110" x2="416" y2="110" strokeWidth="0.8" />
          <line x1="404" y1="124" x2="416" y2="124" strokeWidth="0.8" />
          <circle cx="336" cy="110" r="1.5" fill="white" stroke="none" />
          <circle cx="336" cy="124" r="1.5" fill="white" stroke="none" />
          <circle cx="416" cy="110" r="1.5" fill="white" stroke="none" />
          <circle cx="416" cy="124" r="1.5" fill="white" stroke="none" />
        </g>
      </svg>

      {/* Bottom-left corner circuit */}
      <svg className="circuit-bl" viewBox="0 0 420 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ maskImage: 'linear-gradient(to top-right, black 25%, transparent 75%)' }}>
        <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
          <path d="M80 380 L80 340 L140 340 L180 300 L180 250 L240 250 L280 210 L280 160 L340 160 L380 120 L420 120" strokeWidth="1.4" />
          <path d="M140 340 L80 340 L40 300 L0 300" strokeWidth="1.1" />
          <path d="M40 300 L40 250 L0 250" strokeWidth="0.8" />
          <path d="M180 300 L220 300 L260 340 L260 380" strokeWidth="0.9" />
          <path d="M280 160 L240 160 L200 120 L200 80 L160 80 L120 40 L120 0" strokeWidth="1.1" />
          <path d="M200 120 L240 120 L260 100 L260 60 L300 20 L340 20" strokeWidth="0.8" />
          <path d="M340 160 L380 160 L420 200" strokeWidth="0.7" strokeDasharray="5 4" />
          <circle cx="80" cy="380" r="3.5" fill="white" stroke="none" />
          <circle cx="80" cy="340" r="2.5" fill="white" stroke="none" />
          <circle cx="140" cy="340" r="2" fill="white" stroke="none" />
          <circle cx="180" cy="300" r="2" fill="white" stroke="none" />
          <circle cx="180" cy="250" r="3" fill="white" stroke="none" />
          <circle cx="240" cy="250" r="2" fill="white" stroke="none" />
          <circle cx="280" cy="210" r="2.5" fill="white" stroke="none" />
          <circle cx="280" cy="160" r="3" fill="white" stroke="none" />
          <circle cx="340" cy="160" r="2" fill="white" stroke="none" />
          <circle cx="380" cy="120" r="2.5" fill="white" stroke="none" />
          <circle cx="40" cy="300" r="3" fill="white" stroke="none" />
          <circle cx="40" cy="250" r="2" fill="white" stroke="none" />
          <circle cx="220" cy="300" r="2" fill="white" stroke="none" />
          <circle cx="260" cy="340" r="2" fill="white" stroke="none" />
          <circle cx="260" cy="380" r="3" fill="white" stroke="none" />
          <circle cx="240" cy="160" r="2" fill="white" stroke="none" />
          <circle cx="200" cy="120" r="2.5" fill="white" stroke="none" />
          <circle cx="200" cy="80" r="2" fill="white" stroke="none" />
          <circle cx="160" cy="80" r="2.5" fill="white" stroke="none" />
          <circle cx="120" cy="40" r="2" fill="white" stroke="none" />
          <circle cx="120" cy="0" r="3" fill="white" stroke="none" />
          <circle cx="240" cy="120" r="2" fill="white" stroke="none" />
          <circle cx="260" cy="100" r="2" fill="white" stroke="none" />
          <circle cx="260" cy="60" r="2" fill="white" stroke="none" />
          <circle cx="300" cy="20" r="2.5" fill="white" stroke="none" />
          <circle cx="340" cy="20" r="2" fill="white" stroke="none" />
          <rect x="62" y="170" width="56" height="36" rx="3" strokeWidth="0.9" />
          <line x1="62" y1="180" x2="50" y2="180" strokeWidth="0.8" />
          <line x1="62" y1="194" x2="50" y2="194" strokeWidth="0.8" />
          <line x1="118" y1="180" x2="130" y2="180" strokeWidth="0.8" />
          <line x1="118" y1="194" x2="130" y2="194" strokeWidth="0.8" />
          <circle cx="50" cy="180" r="1.5" fill="white" stroke="none" />
          <circle cx="50" cy="194" r="1.5" fill="white" stroke="none" />
          <circle cx="130" cy="180" r="1.5" fill="white" stroke="none" />
          <circle cx="130" cy="194" r="1.5" fill="white" stroke="none" />
        </g>
      </svg>

      <div className="hero-scanline absolute left-[8%] right-[8%] top-[24%] h-px" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#05070A] to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-3xl text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-gray-400">
            {content.hero.greeting}
          </p>
          <h1 className="mb-4 text-5xl font-extrabold leading-[0.95] text-white md:text-7xl">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              {content.hero.name}
            </span>
          </h1>
          <h2 className="mb-6 text-2xl font-bold text-gray-200 md:text-3xl">
            <TypingRole phrases={roles[content.locale] || roles.en} />
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
            {content.hero.description}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#portfolio"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-white px-8 py-3.5 text-center text-sm font-semibold text-black shadow-lg shadow-black/40 transition duration-200 hover:bg-gray-200 active:scale-[0.98] sm:w-auto"
            >
              {content.hero.ctaProjects}
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-slate-700 bg-slate-900/75 px-8 py-3.5 text-center text-sm font-semibold text-gray-200 transition duration-200 hover:border-white hover:bg-[#111827] hover:text-white active:scale-[0.98] sm:w-auto"
            >
              {content.hero.ctaContact}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
