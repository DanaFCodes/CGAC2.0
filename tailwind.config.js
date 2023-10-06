/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '350px',
      md: '580px',
      // lg= 976-1500
      lg: '976px',
      // xl= 1500+
      xl: '1500px',
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
        'olive2': '#363e00',
        'frenchGrey': '#c1c3d6',
        'apricot': '#ffdac6',
        'princeOrange': '#fbb64f',
        //OLD UGLY 'princeOrange': '#fa9500',
        'persimmon': '#eb6424',
      },
    },
  },
  plugins: [],
};
