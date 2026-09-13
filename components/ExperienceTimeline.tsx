'use client';

import React from 'react';
import { EXPERIENCES } from '@/lib/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'hackathon':
        return (
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 font-medium">
            AI Hackathon
          </span>
        );
      case 'client':
        return (
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 font-medium">
            Client Production Project
          </span>
        );
      case 'internship':
        return (
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#070a14] border border-white/[0.1] text-slate-300 font-medium">
            Engineering Internship
          </span>
        );
      default:
        return (
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#070a14] text-slate-300">
            Project
          </span>
        );
    }
  };

  return (
    <section id="experience" className="py-24 relative scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              EXPERIENCE & TIMELINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Experience & Milestones
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Hands-on work record spanning voice AI hackathons, production client deployments, and frontend engineering internships.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-white/[0.08] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 ring-4 ring-[#0a0f1d] group-hover:bg-emerald-400 group-hover:scale-125 transition-all shadow-[0_0_8px_rgba(99,102,241,0.5)]" />

              {/* Content Card */}
              <div className="stitch-card p-6 sm:p-7 rounded-2xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {getTypeBadge(exp.type)}
                    </div>
                    <div className="text-xs font-mono text-indigo-300 flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 flex items-center gap-1 font-normal">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="px-3 py-1 rounded-md bg-[#070a14] border border-white/[0.08] text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-emerald-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 pt-1">
                  {exp.achievements.map((achieve, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{achieve}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.skillsUsed.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-[#070a14] border border-white/[0.06] text-[10px] font-mono text-indigo-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

