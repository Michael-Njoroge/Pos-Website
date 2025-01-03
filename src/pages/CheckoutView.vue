<template>
  <div class="breadcrumb mb-0 py-2">
    <div class="container-xxl" style="max-width: 1000">
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <el-steps
            style="width: 100%"
            :active="active"
            align-center
            finish-status="success"
            direction="horizontal"
          >
            <el-step title="Cart" />
            <el-step title="Fill in your details" />
            <el-step title="Payment" />
            <el-step title="Complete" />
          </el-steps>
        </div>
      </div>
    </div>
  </div>
  <section class="checkout-wrapper home-wrapper-2 py-5">
    <div class="container-xxl" style="">
      <div class="row bg-white rounded py-3">
        <div class="rounded">
          <div class="d-flex justify-content-between p-2">
            <h5 class="text-muted fs-6">Shipping information</h5>
            <div class="text-muted edit">Edit</div>
          </div>
        </div>
        <div class="d-flex gap-2 align-items-center pb-2">
          <el-icon
            class="fs-5 text-muted d-flex align-items-center"
            style="line-height: 1"
            ><LocationFilled
          /></el-icon>
          <div
            class="d-flex flex-column gap-2"
            v-if="addressData && addressData.length > 0"
          >
            <div class="d-flex gap-4 text-muted">
              <h5 class="text-muted" style="font-size: 14px; margin: 0">
                {{ addressData[0].first_name }} {{ addressData[0].last_name }}
              </h5>
              <h6 class="text-muted" style="font-size: 14px; margin: 0">
                {{ addressData[0].phone }}
              </h6>
            </div>
            <div class="d-flex gap-1 text-muted">
              <p style="font-size: 14px; margin: 0">
                {{ addressData[0].county }},
              </p>
              <p style="font-size: 14px; margin: 0">
                {{ addressData[0].subcounty }},
              </p>
              <p style="font-size: 14px; margin: 0">
                {{ addressData[0].area }},
              </p>
              <p style="font-size: 14px; margin: 0">
                {{ addressData[0].address }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row bg-white py-3 mt-4 rounded">
        <div class="rounded">
          <div class="d-flex justify-content-between p-2">
            <h5 class="text-muted fs-6 d-flex gap-4 align-items-center">
              Payment Method
              <span class="text-muted mb-0" style="font-size: 12px"
                >(Trusted Payment, 100% Money Back Guarantee)</span
              >
            </h5>
          </div>
        </div>
        <div
          class="d-flex pb-2 gap-4 align-items-center justify-content-center"
        >
          <div
            class="d-flex align-items-center gap-2 px-4"
            style="
              border: 1px solid #ced4da;
              cursor: pointer;
              border-radius: 5px;
            "
            :style="payement == 'mpesa' ? 'background-color: aqua' : ''"
            @click="payement = 'mpesa'"
          >
            <img
              src="../images/mpesa.png"
              alt="mpesa"
              class="img-fluid"
              style="width: 80px; height: 60px"
            />
            <h5 class="text-muted" style="font-size: 14px; margin: 0">
              Cards,
            </h5>
            <h5 class="text-muted" style="font-size: 14px; margin: 0">
              M-Pesa,
            </h5>
            <h5 class="text-muted" style="font-size: 14px; margin: 0">
              Bank Transfer or
            </h5>
            <h5 class="text-muted" style="font-size: 14px; margin: 0">
              Mobile Money
            </h5>
            <el-icon
              v-if="payement !== 'mpesa'"
              class="fs-5 text-muted"
              ><InfoFilled
            /></el-icon>
            <el-icon v-else class="fs-5 text-success"
              ><SuccessFilled
            /></el-icon>
          </div>
          <div
            class="d-flex align-items-center gap-2 px-4"
            style="
              border: 1px solid #ced4da;
              cursor: pointer;
              border-radius: 5px;
            "
            :style="payement == 'airtel' ? 'background-color: aqua' : ''"
            @click="payement = 'airtel'"
          >
            <img
              src="../images/airtel.svg"
              alt="mpesa"
              class="img-fluid"
              style="width: 80px; height: 60px"
            />
            <h5 class="text-muted" style="font-size: 14px; margin: 0">
              Cards,
            </h5>
            <h5 class="text-muted" style="font-size: 14px; margin: 0">
              Airtel,
            </h5>
            <h5 class="text-muted" style="font-size: 14px; margin: 0">
              Bank Transfer or
            </h5>
            <h5 class="text-muted" style="font-size: 14px; margin: 0">
              Airtel Money
            </h5>
            <el-icon v-if="payement !== 'airtel'" class="fs-5 text-muted"
              ><InfoFilled
            /></el-icon>
            <el-icon v-else class="fs-5 text-success"
              ><SuccessFilled
            /></el-icon>
          </div>
        </div>
      </div>
      <div class="row bg-white py-1 mt-4 rounded">
        <div class="rounded">
          <div class="d-flex justify-content-between p-2">
            <h5 class="text-muted fs-6 d-flex gap-4 align-items-center">
              Product List
              <span class="text-muted mb-0" style="font-size: 12px"
                >Summary( 2 items )</span
              >
            </h5>
          </div>
        </div>
      </div>
      <div class="row bg-white py-1 mt-1 rounded">
        <div class="rounded">
          <div class="d-flex gap-2 p-2 align-items-center">
            <el-icon class="fs-5 text-danger"><TakeawayBox /></el-icon>
            <h5 class="mb-0 text-muted" style="font-size: 16px">Delivery</h5>
          </div>
          <div
            class="my-3"
            style="background-color: #eaeaea; border-radius: 5px"
          >
            <div class="d-flex flex-column px-3 pt-2 gap-2">
              <div class="d-flex gap-2 align-items-center">
                <el-icon class="fs-5 text-danger"><LocationFilled /></el-icon>
                <h5 class="mb-0" style="font-size: 14px; color: green">
                  Local Dispatch
                </h5>
              </div>
              <h5 class="mb-0 text-muted" style="font-size: 12px">
                Ships from Nairobi, arrives in <strong>Chania</strong> within
                3-8 workdays.
              </h5>
            </div>
            <div class="d-flex p-4 align-items-center">
              <div class="col-2">
                <img
                  src="../images/watch.jpg"
                  alt="watch"
                  class="img-fluid"
                  style="width: 120px; height: 100px"
                />
              </div>
              <div class="col-10 d-flex justify-content-between">
                <div class="d-flex flex-column">
                  <h5 class="text-muted" style="font-size: 13px">
                    Apple Watch Series 7 44mm Space Gray Aluminum Case
                  </h5>
                  <h5 class="text-muted" style="font-size: 13px">
                    Color: Black
                  </h5>
                  <h5 class="text-muted" style="font-size: 13px">Size: 44mm</h5>
                  <h5 class="text-muted" style="font-size: 13px">
                    Quantity: 1
                  </h5>
                </div>
                <div class="d-flex flex-column justify-content-between">
                  <h5 class="text-danger" style="font-size: 13px">
                    Ksh 25,000
                  </h5>
                  <h5 class="text-muted" style="font-size: 14px">x1</h5>
                </div>
              </div>
            </div>
            <div class="d-flex p-4 align-items-center">
              <div class="col-2">
                <img
                  src="../images/watch4.jpg"
                  alt="watch"
                  class="img-fluid"
                  style="width: 120px; height: 100px"
                />
              </div>
              <div class="col-10 d-flex justify-content-between">
                <div class="d-flex flex-column">
                  <h5 class="text-muted" style="font-size: 13px">
                    Heavy Duty Men's & Women's Plain Navy Blue Dark Blue -
                    Premium Cotton Hoodie Navy,2XL
                  </h5>
                  <h5 class="text-muted" style="font-size: 13px">
                    Color: Green
                  </h5>
                  <h5 class="text-muted" style="font-size: 13px">Size: 44mm</h5>
                  <h5 class="text-muted" style="font-size: 13px">
                    Quantity: 2
                  </h5>
                </div>
                <div class="d-flex flex-column justify-content-between">
                  <h5 class="text-danger" style="font-size: 13px">Ksh 5,000</h5>
                  <h5 class="text-muted" style="font-size: 14px">x1</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row bg-white py-1 mt-4 rounded">
        <div class="rounded">
          <div class="d-flex justify-content-between p-2">
            <h5 class="text-muted fs-6 d-flex gap-2 align-items-center">
              Discount
              <span class="text-muted mb-0" style="font-size: 12px"
                >(Use your points or promocode to get discount)
              </span>
            </h5>
          </div>
          <div
            class="d-flex justify-content-between align-items-center px-2 mb-4"
          >
            <h5 class="text-muted mb-0" style="font-size: 14px">
              <span class="text-danger">26</span> coins to be redemeed
            </h5>
            <div
              class="d-flex gap-4 align-items-center"
              style="cursor: pointer"
            >
              <div v-if="discountApplied" class="ticket-label">-KSh 26</div>
              <el-icon
                v-if="!discountApplied"
                @click="applyDiscount"
                class="fs-4"
                ><CirclePlusFilled
              /></el-icon>
              <el-icon
                v-if="discountApplied"
                @click="applyDiscount"
                class="fs-4 text-danger"
                ><SuccessFilled
              /></el-icon>
            </div>
          </div>
        </div>
      </div>
      <div class="row bg-white rounded py-3 mt-4">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex gap-2 align-items-center pb-2">
            <el-icon
              class="fs-2 text-muted d-flex align-items-center"
              style="line-height: 1"
              ><PartlyCloudy
            /></el-icon>
            <div class="d-flex flex-column gap-2 align-items-center">
              <h5
                class="text-danger mb-0"
                style="
                  font-size: 14px;
                  background-color: #fadede;
                  padding: 4px 8px;
                "
              >
                7 Days Guarantee
              </h5>
              <h5 class="text-muted mb-0" style="font-size: 14px">
                Money Back Guarantee
              </h5>
            </div>
          </div>
          <div class="d-flex flex-column gap-3 align-items-center" >
            <div class="d-flex gap-5">
              <h5 class="text-muted mb-0" style="font-size: 14px">
                Product Amount
              </h5>
              <h5 class="text-muted mb-0" style="font-size: 14px">
                Ksh 25,000
              </h5>
            </div>
            <div class="d-flex gap-5">
              <h5 class="text-muted mb-0" style="font-size: 14px">
                Shipping Fee
              </h5>
              <h5 class="text-muted mb-0" style="font-size: 14px">+ Ksh 250</h5>
            </div>
            <div v-if="discountApplied"  class="d-flex gap-5">
              <h5 class="text-muted mb-0" style="font-size: 14px">
                Coins Discount
              </h5>
              <h5 class="text-muted mb-0" style="font-size: 14px">- Ksh 26</h5>
            </div>
            <div class="d-flex gap-5">
              <h5 class="text-muted mb-0" style="font-size: 14px">
                Payment Amount
              </h5>
              <h5 class="text-danger mb-0" style="font-size: 19px">
                Ksh 52,600
              </h5>
            </div>
            <button @click="showModal" class="bg-danger text-white rounded-1 underline-on-hover border-0 w-100 p-2">Place Order</button>
          </div>
        </div>
      </div>
    </div>
    <PaymentModal v-model="visible"/>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useHead } from "unhead";
