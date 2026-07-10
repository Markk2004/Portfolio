'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getTechIcon } from '@/lib/tech-icons';

export default function ProjectCard({ project, content }) {
  const [imgSrc, setImgSrc] = useState(project.image || `/images/projects/${project.slug}.png`);

  return (
    <div className="flex flex-col h-full bg-[#111827] border border-gray-850 rounded-2xl overflow-hidden shadow-lg hover:border-gray-700 transition-all duration-300">
      {/* Project Thumbnail */}
      <div className="relative aspect-video w-full bg-[#0B0F14] overflow-hidden border-b border-gray-900">
        <Image
          src={imgSrc}
          alt={project.imageAlt || project.title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover"
          onError={() => setImgSrc('/images/projects/project-placeholder.svg')}
        />
      </div>

      {/* Project Details */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-400 mb-4">{project.summary}</p>
        <p className="text-xs text-gray-500 mb-6 leading-relaxed line-clamp-4">{project.description}</p>
        
        <div className="mt-auto space-y-6">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => {
              const normalized = tech.toLowerCase();
              const iconUrl = getTechIcon(normalized);
              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-medium rounded bg-[#0B0F14] text-[#06B6D4] border border-gray-850"
                >
                  {iconUrl && (
                    <img
                      src={iconUrl}
                      alt=""
                      className="h-3 w-3 object-contain"
                      aria-hidden="true"
                    />
                  )}
                  {tech}
                </span>
              );
            })}
          </div>

          {/* Links */}
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-900">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              aria-label={`${content.ui.common.viewGithub} for ${project.title}`}
            >
              <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              {content.ui.common.viewGithub}
            </a>
            
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-sm font-semibold text-[#06B6D4] hover:text-[#06B6D4]/80 transition-colors"
                aria-label={`${content.ui.common.liveDemo} for ${project.title}`}
              >
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
