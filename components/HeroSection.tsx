'use client';

import React from 'react';
import { MONESH_BIO } from '@/lib/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { InteractiveTerminal } from './InteractiveTerminal';
import { ArrowRight, Star, Clock, Calendar, Play, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex flex-col justify-between z-10">
      {/* 1. CINEMATIC BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-45"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4"
          type="video/mp4"
        />
      </video>

      {/* 2. BOTTOM BLUR OVERLAY */}
      <div className="bottom-blur-overlay" />

      {/* 3. HERO MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Status Pill */}
            <div
              className="animate-blur-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full liquid-glass shadow-lg"
              style={{ animationDelay: '0ms' }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono font-bold tracking-wide uppercase text-cyan-300">
                Available for Full-Stack Roles & Projects
              </span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1
                className="animate-blur-fade-up text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]"
                style={{ animationDelay: '400ms' }}
              >
                Hi, I'm <span className="text-gradient-cyan">{MONESH_BIO.name}</span> 👋
                <br />
                <span className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-100">
                  Step Through. Work Smarter.
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className="animate-blur-fade-up text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
                style={{ animationDelay: '500ms' }}
              >
                A voyage through forgotten realms, where past and future intertwine. Building Next.js 14 web platforms, AI voice platforms, and high-performance digital products.
              </p>
            </div>

            {/* Metadata Row */}
            <div
              className="animate-blur-fade-up flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-slate-200"
              style={{ animationDelay: '300ms' }}
            >
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-semibold text-white">8.7/10 Code Quality</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>6+ Live Deployments</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>April, 2026</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Watch Projects CTA */}
              <a
                href="#projects"
                className="animate-blur-fade-up inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white text-black font-bold text-base hover:bg-gray-200 transition-all duration-300 shadow-2xl hover:scale-105 cursor-pointer"
                style={{ animationDelay: '600ms' }}
              >
                <Play className="w-5 h-5 fill-black text-black" />
                <span>Watch Projects</span>
              </a>

              {/* Learn More Liquid Glass CTA */}
              <a
                href="#architecture"
                className="animate-blur-fade-up inline-flex items-center gap-2.5 px-7 py-4 rounded-full liquid-glass text-white font-bold text-base hover:bg-white/10 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: '700ms' }}
              >
                <span>Interactive Stack</span>
                <ArrowRight className="w-5 h-5 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Terminal Widget */}
          <div className="lg:col-span-5">
            <InteractiveTerminal />
          </div>
        </div>
      </div>
    </section>
  );
};
