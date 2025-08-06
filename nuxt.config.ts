// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
    },
    CACHE_TTL: 1000 * 60 * 60, // 1h
    POKEMONS_URL: 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
    POKEMON_SPECIES: 'https://pokeapi.co/api/v2/pokemon-species',
    TYPES_URL: 'https://pokeapi.co/api/v2/type'
  },
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'reka-ui/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
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