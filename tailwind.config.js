/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'primary-light': '#f9f3ed',
        'luma-blue': "#2A77A1",
        'sha-pink': "#CD57AD",
        'lang-red': "#f0665d",
        'lang-yellow': "#fbcd3c",
        'lang-green': "#34D399",
        'lang-blue': "#0a76dd",
        'lang-purple': "#A78BFA",
        'lang-rose': "#F472B6",
        'lang-orange': "#f79313"
      },
      borderRadius: {
        sm: '8px',
      },
      fontSize: {
        '3xl': '3rem',
        '4xl': '6rem',
        '8xl': '24rem'
      }
    },
  },
  plugins: [],
}