import { addressData } from "../utils/Data";
import {
  CirclePlusFilled,
  InfoFilled,
  LocationFilled,
  PartlyCloudy,
  SuccessFilled,
  TakeawayBox,
} from "@element-plus/icons-vue";
import PaymentModal from "../components/PaymentModal.vue";

useHead({ title: "Tech Mart | Checkout" });
const payement = ref("mpesa");
const active = ref(2);
const visible = ref(false);
const discountApplied = ref(false);
const applyDiscount = () => {
  discountApplied.value = !discountApplied.value;
};

const showModal = () => {
  visible.value = !visible.value;
};
</script>

<style scoped>
.edit {
  border: 1px solid #ccc;
  padding: 5px 30px;
  font-size: 12px;
  cursor: pointer;
}
.edit:hover {
  background-color: #ced4da;
}
.ticket-label {
  display: inline-block;
  padding: 5px 15px;
  font-size: 14px;
  color: red;
  text-align: center;
  border: 1px solid red;
  position: relative;
  background-color: white;
}

.ticket-label::before,
.ticket-label::after {
  content: "";
  position: absolute;
  top: 0;
  width: 10px;
  height: 100%;
  background-color: white;
  border: 1px solid red;
}

.ticket-label::before {
  left: -10px;
  border-radius: 50% 0 0 50%;
}

.ticket-label::after {
  right: -10px;
  border-radius: 0 50% 50% 0;
}
</style>
