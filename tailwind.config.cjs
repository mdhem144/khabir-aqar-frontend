module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: { container: { center: true } },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-rtl')
  ]
};
