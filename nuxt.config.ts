// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'reka-ui/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
  ],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'fr', name: 'Français', file: 'fr.json' }
    ]
  },
  colorMode: {
    preference: 'system',
    dataValue: 'class',
    classSuffix: '',
  },
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  css: ['/assets/css/main.css'],
})