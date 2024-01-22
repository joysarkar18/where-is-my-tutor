/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'baseColor-400': "#05B7BA",
        "baseColor-600": "#028F94",
        "baseColor-100": "#D4E9EA",
        "baseColor-200": "#B5DBDC",
        "baseColor-300": "#9BCED2",
        "logIn-500": "#75D0C1",
        "logIn-300": "#9BDDD1",
        "logIn-200": "#C7ECE5"
      },
    },

  },
  plugins: [],
}

