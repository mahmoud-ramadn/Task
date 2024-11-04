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
        <AuthLoginComponent />
        <!-- <AuthSignUp /> -->
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
