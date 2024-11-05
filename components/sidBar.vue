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
        class="hover:text-white hover:bg-gradient-to-r space-x-4 from-[#EF3E2C] to-[#E71F63] rounded-md"
      >
        <el-icon><HomeFilled class="w-6 h-6" /></el-icon>
        <NuxtLink :to="'/'">
          <span class="font-medium text-[16px]">Home</span>
        </NuxtLink>
      </el-menu-item>

      <el-menu-item
        class="text-white space-x-4 bg-gradient-to-r from-[#EF3E2C] to-[#E71F63] rounded-md"
      >
        <el-icon> <Icon class="text-white" name="fa6-solid:users" /> </el-icon>
        <span class="text-white font-medium text-[16px]">users</span>
      </el-menu-item>

      <el-menu-item
        class="hover:text-white hover:bg-gradient-to-r from-[#EF3E2C] to-[#E71F63] rounded-md space-x-4"
      >
        <el-icon> <Icon name="codicon:verified" class="w-6 h-6" /></el-icon>
        <span class="font-medium text-[16px]">Experts</span>
      </el-menu-item>
      <el-menu-item
        class="space-x-4 hover:text-white hover:bg-gradient-to-r from-[#EF3E2C] to-[#E71F63] rounded-md"
      >
        <el-icon> <Icon name="bxs:book-content" class="w-6 h-6" /></el-icon>
        <span class="font-medium text-[16px]">Content</span>
      </el-menu-item>
      <el-menu-item
        class="space-x-4 hover:text-white hover:bg-gradient-to-r from-[#EF3E2C] to-[#E71F63] rounded-md"
      >
        <el-icon> <Icon name="ph:chats-circle" class="w-6 h-6" /></el-icon>
        <span class="font-medium text-[16px]">Rooms</span>
      </el-menu-item>

      <el-menu
        style="background-color: transparent; border: none"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1" style="background-color: transparent">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </el-menu>

    <div class="w-full h-24 flex justify-between items-center border-t-[1px]">
      <div class="w-full flex gap-3">
        <img
          class="w-10 h-10 rounded-full object-cover"
          src="/public/image/Testing.webp"
        />
        <div>
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
  console.log("logout");
};
</script>

<style scoped></style>
