/** @type {import('tailwindcss').Config} */
const pluginScrollbarHide = require('tailwind-scrollbar-hide');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xs': '360px',
        xs: '480px',
        sm: '640px',
        md: '760px',
        lg: '960px',
        xl: '1240px',
        '2xl': '1536px',
        '3xl': '1728px',
        '4xl': '1920px',
      },
      colors: {
        // NEUTRAL THEME
        white: '#FFFFFF',
        black: '#000000',

        // PROJECT THEME
        // Primary
        primary: {
          DEFAULT: '#0b2878',
          300: '#9DA9C9',
          700: '#6D7EAE',
        },

        // Secondary
        secondary: {
          DEFAULT: '#5C5B51',
          300: '#949176',
          700: '#393936',
        },

        // tertiary
        tertiary: {
          DEFAULT: '#5C5B51',
          300: '#949176',
          700: '#393936',
        },

        // GDSC THEME
        // GDSC Fessior Color
        fessior: '#0B2878',

        minhkhuu: {
          red: '#D52027',
          orange: '#F17721',
          pink: '#FF6CA3',
          teal: '#7ACAC9',
        },

        ielts: {
          primary: '#C7002B',
        },

        // GDSC Blue / Information Color
        blue: {
          DEFAULT: '#4285F4',
          300: '#8AB4F8',
          700: '#1860D8',
        },

        // GDSC Green / Success Color
        green: {
          DEFAULT: '#34A853',
          300: '#81C995',
          700: '#108B31',
        },

        // GDSC Yellow / Warning Color
        yellow: {
          DEFAULT: '#F9AB00',
          300: '#FDE293',
          700: '#C58700',
        },

        // GDSC Red / Danger Color
        red: {
          DEFAULT: '#EA4335',
          300: '#F28B82',
          700: '#C51708',
        },

        // GDSC Orange Color
        orange: '#F28500',

        // GDSC Magenta Color
        magenta: '#FF2D55',

        // HCMUT THEME
        'hcmut-light': '#1488D8',
        'hcmut-dark': '#030391',

        // Other brands:
        facebook: '#0866FF',
        zalo: '#006AF5',
        'zalo-700': '#001A33',

        // Keep some existing colors for compatibility if needed, or map them
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#f0f0f0',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#8c8c8c',
          600: '#6b6b6b',
          700: '#4a4a4a',
          800: '#333333',
          900: '#1a1a1a',
        },
      },
      dropShadow: {
        'secondary-1': '4px 4px 0px rgba(249, 186, 8, 1)',
        'secondary-2': '8px 8px 0px rgba(249, 186, 8, 1)',
        'secondary-4': '16px 16px 0px rgba(249, 186, 8, 1)',
      },
      keyframes: {
        'fade-in-out': {
          '0%, 2.5%, 97.5%, 100% ': { opacity: 0 },
          '10%, 90%': { opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        float1: {
          '0%': { transform: 'translateY(0px) rotate(-12deg)' },
          '50%': { transform: 'translateY(-20px) rotate(-12deg)' },
          '100%': { transform: 'translateY(0px) rotate(-12deg)' },
        },
        fadeOut: {
          '0%': { opacity: 100 },
          '50%': { opacity: 0, translate: 0 },
          '100%': { opacity: 0, translate: -999999 },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-150%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(150%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        floating: 'float 1000ms ease-in-out infinite',
      },
      gridTemplateRows: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
      fontFamily: {
        sans: ['Archivo', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [pluginScrollbarHide],
};
