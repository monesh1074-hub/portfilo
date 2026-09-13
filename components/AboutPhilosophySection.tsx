'use client';

import React from 'react';
import { Layers, Cpu, ShieldCheck, UserCheck, GraduationCap, MapPin, HeartHandshake } from 'lucide-react';
import { MONESH_BIO } from '@/lib/portfolioData';

export const AboutPhilosophySection: React.FC = () => {
  const principles = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
      title: 'Built for Real Users & Businesses',
      badge: 'Client Work',
      description:
        'When building the digital platform for Kalai Decorators—a 27-year veteran staging company behind Kollywood sets (Vikram, Leo)—I focused on non-technical coordinators, organizing 100+ photo albums with fast load times and smooth enquiry booking.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      title: 'Practical AI with Real Utility',
      badge: 'Hackathon Innovation',
      description:
        'Rather than superficial wrappers, I focus on practical tools that solve tangible problems. VOICEBILL was designed to give busy retail merchants hands-free speech invoicing with real-time tax calculation and instant PDF printing.'
    },
    {
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      title: 'Performance & Production Rigor',
      badge: 'Full-Stack Craft',
      description:
        'I prioritize sub-second load speeds, mobile responsiveness, and strong TypeScript type safety. From clean component hierarchies to efficient Vercel deployments, every piece of code is written with long-term maintainability in mind.'
    }
  ];

  return (
    <section id="about" className="py-24 relative scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              BACKGROUND & APPROACH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How I Approach Software
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            The engineering principles and practical human mindset behind every application I build.
          </p>
        </div>

        {/* 3 Principles Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="stitch-card p-7 rounded-2xl flex flex-col justify-between space-y-5 border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[#070a14] border border-white/[0.08]">
                    {item.icon}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#070a14] border border-white/[0.08] text-[11px] font-mono text-slate-400">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Production Tested</span>
                </span>
                <span className="font-mono text-[11px] text-slate-500">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bio Card / About Monesh */}
        <div className="stitch-card p-6 sm:p-8 rounded-2xl border border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-emerald-400 font-medium">ABOUT MONESH</span>
            </div>
            <h4 className="text-xl font-bold text-white">
              Computer Science Student & Full-Stack Developer
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Based in Tamil Nadu, India. Passionate about building modern, intuitive web platforms and experimenting with speech recognition and AI. When I'm not coding, I'm exploring new web frameworks, collaborating on hackathon builds, and helping local businesses modernize their digital presence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 w-full md:w-auto">
            <div className="px-4 py-2.5 rounded-xl bg-[#070a14] border border-white/[0.08] flex items-center gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              <span>Tamil Nadu, India</span>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-[#070a14] border border-white/[0.08] flex items-center gap-2.5 text-xs text-slate-300">
              <GraduationCap className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>B.E / B.Tech Computer Science</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
