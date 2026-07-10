'use client';

import Image from 'next/image';

export default function IdCardFallback({ profile, role, ctaHref = '#contact' }) {
  return (
    <div className="id-card-fallback-wrap" aria-label={`${profile}, ${role}`}>
      <div className="id-card-lanyard" aria-hidden="true" />
      <div className="id-card-fallback glass-card flex flex-col justify-between p-6">
        <div className="flex items-start justify-between">
          {/* Avatar frame */}
          <div className="relative h-20 w-20 overflow-hidden rounded-md border border-[#06B6D4]/40 bg-[#0B0F14]">
            <Image
              src="/images/profile/profile-2.jfif"
              alt={`${profile} avatar`}
              fill
              className="object-cover object-top scale-[1.08]"
            />
          </div>
          <div className="id-card-chip" aria-hidden="true">JK</div>
        </div>
        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Portfolio ID</p>
          <h3 className="mt-1 text-2xl font-bold text-white leading-tight">{profile}</h3>
          <p className="mt-1 text-sm text-slate-300">{role}</p>
          <a href={ctaHref} className="mt-6 inline-flex min-h-11 items-center rounded-lg border border-cyan-300/40 px-4 text-xs font-semibold text-cyan-200 transition duration-200 hover:bg-cyan-300/10">Let&apos;s connect</a>
        </div>
        <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-500">
          <span>MK-2004</span><span>TH / EN</span>
        </div>
      </div>
    </div>
  );
}
