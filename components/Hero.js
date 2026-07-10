import TypingRole from '@/components/TypingRole';
import { roles } from '@/lib/roles';

export default function Hero({ content }) {
  return (
    <section id="hero" className="relative flex min-h-[80vh] items-center justify-center py-20 px-4 md:px-8">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#06B6D415,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#3B82F615,transparent_50%)]" />

      <div className="relative mx-auto max-w-5xl text-center z-10">
        <p className="text-sm font-semibold tracking-[0.25em] text-[#06B6D4] uppercase mb-4">
          {content.hero.greeting}
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
            {content.hero.name}
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-6">
          <TypingRole phrases={roles[content.locale] || roles.en} />
        </h2>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {content.hero.description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] text-white font-semibold text-sm shadow-lg hover:shadow-[#06B6D430] hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
          >
            {content.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-gray-850 bg-[#111827]/50 text-gray-300 font-semibold text-sm hover:bg-[#111827] hover:text-white hover:border-gray-700 hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
          >
            {content.hero.ctaContact}
          </a>
        </div>
      </div>
    </section>
  );
}
