import TypingRole from '@/components/TypingRole';
import { roles } from '@/lib/roles';

export default function Hero({ content }) {
  return (
    <section id="hero" className="relative flex min-h-[82dvh] items-center overflow-hidden px-4 py-16 md:px-8 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_24%,#06B6D420,transparent_38%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,#22C55E16,transparent_34%)]" aria-hidden="true" />
      <div className="circuit-pattern absolute inset-0" aria-hidden="true" />
      <div className="hero-scanline absolute left-[8%] right-[8%] top-[24%] h-px" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#05070A] to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-3xl text-left">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#67E8F9]">
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
            className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#06B6D4] via-[#3B82F6] to-[#22C55E] px-8 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-cyan-950/40 transition duration-200 hover:brightness-110 active:scale-[0.98] sm:w-auto"
          >
            {content.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-slate-700 bg-[#0D1219]/75 px-8 py-3.5 text-center text-sm font-semibold text-gray-200 transition duration-200 hover:border-cyan-300/60 hover:bg-[#111827] hover:text-white active:scale-[0.98] sm:w-auto"
          >
            {content.hero.ctaContact}
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
