/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        heading: ['merriweather', 'sans-serif'],
        bod: ['rubik', 'serif'],
      },
      colors: {
        // 'lightBlue': "#cde4f7",
        // 'darkBlue': "#66a0b6",
        // 'eggplant': "#33001f",
        // 'hotPink': "#ff1251",
        // 'acid': '#e1ed00',
        'olive': '#7c6a0a',
        'frenchGrey': '#c1c3d6',
        'apricot': '#ffdac6',
        'princeOrange': '#fa9500',
        'persimmon': '#eb6424',
      },
    },
  },
  plugins: [],
};
