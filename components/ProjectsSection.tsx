'use client';

import React, { useState } from 'react';
import { PROJECTS } from '@/lib/portfolioData';
import type { Project } from '@/lib/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';
import { ExternalLink, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'client-work', label: 'Client Work' },
    { id: 'ai-hackathon', label: 'AI & Hackathons' },
    { id: 'e-commerce', label: 'E-Commerce' },
    { id: 'internship', label: 'Internships' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  // Helper to get clean display URL for browser frame
  const getDisplayUrl = (url: string) => {
    return url.replace('https://', '').replace(/\/$/, '');
  };

  return (
    <section id="projects" className="py-24 relative scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects & Client Work
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Production web platforms built for real clients, hackathon-tested voice AI tools, and responsive e-commerce storefronts.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white font-semibold shadow-md border border-indigo-400/40'
                  : 'bg-[#0d1527] border border-white/[0.08] text-slate-400 hover:text-white hover:border-indigo-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="stitch-card rounded-2xl overflow-hidden flex flex-col justify-between group relative border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300"
            >
              {/* Browser Mockup Window */}
              <div
                onClick={() => setSelectedProject(project)}
                className="w-full bg-[#080c17] border-b border-white/[0.08] overflow-hidden cursor-pointer"
                title="Click to view case study"
              >
                {/* Browser Chrome Header */}
                <div className="px-3 py-2 bg-[#0c1324] flex items-center justify-between gap-2 border-b border-white/[0.06]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  {/* Browser URL bar pill */}
                  <div className="flex-1 max-w-[200px] px-2 py-0.5 rounded bg-[#070a14] border border-white/[0.06] text-[10px] font-mono text-slate-400 truncate text-center">
                    {project.liveUrl ? getDisplayUrl(project.liveUrl) : 'localhost:3000'}
                  </div>

                  {project.liveUrl && (
                    <span className="flex items-center gap-1 text-[9px] font-mono text-emerald-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      LIVE
                    </span>
                  )}
                </div>

                {/* Screenshot Image */}
                <div className="relative h-52 w-full overflow-hidden bg-[#070a14]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Category Pill */}
                  <div className="absolute top-2 left-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-[#0a0f1d]/90 text-indigo-300 border border-white/[0.1] backdrop-blur-md">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-normal">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Verified Highlight Stat */}
                {project.stats && project.stats.length > 0 && (
                  <div className="p-2.5 rounded-lg bg-[#070a14] border border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-slate-400">{project.stats[0].label}:</span>
                    <span className="font-semibold text-emerald-400 font-mono">{project.stats[0].value}</span>
                  </div>
                )}

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#070a14] border border-white/[0.06] text-[10px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-[#070a14] border border-white/[0.06] text-[10px] font-mono text-slate-500">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-[#070a14] border border-white/[0.08] text-slate-300 hover:text-white hover:border-indigo-500/40 transition-colors"
                        title="View Source on GitHub"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 hover:text-white hover:bg-indigo-900 transition-colors"
                        title="Open Live Website"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

