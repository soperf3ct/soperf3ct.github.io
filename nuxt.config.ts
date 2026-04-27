// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  nitro: {
    preset: 'github-pages'
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ]
})