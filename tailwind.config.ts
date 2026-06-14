import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
    './src/data/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        // Brand palette
        navy: {
          DEFAULT: 'hsl(var(--navy))',
          50: '#eef1f7',
          100: '#d3dbe9',
          200: '#a7b6d3',
          300: '#7b91bd',
          400: '#4f6ca7',
          500: '#33507f',
          600: '#243a5e',
          700: '#1a2c48',
          800: '#111e33',
          900: '#0a1422',
          950: '#060d17',
        },
        gold: {
          DEFAULT: 'hsl(var(--gold))',
          50: '#fbf7ec',
          100: '#f5ebcd',
          200: '#ecd79b',
          300: '#e1c068',
          400: '#d4a838',
          500: '#c1922a',
          600: '#a4761f',
          700: '#83591c',
          800: '#6c481d',
          900: '#5c3d1d',
        },
        emerald: {
          DEFAULT: 'hsl(var(--emerald))',
        },
        ivory: '#fbfaf6',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(10, 20, 34, 0.08), 0 4px 24px -4px rgba(10, 20, 34, 0.08)',
        elevated:
          '0 8px 30px -6px rgba(10, 20, 34, 0.12), 0 18px 60px -12px rgba(10, 20, 34, 0.14)',
        gold: '0 8px 30px -8px rgba(193, 146, 42, 0.35)',
      },
      backgroundImage: {
        'gradient-navy':
          'linear-gradient(135deg, hsl(var(--navy)) 0%, #0a1422 55%, #060d17 100%)',
        'gradient-gold':
          'linear-gradient(135deg, #e1c068 0%, #c1922a 50%, #a4761f 100%)',
        'grid-fade':
          'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        shimmer: 'shimmer 2s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
