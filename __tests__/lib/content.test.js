import { getLocaleContent, getProjectBySlug } from '@/lib/content/portfolio-content';

test('returns both supported locales and exactly three curated projects', () => {
  expect(getLocaleContent('en').locale).toBe('en');
  expect(getLocaleContent('th').locale).toBe('th');
  expect(getLocaleContent('fr').locale).toBe('en');
  expect(getLocaleContent('en').projects.map((project) => project.slug)).toEqual([
    'hospital-app', 'InvestingNew', 'investerBack',
  ]);
});

test('hospital-app details sourceType is provided-srs and contains 6 modules', () => {
  const hams = getLocaleContent('en').projects.find((p) => p.slug === 'hospital-app');
  expect(hams.details.sourceType).toBe('provided-srs');
  expect(hams.details.modules).toHaveLength(6);
});

test('getProjectBySlug returns localized project or undefined', () => {
  expect(getProjectBySlug('missing-slug', 'en')).toBeUndefined();
  
  const hamsEn = getProjectBySlug('hospital-app', 'en');
  expect(hamsEn).toBeDefined();
  expect(hamsEn.title).toContain('Hospital Asset & Maintenance System');

  const hamsTh = getProjectBySlug('hospital-app', 'th');
  expect(hamsTh).toBeDefined();
  expect(hamsTh.title).toContain('ระบบบริหารจัดการครุภัณฑ์');
});

