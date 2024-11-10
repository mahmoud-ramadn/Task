<template>
  <div class="bg-[#FEF7F7] md:h-72 h-80 p-4">
    <div class="container mx-auto space-y-6 md:px-5">
      <div
        class="flex md:flex-row justify-between md:items-end space-y-2 md:space-y-0"
      >
        <div>
          <h1
            class="font-semibold text-2xl md:text-3xl leading-8 md:leading-10"
          >
            Users
          </h1>
          <span
            class="text-[#475467] md:text-[16px] text-[10px] flex items-center gap-1"
          >
            Users <Icon name="fe:arrow-left" /> user profile
          </span>
        </div>

        <div
          class="flex justify-end md:h-10 flex-wrap md:flex-row gap-2 items-center"
        >
          <el-button
            style="height: 40px; color: white"
            class="w-[113px] bg-gradient-to-r from-[#ef3e2c] to-[#e71f63]"
          >
            <Icon name="gg:unblock" class="mr-1 w-4 h-4 md:w-5 md:h-5" />
            Unblock
          </el-button>

          <el-button
            style="height: 40px; color: #344054"
            class="w-[113px] text-[#344054]"
          >
            <Icon
              name="icon-park-outline:delete"
              class="mr-1 w-4 h-4 md:w-5 md:h-5"
            />
            Delete
          </el-button>
        </div>
      </div>

      <div class="flex items-center gap-3 md:gap-5">
        <img
          :src="data.user.avatar"
          class="h-16 w-16 md:h-[101px] md:w-[101px] bg-yellow-200 object-cover rounded-full"
        />
        <div class="text-sm md:text-base">
          <p>{{ data.user.name }}</p>
          <p>U123456781</p>
        </div>
      </div>
      <button
        class="h-10 border-b-2 border-red-600 text-[#E71F63] text-sm md:text-base"
      >
        Account
      </button>
    </div>
  </div>

  <div
    class="container mx-auto flex flex-col md:flex-row items-start gap-y-6 md:gap-y-0 md:justify-between pt-8"
  >
    <div class="w-full md:w-[996px] bg-white rounded-md shadow-md p-6 md:p-8">
      <h1 class="text-[#101828] text-lg md:text-xl font-semibold leading-6">
        Account info
      </h1>

      <div class="flex flex-col gap-y-4 mt-3">
        <div>
          <h1 class="text-[14px] md:text-[16px] font-medium text-[#101828]">
            Name
          </h1>
          <p class="font-normal text-sm md:text-base text-[#858589]">
            {{ data.user.name }}
          </p>
        </div>
        <div class="border-y-[1px] py-3">
          <h1 class="text-[14px] md:text-[16px] font-medium text-[#101828]">
            Email address
          </h1>
          <p class="font-normal text-sm md:text-base text-[#858589]">
            {{ data.user.email }}
          </p>
        </div>
        <div>
          <h1 class="text-[14px] md:text-[16px] font-medium text-[#101828]">
            Role
          </h1>
          <p class="font-normal text-sm md:text-base text-[#858589]">
            {{ data.user.role }}
          </p>
        </div>
      </div>
    </div>
    <el-button style="width: 86px; height: 40px" :icon="Edit"> Edit </el-button>
  </div>
</template>

<script setup lang="ts">
import { Edit } from "@element-plus/icons-vue";
const id = useRoute().params.id;

useSeoMeta({
  title: "User Profile",
  description: " this is page for User Profile ",
  keywords: "User Details",
});
const { data } = await useAsyncGql({
  operation: "getUser",
  variables: {
    id: id,
  },
});
</script>
