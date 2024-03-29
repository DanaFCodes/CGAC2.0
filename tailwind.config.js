/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // sm=350-580
      sm: '350px',
      // md= 580-976
      md: '580px',
      // lg= 976-1500
      lg: '976px',
      // xl= 1500+
      xl: '1500px',
    },
    theme: {
      animationDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
      },
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
        'olive': '#7c6a0a',
        'olive2': '#363e00',
        'frenchGrey': '#c1c3d6',
        'apricot': '#ffdac6',
        'princeOrange': '#fbb64f',
        'princeOrangeOG': '#fa9500',
        'persimmon': '#eb6424',
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay")
  ],
};
