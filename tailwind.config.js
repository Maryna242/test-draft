/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'first': "linear-gradient(to top, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64)), url('@/assets/img/large.jpg')"
    },
    fontFamily:{
      'arial': ['Arial', 'sans-serif', ]
    }
  },
  },
  plugins: [],
  
}

