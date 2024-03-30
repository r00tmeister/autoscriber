// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
/*     publicRuntimeConfig: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    }, */
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    "~/assets/css/main.css"
  ],
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
/*     "@nuxtjs/eslint-module", */
    "@vueuse/nuxt",
    "@nuxt/test-utils",
    "@nuxtjs/supabase",
  ],
/*   plugins: [
    '~/plugins/supabase.server.js'
  ], */
/*   supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_ANON_KEY,
  }, */
})