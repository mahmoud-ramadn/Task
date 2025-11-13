export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@element-plus/nuxt",
    "nuxt-graphql-client",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@vee-validate/nuxt",
  ],
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  runtimeConfig: {
    public: {
      GQL_HOST: process.env.GQL_HOST,
    },

    graphql: {
      clients: {
        default: {
          host: "https://api.escuelajs.co/graphql",
          options: {
            headers: {
              "Content-Type": "application/json",
              "x-apollo-operation-name": "CreateUser",
            },
          },
        },
      },
    },
  },
  imports: {
    dirs: ["graphql"],
  },
});
