<template>
  <BreadCrumb title="Contact Us" />
  <section class="contact-wrapper home-wrapper-2 py-5">
    <div class="container-xxl" style="max-width: 90%">
      <div class="row">
        <div class="col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8175095926376!2d36.82096247381016!3d-1.2833529987044474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f110049a8886b%3A0xc646c93b7d72eafd!2sNairobi%20town!5e0!3m2!1sen!2ske!4v1707972148217!5m2!1sen!2ske"
            width="600"
            height="450"
            title="Google Map of Nairobi Town"
            class="border-0 w-100"
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="col-12 mt-5">
          <div class="contact-inner-wrapper d-flex justify-content-between">
            <div class="">
              <h3 class="contact-title mb-4">Contact Us</h3>
              <el-form
                ref="ruleFormRef"
                :model="formData"
                :rules="rules"
                :size="formSize"
                class="d-flex flex-column gap-15"
              >
                <el-form-item prop="name">
                  <el-input placeholder="John Doe" v-model="formData.name" />
                </el-form-item>
                <el-form-item prop="email">
                  <el-input placeholder="john@example.com" v-model="formData.email" />
                </el-form-item>
                <el-form-item prop="phone">
                  <el-input placeholder="+254 712345678" v-model="formData.phone" />
                </el-form-item>
                <el-form-item prop="comment">
                <el-input
                  v-model="formData.comment"
                  style="width: 100%;font-size: 15px;"
                  :autosize="{ minRows: 2, maxRows: 10 }"
                  type="textarea"
                  placeholder="Your Message, Comments or Questions"
                />
                </el-form-item>
                <el-button
                  class="button border-0 col-2 rounded py-4"
                  style="border-radius: 30px !important; font-weight: bolder"
                  @click.prevent="submitForm(ruleFormRef)"
                  type="primary"
                  >Send</el-button
                >
              </el-form>
            </div>
            <div>
              <h3 class="contact-title mb-4">Get in touch with us</h3>
              <div>
                <ul class="ps-0">
                  <li class="mb-3 d-flex align-items-center gap-15 text-muted">
                    <el-icon class="fs-5"><HomeFilled /></el-icon>
                    <address class="mb-0">
                      Hno. 277, Near village park, Mombase road, Nairobi, Kenya
                    </address>
                  </li>
                  <li class="mb-3 d-flex align-items-center gap-15 text-muted">
                    <el-icon class="fs-5"><Phone /></el-icon>
                    <a href="tel:+254716002152">+254 716002152</a>
                  </li>
                  <li class="mb-3 d-flex align-items-center gap-15 text-muted">
                    <el-icon class="fs-5"><Comment /></el-icon>
                    <a href="mailto:mikethecoder12@gmail.com">
                      mikethecoder12@gmaill.com
                    </a>
                  </li>
                  <li class="mb-3 d-flex align-items-center gap-15 text-muted">
                    <el-icon class="fs-5"><InfoFilled /></el-icon>
                    <p class="mb-0">Monday - Friday 10am - 8pm</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useHead } from "unhead";
import BreadCrumb from "../components/BreadCrumb.vue";
import { ElNotification, type ComponentSize, type FormInstance, type FormRules } from "element-plus";
import { reactive, ref } from "vue";
import "../contact.css"
import {
  Comment,
  HomeFilled,
  InfoFilled,
  Phone,
} from "@element-plus/icons-vue";
useHead({ title: "Tech Mart | Contact Us" });

interface RuleForm {
  name: string;
  email: string;
  phone: string;
  comment: string;
}

const formSize = ref<ComponentSize>("default");
const ruleFormRef = ref<FormInstance>();
const formData = reactive<RuleForm>({
  name: "",
  email: "",
  phone: "",
  comment: "",
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
  name: [], 
  phone: [], 
  comment: [{
    required: true,
    message: "Comment is required",
    trigger: ["blur", "change"],
  }],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submitted", formData);
      ElNotification({
        title: "Success",
        message: "Message sent successfully",
        type: "success",
      });
      formEl.resetFields();
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>
<style scoped>
.el-input__wrapper{
  border-radius: 30px !important;
}
</style>
