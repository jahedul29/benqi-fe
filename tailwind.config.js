/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  colors: {
      'white': '#ffffff',
      'black': '#000000',
      'richBlack-1': '#001016',
      'richBlack': '#00131A',
      'gunmetal': '#002430',
      'milgreen': '#003F54',
      'crystalBlue': '#319DE2',
      'processCyan': '#00B3ED',
      'aliceBlue': '#E8F5FF',
      'princetonOrange': '#FF9100',
      'dimGray': '#707070',
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
}

