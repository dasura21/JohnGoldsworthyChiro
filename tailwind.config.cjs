module.exports = {
  content: ['./index.html', './assets/site.js'],
  theme: { extend: {
    fontFamily: { sans: ['Inter', 'sans-serif'], serif: ['Merriweather', 'serif'] },
    colors: {
      primary: { 50: '#f0f9ff', 100: '#e0f2fe', 600: '#0284c7', 700: '#0369a1', 900: '#0c4a6e' },
      secondary: { 500: '#0f766e', 600: '#0d9488' },
    },
  } },
};
