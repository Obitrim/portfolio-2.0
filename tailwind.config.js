/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Space Grotesk', ...fontFamily.sans],
        graffiti: ['Anton', 'sans-serif'],
        marker: ['Permanent Marker', 'cursive'],
      },
      colors: {
        graffiti: {
          blue: '#1565c0',
          orange: '#f07020',
          concrete: '#e2e2e2',
        },
        spray: {
          black: '#080808',
          dark: '#0e0e0e',
          card: '#141414',
          elevated: '#1c1c1c',
          border: '#2a2a2a',
        },
        tag: {
          yellow: '#f5e642',
          cyan: '#00f0ff',
          pink: '#ff2079',
          lime: '#39ff14',
          orange: '#ff6b35',
        },
        primary: {
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        },
        dark: '#0e0e0e',
      },
      keyframes: {
        'spray-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.85) translateY(30px)',
            filter: 'blur(8px)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
            filter: 'blur(0)',
          },
        },
        'slide-up': {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'float-tag': {
          '0%, 100%': { transform: 'translateY(0px) rotate(-3deg)' },
          '50%': { transform: 'translateY(-16px) rotate(1deg)' },
        },
        'float-alt': {
          '0%, 100%': { transform: 'translateY(0px) rotate(3deg)' },
          '50%': { transform: 'translateY(-12px) rotate(-1deg)' },
        },
        'neon-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)', filter: 'none' },
          '20%': {
            transform: 'translate(-3px, 1px)',
            filter: 'drop-shadow(2px 0 #00f0ff)',
          },
          '40%': {
            transform: 'translate(3px, -1px)',
            filter: 'drop-shadow(-2px 0 #ff2079)',
          },
          '60%': { transform: 'translate(-1px, 2px)', filter: 'none' },
          '80%': { transform: 'translate(1px, -2px)', filter: 'none' },
        },
        'paint-sweep': {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(300%) skewX(-12deg)' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-700px 0' },
          '100%': { backgroundPosition: '700px 0' },
        },
      },
      animation: {
        'spray-in': 'spray-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slide-up 0.6s ease forwards',
        'float-tag': 'float-tag 4s ease-in-out infinite',
        'float-alt': 'float-alt 5s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 2.5s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
        glitch: 'glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'paint-sweep': 'paint-sweep 1.8s ease-in-out infinite',
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
