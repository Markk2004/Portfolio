import { getLocaleContent } from '@/lib/portfolio-content';

test('returns both supported locales and exactly three curated projects', () => {
  expect(getLocaleContent('en').locale).toBe('en');
  expect(getLocaleContent('th').locale).toBe('th');
  expect(getLocaleContent('fr').locale).toBe('en');
  expect(getLocaleContent('en').projects.map((project) => project.slug)).toEqual([
    'hospital-app', 'InvestingNew', 'investerBack',
  ]);
});
