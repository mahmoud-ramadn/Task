<template>
  <div class="p-8 max-w-md mx-auto">
    <h2 class="text-2xl font-semibold mb-4">login</h2>
    <form @submit.prevent="handleRegister(formData)" class="space-y-4">
      <!-- Email Field -->
      <div>
        <label for="email" class="block text-sm font-medium">Email</label>
        <input
          v-model="formData.email"
          name="email"
          type="email"
          placeholder="Your Email"
          class="input"
        />
      </div>

      <!-- Password Field -->
      <div>
        <label for="password" class="block text-sm font-medium">Password</label>
        <input
          v-model="formData.password"
          name="password"
          type="password"
          placeholder="Your Password"
          class="input"
        />
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn-primary w-full">login</button>
    </form>
    <p v-if="registerError" class="text-red-500 mt-2">
      Error: {{ loginError }}
    </p>
  </div>
</template>

<script setup>
// Import useAsyncGql and yup if needed
// import * as yup from 'yup';
// import { useAsyncGql } from '#imports';

const loginError = ref(null);

const formData = reactive({
  email: "",
  password: "",
});

const handleRegister = async (values) => {
  loginError.value = null;

  console.log(formData);

  // const { data, errors } = await useAsyncGql({
  //   operation: "SignIn",
  //   variables: {
  //     email: formData.email,
  //     password: formData.password,
  //   },
  // });

  // if (errors) {
  //   loginError.value = errors[0].message;
  //   console.error("Error registering user:", errors);
  // } else {
  //   console.log("User  log in successfully:", data.value);
  // }
};
</script>

<style scoped>
.input {
  @apply mt-1 p-2 border border-gray-300 rounded w-full;
}
.btn-primary {
  @apply bg-blue-600 text-white p-2 rounded;
}
</style>
