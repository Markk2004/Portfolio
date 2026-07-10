import { fireEvent, render, screen } from '@testing-library/react';
import PortfolioTabs from '@/components/sections/PortfolioTabs';
import { getLocaleContent } from '@/lib/content/portfolio-content';

test('switches to the certificates empty state', () => {
  const content = getLocaleContent('en');
  render(<PortfolioTabs projects={[]} skills={[]} content={content} />);
  fireEvent.click(screen.getByRole('tab', { name: /certificates/i }));
  expect(screen.getByRole('tab', { name: /certificates/i })).toHaveAttribute('aria-selected', 'true');
  expect(screen.getByText('Certificates will be added soon.')).toBeVisible();
});
