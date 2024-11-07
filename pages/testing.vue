<template>
  <div>
    <h1>Testing</h1>
    <button @click="toggle">Toggle</button>

    <!-- Conditionally render components based on toggle state -->
    <TestingSignUUp v-if="isSignUp" />
    <TestingLogin v-else />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// State to toggle between components
const isSignUp = ref(true);

// Toggle function
const toggle = () => {
  isSignUp.value = !isSignUp.value;
};
</script>

<style scoped></style>

<!-- # mutation signup($name: String!, $email: String!, $password: String!) {
  #   addUser(
  #     data: {
  #       name: $name
  #       email: $email
  #       password: $password
  #       avatar: "https://avatar.iran.liara.run/public/boy?username=Ash"
  #     }
  #   ) {
  #     id
  #     name
  #     email
  #   }
  # }
   -->

<!-- # mutation SignIn($email: String!, $password: String!) {
    #   login(email: $email, password: $password) {
    #     id
    #     name
    #     access_token
    #     refresh_token
    #   }
    # } -->
