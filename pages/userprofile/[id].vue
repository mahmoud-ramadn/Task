<template>
  <div class="bg-[#FEF7F7] md:h-72 h-80 pl-4 pt-3">
    <div class="container mx-auto space-y-9 md:px-5">
      <div class="flex justify-between md:items-end">
        <div>
          <h1 class="font-semibold text-3xl leading-10">Users</h1>
          <span
            class="text-[#475467] md:text-[16px] text-xs flex items-center gap-1"
            >Users <Icon name="fe:arrow-left" /> user profile</span
          >
        </div>

        <div class="flex flex-wrap md:flex-row flex-col gap-2 items-center">
          <el-button
            style="
              background-color: #ef3e2c;
              width: 113px;
              height: 40px;
              color: white;
              background: linear-gradient(to right, #ef3e2c, #e71f63);
            "
          >
            <Icon name="gg:unblock" class="mr-1 w-5 h-5" />
            Unblock
          </el-button>

          <el-button
            style="
              width: 113px;
              height: 40px;
              color: #344054;
              margin-right: 10px;
            "
          >
            <Icon name="icon-park-outline:delete" class="w-5 h-5" />
            Delete
          </el-button>
        </div>
      </div>

      <div class="flex items-center gap-x-5">
        <img
          :src="data.user.avatar"
          class="h-[101px] w-[101px] bg-yellow-200 object-contain rounded-full"
        />
        <div>
          <p>{{ data.user.name }}</p>
          <p>U123456781</p>
        </div>
      </div>
      <button class="h-10 border-b-[1px] border-red-600 text-[#E71F63]">
        Account
      </button>
    </div>
  </div>
  <div
    class="container mx-auto flex items-start md:justify-between flex-wrap gap-y-3 pt-8"
  >
    <div class="w-[996px] h-[311px] bg-white rounded-md shadow-md p-8">
      <h1 class="text-[#101828] text-xl font-semibold leading-6">
        Account info
      </h1>

      <div class="h-[191px] flex flex-col gap-y-3 mt-3">
        <div>
          <h1 class="text-[16px] font-medium leading-6 text-[#101828]">Name</h1>
          <p class="font-normal leading-7 text-[14px] text-[#858589]">
            {{ data.user.name }}
          </p>
        </div>
        <div class="border-y-[1px] py-3">
          <h1 class="text-[16px] font-medium leading-6 text-[#101828]">
            Email address
          </h1>
          <p class="font-normal leading-7 text-[14px] text-[#858589]">
            {{ data.user.email }}
          </p>
        </div>
        <div>
          <h1 class="text-[16px] font-medium leading-6 text-[#101828]">Role</h1>
          <p class="font-normal leading-7 text-[14px] text-[#858589]">
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

const { data } = await useAsyncGql({
  operation: "getUser",
  variables: {
    id: id,
  },
});
</script>
