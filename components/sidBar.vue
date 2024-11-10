<template>
  <div
    class="col-span-3 flex min-h-screen flex-col justify-between items-center px-5 pt-10"
  >
    <el-menu
      default-active="2"
      class="space-y-4"
      style="background-color: #f5f5f5; border: none; width: 100%"
    >
      <el-menu-item
        class="hover:text-white hover:bg-gradient-to-r md:w-full w-fit space-x-4 from-[#EF3E2C] to-[#E71F63] rounded-md"
      >
        <NuxtLink :to="'/home'" class="flex items-center">
          <el-icon><HomeFilled class="w-6 h-6" /></el-icon>
          <span class="font-medium text-[16px] md:block hidden">Home</span>
        </NuxtLink>
      </el-menu-item>

      <el-menu-item
        class="text-white space-x-4 bg-gradient-to-r md:w-full w-fit from-[#EF3E2C] to-[#E71F63] rounded-md"
      >
        <!-- Wrap the content inside NuxtLink to make it clickable -->
        <NuxtLink :to="'/home'" class="flex items-center w-full">
          <el-icon>
            <Icon class="text-white" name="fa6-solid:users" />
          </el-icon>
          <span class="text-white font-medium md:block hidden text-[16px]">
            users
          </span>
        </NuxtLink>
      </el-menu-item>
      <el-menu-item
        class="hover:text-white hover:bg-gradient-to-r md:w-full w-fit from-[#EF3E2C] to-[#E71F63] rounded-md space-x-4"
      >
        <el-icon> <Icon name="codicon:verified" class="w-6 h-6" /></el-icon>
        <span class="font-medium text-[16px] md:block hidden">Experts</span>
      </el-menu-item>
      <el-menu-item
        class="space-x-4 hover:text-white hover:bg-gradient-to-r md:w-full w-fit from-[#EF3E2C] to-[#E71F63] rounded-md"
      >
        <el-icon> <Icon name="bxs:book-content" class="w-6 h-6" /></el-icon>
        <span class="font-medium text-[16px] md:block hidden">Content</span>
      </el-menu-item>

      <el-menu-item
        class="space-x-4 hover:text-white hover:bg-gradient-to-r md:w-full w-fit from-[#EF3E2C] to-[#E71F63] rounded-md"
      >
        <el-icon> <Icon name="ph:chats-circle" class="w-6 h-6" /></el-icon>
        <span class="font-medium text-[16px] md:block hidden">Rooms</span>
      </el-menu-item>
    </el-menu>

    <div class="w-full h-24 flex justify-between items-center border-t-[1px]">
      <div class="w-full flex gap-3">
        <img
          class="md:w-10 md:h-10 w-7 h-7 rounded-full object-cover"
          src="/public/image/Testing.webp"
        />
        <div class="md:block hidden">
          <h4 class="font-semibold text-[14px]">Olivia Rhye</h4>
          <span class="font-normal text-[14px] leading-5">Super admin</span>
        </div>
      </div>
      <span class="cursor-pointer" @click="handleLogout">
        <Icon name="material-symbols-light:logout" class="w-5 h-5" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HomeFilled, User } from "@element-plus/icons-vue";

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleLogout = () => {
  localStorage.removeItem("token");
  navigateTo("/");
};
</script>

<style scoped></style>
