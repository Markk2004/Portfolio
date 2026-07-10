import SkillBadge from './SkillBadge';

export default function Skills({ skills, content }) {
  return (
    <div id="skills" className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill) => (
        <SkillBadge key={skill.name} skill={skill} />
      ))}
    </div>
  );
}
