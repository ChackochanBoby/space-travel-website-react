/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spaceblack: "hsl(230,35%,7%)",
        primary: "hsl(0,0,100%)",
        accent: "hsl(231,77%,90%)",
      },
      fontFamily: {
        serif: "'Bellefair', serif",
        sansnorm: "'Barlow', sans-serif",
        sanscond:"'Barlow Condensed', sans-serif"
      },
      backgroundImage: {
        'home-mb': "url('./src/assets/home/background-home-mobile.jpg')",
        'home-tb': "url('./src/assets/home/background-home-tablet.jpg')",
        'home-ds': "url('./src/assets/home/background-home-desktop.jpg')",
        'hamburger': "url('./src/assets/shared/icon-hamburger.svg')",
        'ham-close': "url('./src/assets/shared/icon-close.svg')",
      }
    },
  },
  plugins: [],
}

