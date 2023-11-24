export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@nuxt/image",
    "nuxt-simple-robots",
  ],
  css: [
    "@/assets/main.css",
  ],
  site: {
    url: process.env.PUBLIC_SITE_URL,
  },
});