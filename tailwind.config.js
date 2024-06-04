const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      gray: colors.gray,
      slate: colors.slate,
      'white': '#ffffff',
      'textHeader': '#DB9953',
    },
    fontFamily: {
      'allerta': '"Allerta"',
    },

    plugins: [],
  }
};  