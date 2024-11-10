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
          <el-button class="reset-button" @click="resetForm"> Reset </el-button>
          <el-button class="add-button" @click="submitForm(formData)">
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
            <div
              class="w-full md:w-[514px] flex md:justify-between flex-col md:flex-row gap-y-6 md:gap-4"
            >
              <input
                v-model="formData.firstName"
                placeholder="First name"
                class="w-full md:w-[244px] h-8 border-[1px] placeholder:text-sm rounded-[4px]focus:outline-[1px] px-2"
              />
              <input
                v-model="formData.lastName"
                placeholder="Last name"
                class="w-full md:w-[244px] h-8 border-[1px] outline-[1px] placeholder:text-sm rounded-[4px] px-2"
              />
            </div>
          </div>

          <!-- Email Field -->
          <div class="flex flex-col md:flex-row md:gap-8">
            <div class="font-semibold leading-5 text-[14px] md:w-[280px]">
              <h1>Email address</h1>
            </div>
            <div class="w-full md:w-[514px]">
              <el-input
                v-model="formData.email"
                type="email"
                placeholder="Email"
                class="w-full"
              />
            </div>
          </div>

          <!-- Password Field -->
          <div class="flex flex-col md:flex-row md:gap-8">
            <div class="font-semibold leading-5 text-[14px] md:w-[280px]">
              <h1>Password</h1>
            </div>
            <div class="w-full md:w-[514px]">
              <el-input
                v-model="formData.password"
                type="password"
                show-password
                placeholder="Password"
                class="w-full"
              />
            </div>
          </div>

          <!-- Role Select -->
          <div class="flex flex-col md:flex-row md:gap-8">
            <div class="font-semibold leading-5 text-[14px] md:w-[280px]">
              <h1>Role</h1>
            </div>
            <div class="w-full md:w-[514px]">
              <el-select
                v-model="formData.role"
                placeholder="Role"
                class="w-full"
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
                  :src="formData.uploadedImageUrl"
                  alt="User photo"
                  v-if="formData.uploadedImageUrl"
                />
                <div
                  v-else
                  class="w-full h-full bg-gray-200 flex items-center justify-center"
                >
                  <span>No image</span>
                </div>
                <div
                  v-if="formData.uploadedImageUrl"
                  class="absolute inset-0 top-5 md:top-10 left-5 md:left-10 bg-white rounded-full flex items-center justify-center shadow-sm"
                  @click="removeImage"
                >
                  <Icon name="ph:trash" class="text-red-400" />
                </div>
              </div>

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
                class="w-full md:w-[428px] h-28 border-[1px] rounded-md border-gray-300 flex items-center justify-center flex-col gap-y-3"
              >
                <div
                  class="w-10 h-10 bg-[#F9FAFB] flex items-center justify-center rounded-full"
                >
                  <Icon name="simple-line-icons:cloud-upload" class="w-5 h-5" />
                </div>
                <span class="text-[14px] font-normal text-[#475467]">
                  <span class="text-[#6941C6] font-semibold"
                    >Click to upload</span
                  >
                  or drag and drop
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="w-full flex justify-end gap-2 flex-wrap">
        <el-button class="reset-button" @click="resetForm"> Reset </el-button>
        <el-button class="add-button" @click="submitForm(formData)">
          Add
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  role: "customer",
  uploadedImageUrl: "",
});

const options = [
  { value: "admin", label: "admin" },
  { value: "customer", label: "customer" },
];

const fileInput = ref(null);

const handleFileChange = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (validTypes.includes(file.type)) {
      formData.uploadedImageUrl = URL.createObjectURL(file);
    } else {
      alert("Please upload a valid image file.");
    }
  }
};

const triggerFileInput = () => {
  fileInput.value?.click();
};

const removeImage = () => {
  formData.uploadedImageUrl = "";
};

const resetForm = () => {
  formData.firstName = "";
  formData.lastName = "";
  formData.email = "";
  formData.password = "";
  formData.role = "customer";
  formData.uploadedImageUrl = "";
};

const submitForm = async (values: any) => {
  if (!formData.role) {
    alert("Please select a role.");
    return;
  }

  const { data } = await useAsyncGql({
    operation: "CreateUser",
    variables: {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      password: formData.password,
      avatar:
        formData.uploadedImageUrl ||
        "https://images.pexels.com/photos/28830603/pexels-photo-28830603/free-photo-of-elegant-sunlit-arcaded-corridor-with-doorway.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
  });
  navigateTo("/home");
};
</script>

<style scoped>
.reset-button {
  background-color: white;
  width: 80px;
  height: 40px;
  color: black;
}

.add-button {
  width: 80px;
  height: 40px;
  color: white;
  background: linear-gradient(to right, #ef3e2c, #e71f63);
}
</style>
