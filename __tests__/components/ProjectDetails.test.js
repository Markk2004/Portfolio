import { fireEvent, render, screen } from '@testing-library/react';
import ProjectDetails from '@/components/ui/ProjectDetails';
import { getLocaleContent } from '@/lib/content/portfolio-content';

const content = getLocaleContent('en');
const mockProject = content.projects.find((p) => p.slug === 'hospital-app');

test('renders dialog when project is provided and fires onClose on close button click', () => {
  const onClose = jest.fn();
  render(<ProjectDetails project={mockProject} content={content} onClose={onClose} />);
  
  expect(screen.getByRole('dialog')).toBeVisible();
  expect(screen.getByText('Asset Management')).toBeVisible();

  const closeButton = screen.getByRole('button', { name: /close details/i });
  fireEvent.click(closeButton);
  expect(onClose).toHaveBeenCalledTimes(1);
});

test('fires onClose when Escape key is pressed', () => {
  const onClose = jest.fn();
  render(<ProjectDetails project={mockProject} content={content} onClose={onClose} />);
  
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(onClose).toHaveBeenCalledTimes(1);
});

test('fires onClose when backdrop is clicked', () => {
  const onClose = jest.fn();
  render(<ProjectDetails project={mockProject} content={content} onClose={onClose} />);
  
  // The outer dialog container is the backdrop
  const dialog = screen.getByRole('dialog');
  fireEvent.click(dialog);
  expect(onClose).toHaveBeenCalledTimes(1);
});
