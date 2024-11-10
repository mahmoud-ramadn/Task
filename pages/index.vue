<template>
  <div class="md:container-lg mx-auto">
    <div class="grid md:grid-cols-2 grid-cols-1 md:min-h-screen">
      <div
        class="col-span-1 flex items-center h-[50vh] md:h-full justify-center shadow-md bg-gradient-to-r from-[#EF3E2c] to-[#E71F63]"
      >
        <div
          class="md:w-[524px] md:h-[524px] w-56 h-56 rounded-full bg-gradient-to-r from-white/5 to-white/0"
        ></div>
      </div>

      <div
        class="col-span-1 flex flex-col space-y-6 justify-center items-center md:p-0 py-4"
      >
        <AuthSignUp v-if="toggelForm" />
        <AuthLoginComponent v-else />
        <div>
          <p
            v-if="toggelForm"
            class="text-[14px] font-medium leading-5 text-center w-full"
          >
            Already have an account?
            <button @click="toggleForm" class="text-[#EF3E2C] cursor-pointer">
              login
            </button>
          </p>
          <p
            v-else
            class="text-[14px] font-medium leading-5 text-center w-full"
          >
            Create an account?
            <span @click="toggleForm" class="text-[#EF3E2C] cursor-pointer"
              >signup</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Auth",
  description: "SignIn and SignUp page ",
  keywords: "login,SignUp",
});
definePageMeta({
  layout: "login-layout",
});

const toggelForm = ref(true);

const toggleForm = () => {
  toggelForm.value = !toggelForm.value;
};
</script>

<style scoped>
.custom-checkbox {
  color: white;
}

.custom-checkbox ::v-deep .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: red;
  border-color: red;
}

.custom-checkbox ::v-deep .el-checkbox__inner {
  background-color: white;
  border-color: red;
}

.custom-checkbox ::v-deep .el-checkbox__input.is-checked + .el-checkbox__label {
  color: white;
}

.customhover:hover {
  border: none;
  background: radial-gradient(circle, #ef3e2c, #e71f63);
}

.custom-input ::v-deep .el-input__inner {
  padding-left: 40px;
}
</style>
