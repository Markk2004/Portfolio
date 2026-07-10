'use client';

import useReveal from '@/hooks/useReveal';

export default function Reveal({ children, delay = 0, className = '' }) {
  const { ref, revealed } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${revealed ? 'is-revealed' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
}
