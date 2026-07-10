'use client';

import { useEffect, useState } from 'react';

export default function useFinePointer() {
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const update = () => setFinePointer(mediaQuery.matches);
    update();
    mediaQuery.addEventListener?.('change', update);
    return () => mediaQuery.removeEventListener?.('change', update);
  }, []);

  return finePointer;
}
