<template>
  <div>user homepage</div>
</template>

<script setup lang="ts">
const { data } = await useAsyncGql({
  operation: "GetUsers",
});
</script>
