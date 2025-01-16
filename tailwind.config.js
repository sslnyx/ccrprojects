/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require("tailwindcss/plugin")

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "22px",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px", // Set the max-width for lg screens to 1200px
        xl: "100%",
      },

    },

    extend: {
      fontFamily: {
        'body': ['"Arial"', ...defaultTheme.fontFamily.sans],
        'heading': ['"DIN Next LT Arabic"', ...defaultTheme.fontFamily.sans]
      },
      fontWeight: {
        '500': '500',
      },
      colors: {
        "blue": "#51658D",
        "green": "#8B9E93"
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {

      const baseStyles = {
        fontFamily: theme('fontFamily.heading'),
        fontWeight: theme('fontWeight.500'),
        color: theme('colors.blue'),
      };

      const headings = {
        'h1': { ...baseStyles, fontSize: theme('fontSize.5xl'), marginBottom: theme('spacing.5') },
        'h2': { ...baseStyles, fontSize: theme('fontSize.2xl'), marginBottom: theme('spacing.3') },
        'h3': { ...baseStyles, fontSize: theme('fontSize.lg'), marginBottom: theme('spacing.2') },
        'h4': { ...baseStyles, fontSize: theme('fontSize.base'), marginBottom: theme('spacing.2') },
        'h5': { ...baseStyles, fontSize: theme('fontSize.base'), marginBottom: theme('spacing.1') },
        'h6': { ...baseStyles, fontSize: theme('fontSize.sm'), marginBottom: theme('spacing.1') },
      };

      addBase({ ...headings });
    })
  ],
});

