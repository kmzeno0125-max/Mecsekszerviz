/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D62828',
        'primary-dark': '#B01E1E',
        secondary: '#5F5F5F',
        accent: '#B0B0B0',
        'bg-light': '#F5F5F5',
        'text-dark': '#1C1C1C',
        'dark-bg': '#1A1A1A',
        'dark-card': '#242424',
        'dark-section': '#2D2D2D',
      },
      fontFamily: {
        headline: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
