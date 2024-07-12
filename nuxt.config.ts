// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    css: ['~/app/style/index.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            script: [
                { src: 'https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js' },
            ],
        },
    },
})
