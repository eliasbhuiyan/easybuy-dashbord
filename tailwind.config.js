/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#334155",
        brand: "#42B42F",
      },
      boxShadow: {
        input:
          " inset 6px 6px 8px rgba(97, 97, 97, 0.075), 6px 6px 6px rgba(255, 255, 255, 0.781)",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
