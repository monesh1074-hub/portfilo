'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MONESH_BIO, PROJECTS } from '@/lib/portfolioData';
import { Terminal, RefreshCw, CheckCircle2, Copy, Check, Play, CornerDownLeft } from 'lucide-react';

export const InteractiveTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'voicebill' | 'architecture' | 'cli'>('voicebill');
  const [cliInput, setCliInput] = useState('');
  const [cliHistory, setCliHistory] = useState<{ command: string; output: string[] }[]>([
    {
      command: 'monesh --status',
      output: [
        '✓ Status: Open to Full-Stack & Frontend Opportunities',
        '✓ Main Stack: Next.js 14, React, TypeScript, Tailwind',
        '✓ Location: Tamil Nadu, India',
        'Type "help" or click options below to explore.'
      ]
    }
  ]);
  const [copied, setCopied] = useState(false);
  const cliBottomRef = useRef<HTMLDivElement>(null);

  const voicebillCode = [
    `// voicebill.ts — Voice speech-to-invoice processor`,
    `import { SpeechRecognitionClient } from '@/lib/speech';`,
    `import { calculateInvoiceTotal, matchInventorySKU } from '@/lib/billing';`,
    ``,
    `export class VoiceBillPipeline {`,
    `  private recognizer = new SpeechRecognitionClient({ lang: 'en-IN' });`,
    ``,
    `  async processMerchantSpeech(audioStream: MediaStream) {`,
    `    const transcript = await this.recognizer.transcribe(audioStream);`,
    `    // Match spoken items to inventory SKU list`,
    `    const parsedOrder = matchInventorySKU(transcript);`,
    `    const invoice = calculateInvoiceTotal(parsedOrder, { taxRate: 0.18 });`,
    ``,
    `    return {`,
    `      status: 'success',`,
    `      itemsCount: invoice.items.length,`,
    `      total: invoice.formattedTotal,`,
    `      receiptUrl: \`https://voicebill-hackthon-six.vercel.app/receipt/\${invoice.id}\``,
    `    };`,
    `  }`,
    `}`
  ];

  const architectureJson = [
    `{`,
    `  "developer": "${MONESH_BIO.name} M",`,
    `  "location": "${MONESH_BIO.location}",`,
    `  "role": "Full-Stack Web Developer",`,
    `  "frontend": {`,
    `    "framework": "Next.js 14 / React 18",`,
    `    "language": "TypeScript",`,
    `    "styling": "Tailwind CSS",`,
    `    "deployment": "Vercel"`,
    `  },`,
    `  "backend": {`,
    `    "runtime": "Node.js / Express",`,
    `    "integrations": ["Web Speech API", "REST APIs", "Resend"]`,
    `  },`,
    `  "projects": {`,
    `    "client": "Kalai Decorators (27-Yr Event Staging)",`,
    `    "hackathon": "VOICEBILL (Speech-to-Invoice)",`,
    `    "status": "Active & Building"`,
    `  }`,
    `}`
  ];

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let output: string[] = [];

    switch (trimmed) {
      case 'help':
        output = [
          'Available Commands:',
          '  projects   - List live production apps & repositories',
          '  skills     - Display core engineering competencies',
          '  contact    - Show verified email & social links',
          '  about      - Brief technical overview of Monesh',
          '  clear      - Clear terminal window',
          '  hire       - Current availability & engagement options'
        ];
        break;
      case 'projects':
        output = [
          'Featured Live Deployments:',
          '  1. VOICEBILL   -> https://voicebill-hackthon-six.vercel.app (AI Voice Billing)',
          '  2. AARU        -> https://aaru-luxury-fashion.vercel.app (Luxury E-Commerce)',
          '  3. Kalai Deco  -> https://client1-beta-mauve.vercel.app (27-Yr Cinema Staging)',
          '  4. Murfalcon   -> https://murfalcon-ai-3.onrender.com (AI Assistant Workspace)',
          '  5. Airbnb Cap  -> https://airbnb-clone-internship.vercel.app (Internship App)'
        ];
        break;
      case 'skills':
        output = [
          'Core Technical Matrix:',
          '  • Frontend: Next.js 14, React 18, TypeScript, Tailwind CSS, Canvas API',
          '  • Backend & AI: Node.js, Express, Speech APIs, REST Architecture',
          '  • Cloud: Vercel Edge, Render, Git/GitHub, Resend Live Email'
        ];
        break;
      case 'contact':
        output = [
          'Direct Contact Handles:',
          `  Email:    ${MONESH_BIO.email}`,
          `  GitHub:   ${MONESH_BIO.github}`,
          `  LinkedIn: ${MONESH_BIO.linkedin}`,
          '  Response: Typically within 24 hours'
        ];
        break;
      case 'about':
        output = [
          `${MONESH_BIO.name} — Full-Stack & AI Systems Architect.`,
          MONESH_BIO.about
        ];
        break;
      case 'hire':
        output = [
          'Status: OPEN FOR FULL-TIME ROLES & ARCHITECTURE CONSULTING',
          'Focus: Full-Stack Web (Next.js/React), AI Tooling, Production Platforms',
          'Location: Tamil Nadu, India (Open to Remote / Hybrid / Onsite)'
        ];
        break;
      case 'clear':
        setCliHistory([]);
        setCliInput('');
        return;
      default:
        output = [`Command not recognized: "${trimmed}". Type "help" for a list of valid commands.`];
    }

    setCliHistory((prev) => [...prev, { command: cmd, output }]);
    setCliInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(cliInput);
    }
  };

  useEffect(() => {
    if (activeTab === 'cli' && cliBottomRef.current) {
      cliBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [cliHistory, activeTab]);

  const handleCopyCode = () => {
    const text = activeTab === 'voicebill' ? voicebillCode.join('\n') : architectureJson.join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-2xl p-0.5 bg-gradient-to-tr from-indigo-500/40 via-white/[0.08] to-emerald-500/30 shadow-[0_0_32px_-8px_rgba(99,102,241,0.2)]">
      <div className="rounded-[14px] bg-[#080c17] overflow-hidden border border-white/[0.08]">
        {/* Header Bar */}
        <div className="bg-[#0d1527] px-4 py-2.5 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="hidden sm:inline font-mono text-[11px] text-slate-400 ml-2">
              ~/monesh-dev/src/
            </span>
          </div>

          {/* Interactive Workstation Tabs */}
          <div className="flex items-center gap-1 bg-[#070a14] p-0.5 rounded-lg border border-white/[0.08]">
            <button
              onClick={() => setActiveTab('voicebill')}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                activeTab === 'voicebill'
                  ? 'bg-indigo-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              voicebill.ts
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                activeTab === 'architecture'
                  ? 'bg-indigo-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              stack.json
            </button>
            <button
              onClick={() => setActiveTab('cli')}
              className={`px-2.5 py-1 rounded text-xs font-mono flex items-center gap-1 transition-colors ${
                activeTab === 'cli'
                  ? 'bg-emerald-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Terminal className="w-3 h-3" />
              <span>cli.sh</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 font-mono text-xs leading-relaxed min-h-[300px] max-h-[340px] overflow-y-auto bg-[#080c17] text-slate-200">
          {activeTab === 'voicebill' && (
            <div className="space-y-1 text-[11px] sm:text-xs">
              {voicebillCode.map((line, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-slate-600 select-none w-5 text-right flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className={
                    line.startsWith('//') ? 'text-slate-500 italic' :
                    line.startsWith('import') ? 'text-indigo-300' :
                    line.includes('class') || line.includes('async') ? 'text-purple-300 font-semibold' :
                    line.includes('return') ? 'text-emerald-400' :
                    'text-slate-300'
                  }>
                    {line}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-1 text-[11px] sm:text-xs">
              {architectureJson.map((line, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-slate-600 select-none w-5 text-right flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className={
                    line.includes(':') ? 'text-indigo-200' : 'text-slate-400'
                  }>
                    {line}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'cli' && (
            <div className="space-y-3">
              {cliHistory.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                    <span className="text-emerald-400">guest@monesh:~$</span>
                    <span>{item.command}</span>
                  </div>
                  <div className="pl-4 text-slate-300 space-y-0.5">
                    {item.output.map((outLine, oIdx) => (
                      <div key={oIdx} className="leading-relaxed">
                        {outLine}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Prompt Input Row */}
              <div className="flex items-center gap-2 text-indigo-400 pt-1">
                <span className="text-emerald-400 flex-shrink-0">guest@monesh:~$</span>
                <input
                  type="text"
                  value={cliInput}
                  onChange={(e) => setCliInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type 'help' or click pills below..."
                  className="w-full bg-transparent text-white focus:outline-none placeholder-slate-600 font-mono text-xs"
                  autoFocus
                />
              </div>

              {/* Quick CLI command suggestion pills */}
              <div className="pt-3 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                <span className="text-[10px] text-slate-500 self-center mr-1">Try:</span>
                {['projects', 'skills', 'contact', 'hire', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="px-2 py-0.5 rounded bg-[#0d1527] hover:bg-indigo-600/30 border border-white/[0.08] text-[10px] font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>

              <div ref={cliBottomRef} />
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="bg-[#0d1527] px-4 py-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">Target: Vercel Production Environment</span>
          </div>

          {activeTab !== 'cli' ? (
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied snippet</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          ) : (
            <span className="text-slate-500">Interactive CLI Terminal</span>
          )}
        </div>
      </div>
    </div>
  );
};

