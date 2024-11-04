// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [//...
  "@element-plus/nuxt", "nuxt-graphql-client", "@nuxtjs/tailwindcss", "@nuxt/icon"],
  runtimeConfig: {
    public: {
      GQL_HOST: "https://api.escuelajs.co/graphql",
    },
  },
  imports: {
    dirs: ["graphql"],
  },
});