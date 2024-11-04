<template>
  <div class="space-y-9">
    <h1 class="font-bold text-xl leading-6">Sign Up for an Account</h1>
    <el-form class="flex flex-col gap-9">
      <el-input
        v-model="FormData.name"
        style="width: 404px; height: 56px"
        size="large"
        type="text"
        placeholder="Username"
        :prefix-icon="User"
      />

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
      <div class="w-[340px] flex items-center h-9 gap-x-3">
        <el-checkbox size="large" />
        <p class="text-xs">
          By creating an account means you agree to the Terms & Conditions and
          our Privacy Policy
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
