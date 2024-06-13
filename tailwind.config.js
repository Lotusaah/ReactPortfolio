/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'default': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
        'none': 'none',
      },
      flexGrow: {
        '1': '1',
        '2': '2',
        '3': '3',
      },
      height: {
        '1vh': '1vh',
        '10vh': '10vh',
        '15vh': '15vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '75vh': '75vh',
        '90vh': '90vh',
        '95vh': '95vh',
        '100vh': '100vh',
      },
      width: {
        '1vh': '1vh',
        '10vh': '10vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '30vh': '30vh',
        '40vh': '40vh',
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
        '25vh': '25vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '100vh': '100vh',
      },
      top: {
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
        '25vh': '25vh',
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
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow': {
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-md': {
          textShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-lg': {
          textShadow: '0 10px 15px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-xl': {
          textShadow: '0 20px 25px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-2xl': {
          textShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

