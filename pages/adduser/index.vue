<template>
  <div class="pt-3 md:pt-6 md:h-72 pl-3">
    <div class="container mx-auto space-y-6 md:space-y-9 md:px-5">
      <div>
        <h1 class="font-semibold text-2xl md:text-3xl leading-8 md:leading-10">
          Users
        </h1>
        <span
          class="text-[#475467] text-sm md:text-[16px] flex items-center gap-1"
        >
          Users <Icon name="fe:arrow-left" /> Add user
        </span>
      </div>

      <div
        class="flex justify-between items-start md:h-14 h-auto border-b-[1px] pb-5"
      >
        <div class="space-y-1 md:space-y-2">
          <h1
            class="text-[#101828] font-semibold text-[16px] md:text-xl leading-5 md:leading-6"
          >
            Add user account
          </h1>
          <p
            class="text-[#858589] font-medium text-xs md:text-[14px] leading-4 md:leading-5"
          >
            Add photo and personal details here
          </p>
        </div>

        <div class="w-full md:w-56 flex justify-end gap-2 flex-wrap">
          <el-button
            style="
              background-color: white;
              width: 80px;
              height: 40px;
              color: black;
            "
          >
            Reset
          </el-button>
          <el-button
            style="
              width: 80px;
              height: 40px;
              color: white;
              background: linear-gradient(to right, #ef3e2c, #e71f63);
            "
            @click="submitForm"
          >
            Add
          </el-button>
        </div>
      </div>

      <div
        class="md:h-[626px] py-4 md:py-6 mt-5 border-b-[1px] space-y-4 md:space-y-6"
      >
        <h1 class="font-semibold text-lg md:text-xl leading-5 md:leading-6">
          Account info
        </h1>
        <form
          class="space-y-6 md:space-y-8"
          @submit.prevent="submitForm(formData)"
        >
          <div class="flex flex-col md:flex-row md:gap-8">
            <div class="font-semibold leading-5 text-[14px] md:w-[280px]">
              <h1>Name</h1>
            </div>
            <div class="w-full md:w-[514px] flex flex-col md:flex-row gap-4">
              <input
                class="w-full md:w-[244px] h-[44px] border-[1px] rounded-md px-2"
                v-model="firstName"
                placeholder="First name"
              />
              <input
                class="w-full md:w-[244px] h-[44px] border-[1px] rounded-md px-2"
                v-model="lastName"
                placeholder="Last name"
              />
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:gap-8">
            <div class="font-semibold leading-5 text-[14px] md:w-[280px]">
              <h1>Email address</h1>
            </div>
            <div class="w-full md:w-[514px]">
              <el-input
                v-model="email"
                class="w-full"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:gap-8">
            <div class="font-semibold leading-5 text-[14px] md:w-[280px]">
              <h1>Password</h1>
            </div>
            <div class="w-full md:w-[514px]">
              <el-input
                v-model="password"
                class="w-full"
                type="password"
                show-password
                placeholder="Password"
              />
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:gap-8">
            <div class="font-semibold leading-5 text-[14px] md:w-[280px]">
              <h1>Role</h1>
            </div>
            <div class="w-full md:w-[514px]">
              <el-select v-model="role" placeholder="Role" class="w-full">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>

          <!-- Photo Upload Section -->
          <div class="flex flex-col md:flex-row md:gap-8">
            <div class="font-semibold leading-5 text-[14px] md:w-[280px]">
              <h1>Photo</h1>
            </div>
            <div
              class="w-full md:w-[514px] flex flex-col md:flex-row items-center md:items-start gap-4"
            >
              <div
                class="w-8 h-8 md:w-16 md:h-16 rounded-full relative overflow-hidden"
              >
                <img
                  :src="uploadedImageUrl"
                  alt="User photo"
                  v-if="uploadedImageUrl"
                />
                <div
                  v-else
                  class="w-full h-full bg-gray-200 flex items-center justify-center"
                >
                  <span>No image</span>
                </div>
                <div
                  v-if="uploadedImageUrl"
                  class="absolute inset-0 top-5 md:top-10 left-5 md:left-10 bg-white rounded-full flex items-center justify-center shadow-sm"
                  @click="removeImage"
                >
                  <Icon name="ph:trash" class="text-red-400" />
                </div>
              </div>

              <!-- Simple file input for image upload -->
              <input
                type="file"
                accept="image/*"
                @change="handleFileChange"
                class="hidden"
                ref="fileInput"
              />
              <button
                type="button"
                @click="triggerFileInput"
                class="w-full md:w-[428px] h-28 border-2 border-gray-300 flex items-center justify-center"
              >
                <span>Click or Drop to upload</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Avatar } from "@element-plus/icons-vue";
import { ref } from "vue";

// Form data
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const role = ref("");
const uploadedImageUrl = ref<string | null>(null);

// Role options
const options = [
  { value: "admin", label: "Admin" },
  { value: "customer", label: "User" },
];

// Image file change handler
const handleFileChange = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    uploadedImageUrl.value = URL.createObjectURL(file);
  }
};

// Trigger the file input
const triggerFileInput = () => {
  const fileInput = document.querySelector(
    'input[type="file"]'
  ) as HTMLInputElement;
  fileInput.click();
};

// Remove uploaded image
const removeImage = () => {
  uploadedImageUrl.value = null;
};
const CreationError = ref(null);

const formData = ref({
  firstName: firstName.value,
  lastName: lastName.value,
  email: email.value,
  password: password.value,
  role: role.value,
  uploadedImageUrl: uploadedImageUrl.value,
});
// Form submit handler
const submitForm = async (values: any) => {
  CreationError.value = null;

  // const { data, error } = await useAsyncGql({
  //   operation: "SignUp",
  //   variables: {
  //     name: firstName.value,
  //     email: email.value,
  //     password: password.value,
  //     avatar: uploadedImageUrl.value,
  //   },
  // });

  console.log("Form Data:", formData);
};
</script>

<style scoped></style>
