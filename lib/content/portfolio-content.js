import { en } from '../i18n/en';
import { th } from '../i18n/th';

export const featuredProjects = [
  {
    slug: 'hospital-app',
    githubUrl: 'https://github.com/Markk2004/hospital-app',
    stack: ['React', 'TypeScript', 'Vite'],
    details: {
      sourceType: 'provided-srs',
      sourceLabel: 'SoftDeath-SRS-HAMS.md',
      modules: [
        { title: 'Asset Management', description: 'Register, classify, and track hospital equipment by status, location, and criticality level.' },
        { title: 'Borrow & Return', description: 'Record equipment borrowing with timestamps, calculate usage duration automatically on return, and maintain borrowing history.' },
        { title: 'Spare Part Management', description: 'Issue spare parts linked to approved maintenance jobs and track remaining inventory with low-stock alerts.' },
        { title: 'Maintenance Management', description: 'Submit and track repair requests with priority levels, workflow statuses from open to close, and full maintenance history per asset.' },
        { title: 'Depreciation Management', description: 'Store depreciation data and display remaining asset lifespan to support replacement planning decisions.' },
        { title: 'Reporting & Analytics', description: 'Dashboard for asset status overview, usage summaries, and maintenance reports to support administrative decision-making.' },
      ],
      roles: [
        { title: 'System Administrator', description: 'Manages user accounts, access rights, and overall system configuration.' },
        { title: 'Asset Officer', description: 'Manages equipment records, borrow-return transactions, spare part disbursements, and depreciation tracking.' },
        { title: 'Maintenance Staff', description: 'Receives repair assignments, updates job status, and records maintenance results.' },
        { title: 'Medical Staff', description: 'Borrows and returns equipment, reports equipment issues, and views readiness status of assets related to patient care.' },
      ],
      businessRules: [
        { code: 'BR-01', description: 'Equipment under active maintenance cannot be borrowed.' },
        { code: 'BR-02', description: 'Every spare-part disbursement must be linked to an approved maintenance job.' },
        { code: 'BR-03', description: 'Assets approaching end-of-life based on depreciation data must trigger alerts to responsible staff.' },
        { code: 'BR-04', description: 'Critical assets must receive highest-priority maintenance treatment and must have a backup or replacement plan available while under repair.' },
      ],
      nonFunctionalRequirements: [
        { code: 'NF-01', description: 'Asset search and data retrieval must complete in no more than three seconds.' },
        { code: 'NF-02', description: 'Access to data must be controlled based on user role and permissions.' },
        { code: 'NF-03', description: 'All transactions must be logged and auditable for retroactive review.' },
        { code: 'NF-04', description: 'The user interface must be intuitive and appropriate for use in a hospital environment.' },
      ],
    },
  },
  {
    slug: 'InvestingNew',
    githubUrl: 'https://github.com/Markk2004/InvestingNew',
    demoUrl: 'https://investing-new.vercel.app',
    stack: ['Next.js', 'TypeScript'],
    details: {
      sourceType: 'verified',
      sourceLabel: 'https://github.com/Markk2004/InvestingNew',
      modules: [],
      roles: [],
      businessRules: [],
      nonFunctionalRequirements: [],
    },
  },
  {
    slug: 'investerBack',
    githubUrl: 'https://github.com/Markk2004/investerBack',
    stack: ['PHP'],
    details: {
      sourceType: 'verified',
      sourceLabel: 'https://github.com/Markk2004/investerBack',
      modules: [],
      roles: [],
      businessRules: [],
      nonFunctionalRequirements: [],
    },
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
    details: {
      ...proj.details,
      overview: dict.projects[proj.slug].description,
    },
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

export function getProjectBySlug(slug, locale = 'en') {
  return getLocaleContent(locale).projects.find((project) => project.slug === slug);
}
