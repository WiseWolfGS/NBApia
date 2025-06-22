console.log('✅ tailwind.config.js loaded')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  safelist: [
    "btn", "btn-primary",
    "carousel", "carousel-item",
    "btn-circle", "btn-xs", "btn-sm", "btn-md", "btn-lg",
    "bg-primary", "text-primary", "hover:bg-primary"
  ]
}

