/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          DEFAULT: '#7C3AED', // Fuchsia-600
          dark: '#4F46E5', // Indigo-600
        },
        background: '#0a0a0a',
        foreground: '#ededed',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#171717',
            a: { color: '#7C3AED', fontWeight: '600' },
            h1: { fontWeight: '800', letterSpacing: '-.02em' },
            h2: { fontWeight: '700', letterSpacing: '-.01em' },
            h3: { fontWeight: '700' },
            strong: { color: '#7C3AED' },
          },
        },
        dark: {
          css: {
            color: '#ededed',
            a: { color: '#7C3AED' },
            h1: { color: '#ededed' },
            h2: { color: '#ededed' },
            h3: { color: '#ededed' },
            strong: { color: '#7C3AED' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
