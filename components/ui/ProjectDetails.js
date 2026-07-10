'use client';

import { useEffect, useRef } from 'react';

export default function ProjectDetails({ project, content, onClose }) {
  const closeBtnRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    // Store trigger so we can restore focus on close
    triggerRef.current = document.activeElement;

    // Focus close button when dialog opens
    closeBtnRef.current?.focus();

    // Lock body scroll
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Escape key handler
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      // Restore focus to the triggering button
      if (triggerRef.current && typeof triggerRef.current.focus === 'function') {
        triggerRef.current.focus();
      }
    };
  }, [project, onClose]);

  if (!project) return null;

  const { details } = project;
  const c = content.ui.common;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" aria-hidden="true" />

      {/* Dialog surface — stopPropagation prevents backdrop-close when clicking inside */}
      <div
        className="relative z-10 w-full max-w-2xl max-h-[88dvh] overflow-y-auto rounded-2xl border border-slate-700 bg-[#0E131F] shadow-2xl shadow-black/60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-start justify-between gap-4 border-b border-slate-800 bg-[#0E131F] px-6 py-5">
          <div>
            <h2 className="text-xl font-bold text-white leading-tight">{project.title}</h2>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-block rounded-md border border-slate-700 bg-[#05070A] px-2 py-0.5 text-[10px] font-medium text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label={c.closeDetails}
            className="flex-shrink-0 rounded-lg border border-slate-700 p-2 text-gray-400 transition hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="space-y-6 px-6 py-6">

          {/* Source label */}
          <p className="text-xs text-gray-500">
            <span className="font-semibold text-gray-400">{c.detailsSource}:</span>{' '}
            {details.sourceType === 'provided-srs'
              ? `${details.sourceLabel} (requirements from provided SRS document, not independently verified GitHub implementation facts)`
              : details.sourceLabel}
          </p>

          {/* Overview */}
          <section>
            <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-400">{c.detailsOverview}</h3>
            <p className="text-sm leading-7 text-gray-300">{details.overview}</p>
          </section>

          {/* Modules */}
          {details.modules.length > 0 && (
            <section>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">{c.detailsModules}</h3>
              <ul className="space-y-3">
                {details.modules.map((mod) => (
                  <li key={mod.title} className="rounded-lg border border-slate-800 bg-[#05070A] p-4">
                    <p className="text-sm font-semibold text-white">{mod.title}</p>
                    <p className="mt-1 text-xs leading-6 text-gray-400">{mod.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Roles */}
          {details.roles.length > 0 && (
            <section>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">{c.detailsRoles}</h3>
              <ul className="space-y-3">
                {details.roles.map((role) => (
                  <li key={role.title} className="rounded-lg border border-slate-800 bg-[#05070A] p-4">
                    <p className="text-sm font-semibold text-white">{role.title}</p>
                    <p className="mt-1 text-xs leading-6 text-gray-400">{role.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Business Rules */}
          {details.businessRules.length > 0 && (
            <section>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">{c.detailsBusinessRules}</h3>
              <ul className="space-y-2">
                {details.businessRules.map((br) => (
                  <li key={br.code} className="flex gap-3 rounded-lg border border-slate-800 bg-[#05070A] p-4">
                    <span className="flex-shrink-0 text-xs font-bold text-white">{br.code}</span>
                    <span className="text-xs leading-6 text-gray-400">{br.description}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Non-functional Requirements */}
          {details.nonFunctionalRequirements.length > 0 && (
            <section>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">{c.detailsNonFunctional}</h3>
              <ul className="space-y-2">
                {details.nonFunctionalRequirements.map((nf) => (
                  <li key={nf.code} className="flex gap-3 rounded-lg border border-slate-800 bg-[#05070A] p-4">
                    <span className="flex-shrink-0 text-xs font-bold text-white">{nf.code}</span>
                    <span className="text-xs leading-6 text-gray-400">{nf.description}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* External links */}
          <div className="flex flex-wrap gap-3 border-t border-slate-800 pt-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-gray-300 transition hover:border-white hover:text-white"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              {content.ui.common.viewGithub}
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {content.ui.common.liveDemo}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
