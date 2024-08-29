/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'gray':"#F5F5F5",
      "main":"#212121",
      "red":"#ff0000"
    },
    extend: {
      animation:{
        pulses :'pulses 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily:{
        Commorant:["Cormorant", "serif"],
        Worksans:["Work Sans", "sans-serif"]
      }
      ,
      keyframes: {
        pulses: {
          '0%, 100%' :{
            opacity: 1
          },
          '50%' :{
            opacity: .6
          }}
      }
    },
    screens: {
      'xs': '390px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1040px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl':'1800px'
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}