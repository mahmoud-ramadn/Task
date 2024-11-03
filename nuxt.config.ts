// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [//...
  "@vee-validate/nuxt", "@element-plus/nuxt", "nuxt-graphql-client", "@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      GQL_HOST: "https://fakeapi.platzi.com/en/gql/products/",
    },
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
});