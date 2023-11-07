/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}','node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      'hero': "url('C:\Users\risha\Downloads\pxfuel.com (1).jpg')"
    },
  },
  plugins: [require('flowbite/plugin')],
}

