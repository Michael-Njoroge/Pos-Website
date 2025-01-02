<template>
  <BreadCrumb title="Cart" />
  <section class="cart-wrapper home-wrapper-2 py-5">
    <div class="container-xxl" style="max-width: 90%">
      <div class="row">
        <div class="col-12">
          <div class="cart-header py-3 d-flex justify-content-between">
            <h4 class="cart-col-1">Product</h4>
            <h4 class="cart-col-2">Price</h4>
            <h4 class="cart-col-3">Quantity</h4>
            <h4 class="cart-col-4">Total</h4>
          </div>
          <div v-for="(item, index) in cartItems" :key="index"
            class="cart-data mb-2 py-3 d-flex align-items-center justify-content-between"
          >
            <div class="cart-col-1 gap-15 d-flex align-items-center">
              <div class="w-25">
                <img :src="item.image" alt="watch" class="img-fluid" />
              </div>
              <div class="w-75">
                <p>{{ item.title }}</p>
                <div class="d-flex align-items-center gap-4">
                  <p class="text-muted">Color:</p>
                  <ul class="colors p-0">
                    <li class="color-1" :style="{ backgroundColor: item.color[0].C1 }"></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="cart-col-2">
              <h5 class="price">$ {{ item.price }}</h5>
            </div>
            <div
              className="cart-col-3 d-flex align-items-center justify-content-start gap-15"
            >
              <div class="quantity">
                <button
                  class="minus"
                  @click="updateQuantity(index, -1)"
                  :disabled="item.quantity <= minQuantity"
                  aria-label="Decrease"
                  :style="item.quantity <= minQuantity ? 'cursor: not-allowed' : 'cursor: pointer'"
                >
                  &minus;
                </button>
                <input type="number" v-model="item.quantity" @input="handleInputChange(index, $event)" class="input-box" />
                <button
                  class="plus"
                  @click="updateQuantity(index, 1)"
                  :disabled="item.quantity >= maxQuantity"
                  aria-label="Increase"
                  :style="item.quantity >= maxQuantity ? 'cursor: not-allowed' : 'cursor: pointer'"
                >
                  &plus;
                </button>
              </div>
            </div>
            <div className="cart-col-3 d-flex align-items-center gap-4">
              <h5 class="price me-5">$ {{ (item.price * item.quantity).toFixed(2) }}</h5>
              <div>
                <el-icon
                  class="fs-6 text-danger"
                  style="cursor: pointer"
                  @click="removeItem(index)"
                  ><Delete
                /></el-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 py-2 mt-4">
          <div class="d-flex justify-content-between align-items-baseline">
            <router-link to="/shop" class="button underline-on-hover"
              >Continue Shopping</router-link
            >
            <div class="d-flex flex-column align-items-end">
              <h4>Subtotal: $ {{ subTotal.toFixed(2) }}</h4>
              <p>Taxes and shipping calculated at checkout</p>
              <router-link to="/checkout" class="button">Checkout</router-link>
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
import { cartProducts } from "../utils/Data";
import { computed, ref } from "vue";

useHead({ title: "Tech Mart | Cart" });
const cartItems = ref(cartProducts);

const minQuantity = 1;
const maxQuantity = 10;

// Update quantity
const updateQuantity = (index: number, value: number) => {
  cartItems.value[index].quantity += value;
};

const handleInputChange = (index: number, event: Event) => {
  const value = parseInt((event.target as HTMLInputElement).value, 10);
  if (!isNaN(value) && value >= 1 && value <= 10) {
    cartItems.value[index].quantity = value;
  } else {
    cartItems.value[index].quantity = Math.max(1, Math.min(10, cartItems.value[index].quantity));
  }
};

const subTotal = computed(() => {
  return cartItems.value.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
})
const removeItem = (id: number) => {
  console.log(id);
  cartItems.value.splice(id, 1);
};
</script>
<style scoped>
.el-space__item {
  width: 100px !important;
}

.quantity {
  display: flex;
  border: 2px solid #ced4da;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.quantity button {
  background-color:#ced4da;
  color: #fff;
  border: none;
  font-size: 20px;
  width: 30px;
  height: auto;
  text-align: center;
  transition: background-color 0.2s;
}

.quantity button:hover {
  background-color: #616263;
}

.input-box {
  width: 40px;
  text-align: center;
  border: none;
  padding: 8px 10px;
  font-size: 16px;
  outline: none;
}

.input-box[type="number"] {
  -moz-appearance: textfield;  
  }
</style>
