/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexGrow: {
        '1': '1',
        '2': '2',
      },
      height: {
        '1vh': '1vh',
        '10vh': '10vh',
        '25vh': '25vh',
        '50vh': '50vh',
        '75vh': '75vh',
        '90vh': '90vh',
        '95vh': '95vh',
        '100vh': '100vh',
      },
      spacing: {
        '1vh': '1vh',
        '2vh': '2vh',
        '3vh': '3vh',
        '4vh': '4vh',
        '5vh': '5vh',
        '6vh': '6vh',
        '7vh': '7vh',
        '8vh': '8vh',
        '9vh': '9vh',
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '100vh': '100vh',
      },
      colors: {
        brand: {
          50: '#C9D5E6',
          100: '#9FB4D2',
          200: '#7192BE',
          300: '#546C8C',
          400: '#354458',
          500: '#2C3849',
        },
      },
    },
  },
  plugins: [],
}

