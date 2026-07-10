import { en } from '../i18n/en';
import { th } from '../i18n/th';

export const featuredProjects = [
  {
    slug: 'hospital-app',
    githubUrl: 'https://github.com/Markk2004/hospital-app',
    stack: ['React', 'TypeScript', 'Vite'],
  },
  {
    slug: 'InvestingNew',
    githubUrl: 'https://github.com/Markk2004/InvestingNew',
    demoUrl: 'https://investing-new.vercel.app',
    stack: ['Next.js', 'TypeScript'],
  },
  {
    slug: 'investerBack',
    githubUrl: 'https://github.com/Markk2004/investerBack',
    stack: ['PHP'],
  },
];

export const skills = [
  { name: 'Next.js', icon: 'Nextjs', category: 'frontend' },
  { name: 'React', icon: 'React', category: 'frontend' },
  { name: 'JavaScript', icon: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', icon: 'TypeScript', category: 'frontend' },
  { name: 'Vite', icon: 'Vite', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'TailwindCSS', category: 'design' },
  { name: 'PHP', icon: 'PHP', category: 'backend' },
  { name: 'Laravel', icon: 'Laravel', category: 'backend' },
  { name: 'MySQL', icon: 'MySQL', category: 'backend' },
];

export function getLocaleContent(locale) {
  const normalizedLocale = (locale === 'th' || locale === 'en') ? locale : 'en';
  const dict = normalizedLocale === 'th' ? th : en;

  const localizedProjects = featuredProjects.map(proj => ({
    ...proj,
    title: dict.projects[proj.slug].title,
    summary: dict.projects[proj.slug].summary,
    description: dict.projects[proj.slug].description,
    imageAlt: dict.projects[proj.slug].imageAlt,
    image: proj.image || '/images/projects/project-placeholder.svg',
  }));

  return {
    locale: normalizedLocale,
    metadata: dict.metadata,
    ui: dict.ui,
    hero: dict.hero,
    about: dict.about,
    projects: localizedProjects,
    skills: skills.map(skill => ({
      ...skill,
      categoryLabel: dict.ui.categories[skill.category] || skill.category,
    })),
    contact: dict.contact,
    footer: dict.footer,
  };
}
