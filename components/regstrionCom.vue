<template>
  <ElForm @submit.prevent="onSubmit">
    <ElFormItem label="Email" :error="errors.email">
      <VeeField name="email" v-slot="{ field }">
        <ElInput v-bind="field" placeholder="Enter your email" />
      </VeeField>
      <VeeErrorMessage name="email" />
    </ElFormItem>

    <ElFormItem label="Password" :error="errors.password">
      <VeeField name="password" v-slot="{ field }">
        <ElInput
          v-bind="field"
          type="password"
          placeholder="Enter your password"
        />
      </VeeField>
      <VeeErrorMessage name="password" />
    </ElFormItem>

    <ElFormItem>
      <ElButton type="primary" native-type="submit">Login</ElButton>
    </ElFormItem>
  </ElForm>
</template>

<script setup lang="ts">
import { ElForm, ElFormItem, ElInput, ElButton } from "element-plus";
import { useForm, toTypedSchema } from "@vee-validate/yup";
import { object, string } from "yup";

// Yup validation schema
const schema = object({
  email: string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(schema),
});

const onSubmit = handleSubmit((values) => {
  console.log("Form Submitted:", values);
});
</script>

<style scoped>
/* Optional: style adjustments */
.el-form-item {
  margin-bottom: 20px;
}
</style>
