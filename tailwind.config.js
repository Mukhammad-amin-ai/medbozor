/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./widgets/**/*.{js,vue,ts}",
    "./features/**/*.{js,vue,ts}",
    "./widgets/**/*.{js,vue,ts}",
    "./shared/**/*.{js,vue,ts}",
    "./entities/**/*.{js,vue,ts}",
    "./src/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

