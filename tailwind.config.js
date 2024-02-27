/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0F172A',
        'secondary': '#334155',
        'brand': '#42B42F'
      }
    },
    container: {
      center: true
    }
  },
  plugins: [],
}