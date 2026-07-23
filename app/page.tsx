'use client';

import React from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { ParticleCanvasBackground } from '@/components/ParticleCanvasBackground';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { LiveActivityFeed } from '@/components/LiveActivityFeed';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ProjectArchitectGenerator } from '@/components/ProjectArchitectGenerator';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070A10] text-slate-100 overflow-x-hidden relative selection:bg-cyan-500 selection:text-black">
      {/* Custom Trailing Halo Cursor */}
      <CustomCursor />

      {/* Dynamic Animated Particle Canvas Background */}
      <ParticleCanvasBackground />

      {/* Main Page Layout */}
      <Navbar />
      <main className="relative z-10 space-y-12">
        <HeroSection />

        {/* Live Activity Ticker Row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LiveActivityFeed />
        </div>

        <ProjectsSection />
        <ProjectArchitectGenerator />
        <SkillsSection />
        <ExperienceTimeline />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
