<template>
  <div class="space-y-9">
    <h1 class="font-bold text-xl leading-6">Sign In to your Account</h1>
    <p class="text-[16px] leading-6 font-normal text-[#858589]">
      Welcome back! Please enter your details.
    </p>
    <el-form @submit.prevent="handleLogin" class="flex flex-col gap-9">
      <el-form-item prop="email" :error="errors.email ? errors.email : ''">
        <Field name="email" v-slot="{ field }">
          <el-input
            v-bind="field"
            v-model="formData.email"
            style="width: 404px; height: 56px"
            size="large"
            type="email"
            placeholder="Email"
            :prefix-icon="Message"
          />
        </Field>
      </el-form-item>

      <el-form-item
        prop="password"
        :error="errors.password ? errors.password : ''"
      >
        <Field name="password" v-slot="{ field }">
          <el-input
            v-bind="field"
            v-model="formData.password"
            style="width: 404px; height: 56px"
            size="large"
            type="password"
            placeholder="Password"
            :prefix-icon="Lock"
            show-password
          />
        </Field>
      </el-form-item>

      <div class="w-full flex justify-between items-center h-9 gap-x-3">
        <div class="flex items-center gap-3">
          <el-checkbox size="large" />
          <p class="font-medium text-[14px] leading-4">Remember me</p>
        </div>
        <p class="text-[#EF3E2C] text-[14px] font-bold leading-6">
          Forgot Password?
        </p>
      </div>

      <el-button
        style="
          height: 56px;
          color: white;
          border-radius: 100px;
          background: linear-gradient(to right, #ef3e2c, #e71f63);
        "
        @click="handleLogin"
      >
        Sign In
      </el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { useForm, Field, Form as VForm, validate } from "vee-validate";
import * as yup from "yup";
import { Message, Lock } from "@element-plus/icons-vue";

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const formData = reactive({
  email: "",
  password: "",
});
const { handleSubmit, errors } = useForm({
  validationSchema: schema,
});

const handleLogin = handleSubmit(async (values) => {
  try {
    const { data } = await useAsyncGql({
      operation: "SignIN",
      variables: {
        email: formData.email,
        password: formData.password,
      },
    });
    console.log(data.value.login.access_token);

    const token = data.value.login.access_token;

    localStorage.setItem("token", token);

    navigateTo("/home");
  } catch (error) {
    console.log(error);
  }
});
</script>
