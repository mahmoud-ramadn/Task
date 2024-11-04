// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    //...
    "@element-plus/nuxt",
    "nuxt-graphql-client",
    "@nuxtjs/tailwindcss",
    "@vee-validate/nuxt",
  ],
  runtimeConfig: {
    public: {
      GQL_HOST: "https://api.escuelajs.co/graphql",
    },
  },
  imports: {
    dirs: ["graphql"],
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      ErrorMessage: "VeeErrorMessage",
    },
  },
});
