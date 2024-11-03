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
        <form class="w-[450px] md:h-3/4 h-fit space-y-9">
          <h1 class="font-bold text-2xl leading-8">Sign Up for an Account</h1>

          <div class="w-full relative">
            <User
              class="w-6 h-6 text-[#858589] absolute z-10 left-3 top-1/2 -translate-y-1/2 placeholder:pl-12"
            />
            <el-input
              type="text"
              class="w-full h-14 custom-input"
              v-model="input.name"
              placeholder="Username "
            />
          </div>

          <div class="w-full relative" v-if="login.SignUp !== 'Log In'">
            <Message
              class="w-6 h-6 text-[#858589] absolute z-10 left-3 top-1/2 -translate-y-1/2"
            />
            <el-input
              type="email"
              v-model="input.email"
              class="w-full h-14 custom-input"
              placeholder="Please input"
            />
          </div>
          <div class="relative w-full">
            <Lock
              class="w-6 h-6 text-[#858589] absolute z-10 left-3 top-1/2 -translate-y-1/2"
            />
            <el-input
              type="password"
              class="h-14 p-left custom-input"
              v-model="input.password"
              placeholder="password"
              show-password
            />
          </div>
          <div class="gap-4 flex items-end">
            <el-checkbox size="large" class="custom-checkbox" />

            <span class="font-normal text-xs w-[308px] text-[#858589]"
              >By creating an account means you agree to the
              <span class="text-black font-medium">Terms & Conditions</span> and
              our
              <span class="text-black font-medium">Privacy Policy</span></span
            >
          </div>
          <el-button
            style="
              width: 100%;
              height: 56px;
              border-radius: 100px;
              padding: 8px;
            "
            type="info"
            class="customhover font-bold text-xs"
          >
            {{ login.SignUp }}</el-button
          >

          <p class="font-normal leading-5 text-center">
            Already have an account?<span
              @click="Registion"
              class="text-red-800 font-bold cursor-pointer"
            >
              {{ login.SignUp === "Sign Up" ? "log in" : "Sign Up" }}
            </span>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Lock, Message, User } from "@element-plus/icons-vue";

definePageMeta({
  layout: "login-layout",
});
interface TForm {
  name: String;
  email: String;
  password: String;
}

const login = reactive({
  SignUp: "Sign Up",
});

const Registion = () => {
  login.SignUp = "Log In";
};

const input = reactive<TForm>({
  name: "",
  email: "",
  password: "",
});
</script>

<style scoped>
custom-checkbox {
  /* Change the label color to white */
  color: white;
}

.custom-checkbox ::v-deep .el-checkbox__input.is-checked .el-checkbox__inner {
  /* Background color for checked state */
  background-color: red;
  border-color: red;
}

.custom-checkbox ::v-deep .el-checkbox__inner {
  /* Background color for unchecked state */
  background-color: white;
  border-color: red;
}

.custom-checkbox ::v-deep .el-checkbox__input.is-checked + .el-checkbox__label {
  color: white; /* Text color when checked */
}
.customhover:hover {
  border: none;
  background: radial-gradient(circle, #ef3e2c, #e71f63);
}
.custom-input ::v-deep .el-input__inner {
  padding-left: 40px; /* Adjust as needed for left padding */
}
</style>
