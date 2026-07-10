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
      {canUse3D && (
        <div className="id-card-overlay" aria-hidden="true">
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-200">Portfolio ID</p>
          <p className="mt-2 text-xl font-extrabold tracking-tight text-white">{profile}</p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100/80">{role}</p>
          <span className="mt-5 block h-px w-24 bg-gradient-to-r from-cyan-300 to-emerald-300" />
        </div>
      )}
      <div className="sr-only">
        <p>{profile}</p>
        <p>{role}</p>
        <a href={ctaHref}>Contact {profile}</a>
      </div>
    </div>
  );
}
