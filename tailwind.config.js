/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
        green1: '#115e59',
        teal: '#1b3942',
        stone: '#fafaf9',
        purple: '#faf5ff',
        fuscia :'#fdf4ff',
        zinc: '#d4d4d8',
        zinc1: '#71717a',
        zinc2: '#52525b',
        zinc3: '#3f3f46',
        zinc4: '#27272a',
        black: '#000000',
        white: '#FFFFFF',
        neutral1: '#f5f5f5',
        red1: '#fef2f2',
        lime1: '#f7fee7',
        lime: '#ecfccb'


        
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
  ],
}

