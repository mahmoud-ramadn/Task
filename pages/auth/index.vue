<template>
  <div class="container-lg mx-auto">
    <div class="grid md:grid-cols-2 grid-cols-1 md:min-h-screen">
      <div
        class="col-span-1 flex items-center h-[50vh] md:h-full justify-center shadow-md bg-gradient-to-r from-[#EF3E2c] to-[#E71F63]"
      >
        <div
          class="md:w-[524px] md:h-[524px] w-56 h-56 rounded-full bg-gradient-to-r from-white/5 to-white/0"
        ></div>
      </div>

      <div class="col-span-1 flex justify-center items-center md:p-0 p-12">
        <Form
          @submit.prevent="onSubmit"
          class="w-[450px] md:h-3/4 h-fit space-y-9"
        >
          <h1 class="font-bold text-2xl leading-8">Sign Up for an Account</h1>

          <div class="w-full relative">
            <User
              class="w-6 h-6 text-[#858589] absolute z-10 left-3 top-1/2 -translate-y-1/2"
            />
            <input
              name="username"
              v-model="FormData.name"
              type="text"
              class="w-full h-14 custom-input"
              placeholder="Username"
            />
            <ErrorMessage name="username" />
          </div>

          <div class="w-full relative" v-if="login.SignUp !== 'Log In'">
            <Message
              class="w-6 h-6 text-[#858589] absolute z-10 left-3 top-1/2 -translate-y-1/2"
            />
            <input
              v-model="FormData.email"
              name="email"
              type="email"
              class="w-full h-14 custom-input"
              placeholder="email "
            />
            <ErrorMessage name="email" />
          </div>

          <div class="relative w-full">
            <Lock
              class="w-6 h-6 text-[#858589] absolute z-10 left-3 top-1/2 -translate-y-1/2"
            />
            <input
              v-model="FormData.password"
              name="password"
              type="password"
              class="h-14 w-full custom-input"
              placeholder="Password"
            />
            <ErrorMessage name="password" />
          </div>

          <div class="gap-4 flex items-end">
            <el-checkbox size="large" class="custom-checkbox" />
            <span class="font-normal text-xs w-[308px] text-[#858589]">
              By creating an account means you agree to the
              <span class="text-black font-medium">Terms & Conditions</span> and
              our <span class="text-black font-medium">Privacy Policy</span>
            </span>
          </div>

          <button
            style="
              width: 100%;
              height: 56px;
              border-radius: 100px;
              padding: 8px;
            "
            type="submit"
            class="customhover font-bold text-xs"
          >
            {{ login.SignUp }}
          </button>

          <p class="font-normal leading-5 text-center">
            Already have an account?
            <span
              @click="Registion"
              class="text-red-800 font-bold cursor-pointer"
            >
              {{ login.SignUp === "Sign Up" ? "Log in" : "Sign Up" }}
            </span>
          </p>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

definePageMeta({
  layout: "login-layout",
});
const FormData = reactive({
  name: "",
  email: "",
  password: "",
});

const login = reactive({
  SignUp: "Sign Up",
});

const Registion = () => {
  login.SignUp = login.SignUp === "Sign Up" ? "Log In" : "Sign Up";
};
const onSubmit = () => {
  console.log("tesing");

  console.log(FormData);

  navigateTo("/");
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
