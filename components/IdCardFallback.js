'use client';

export default function IdCardFallback({ profile, role, ctaHref = '#contact' }) {
  return (
    <div className="id-card-fallback-wrap" aria-label={`${profile}, ${role}`}>
      <div className="id-card-lanyard" aria-hidden="true" />
      <div className="id-card-fallback glass-card">
        <div className="id-card-chip" aria-hidden="true">JK</div>
        <div className="mt-14">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Portfolio ID</p>
          <h3 className="mt-2 text-2xl font-bold text-white">{profile}</h3>
          <p className="mt-2 text-sm text-slate-300">{role}</p>
          <a href={ctaHref} className="mt-8 inline-flex rounded-full border border-cyan-300/40 px-4 py-2 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-300/10">Let&apos;s connect</a>
        </div>
        <div className="mt-8 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-500">
          <span>MK-2004</span><span>TH / EN</span>
        </div>
      </div>
    </div>
  );
}
