<template>
  <div
    class="error-page space-y-4 bg-gradient-to-r from-blue-400 to-red-500 min-h-screen flex items-center justify-center flex-col"
  >
    <h1 v-if="error.statusCode" class="text-4xl font-bold text-white">
      {{ error.statusCode }}
    </h1>
    <p class="text-4xl font-bold text-white" v-if="error.message">
      {{ error.message }}
    </p>
    <p class="text-4xl font-bold text-white" v-else>Something went wrong.</p>

    <!-- Back Button -->
    <button
      @click="goBack"
      class="text-sm rounded-md p-3 font-bold text-white bg-gradient-to-br from-inherit to-blue-100"
    >
      Go back to previous page
    </button>
  </div>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    required: true,
  },
});

// Function to go back to the previous page
const goBack = () => {
  window.history.back();
  console.log(window.history.back);
};
</script>

<style scoped>
.error-page {
  text-align: center;
  padding: 20px;
}
</style>
