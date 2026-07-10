'use client';

import { useEffect, useState } from 'react';
import useFinePointer from '@/hooks/useFinePointer';
import useReducedMotion from '@/hooks/useReducedMotion';

export default function CustomCursor() {
  const finePointer = useFinePointer();
  const reducedMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!finePointer || reducedMotion) return undefined;
    let frame = 0;
    const onPointerMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setPosition({ x: event.clientX, y: event.clientY }));
    };
    const onPointerOver = (event) => setHovering(Boolean(event.target.closest('a, button, input, textarea')));
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerover', onPointerOver);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerover', onPointerOver);
    };
  }, [finePointer, reducedMotion]);

  if (!finePointer || reducedMotion) return null;

  return (
    <div className="custom-cursor-layer" aria-hidden="true">
      <span className={`custom-cursor-dot ${hovering ? 'is-hovering' : ''}`} style={{ left: position.x, top: position.y }} />
      <span className={`custom-cursor-ring ${hovering ? 'is-hovering' : ''}`} style={{ left: position.x, top: position.y }} />
    </div>
  );
}
