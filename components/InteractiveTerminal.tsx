'use client';

import React, { useState, useEffect } from 'react';
import { MONESH_BIO } from '@/lib/portfolioData';
import { Terminal, Play, RefreshCw, CheckCircle2, Sparkles } from 'lucide-react';

export const InteractiveTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'repos' | 'stack'>('profile');
  const [typingIndex, setTypingIndex] = useState(0);

  const profileLines = [
    `const developer = {`,
    `  name: "${MONESH_BIO.name}",`,
    `  role: "Full-Stack & AI Engineer",`,
    `  email: "${MONESH_BIO.email}",`,
    `  github: "@monesh1074-hub",`,
    `  linkedin: "monesh908",`,
    `  status: "Available for Full-Time Roles & Projects"`,
    `};`
  ];

  const repoLines = [
    `const activeRepositories = [`,
    `  { name: "VOICEBILL-hackthon", status: "Live Vercel" },`,
    `  { name: "aaru-luxury-fashion", status: "Live Vercel" },`,
    `  { name: "murfalcon-ai", status: "Live Render" },`,
    `  { name: "client1-kalai-decorators", status: "Live Vercel" },`,
    `  { name: "Airbnb-clone-internship", status: "Live Vercel" },`,
    `  { name: "Dashboard-Internship", status: "Live Vercel" }`,
    `];`
  ];

  const stackLines = [
    `const techStack = {`,
    `  frontend: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS"],`,
    `  backend: ["Node.js", "Express", "AI Voice APIs", "REST APIs"],`,
    `  deployment: ["Vercel", "Render", "Git", "GitHub"]`,
    `};`
  ];

  const getCurrentLines = () => {
    switch (activeTab) {
      case 'repos':
        return repoLines;
      case 'stack':
        return stackLines;
      default:
        return profileLines;
    }
  };

  const currentLines = getCurrentLines();

  useEffect(() => {
    setTypingIndex(0);
    const interval = setInterval(() => {
      setTypingIndex((prev) => {
        if (prev < currentLines.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="relative group rounded-3xl p-0.5 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500">
      <div className="rounded-[22px] bg-[#070A10] overflow-hidden border border-slate-800">
        {/* Header Bar */}
        <div className="bg-[#0D111D] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>

          {/* Interactive Command Tabs */}
          <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                activeTab === 'profile'
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              monesh.ts
            </button>
            <button
              onClick={() => setActiveTab('repos')}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                activeTab === 'repos'
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              repos.json
            </button>
            <button
              onClick={() => setActiveTab('stack')}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                activeTab === 'stack'
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              stack.config
            </button>
          </div>

          <div className="flex items-center gap-1 text-xs font-mono text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Build Passing</span>
          </div>
        </div>

        {/* Code Content Window */}
        <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed bg-[#050811] space-y-2 min-h-[260px] text-slate-200">
          <div className="text-slate-500 text-xs flex items-center gap-2 pb-2 border-b border-slate-900">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>// Running: npx ui-ux-pro-max inspect --target={activeTab}</span>
          </div>

          {currentLines.slice(0, typingIndex).map((line, idx) => (
            <div key={idx} className="animate-in fade-in slide-in-from-left-2 duration-150">
              {line.includes(':') ? (
                <span>
                  <span className="text-purple-400">{line.split(':')[0]}:</span>
                  <span className="text-emerald-300">{line.split(':').slice(1).join(':')}</span>
                </span>
              ) : line.startsWith('const') ? (
                <span>
                  <span className="text-cyan-400">const</span>{' '}
                  <span className="text-indigo-300">{line.replace('const', '').replace('=', '')}</span> =
                </span>
              ) : (
                <span className="text-cyan-300">{line}</span>
              )}
            </div>
          ))}

          {typingIndex < currentLines.length && (
            <div className="flex items-center gap-1 text-cyan-400 animate-pulse">
              <span className="w-2 h-4 bg-cyan-400 inline-block" />
              <span className="text-xs text-slate-500">evaluating...</span>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="bg-[#090D16] px-4 py-2.5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AI Agency Engine Active</span>
          </div>
          <button
            onClick={() => setTypingIndex(0)}
            className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Re-run</span>
          </button>
        </div>
      </div>
    </div>
  );
};
