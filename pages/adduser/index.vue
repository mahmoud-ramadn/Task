<template>
  <div class="pt-6 h-72">
    <div class="container mx-auto space-y-9 px-5">
      <div>
        <h1 class="font-semibold text-3xl leading-10">Users</h1>
        <span class="text-[#475467] text-[16px] flex items-center gap-1"
          >Users <Icon name="fe:arrow-left" /> Add user</span
        >
      </div>

      <div class="flex justify-between items-start h-14 border-b-[1px] pb-5">
        <div class="space-y-2">
          <h1 class="text-[#101828] font-semibold text-xl leading-5">
            Add user account
          </h1>
          <p class="text-[#858589] font-medium text-[14px] leading-4">
            Add photo and personal details here
          </p>
        </div>

        <div>
          <el-button
            style="
              background-color: white;
              width: 80px;
              height: 40px;
              color: black;
            "
          >
            Rest
          </el-button>
          <el-button
            style="
              width: 80px;
              height: 40px;
              color: white;
              background: linear-gradient(to right, #ef3e2c, #e71f63);
            "
          >
            Add
          </el-button>
        </div>
      </div>

      <div class="h-[626px] py-6 mt-5 border-b-[1px]">
        <h1 class="font-semibold text-xl leading-6">Account info</h1>

        <!-- <el-sub-menu index="1">
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
        </el-sub-menu> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
