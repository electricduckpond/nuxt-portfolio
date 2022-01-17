import { defineNuxtConfig } from '@nuxt/bridge'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    router: {
        base: '/nuxt-portfolio/'
      }
})
