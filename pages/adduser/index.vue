<template>
  <div class="pt-6 h-72">
    <div class="container mx-auto space-y-9 md:px-5">
      <div>
        <h1 class="font-semibold text-3xl leading-10">Users</h1>
        <span class="text-[#475467] text-[16px] flex items-center gap-1"
          >Users <Icon name="fe:arrow-left" /> Add user</span
        >
      </div>

      <div
        class="flex justify-between items-start md:h-14 h-fit border-b-[1px] pb-5"
      >
        <div class="space-y-2">
          <h1
            class="text-[#101828] font-semibold md:text-xl text-[16px] leading-5"
          >
            Add user account
          </h1>
          <p
            class="text-[#858589] font-medium md:text-[14px] text-xs leading-4"
          >
            Add photo and personal details here
          </p>
        </div>

        <div class="w-56 flex flex-wrap">
          <el-button
            class="md:w-20 md:h-10"
            style="background-color: white; color: black"
          >
            Rest
          </el-button>
          <el-button
            class="md:w-20 md:h-10"
            style="
              color: white;
              background: linear-gradient(to right, #ef3e2c, #e71f63);
            "
          >
            Add
          </el-button>
        </div>
      </div>

      <div class="h-[626px] py-6 mt-5 border-b-[1px] space-y-6">
        <h1 class="font-semibold text-xl leading-6">Account info</h1>

        <form class="space-y-8">
          <div class="flex md:flex-row flex-col md:gap-x-8">
            <div class="font-semibold leading-5 text-[14px]">
              <h1 class="md:w-[280px]">Name</h1>
            </div>

            <div class="md:w-[514px] h-fit flex gap-4 flex-wrap">
              <input
                class="md:w-[244px] w-full h-[44px] border-[1px] rounded-md px-2"
                size="large"
                placeholder="first name"
              />
              <input
                class="md:w-[244px] w-full h-[44px] border-[1px] rounded-md px-2"
                size="large"
                placeholder="last name"
              />
            </div>
          </div>

          <div class="flex md:flex-row flex-col md:gap-x-8">
            <div class="font-semibold leading-5 text-[14px]">
              <h1 class="md:w-[280px]">Email address</h1>
            </div>

            <div class="md:w-[514px] h-11 md:space-x-6">
              <el-input
                class="md:w-[514px] w-full"
                size="large"
                type="email"
                placeholder="email "
              />
            </div>
          </div>
          <div class="flex md:flex-row flex-col md:gap-x-8">
            <div class="font-semibold leading-5 text-[14px]">
              <h1 class="md:w-[280px]">PassWord</h1>
            </div>

            <div class="md:w-[514px] h-11 space-x-6">
              <el-input
                class="w-[514px]"
                size="large"
                show-password
                type="password"
                placeholder="password"
              />
            </div>
          </div>
          <div class="flex md:flex-row flex-col md:gap-x-8">
            <div class="font-semibold leading-5 text-[14px]">
              <h1 class="md:w-[280px]">Role</h1>
            </div>

            <div class="md:w-[514px] h-11 space-x-6">
              <el-select
                v-model="value"
                placeholder="Role"
                size="large"
                class="md:w-[514px]"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
          <div class="flex md:flex-row flex-col md:gap-x-8">
            <div class="font-semibold leading-5 text-[14px]">
              <h1 class="md:w-[280px]">Photo</h1>
            </div>

            <div
              class="md:w-[514px] relative flex flex-wrap items-start h-11 space-x-6"
            >
              <div class="w-16 h-16 rounded-full overflow-hidden">
                <img src="/public/image/Testing.webp" alt="" />
                <div
                  class="w-6 h-6 flex items-center justify-center absolute z-50 top-10 left-10 shadow-sm bg-white rounded-full"
                >
                  <Icon
                    name="ph:trash"
                    class="absolute text-red-400 rounded-full"
                  />
                </div>
              </div>

              <el-upload
                style="width: 428px; height: 104px"
                class="upload-demo md:w-[428px]"
                drag
                multiple
                :on-success="handleUploadSuccess"
              >
                <el-icon class="el-icon--upload">
                  <Icon name="icon-park-outline:upload-two" />
                </el-icon>
                <div class="el-upload__text">
                  Drop file here or <em>click to upload</em>
                </div>
                <template #tip>
                  <div class="el-upload__tip">
                    <img
                      :src="uploadedImageUrl"
                      v-if="uploadedImageUrl"
                      alt="Uploaded image"
                    />
                  </div>
                </template>
              </el-upload>
            </div>
          </div>
        </form>
      </div>

      <div class="flex justify-end items-start h-14 pb-5">
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
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref("");

const options = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "User",
    label: "User",
  },
];
const uploadedImageUrl = ref<string | null>(null);

const handleUploadSuccess = (response: any, file: File) => {
  uploadedImageUrl.value = URL.createObjectURL(file);
};
</script>
