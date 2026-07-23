import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Monesh — Full-Stack & AI Engineer Portfolio',
  description: 'Personal developer portfolio for Monesh featuring Next.js 14, React 18, AI voice apps, and full-stack web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-[#070A10]">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#070A10] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
