'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import IdCardFallback from './IdCardFallback';
import useFinePointer from '@/hooks/useFinePointer';
import useReducedMotion from '@/hooks/useReducedMotion';

const IdCardScene = dynamic(() => import('./IdCardScene'), { ssr: false, loading: () => null });

export default function InteractiveIdCard({ profile, role, ctaHref }) {
  const finePointer = useFinePointer();
  const reducedMotion = useReducedMotion();
  const [desktopReady, setDesktopReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setDesktopReady(window.innerWidth >= 900), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const canUse3D = desktopReady && finePointer && !reducedMotion;

  return (
    <div className="relative h-[390px] w-full max-w-[430px]" aria-label={`${profile}, ${role}`}>
      {canUse3D ? <IdCardScene profile={profile} role={role} /> : <IdCardFallback profile={profile} role={role} ctaHref={ctaHref} />}
      <div className="sr-only">
        <p>{profile}</p>
        <p>{role}</p>
        <a href={ctaHref}>Contact {profile}</a>
      </div>
    </div>
  );
}
