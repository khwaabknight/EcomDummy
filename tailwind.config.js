/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'mono': ['Roboto mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

