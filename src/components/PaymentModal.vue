<template>
  <el-dialog
    :model-value="visible"
    @update:model-value="(value: boolean) => $emit('update:visible', value)"
    width="600"
    :close-on-click-modal="true"
    :show-close="true"
    style="border-radius: 10px"
  >
    <template #header>
      <div style="text-align: left">Payment Method</div>
    </template>
    <small class="text-muted w-100" style=""
      >Trusted Payment, 100% Money Back Guarantee</small
    >
    <div style="border-top: 1px solid #ddd; margin: 10px 0"></div>
    <div class="row">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex gap-3 align-items-center">
          <img
            src="../images/wallet.png"
            alt="wallet"
            class="img-fluid mb-0"
            style="width: 40px; height: 40px"
          />
          <h5 class="text-muted mb-0" style="font-size: 14px">Wallet</h5>
        </div>
        <div class="">
          <el-icon class="fs-4"><CirclePlusFilled /></el-icon>
          <el-icon class="fs-4 text-success" v-if="selectedMethod"
            ><SuccessFilled
          /></el-icon>
        </div>
      </div>
      <div
        class="px-3"
        style="border-top: 1px solid #ddd; margin-top: 10px"
      ></div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex gap-3 align-items-center w-100">
          <el-icon class="fs-6"><Unlock /></el-icon>
          <input
            type="text"
            placeholder="Enter payment password(6 digits long)"
            class="p-2 border-0 w-100"
          />
        </div>
      </div>
      <div
        class="px-3"
        style="border-top: 1px solid #ddd; margin-bottom: 5px"
      ></div>

      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex gap-3 align-items-center">
          <img
            src="../images/mpesa.png"
            alt="visa"
            class="img-fluid mb-0"
            style="width: 40px; height: 40px"
          />
          <h5 class="text-muted mb-0" style="font-size: 14px">
            Via OKAVA KENYA LTD
          </h5>
        </div>
        <div class="text-muted">
          <el-icon class="fs-4"><CirclePlusFilled /></el-icon>
          <el-icon class="fs-4 text-success" v-if="selectedMethod"
            ><SuccessFilled
          /></el-icon>
        </div>
      </div>

      <div
        class="px-3"
        style="border-top: 1px solid #ddd; margin: 10px 0"
      ></div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex gap-3 align-items-center">
          <img
            src="../images/paystack.png"
            alt="visa"
            class="img-fluid mb-0"
            style="width: 40px; height: 40px"
          />
          <h5 class="text-muted mb-0" style="font-size: 14px">
            Visa/MasterCard & More
          </h5>
        </div>
        <div class="text-muted">
          <el-icon class="fs-4"><CirclePlusFilled /></el-icon>
          <el-icon class="fs-4 text-success" v-if="selectedMethod"
            ><SuccessFilled
          /></el-icon>
        </div>
      </div>
      <div
        class="px-3"
        style="border-top: 1px solid #ddd; margin: 10px 0"
      ></div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex gap-3 align-items-center">
          <img
            src="../images/ipay.png"
            alt="visa"
            class="img-fluid mb-0"
            style="width: 40px; height: 40px"
          />
          <h5 class="text-muted mb-0" style="font-size: 14px">
            Airtel, Equity, Vooma & More
          </h5>
        </div>
        <div class="text-muted">
          <el-icon class="fs-4"><CirclePlusFilled /></el-icon>
          <el-icon class="fs-4 text-success" v-if="selectedMethod"
            ><SuccessFilled
          /></el-icon>
        </div>
      </div>
      <div
        class="px-3"
        style="border-top: 1px solid #ddd; margin: 10px 0"
      ></div>

      <div class="">
        <button
          class="button bg-danger border-0 w-100 my-2 text-white"
          style="border-radius: 5px"
        >
          Proceed
        </button>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { CirclePlusFilled, Unlock } from "@element-plus/icons-vue";
import { ref } from "vue";

defineProps({ visible: Boolean });
defineEmits(["update:visible"]);

const selectedMethod = ref(false);
</script>
<style scoped>
input:focus {
  outline: none;
  box-shadow: none;
}
input::placeholder {
  color: #ced4da;
}
</style>
