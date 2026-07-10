'use client';

import { useEffect, useState } from 'react';
import useReducedMotion from '@/hooks/useReducedMotion';

export default function TypingRole({ phrases = [], intervalMs = 2600 }) {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion || phrases.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [intervalMs, phrases, reducedMotion]);

  return <span className="typing-role" aria-live="polite">{phrases[index] || phrases[0] || ''}</span>;
}
