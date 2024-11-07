<template>
  <div class="flex justify-between items-center p-5">
    <div>
      <h1 class="font-semibold text-3xl text-[#344054]">Users</h1>
      <h5 class="text-[16px] font-normal text-[#475467]">Users</h5>
    </div>

    <div
      class="space-y-3 flex flex-wrap w-64 md:w-full gap-2 justify-end items-end"
    >
      <el-button
        style="color: #344054; width: 122px; height: 40px"
        :icon="Download"
        >Export</el-button
      >

      <nuxt-link :to="'/adduser'">
        <el-button
          style="
            border: none;
            width: 122px;
            height: 40px;
            color: white;
            background: linear-gradient(to right, #ef3e2c, #e71f63);
          "
          :icon="Plus"
          >Add user</el-button
        >
      </nuxt-link>
    </div>
  </div>

  <div class="px-5 space-x-6 border-b-[1px]">
    <button
      class="font-semibold text-[14px] text-[#EF3E2C] border-b-[1px] pb-5 border-b-[#EF3E2C]"
    >
      Active users
    </button>

    <button class="font-semibold text-[14px] text-[#667085] pb-5">
      Blocked users
    </button>
  </div>
</template>

<script setup lang="ts">
import { Plus, Download } from "@element-plus/icons-vue";
</script>

<style scoped></style>
