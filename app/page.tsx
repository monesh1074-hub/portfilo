'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AboutPhilosophySection } from '@/components/AboutPhilosophySection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 overflow-x-hidden relative selection:bg-indigo-500 selection:text-white">
      {/* Main Page Layout */}
      <Navbar />
      <main className="relative z-10 space-y-16">
        <HeroSection />
        <ProjectsSection />
        <AboutPhilosophySection />
        <SkillsSection />
        <ExperienceTimeline />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
