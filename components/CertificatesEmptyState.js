export default function CertificatesEmptyState({ content }) {
  return (
    <div className="glass-card mx-auto max-w-3xl rounded-2xl border-dashed p-12 text-center">
      <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-300" aria-hidden="true">✦</div>
      <h3 className="text-xl font-bold text-white">{content.ui.nav.certificates}</h3>
      <p className="mt-3 text-slate-400">{content.ui.common.certificatesEmpty}</p>
    </div>
  );
}
