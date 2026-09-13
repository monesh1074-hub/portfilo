import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Monesh // Full-Stack & AI Systems Architect',
  description: 'Production web platforms, real-time voice AI architectures, and high-performance applications built by Monesh. Specialized in Next.js 14, React 18, TypeScript, and distributed systems.',
  keywords: ['Monesh', 'Full-Stack Developer', 'AI Engineer', 'Next.js 14', 'TypeScript', 'VOICEBILL', 'AARU', 'Kalai Decorators', 'React 18'],
  authors: [{ name: 'Monesh', url: 'https://github.com/monesh1074-hub' }],
  openGraph: {
    title: 'Monesh // Full-Stack & AI Systems Architect',
    description: 'Resilient web platforms, real-time speech AI architectures, and client production systems.',
    url: 'https://github.com/monesh1074-hub',
    siteName: 'monesh.dev',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${plusJakarta.variable} ${jetbrainsMono.variable} ${inter.variable} font-sans bg-[#0a0f1d] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}

