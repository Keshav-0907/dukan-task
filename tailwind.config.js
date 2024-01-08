/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 2px 6px 0px rgba(26, 24, 30, 0.04)',
      },
      width: {
        'calc-100-24px': 'calc(100% - 24px)',
      },
    },
  },
  plugins: [],
}

