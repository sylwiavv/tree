/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#F7F6EB',
        darkBlack: '#2e373d',
        olive: '#3C4A3D',
        brown: '#2D363C',
        accent: '#E08D6E',
        lightOlive: '#A9B39A',
        darkBrown: '#2A2E2A',
        cream: '#E4D9B9',
      },
    },
  },
  plugins: [],
};
