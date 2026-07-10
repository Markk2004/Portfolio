import { render, screen } from '@testing-library/react';
import InteractiveIdCard from '@/components/3d/InteractiveIdCard';

test('keeps an accessible text alternative for the ID card', () => {
  render(<InteractiveIdCard profile="Juggit Khunkhaw" role="Frontend Developer" ctaHref="#contact" />);
  expect(screen.getAllByText('Juggit Khunkhaw').length).toBeGreaterThan(0);
  expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '#contact');
});
