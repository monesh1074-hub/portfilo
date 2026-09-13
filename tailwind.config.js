/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#070a14',
          900: '#0a0f1d',
          850: '#0d1527',
          800: '#131c31',
          700: '#1e293b',
        },
        surface: {
          canvas: '#0a0f1d',
          card: '#0d1527',
          elevated: '#131c31',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(99, 102, 241, 0.28)',
        },
        indigoAccent: '#6366f1',
        emeraldAccent: '#10b981',
        cyanGlow: '#00F0FF',
        indigoGlow: '#6366F1',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'sans-serif'],
        mono: ['var(--font-mono)', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-bounce': 'glowBounce 3s ease-in-out infinite',
      },
      keyframes: {
        glowBounce: {
          '0%, 100%': { transform: 'translateY(-2%)', filter: 'drop-shadow(0 0 15px rgba(99,102,241,0.25))' },
          '50%': { transform: 'translateY(2%)', filter: 'drop-shadow(0 0 25px rgba(16,185,129,0.3))' },
        },
      },
    },
  },
  plugins: [],
};
