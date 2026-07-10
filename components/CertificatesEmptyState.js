export default function CertificatesEmptyState({ content }) {
  return (
    <div className="glass-card mx-auto max-w-3xl rounded-lg border-dashed p-10 text-center md:p-12">
      <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300" aria-hidden="true">
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M7.5 3.75h9A2.25 2.25 0 0 1 18.75 6v12A2.25 2.25 0 0 1 16.5 20.25h-9A2.25 2.25 0 0 1 5.25 18V6A2.25 2.25 0 0 1 7.5 3.75Z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white">{content.ui.nav.certificates}</h3>
      <p className="mt-3 text-slate-400">{content.ui.common.certificatesEmpty}</p>
    </div>
  );
}
