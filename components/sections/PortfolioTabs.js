'use client';

import { useRef, useState } from 'react';
import CertificatesEmptyState from './CertificatesEmptyState';
import Projects from './Projects';
import Skills from './Skills';

const tabs = ['projects', 'certificates', 'tech-stack'];

export default function PortfolioTabs({ projects, skills, content }) {
  const [activeTab, setActiveTab] = useState('projects');
  const tabRefs = useRef({});
  const labels = {
    projects: content.ui.nav.projects,
    certificates: content.ui.nav.certificates,
    'tech-stack': content.ui.nav.techStack,
  };

  const selectTab = (tab) => setActiveTab(tab);
  const moveTab = (event, direction) => {
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = (currentIndex + direction + tabs.length) % tabs.length;
    const nextTab = tabs[nextIndex];
    setActiveTab(nextTab);
    tabRefs.current[nextTab]?.focus();
    event.preventDefault();
  };

  return (
    <section id="portfolio" className="border-t border-slate-900/80 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="section-kicker">{content.ui.nav.portfolio}</p>
          <h2 className="section-title">{content.ui.portfolioTitle}</h2>
          <span className="section-rule" aria-hidden="true" />
        </div>
        <div role="tablist" aria-label={content.ui.nav.portfolio} className="mx-auto mb-10 flex max-w-xl flex-wrap justify-center gap-2 rounded-lg border border-slate-800 bg-slate-950/60 p-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              ref={(node) => { tabRefs.current[tab] = node; }}
              id={`tab-${tab}`}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`panel-${tab}`}
              tabIndex={activeTab === tab ? 0 : -1}
              onClick={() => selectTab(tab)}
              onKeyDown={(event) => {
                if (event.key === 'ArrowRight') moveTab(event, 1);
                if (event.key === 'ArrowLeft') moveTab(event, -1);
                if (event.key === 'Home') { event.preventDefault(); selectTab(tabs[0]); tabRefs.current[tabs[0]]?.focus(); }
                if (event.key === 'End') { event.preventDefault(); selectTab(tabs[tabs.length - 1]); tabRefs.current[tabs[tabs.length - 1]]?.focus(); }
              }}
              className={`min-h-11 rounded-lg px-4 text-sm font-semibold transition duration-200 ${activeTab === tab ? 'bg-white/10 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]' : 'text-slate-400 hover:bg-slate-900 hover:text-white'}`}
            >
              {labels[tab]}
            </button>
          ))}
        </div>
        <div id="panel-projects" role="tabpanel" aria-labelledby="tab-projects" hidden={activeTab !== 'projects'}>
          <Projects projects={projects} content={content} />
        </div>
        <div id="panel-certificates" role="tabpanel" aria-labelledby="tab-certificates" hidden={activeTab !== 'certificates'}>
          <CertificatesEmptyState content={content} />
        </div>
        <div id="panel-tech-stack" role="tabpanel" aria-labelledby="tab-tech-stack" hidden={activeTab !== 'tech-stack'}>
          <Skills skills={skills} content={content} />
        </div>
      </div>
    </section>
  );
}
