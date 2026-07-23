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
          900: '#0B0F19',
          950: '#070A10',
        },
        cyanGlow: '#06B6D4',
        indigoGlow: '#6366F1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-bounce': 'glowBounce 3s ease-in-out infinite',
      },
      keyframes: {
        glowBounce: {
          '0%, 100%': { transform: 'translateY(-2%)', filter: 'drop-shadow(0 0 15px rgba(6,182,212,0.3))' },
          '50%': { transform: 'translateY(2%)', filter: 'drop-shadow(0 0 25px rgba(99,102,241,0.4))' },
        },
      },
    },
  },
  plugins: [],
};
