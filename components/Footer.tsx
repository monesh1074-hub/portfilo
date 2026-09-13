'use client';

import React from 'react';
import { MONESH_BIO } from '@/lib/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Terminal, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#070a14] border-t border-white/[0.08] text-slate-400 text-xs">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Status */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="font-mono text-sm font-bold text-white tracking-tight flex items-center gap-1.5"
          >
            <span className="text-indigo-400">❯</span>
            <span>{MONESH_BIO.name.toLowerCase()}</span>
            <span className="text-indigo-400">.dev</span>
          </a>
          <span className="text-slate-600">|</span>
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <span>© 2026 Monesh M</span>
          </div>
        </div>

        {/* Tagline & Craft */}
        <div className="flex items-center gap-2 text-slate-400 text-xs text-center">
          <span>Designed & developed with Next.js 14, React & Tailwind CSS</span>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={MONESH_BIO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#0d1527] border border-white/[0.08] text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={MONESH_BIO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#0d1527] border border-white/[0.08] text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href="#"
            className="px-2.5 py-1 rounded-lg bg-[#0d1527] border border-white/[0.08] text-slate-400 hover:text-white text-xs transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

