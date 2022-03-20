module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './src/pages/**/*.{html,js,jsx,ts,tsx}',
    './public/*.html',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
