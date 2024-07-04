/**@type {import('tailwindcss').Config} */ 
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
        'destination-mb': "url('./src/assets/destination/background-destination-mobile.jpg')",
        'destination-tb': "url('./src/assets/destination/background-destination-tablet.jpg')",
        'destination-ds': "url('./src/assets/destination/background-destination-desktop.jpg')",
        'crew-mb': "url('./src/assets/crew/background-crew-mobile.jpg')",
        'crew-tb': "url('./src/assets/crew/background-crew-tablet.jpg')",
        'crew-ds': "url('./src/assets/crew/background-crew-desktop.jpg')",
        'technology-mb': "url('./src/assets/technology/background-technology-mobile.jpg')",
        'technology-tb': "url('./src/assets/technology/background-technology-tablet.jpg')",
        'technology-ds': "url('./src/assets/technology/background-technology-desktop.jpg')",
        'hamburger': "url('./src/assets/shared/icon-hamburger.svg')",
        'ham-close': "url('./src/assets/shared/icon-close.svg')",
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-home-mb', 'md:bg-home-tb', 'lg:bg-home-ds',
    'bg-destination-mb', 'md:bg-destination-tb', 'lg:bg-destination-ds',
    'bg-crew-mb', 'md:bg-crew-tb', 'lg:bg-crew-ds',
    'bg-technology-mb', 'md:bg-technology-tb', 'lg:bg-technology-ds',
  ],
}

