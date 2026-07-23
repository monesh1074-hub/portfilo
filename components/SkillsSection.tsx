'use client';

import React from 'react';
import { SKILL_CATEGORIES } from '@/lib/portfolioData';
import { Globe3D } from './Globe3D';
import { Code2, Cpu, Cloud, Terminal, Layers, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-purple-400" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-emerald-400" />;
      default:
        return <Layers className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-28 relative bg-[#060912]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Proficiency & Engineering Mastery</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Core <span className="text-gradient-cyan">Tech Stack & Competencies</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A comprehensive overview of tools, frameworks, and deployment environments utilized across full-stack and AI projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Skill Categories (Col 8) */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div
                key={idx}
                className="glass-panel p-7 rounded-3xl border border-slate-800 space-y-6 hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-slate-800/80">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs sm:text-sm font-medium">
                        <span className="text-slate-200 flex items-center gap-2">
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
                          )}
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-cyan-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 3D Holographic Sphere Widget (Col 4) */}
          <div className="lg:col-span-4 glass-panel p-8 rounded-3xl border border-slate-800 text-center space-y-4 flex flex-col items-center justify-center shadow-2xl">
            <Globe3D />
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">Full-Stack & Cloud Architecture</h4>
              <p className="text-xs text-slate-400">
                Deploying production Next.js & Node.js apps globally on Vercel Edge & Render.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
