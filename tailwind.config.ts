import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode (default)
        background: '#0f172a',
        surface: '#1e293b',
        primary: '#38bdf8', // Sky-400
        secondary: '#6366f1', // Indigo-500
        highlight: '#7c3aed', // Violet-600
        'text-primary': '#f8fafc',
        'text-secondary': '#cbd5e1',
        'text-muted': '#64748b',
        border: '#475569',

        // Light mode
        'light-background': '#ffffff',
        'light-surface': '#f8fafc', // Slate-50
        'light-primary': '#0ea5e9', // Sky-500
        'light-secondary': '#4f46e5', // Indigo-600
        'light-highlight': '#8b5cf6', // Violet-500
        'light-text-primary': '#0f172a',
        'light-text-secondary': '#475569',
        'light-text-muted': '#94a3b8',
        'light-border': '#e2e8f0', // Slate-200
      },
      fontFamily: {
        heading: ['Times New Roman', 'serif'],
        body: ['Times New Roman', 'serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': 'left center' },
          '50%': { 'background-position': 'right center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(56, 189, 248, 0.8)' },
        },
      },
      backgroundImage: {
        // Gradients for dark mode
        'gradient-primary': 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)',
        'gradient-highlight': 'linear-gradient(135deg, #7c3aed 0%, #0ea5e9 100%)',
        
        // Gradients for light mode
        'gradient-light-primary': 'linear-gradient(135deg, #0ea5e9 0%, #4f46e5 100%)',
        'gradient-light-secondary': 'linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)',
        'gradient-light-highlight': 'linear-gradient(135deg, #8b5cf6 0%, #0891b2 100%)',
      },
    },
  },
  plugins: [],
};

export default config; 