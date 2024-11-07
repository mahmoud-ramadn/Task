<template>
  <div class="p-8 max-w-md mx-auto">
    <h2 class="text-2xl font-semibold mb-4">Register</h2>
    <form @submit.prevent="handleRegister(formData)" class="space-y-4">
      <!-- Name Field -->
      <div>
        <label for="name" class="block text-sm font-medium">Name</label>
        <input
          v-model="formData.name"
          name="name"
          type="text"
          placeholder="Your Name"
          class="input"
        />
      </div>

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
      <button type="submit" class="btn-primary w-full">Register</button>
    </form>
    <p v-if="registerError" class="text-red-500 mt-2">
      Error: {{ registerError }}
    </p>
  </div>
</template>

<script setup>
// Import useAsyncGql and yup if needed
// import * as yup from 'yup';
// import { useAsyncGql } from '#imports';

const registerError = ref(null);

const formData = reactive({
  name: "",
  email: "",
  password: "",
});

const handleRegister = async (values) => {
  registerError.value = null;

  // console.log(formData);

  // const { data, errors } = await useAsyncGql({
  //   operation: "SignUp",
  //   variables: {
  //     name: formData.name,
  //     email: formData.email,
  //     password: formData.password,
  //   },
  // });

  // if (errors) {
  //   registerError.value = errors[0].message;
  //   console.error("Error registering user:", errors);
  // } else {
  //   console.log("User registered successfully:", data.value.addUser.id);
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
