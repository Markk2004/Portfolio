'use client';

import { useEffect, useRef, useState } from 'react';

export default function WelcomeIntro({ onComplete }) {
  const completedRef = useRef(false);
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!completedRef.current) {
        completedRef.current = true;
        setExiting(true);
        onComplete?.();
      }
    }, 1200);

    const exitTimer = setTimeout(() => {
      setVisible(false);
    }, 1700);

    return () => {
      clearTimeout(timer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome Introduction"
      aria-live="polite"
      className={`welcome-intro fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0F14] text-white transition-all duration-500 ease-out ${exiting ? 'opacity-0 translate-y-[-8px]' : 'opacity-100'}`}
    >
      <div className="text-center px-4">
        <h1 className="text-xs md:text-sm font-semibold tracking-[0.3em] text-[#06B6D4] uppercase mb-3">
          WELCOME TO MY PORTFOLIO
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Juggit Khunkhaw
        </h2>
        {/* Progress bar */}
        <div className="w-32 h-[3px] bg-gray-800 mx-auto mt-6 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] origin-left"
            style={{
              animation: 'progress-bar 1.2s linear forwards'
            }}
          />
        </div>
      </div>
    </div>
  );
}
