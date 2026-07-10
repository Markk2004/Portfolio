'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getTechIcon } from '@/lib/content/tech-icons';

export default function SkillBadge({ skill }) {
  const normalizedKey = skill.name.toLowerCase();
  const iconUrl = getTechIcon(normalizedKey);
  const [imgError, setImgError] = useState(!iconUrl);

  return (
    <div className="glass-card flex min-h-20 items-center space-x-3 rounded-lg px-5 py-4 transition duration-200 hover:-translate-y-1 hover:border-white/40">
      <div className="flex h-10 w-10 shrink-0 select-none items-center justify-center rounded-lg bg-[#05070A]">
        {imgError ? (
          <span className="text-xs font-bold text-gray-300">
            {skill.name.substring(0, 2).toUpperCase()}
          </span>
        ) : (
          <Image
            src={iconUrl}
            alt={`${skill.name} logo`}
            width={24}
            height={24}
            unoptimized
            className="h-6 w-6 object-contain"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-white">{skill.name}</h4>
        <p className="text-[10px] uppercase tracking-wider text-gray-400">{skill.categoryLabel}</p>
      </div>
    </div>
  );
}
