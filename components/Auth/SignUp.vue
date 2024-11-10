<template>
  <div class="space-y-9">
    <h1 class="font-bold text-xl leading-6">Sign Up for an Account</h1>
    <el-form ref="signupForm" label-position="top" class="flex flex-col gap-9">
      <el-form-item :error="errors.name">
        <Field name="name" v-slot="{ field }">
          <el-input
            v-bind="field"
            v-model="formData.name"
            style="width: 404px; height: 56px"
            size="large"
            type="text"
            placeholder="Username"
            :prefix-icon="User"
          />
        </Field>
      </el-form-item>

      <el-form-item :error="errors.email">
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

      <el-form-item :error="errors.password">
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

      <div class="w-[340px] flex items-center h-9 gap-x-3">
        <el-checkbox size="large" />
        <p class="text-xs">
          By creating an account, you agree to the Terms & Conditions and our
          Privacy Policy.
        </p>
      </div>

      <el-button
        style="
          height: 56px;
          border-radius: 100px;
          color: white;
          background: linear-gradient(to right, #ef3e2c, #e71f63);
        "
        @click="handelSignup"
      >
        Sign Up
      </el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import * as yup from "yup";
import { useForm, Field, useField } from "vee-validate";
import { Message, User, Lock } from "@element-plus/icons-vue";

const schema = yup.object({
  name: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Your password is not strong enough. Use at least 8 characters")
    .required("Password is required"),
});

const { handleSubmit, errors } = useForm({
  validationSchema: schema,
});

const formData = reactive({
  name: "",
  email: "",
  password: "",
});

const handelSignup = handleSubmit(async (values: any) => {
  try {
    const { data } = await useAsyncGql({
      operation: "CreateUser",
      variables: {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        avatar:
          "https://thumbs.dreamstime.com/b/u-r-letter-logo-abstract-design-white-color-background-ur-monogram-211841045.jpg",
      },
    });

    console.log(data.value.addUser.email);
  } catch (error) {
    console.log(error);
  }
});
</script>
