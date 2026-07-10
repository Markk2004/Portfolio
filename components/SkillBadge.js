'use client';

import { useState } from 'react';
import { getTechIcon } from '@/lib/tech-icons';

export default function SkillBadge({ skill }) {
  const normalizedKey = skill.name.toLowerCase();
  const iconUrl = getTechIcon(normalizedKey);
  const [imgError, setImgError] = useState(!iconUrl);

  return (
    <div className="flex items-center space-x-3 bg-[#111827] border border-gray-850 rounded-xl px-5 py-4 hover:border-[#06B6D4]/50 hover:bg-[#111827]/80 hover:translate-y-[-2px] transition-all duration-300">
      {/* Supplemental logo block */}
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B0F14] select-none">
        {imgError ? (
          <span className="text-xs font-bold text-[#06B6D4]">
            {skill.name.substring(0, 2).toUpperCase()}
          </span>
        ) : (
          <img
            src={iconUrl}
            alt={`${skill.name} logo`}
            className="h-6 w-6 object-contain"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-white">{skill.name}</h4>
        <p className="text-[10px] text-gray-500 uppercase tracking-wider">{skill.categoryLabel}</p>
      </div>
    </div>
  );
}
