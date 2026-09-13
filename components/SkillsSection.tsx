'use client';

import React from 'react';
import { SKILL_CATEGORIES } from '@/lib/portfolioData';
import { Globe3D } from './Globe3D';
import { Code2, Cpu, Cloud, Terminal, CheckCircle2, Layers, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-sky-400" />;
      default:
        return <Layers className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              SKILLS & CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Stack & Tools
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            The languages, frameworks, and deployment environments I use to build production web applications and tools.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="stitch-card p-6 rounded-2xl space-y-5 border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-[#070a14] border border-white/[0.08]">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-colors flex items-center gap-1.5 ${
                        skill.highlight
                          ? 'bg-indigo-950/60 text-indigo-200 border border-indigo-500/30'
                          : 'bg-[#070a14] text-slate-300 border border-white/[0.06]'
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>{category.skills.length} core technologies</span>
                <span>Active Stack</span>
              </div>
            </div>
          ))}
        </div>

        {/* Current Workflow / Setup Banner */}
        <div className="stitch-card p-6 rounded-2xl border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[11px] font-mono text-indigo-400 font-semibold">DAILY WORKFLOW & TOOLCHAIN</span>
            <p className="text-xs sm:text-sm text-slate-300">
              VS Code • Turbopack • Git Version Control • Vercel Edge • Tailwind CSS • Postman API Testing
            </p>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-[#070a14] border border-white/[0.08] text-xs font-mono text-emerald-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Next.js 14 App Router Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};

