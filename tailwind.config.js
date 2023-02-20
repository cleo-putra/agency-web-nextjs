/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      letterSpacing: {
        tight: '-0.15em'
      },
      extend: {
        height: {
          'half-screen': '50vh' 
        }
      }     
    },
  },
  plugins: [],
}