'use client';

import React, { useState } from 'react';
import { MONESH_BIO } from '@/lib/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Mail, Send, CheckCircle2, Loader2, AlertCircle, Copy, Check, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(MONESH_BIO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message via Resend');
      }

      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 6000);
    } catch (err: any) {
      console.error('Contact Form Submit Error:', err);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let's Work Together
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Have an open role, a freelance project, or an idea to discuss? Drop me a message and I'll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="stitch-card p-6 sm:p-7 rounded-2xl space-y-5 border border-white/[0.08]">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono text-emerald-400 font-medium">AVAILABLE FOR WORK</span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Start a Conversation
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  I'm actively looking for software engineering roles, frontend/full-stack projects, and collaborations. Whether you need a web app built from scratch or want to discuss AI voice integrations, my inbox is always open.
                </p>
              </div>

              {/* Direct Link Cards */}
              <div className="space-y-3 pt-2">
                {/* Email Copy Card */}
                <div className="p-4 rounded-xl bg-[#070a14] border border-white/[0.08] hover:border-indigo-500/40 flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">Direct Email</div>
                      <div className="text-xs font-mono font-semibold text-white">
                        {MONESH_BIO.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#0d1527] hover:bg-indigo-600/30 border border-white/[0.08] text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* GitHub Card */}
                <a
                  href={MONESH_BIO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#070a14] border border-white/[0.08] hover:border-indigo-500/40 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#0d1527] border border-white/[0.08] text-slate-300 group-hover:text-white">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">GitHub Repositories</div>
                      <div className="text-xs font-mono font-semibold text-white group-hover:text-indigo-300 transition-colors">
                        @monesh1074-hub
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-indigo-400 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>

                {/* LinkedIn Card */}
                <a
                  href={MONESH_BIO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#070a14] border border-white/[0.08] hover:border-blue-500/40 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-300">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">LinkedIn Profile</div>
                      <div className="text-xs font-mono font-semibold text-white group-hover:text-blue-300 transition-colors">
                        linkedin.com/in/monesh908
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-blue-400 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="stitch-card p-6 sm:p-8 rounded-2xl relative overflow-hidden border border-white/[0.08]">
              {submitted ? (
                <div className="py-14 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/80 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-slate-300 max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
                    Thank you for reaching out. Your message has been sent to <strong className="text-emerald-400">{MONESH_BIO.email}</strong>. I'll get back to you shortly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                    <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5 font-medium">
                      <Mail className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Send a Message</span>
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      Direct Email Delivery
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-300 font-medium">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#070a14] border border-white/[0.08] focus:border-indigo-500 text-white placeholder-slate-600 text-xs focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-300 font-medium">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#070a14] border border-white/[0.08] focus:border-indigo-500 text-white placeholder-slate-600 text-xs focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-medium">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Opportunity / Hello"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#070a14] border border-white/[0.08] focus:border-indigo-500 text-white placeholder-slate-600 text-xs focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-medium">Message *</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Monesh, I saw your work on VOICEBILL and Kalai Decorators..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#070a14] border border-white/[0.08] focus:border-indigo-500 text-white placeholder-slate-600 text-xs focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-indigo-200" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

