/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,vue,ts}",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./404.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

