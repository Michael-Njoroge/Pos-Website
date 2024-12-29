<template>
  <div v-for="(item, index) in specialProducts" :key="index" class="col-4 mb-3">
    <div class="special-product-card position-relative">
      <div class="col-6 d-flex justify-content-between px-3 align-items-center">
        <div
          class="discount-badge badge rounded text-center;"
          style="height: 20px; background-color: #febd69; color: #333"
        >
          <p class="m-0">{{ item.discount }}</p>
        </div>
        <div class="wishlist-icon">
          <button
            class="border-0 bg-transparent"
            @click="toggleWishlist(item.id)"
          >
            <img
              :src="isProductInWishlist(item.id) ? addedWish : wish"
              alt="wishlist"
              width="18px"
              height="18px"
            />
          </button>
        </div>
      </div>

      <div class="d-flex gap-0">
        <div class="d-flex flex-column col-6">
          <img :src="item.image" class="img-fluid" :alt="item.title" />
          <span class="d-flex align-items-center flex-row gap-3">
            <el-icon class="fs-6" style="color: #999999"
              ><ArrowLeftBold
            /></el-icon>
            <img
              :src="item.image"
              class="img-fluid"
              style="width: 30%; border: 1px solid #eaeaea"
              :alt="item.title"
            />
            <img
              :src="item.image"
              class="img-fluid"
              style="width: 30%; border: 1px solid #eaeaea"
              :alt="item.title"
            />
            <el-icon class="fs-6" style="color: #999999"
              ><ArrowRightBold
            /></el-icon>
          </span>
        </div>
        <div class="product-details col-6">
          <h6 class="brand">{{ item.brand }}</h6>
          <h5 class="title">{{ item.title }}</h5>
          <el-rate v-model="item.total_rating" :max="5" disabled class="mb-2" />
          <p class="price">
            <strike>$ 200</strike>
            <span class="red-p mx-2" style="color: #e02b40"
              >${{ item.price }}</span
            >
          </p>
          <!-- <div class="discount-till d-flex align-items-center gap-10">
            <p class="mb-0"><b>5</b> Days</p>
            <div class="d-flex gap-10 align-items-center">
              <span class="badge rounded-circle p-3 bg-danger">2</span>:
              <span class="badge rounded-circle p-3 bg-danger">1</span>:
              <span class="badge rounded-circle p-3 bg-danger">1</span>
            </div>
          </div> -->
          <div class="product-count my-3">
            <p>Products: {{ item.quantity }}</p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                :style="{
                  width: calculateProgress(item.quantity, item.sold) + '%',
                }"
                :aria-valuenow="calculateProgress(item.quantity, item.sold)"
                :aria-valuemin="0"
                :aria-valuemax="item.quantity + item.sold"
              ></div>
            </div>
          </div>
          <router-link :to="`/product/${item.id}`" class="button">
            Option
          </router-link>
        </div>
        <div class="action-bar mt-3 position-absolute">
        <div class="d-flex flex-column gap-15">
          <button class="border-0 bg-transparent">
            <img :src="productcompare" alt="compare" />
          </button>
          <router-link
            :to="`/product/${item.id}`"
            class="border-0 bg-transparent"
          >
            <img :src="view" alt="view" />
          </router-link>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ArrowLeftBold, ArrowRightBold } from "@element-plus/icons-vue";
import { computed, defineProps, onMounted, ref } from "vue";
import wish from "../images/wish.svg";
import addedWish from "../images/wish-black.svg";
import productcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";

interface SpecialProduct {
  id: number;
  brand: string;
  title: string;
  total_rating: number;
  price: number;
  quantity: number;
  sold: number;
  image: string;
  tags: string;
  discount: string;
}

const props = defineProps({
  data: {
    type: Array as () => SpecialProduct[],
    required: true,
  },
});

const specialProducts = computed(() =>
  props.data.filter((item) => item.tags === "special")
);

const calculateProgress = (quantity: number, sold: number): number => {
  return (quantity / (quantity + sold)) * 100;
};

const wishlist = ref<number[]>([]);

const isProductInWishlist = (productId: number) =>
  wishlist.value.includes(productId);

const toggleWishlist = (productId: number) => {
  if (wishlist.value.includes(productId)) {
    wishlist.value = wishlist.value.filter((id) => id !== productId);
  } else {
    wishlist.value.push(productId);
  }
};

onMounted(() => {
  console.log("data", props.data);
});
</script>
