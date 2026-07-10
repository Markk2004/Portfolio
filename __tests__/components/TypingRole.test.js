import { render, screen } from '@testing-library/react';
import TypingRole from '@/components/ui/TypingRole';

test('renders a readable role phrase', () => {
  render(<TypingRole phrases={['Frontend Developer', 'Full-Stack Developer']} />);
  expect(screen.getByText('Frontend Developer')).toBeVisible();
});
