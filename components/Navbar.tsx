'use client';

import React, { useState } from 'react';
import { MONESH_BIO } from '@/lib/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Menu, X, Copy, Check, Terminal, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(MONESH_BIO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-4 inset-x-0 mx-auto w-full max-w-[1200px] px-4 sm:px-6 z-50">
      <div className="rounded-2xl px-4 sm:px-6 py-3 bg-[#0d1527]/90 backdrop-blur-md border border-white/[0.08] shadow-lg flex items-center justify-between">
        {/* Brand Anchor */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2 group font-mono text-base font-bold text-white tracking-tight"
          >
            <span className="text-indigo-400 group-hover:rotate-12 transition-transform inline-block">❯</span>
            <span>{MONESH_BIO.name.toLowerCase()}</span>
            <span className="text-indigo-400">.dev</span>
          </a>

          {/* Active Status Badge */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#070a14] border border-emerald-500/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-[11px] font-mono text-emerald-400 font-medium">
              Open to Opportunities
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-white transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Trailing Actions */}
        <div className="flex items-center gap-2.5">
          {/* Quick Copy Email Action */}
          <button
            onClick={handleCopyEmail}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#070a14] hover:bg-[#131c31] border border-white/[0.08] hover:border-indigo-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
            title="Copy Email to Clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          {/* Direct Handshake CTA */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-md active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Get in Touch</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#070a14] border border-white/[0.08] text-slate-300 hover:text-white"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-[#0d1527]/95 backdrop-blur-xl border border-white/[0.08] shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/[0.05] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex items-center gap-2">
            <a
              href={MONESH_BIO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-lg bg-[#070a14] border border-white/[0.08] text-xs font-mono text-white flex items-center justify-center gap-2"
            >
              <GithubIcon className="w-4 h-4 text-indigo-400" />
              <span>GitHub</span>
            </a>
            <a
              href={MONESH_BIO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-lg bg-blue-600/90 hover:bg-blue-600 text-xs font-mono text-white flex items-center justify-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4 text-white" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

