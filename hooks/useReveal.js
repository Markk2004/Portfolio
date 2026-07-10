'use client';

import { useEffect, useRef, useState } from 'react';

export default function useReveal() {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setRevealed(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true);
        observer.disconnect();
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, revealed };
}
