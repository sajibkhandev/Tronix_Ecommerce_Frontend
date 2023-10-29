/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1600px',
      },
      colors:{
        primary:"#C4C4C4",
        secondary:"#383838",
        third:"#F46B5B",
        four:"#F0F0F0",
        five:"#FAFAFA",
        six:"#FAF3F2",
      },   
      fontFamily: {
        'pop': ['Poppins'],
        'mon': ['Montserrat'],
        
      }
    },
  },
  plugins: [],
}

