'use client';

import React from 'react';
import { MONESH_BIO } from '@/lib/portfolioData';
import { InteractiveTerminal } from './InteractiveTerminal';
import { ArrowDown, Terminal, ShieldCheck, Activity, Zap, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full space-y-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1527] border border-white/[0.08] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-slate-300">
                Full-Stack Developer • Tamil Nadu, India
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Building modern web applications &{' '}
              <span className="text-gradient-indigo">practical AI tools</span>.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Hi, I'm <strong className="text-white font-semibold">Monesh</strong>. I build fast, responsive web applications using Next.js, React, and TypeScript. From building a voice-driven billing platform for local merchants to digitizing a 27-year veteran event staging company, I love turning ideas into clean, functional software.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-md active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 text-indigo-200" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0d1527] hover:bg-[#131c31] border border-white/[0.08] hover:border-indigo-500/40 text-slate-200 hover:text-white text-xs font-medium transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Contact Me</span>
              </a>

              <a
                href={MONESH_BIO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#0d1527] hover:bg-[#131c31] border border-white/[0.08] hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all"
                title="GitHub Repositories"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Workstation Widget */}
          <div className="lg:col-span-5">
            <InteractiveTerminal />
          </div>
        </div>

        {/* 4-Metric Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          {/* Highlight 1 */}
          <div className="stitch-card p-5 rounded-2xl flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">PROJECTS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="font-mono text-2xl sm:text-3xl font-bold text-white">5+ Live</div>
            <p className="text-xs text-slate-400">Deployed on Vercel & Render</p>
          </div>

          {/* Highlight 2 */}
          <div className="stitch-card p-5 rounded-2xl flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">STACK</span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            </div>
            <div className="font-mono text-2xl sm:text-3xl font-bold text-indigo-300">Next.js 14</div>
            <p className="text-xs text-slate-400">React 18 & TypeScript</p>
          </div>

          {/* Highlight 3 */}
          <div className="stitch-card p-5 rounded-2xl flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">AI PROTOTYPE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="font-mono text-2xl sm:text-3xl font-bold text-emerald-400">VOICEBILL</div>
            <p className="text-xs text-slate-400">Speech-to-Invoice System</p>
          </div>

          {/* Highlight 4 */}
          <div className="stitch-card p-5 rounded-2xl flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">CLIENT WORK</span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            </div>
            <div className="font-mono text-2xl sm:text-3xl font-bold text-white">27-Yr Firm</div>
            <p className="text-xs text-slate-400">Kalai Decorators Platform</p>
          </div>
        </div>
      </div>
    </section>
  );
};

