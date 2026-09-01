/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#F8FAFC',
        'primary-dark': '#0F172A',
        'secondary-bg': '#F1F5F9',
        'card-bg': '#FFFFFF',
        'card-border': 'rgba(148,163,184,0.2)',
        'accent-blue': '#F97316',
        'accent-purple': '#A855F7',
        'accent-cyan': '#F59E0B',
        'text-primary': '#0F172A',
        'text-secondary': '#64748B',
        'text-light': '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'scroll-marquee': 'scroll-marquee 20s linear infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 10px 25px rgba(249, 115, 22, 0.2)' },
          '50%': { boxShadow: '0 20px 40px rgba(249, 115, 22, 0.4)' },
        },
        'scroll-marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
