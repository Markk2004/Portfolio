import React from 'react';
import { render, screen, act } from '@testing-library/react';
import WelcomeIntro from '@/components/layout/WelcomeIntro';

jest.useFakeTimers();

test('completes once after the short branded intro duration', () => {
  const onComplete = jest.fn();
  render(<WelcomeIntro onComplete={onComplete} />);
  expect(screen.getByText('WELCOME TO MY PORTFOLIO')).toBeVisible();
  act(() => {
    jest.advanceTimersByTime(1500);
  });
  expect(onComplete).toHaveBeenCalledTimes(1);
});
