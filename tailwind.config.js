/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#EE3C26',
          black: '#1A1A1A',
          gray: '#FAFAFA',
          border: '#E5E5E5',
          green: '#22A06B',
          amber: '#F2A93B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
