// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}",  // Angular의 template 파일 포함
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
