<template>
  <div class="w-full grid grid-cols-12 lg:w-full mx-auto">
    <div class="col-span-3 bg-[#F5F5F5] min-h-screen">
      <sidBar />
    </div>

    <main class="col-span-9">
      <slot />
    </main>
  </div>
</template>
