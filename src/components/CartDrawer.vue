<template>
  <el-drawer
    v-model="drawer"
    :append-to-body="true"
    direction="rtl"
    size="18%"
    class="demo-drawer"
  >
    <template #header>
      <div class="p-0">
        <span v-if="cartData.length">Shopping cart</span>
        <button
          class="el-drawer__close-btn"
          @click="drawer = false"
          aria-label="Close"
        >
          <i class="el-icon el-drawer__close"></i>
        </button>
      </div>
    </template>
    <div v-if="cartData.length" class="demo-drawer__content">
      <div
        class="d-flex flex-column gap-2"
        v-for="(item, index) in cartData"
        :key="index"
      >
        <div class="d-flex gap-2 justify-content-between">
          <router-link :to="`/product/${item.id}`" class="d-flex gap-3">
            <div>
              <img
                :src="item.image"
                alt="product image"
                class="img-fluid"
                style="width: 75px; height: auto"
              />
            </div>
            <div
              class="d-flex justify-content-center flex-column underline-on-hover"
              style="cursor: pointer"
            >
              <p class="fw-bold text-muted mb-0" style="font-size: 13px">
                {{ truncateText(item.title, 30) }}
              </p>
              <p class="fw-bold text-muted mb-0" style="font-size: 12px">
                {{ item.quantity }} x Ksh{{ item.price }}
              </p>
            </div>
          </router-link>
          <div class="d-flex flex-column justify-content-center mb-4">
            <el-icon class="text-danger fs-6" style="cursor: pointer;" @click="removeItem(item.id)"
              ><Delete
            /></el-icon>
          </div>
        </div>
      </div>
    </div>

    <div v-if="cartData.length" class="demo-drawer__footer d-flex flex-column" style="" align="bottom">
      <div
        class="d-flex justify-content-between mb-4"
        style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)"
      >
        <div class="d-flex flex-column gap-2">
          <h5 class="fw-bold text-muted mb-0" style="font-size: 14px">
            Total items
          </h5>
          <p>{{ cartData.length }}</p>
        </div>
        <div class="d-flex flex-column gap-2 mt-2">
          <h5 class="fw-bold text-muted mb-0" style="font-size: 14px">
            Sub total
          </h5>
          <p>
            Ksh {{
              cartData.reduce(
                (acc: number, item: any) => acc + item.price * item.quantity,
                0
              )
            }}
          </p>
        </div>
      </div>
      <div class="d-flex gap-2 justify-content-center">
        <router-link to="/cart" class="button px-4 py-2">View Cart</router-link>
        <router-link to="/checkout" class="signup button px-4 py-2"
          >Checkout</router-link
        >
      </div>
    </div>

    <div v-if="!cartData.length" class="d-flex flex-column justify-content-center align-items-center">
      <p class="text-center text-muted w-100" style="font-size: 16px;"> Your cart is currently empty</p>
      <img src="../images/icons8-empty-cart.gif" class="img-fluid mb-3" style="width: 70px;" alt="empty cart">
      <router-link to="/product" class="text-muted  underline-on-hover" style="font-size: 14px;">Continue shopping</router-link>
    </div>
  </el-drawer>
</template>
<script lang="ts" setup>
import { Delete } from "@element-plus/icons-vue";
import { ref, type PropType } from "vue";

const props = defineProps({
  data: {
    type: [Array, Object, String] as PropType<any>,
    required: true,
  },
});

const cartData = ref([...props.data]);

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + "...";
  }
  return text;
};

const drawer = ref(false);

const removeItem = (id: number) => {
  cartData.value = cartData.value.filter((item: any) => item.id !== id);
}
</script>
<style scoped>
.demo-drawer__footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  padding: 10px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}
.demo-drawer__content {
  padding-bottom: 60px;
}
</style>
