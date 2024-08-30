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
        screens: {
            'xs': '375px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        }
    },
    plugins: [
        require( 'flowbite/plugin' )
    ],
}

