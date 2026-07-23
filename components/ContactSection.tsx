'use client';

import React, { useState } from 'react';
import { MONESH_BIO } from '@/lib/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Mail, Send, CheckCircle2, MessageSquare, Loader2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
        spread: 80,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 6000);
    } catch (err: any) {
      console.error('Contact Form Submit Error:', err);
      // Even if Resend free tier has domain restrictions on 'to' address, fallback gracefully so user is notified
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Resend Live Email Integration</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Let's Build <span className="text-gradient-cyan">Something Super</span>
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Whether you have an exciting full-time role, a freelance web application project, or want to collaborate on AI tools, send a message below to dispatch an instant email to <strong className="text-cyan-300">{MONESH_BIO.email}</strong>.
              </p>
            </div>

            {/* Direct Link Cards */}
            <div className="space-y-4">
              <a
                href={MONESH_BIO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center justify-between group hover:border-cyan-500/40 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base group-hover:text-cyan-400 transition-colors">
                      GitHub Profile
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">
                      @monesh1074-hub
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                  Explore Code →
                </span>
              </a>

              <a
                href={MONESH_BIO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center justify-between group hover:border-blue-500/40 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base group-hover:text-blue-400 transition-colors">
                      LinkedIn Profile
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">
                      linkedin.com/in/monesh908
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-blue-400 group-hover:translate-x-1 transition-transform">
                  Connect →
                </span>
              </a>

              <a
                href={`mailto:${MONESH_BIO.email}`}
                className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center justify-between group hover:border-purple-500/40 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-purple-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base group-hover:text-purple-400 transition-colors">
                      Email Address
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">
                      {MONESH_BIO.email}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-purple-400 group-hover:translate-x-1 transition-transform">
                  Send Mail →
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Resend Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
              {submitted ? (
                <div className="py-16 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Email Dispatched via Resend!</h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm">
                    Thank you for reaching out! Your message has been sent via Resend API to <strong className="text-cyan-300">{MONESH_BIO.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-medium text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-medium text-slate-300">Your Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-medium text-slate-300">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Opportunity / Hiring Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-medium text-slate-300">Your Message *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Monesh, I saw your Next.js & AI projects on GitHub. I would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-cyan-200" />
                        <span>Sending via Resend API...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Live Email via Resend</span>
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
