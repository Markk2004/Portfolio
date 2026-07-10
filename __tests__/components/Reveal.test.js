import { render, screen } from '@testing-library/react';
import Reveal from '@/components/Reveal';

test('keeps reveal content in the DOM', () => {
  render(<Reveal><p>About content</p></Reveal>);
  expect(screen.getByText('About content')).toBeInTheDocument();
});
