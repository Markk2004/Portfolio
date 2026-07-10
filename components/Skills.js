import SkillBadge from './SkillBadge';

export default function Skills({ skills, content }) {
  return (
    <section id="skills" className="py-24 border-t border-gray-900 bg-[#0B0F14] px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12 text-center">
          {content.ui.nav.skills}
          <span className="block w-12 h-[3px] bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] mx-auto mt-4 rounded-full" />
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
