/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF5C26',
          500: '#FF5C26',
        },
        info: {
          DEFAULT: '#48C1F2',
          600: '#3682F4',
          500: '#48C1FE',
        },
        text: {
          DEFAULT: '#4A4A4A',
          500: '#4A4A4A',
          400: '#5F5F5F',
        },
        success: {
          DEFAULT: '#47C257',
          500: '#47C257',
        },
        disabled: {
          DEFAULT: '#C8C8C8',
          500: '#C8C8C8',
        },
        gray: {
          DEFAULT: '#979797',
          50: '#F4F4F4',
        },
      },
      fontFamily: {
        icomoon: ['icomoon'],
      },
      backgroundImage: {
        login: "url('/public/images/login-pide-y-pasa-image.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
