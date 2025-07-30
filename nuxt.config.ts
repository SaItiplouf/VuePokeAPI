// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'reka-ui/nuxt',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    preference: 'system',
    dataValue: 'class',
    classSuffix: '',
  },
  css: ['/assets/css/main.css'],
})