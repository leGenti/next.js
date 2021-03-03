module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '15px',
      lg: '18px',
      xl: '20px',
      "2xl": '24px',
      "3xl": '30px',
      "4xl": '36px',
      "5xl": '48px',
      "6xl": '64px',
    },
    fontFamily:{
      'sans': 'Roboto, Arial, sans-serif',
    },
    extend: {
      screens: {
        xxs: "320px",
        xs: "480px",
        s: "600px",
        m: "768px",
        l: "1024px",
        xl: "1200px",

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
