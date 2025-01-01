<template>
  <BreadCrumb title="Login" />
  <div class="login-wrapper home-wrapper-2 py-5">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="auth-card">
            <h3 class="text-center mb-3">Login</h3>
            <el-form
              ref="ruleFormRef"
              :model="formData"
              :rules="rules"
              :size="formSize"
              class="d-flex flex-column gap-15"
            >
              <el-form-item label="Email" label-position="top" prop="email">
                <el-input placeholder="john@example.com" v-model="formData.email" />
              </el-form-item>
              <el-form-item
                label-position="top"
                label="Password"
                prop="password"
              >
                <el-input placeholder="********" v-model="formData.password" />
              </el-form-item>
              <el-button
                class="button border-0 w-100 d-flex justify-content-center py-4"
                style="border-radius: 5px; font-weight: bolder"
                @click.prevent="submitForm(ruleFormRef)"
                type="primary"
                >Login</el-button
              >
              <div class="d-flex mt-3 justify-content-between">
                <router-link
                  to="/forgot-password"
                  class="underline-on-hover"
                  style="font-weight: bolder"
                  >Forgot Password?</router-link
                >
                <span class="fs-6"
                  >Don't have an account?<router-link
                    to="/signup"
                    class="ms-1 underline-on-hover"
                    style="font-weight: bolder"
                    >Sign up</router-link
                  ></span
                >
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ComponentSize, FormInstance, FormRules } from "element-plus";
import { useHead } from "unhead";
import { reactive, ref } from "vue";
import BreadCrumb from "../components/BreadCrumb.vue";

useHead({ title: "Tech Mart | Login" });

interface RuleForm {
  email: string;
  password: string;
}

const formSize = ref<ComponentSize>("default");
const ruleFormRef = ref<FormInstance>();
const formData = reactive<RuleForm>({
  email: "",
  password: "",
});

const rules = reactive<FormRules>({
  email: [
    {
      required: true,
      message: "Email is required",
      trigger: ["blur", "change"],
    },
    {
      type: "email",
      message: "Invalid email address",
      trigger: ["blur", "change"],
    },
  ],
  password: [
    {
      required: true,
      message: "Password is required",
      trigger: ["blur", "change"],
    },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submitted",formData);
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>
