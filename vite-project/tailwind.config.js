/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        "--Bungee_Tint":"Bungee_Tint"
      },
      colors: {
        "--main-color": "#d01418",
        "--footer-light-color": "#394150",
        "--footer-dark-color": "#202935",
      },
      borderWidth: {
        "--thin": "1px"
      },
      width: {
        "--small": "110px"
      },
      

    }
  },
  plugins: [],
}

