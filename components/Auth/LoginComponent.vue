<template>
  <div class="space-y-9">
    <h1 class="font-bold text-xl leading-6">Sign In to your Account</h1>
    <p class="text-[16px] leading-6 font-normal text-[#858589]">
      Welcome back! please enter your detail
    </p>
    <el-form class="flex flex-col gap-9">
      <el-input
        v-model="FormData.email"
        style="width: 404px; height: 56px"
        size="large"
        type="email"
        placeholder="Email"
        :prefix-icon="Message"
      />
      <el-input
        v-model="FormData.password"
        style="width: 404px; height: 56px"
        size="large"
        type="password"
        placeholder="Password"
        :prefix-icon="Lock"
        show-password
      />
      <div class="w-full flex justify-between items-center h-9 gap-x-3">
        <div class="flex items-center gap-3">
          <el-checkbox size="large" />
          <p class="font-medium text-[14px] leading-4">Remember me</p>
        </div>
        <p class="text-[#EF3E2C] text-[14px] font-bold leading-6">
          Forgot Password?
        </p>
      </div>
      <el-button style="height: 56px; border-radius: 100px" type="primary"
        >Sign Up</el-button
      >
      <p class="text-[14px] font-medium leading-5 text-center w-full">
        Already have an account?
        <span class="text-[#EF3E2C] cursor-pointer">Log In</span>
      </p>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from "element-plus";
import { Message, User, Lock } from "@element-plus/icons-vue";

interface TForm {
  name: string;
  email: string;
  password: string;
}

const FormData = ref<TForm>({
  name: "",
  email: "",
  password: "",
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
    }
  });
};
</script>

<style scoped></style>
