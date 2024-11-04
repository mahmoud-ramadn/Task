<template>
  <div>user Details</div>
  {{ data }}
</template>
<script setup lang="ts">
const id = useRoute().params.id;

const { data } = await useAsyncGql({
  operation: "getUser",
  variables: {
    id: id,
  },
});
</script>
