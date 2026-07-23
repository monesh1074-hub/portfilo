'use client';

import React from 'react';
import { EXPERIENCES } from '@/lib/portfolioData';
import { Briefcase, Trophy, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'hackathon':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-950/80 border border-purple-500/40 text-purple-300">
            Hackathon & AI
          </span>
        );
      case 'client':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
            Client Production App
          </span>
        );
      case 'internship':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
            Software Engineering Internship
          </span>
        );
      default:
        return (
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-800 text-slate-300">
            Project
          </span>
        );
    }
  };

  return (
    <section id="experience" className="py-24 relative bg-[#070A10]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Experience</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Journey & <span className="text-gradient-cyan">Track Record</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Key software development milestones across AI hackathons, production client deployments, and engineering internships.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-8 space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#090D16] border-2 border-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                <Briefcase className="w-4 h-4 text-cyan-400" />
              </div>

              {/* Content Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 space-y-4 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {getTypeBadge(exp.type)}
                    </div>
                    <div className="text-sm font-semibold text-cyan-400 flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 flex items-center gap-1 text-xs font-normal">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-slate-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 pt-2">
                  {exp.achievements.map((achieve, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{achieve}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {exp.skillsUsed.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
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
