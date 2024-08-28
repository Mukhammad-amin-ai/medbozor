// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    modules: ['nuxt-swiper', "nuxt-easy-lightbox"],
    alias: {
        "@": '/src'
    },
    devtools: {enabled: false},
    css: ['@/app/styles/index.css'],
    dir: {
        pages: './src/app/routes',
        layouts: './src/app/layouts'
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            meta: [
                {name: 'viewport', content: "width=device-width, initial-scale=1.0"},
            ],
            script: [
                {src: 'https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js'},
            ],
        },
    },
})