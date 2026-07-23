'use client';

import React, { useState } from 'react';
import { Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

export const ProjectArchitectGenerator: React.FC = () => {
  const presets = [
    { title: 'AI Voice Billing App', stack: ['Next.js 14', 'TypeScript', 'Web Speech API', 'Tailwind CSS'], palette: ['#00F0FF', '#6366F1', '#10B981'] },
    { title: 'Luxury E-Commerce Storefront', stack: ['React 18', 'TypeScript', 'Context State', 'Vercel Edge'], palette: ['#F59E0B', '#38BDF8', '#0F172A'] },
    { title: 'Real-Time Analytics Dashboard', stack: ['JavaScript', 'Chart.js', 'Express', 'Render'], palette: ['#A855F7', '#34D399', '#070A10'] },
  ];

  const [selectedPreset, setSelectedPreset] = useState(presets[0]);
  const [generating, setGenerating] = useState(false);

  const handleGenerate = (preset: typeof presets[0]) => {
    setGenerating(true);
    setSelectedPreset(preset);
    setTimeout(() => setGenerating(false), 300);
  };

  return (
    <section className="py-20 relative bg-[#060912]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive AI Architecture Playground</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Instant <span className="text-gradient-cyan">System Architecture Generator</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Choose a project blueprint preset below to simulate Monesh's UI/UX Pro Max design system reasoning engine & full-stack architecture mapping.
              </p>

              {/* Preset Buttons */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">
                  Select Project Blueprint Preset:
                </div>
                <div className="flex flex-wrap gap-2">
                  {presets.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleGenerate(p)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                        selectedPreset.title === p.title
                          ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20'
                          : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {p.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Output Box */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#050811] border border-slate-800 p-6 space-y-5 font-mono text-xs shadow-2xl relative">
                {generating ? (
                  <div className="py-12 text-center space-y-3">
                    <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin mx-auto" />
                    <div className="text-cyan-400 font-mono text-xs">Evaluating UI/UX Reasoning Engine...</div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <span className="text-cyan-400 font-bold flex items-center gap-2">
                        <Terminal className="w-4 h-4" />
                        <span>BLUEPRINT: {selectedPreset.title}</span>
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded">
                        WCAG AAA Compliant
                      </span>
                    </div>

                    <div className="space-y-3 text-slate-300">
                      <div>
                        <span className="text-purple-400">Framework:</span> <span className="text-white">Next.js 14 App Router (React 18)</span>
                      </div>
                      <div>
                        <span className="text-purple-400">Recommended Stack:</span>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {selectedPreset.stack.map((s, idx) => (
                            <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-purple-400">Palette Tokens:</span>
                        <div className="flex items-center gap-2 mt-2">
                          {selectedPreset.palette.map((c, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />
                              <span className="text-slate-300">{c}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-slate-400 text-[11px]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Ready for high-speed deployment on Vercel/Render</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
