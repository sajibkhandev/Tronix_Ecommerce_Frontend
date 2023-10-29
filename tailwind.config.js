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
        
      }, spacing: {
        'w512': '512px',
        'h290': '290px',
        'w64': '64px',
        'h64': '64px',
        'h611': '611px',
        'h376': '376px',
        'w312': '312px',
        'h10': '10px',
        'h602': '602px',
        'w376': '376px',
        'h682': '682px',
      }
    },
  },
  plugins: [],
}

