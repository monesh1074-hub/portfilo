'use client';

import React, { useState, useEffect } from 'react';
import { Activity, GitCommit, ShieldCheck, Zap, Server } from 'lucide-react';

export const LiveActivityFeed: React.FC = () => {
  const activities = [
    { type: 'commit', repo: 'VOICEBILL-hackthon', desc: 'Optimized AI speech invoice latency to <1.2s', time: 'Just now' },
    { type: 'deploy', repo: 'aaru-luxury-fashion', desc: 'Deployed production build to Vercel (Edge)', time: '2m ago' },
    { type: 'build', repo: 'murfalcon-ai', desc: 'Render Web Service health check passed (100%)', time: '5m ago' },
    { type: 'commit', repo: 'client1', desc: 'Updated 100+ photo album modal gallery layout', time: '12m ago' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [activities.length]);

  const current = activities[currentIndex];

  return (
    <div className="glass-panel p-4 rounded-2xl border border-slate-800/80 flex items-center justify-between gap-4 max-w-xl mx-auto lg:mx-0 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
          <Activity className="w-4 h-4 animate-pulse" />
        </div>

        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-white tracking-tight">
              {current.repo}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-cyan-300">
              {current.type.toUpperCase()}
            </span>
          </div>
          <p className="text-xs text-slate-300 line-clamp-1 font-medium">
            {current.desc}
          </p>
        </div>
      </div>

      <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1 flex-shrink-0">
        <Server className="w-3 h-3 text-emerald-400" />
        <span>{current.time}</span>
      </div>
    </div>
  );
};
