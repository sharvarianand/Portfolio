import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    // Safelist important patterns
    './public/**/*.html',
  ],
  safelist: [
    // Pattern-based safelisting for better coverage
    {
      pattern: /^(bg|text|border|from|via|to)-(slate|gray|white|black)-(50|100|200|300|400|500|600|700|800|900|950)$/,
    },
    {
      pattern: /^opacity-(10|20|30|40|50|60|70|80|90)$/,
    },
    {
      pattern: /^(w|h)-(0\.5|1|2|3|4|5|6|8|10|12|16|20|24)$/,
    },
    {
      pattern: /^(mb|mt|ml|mr|mx|my|px|py|pl|pr|pt|pb)-(0|1|2|3|4|5|6|8|10|12|16|20|24)$/,
    },
    {
      pattern: /^gap-(0|1|2|3|4|5|6|8|10|12|16|20|24)$/,
    },
    {
      pattern: /^z-(0|10|20|30|40|50)$/,
    },
    // Specific important classes
    'gradient-text',
    'gradient-text-2',
    'gradient-text-3',
    'bg-gradient-to-br',
    'bg-gradient-to-r',
    'lg:grid-cols-2',
    'grid-cols-1',
    'animate-float',
    'animate-glow',
    'animate-gradient-x',
    // Theme classes
    'dark:bg-background',
    'dark:text-text-primary',
    'bg-light-background',
    'text-light-text-primary',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode (black and white)
        background: '#000000',
        surface: '#0a0a0a',
        primary: '#ffffff',
        secondary: '#e5e5e5',
        highlight: '#cccccc',
        'text-primary': '#ffffff',
        'text-secondary': '#a3a3a3',
        'text-muted': '#737373',
        border: '#262626',

        // Light mode (white and black)
        'light-background': '#ffffff',
        'light-surface': '#fafafa',
        'light-primary': '#000000',
        'light-secondary': '#1a1a1a',
        'light-highlight': '#333333',
        'light-text-primary': '#000000',
        'light-text-secondary': '#525252',
        'light-text-muted': '#737373',
        'light-border': '#e5e5e5',
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
          '0%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 255, 255, 0.5)' },
        },
      },
      backgroundImage: {
        // Gradients for dark mode (grayscale)
        'gradient-primary': 'linear-gradient(135deg, #ffffff 0%, #e5e5e5 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #e5e5e5 0%, #cccccc 100%)',
        'gradient-highlight': 'linear-gradient(135deg, #cccccc 0%, #b3b3b3 100%)',

        // Gradients for light mode (grayscale)
        'gradient-light-primary': 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        'gradient-light-secondary': 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
        'gradient-light-highlight': 'linear-gradient(135deg, #333333 0%, #4d4d4d 100%)',
      },
    },
  },
  plugins: [],
};

export default config; 