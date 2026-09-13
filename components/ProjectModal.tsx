'use client';

import React from 'react';
import type { Project } from '@/lib/portfolioData';
import { GithubIcon } from './Icons';
import { X, ExternalLink, CheckCircle2, Cpu, Terminal } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d1527] border border-white/[0.1] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Preview Image */}
        <div className="relative w-full bg-[#080c17] flex-shrink-0 border-b border-white/[0.08]">
          {/* Browser Chrome Header */}
          <div className="px-4 py-2.5 bg-[#0c1324] flex items-center justify-between border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-slate-400 ml-2 truncate">
                {project.liveUrl || 'localhost:3000'}
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1 rounded-md bg-[#070a14] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Close Project Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-[#070a14]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1527] via-transparent to-transparent opacity-80" />

            {/* Title on bottom of image */}
            <div className="absolute bottom-4 left-5 right-5 space-y-1">
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-[#0a0f1d]/95 text-indigo-300 border border-white/[0.1] backdrop-blur-md">
                {project.categoryLabel}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-300">
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pb-5 border-b border-white/[0.06]">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-md transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Visit Live Website</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#070a14] border border-white/[0.08] hover:border-indigo-500/40 text-slate-200 hover:text-white text-xs font-mono transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Source on GitHub</span>
              </a>
            )}
          </div>

          {/* Full Description */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 font-mono">
              <Terminal className="w-4 h-4 text-indigo-400" />
              <span>About this Project</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 font-mono">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Key Features & Capabilities</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#070a14] border border-white/[0.06] text-xs text-slate-300 flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 font-mono">
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span>Technologies Used</span>
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-[#070a14] border border-white/[0.08] text-xs font-mono text-indigo-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

