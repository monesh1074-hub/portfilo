'use client';

import React, { useState } from 'react';
import { MONESH_BIO } from '@/lib/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Code2, Menu, X, Sparkles, Mail, Search, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects', delay: '100ms' },
    { name: 'Architecture', href: '#architecture', delay: '150ms' },
    { name: 'Skills', href: '#skills', delay: '200ms' },
    { name: 'Experience', href: '#experience', delay: '250ms' },
    { name: 'Contact', href: '#contact', delay: '300ms' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 py-4 md:py-6 backdrop-blur-md bg-[#070A10]/60 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="animate-blur-fade-up flex items-center gap-3 group"
          style={{ animationDelay: '0ms' }}
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#070A10] rounded-[14px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-white text-lg tracking-tight group-hover:text-cyan-400 transition-colors">
              {MONESH_BIO.name}
              <span className="text-cyan-400">.dev</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              Full-Stack AI Architect
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="animate-blur-fade-up text-sm font-medium text-slate-300 hover:text-white transition-colors"
              style={{ animationDelay: link.delay }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          {/* GitHub Pill */}
          <a
            href={MONESH_BIO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-blur-fade-up hidden sm:flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-xs font-semibold text-white hover:bg-white/10 transition-all cursor-pointer"
            style={{ animationDelay: '350ms' }}
          >
            <GithubIcon className="w-4 h-4 text-cyan-400" />
            <span>GitHub</span>
          </a>

          {/* Hire / Contact Pill */}
          <a
            href="#contact"
            className="animate-blur-fade-up hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all cursor-pointer"
            style={{ animationDelay: '400ms' }}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hire Monesh</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="animate-blur-fade-up lg:hidden relative flex items-center justify-center w-10 h-10 rounded-full liquid-glass text-white hover:bg-white/10 transition-all cursor-pointer overflow-hidden"
            style={{ animationDelay: '350ms' }}
            aria-label="Toggle Menu"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <Menu
                className={`w-5 h-5 absolute transition-all duration-500 ease-out ${
                  mobileMenuOpen
                    ? 'rotate-180 opacity-0 scale-50'
                    : 'rotate-0 opacity-100 scale-100'
                }`}
              />
              <X
                className={`w-5 h-5 absolute transition-all duration-500 ease-out ${
                  mobileMenuOpen
                    ? 'rotate-0 opacity-100 scale-100'
                    : '-rotate-180 opacity-0 scale-50'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-[72px] left-0 right-0 z-40 bg-[#070A10]/95 backdrop-blur-xl border-t border-b border-slate-800 shadow-2xl px-6 py-6 transition-all duration-500 ease-out ${
          mobileMenuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl text-slate-200 hover:text-white hover:bg-slate-900 text-sm font-semibold transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-4 border-t border-slate-800 flex items-center gap-3 mt-2">
            <a
              href={MONESH_BIO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 rounded-xl liquid-glass text-xs font-bold text-white flex items-center justify-center gap-2"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>GitHub</span>
            </a>
            <a
              href={MONESH_BIO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 rounded-xl bg-blue-600 text-xs font-bold text-white flex items-center justify-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4 text-white" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
