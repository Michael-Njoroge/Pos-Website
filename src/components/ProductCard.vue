<template>
  <div v-for="(item, index) in data" :key="index" class="col-3" style="cursor: pointer">
    <div class="product-card position-relative">
      <div class="wishlist-icon position-absolute">
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
      <div class="product-image">
        <img
          :src="item.image1"
          alt="product"
          class="img-fluid mx-auto"
        />
        <img
          v-if="item.image2"
          :src="item.image2"
          alt="product-alt"
          class="img-fluid"
        />
      </div>
      <div class="product-details">
        <h6 class="brand">{{ item.brand }}</h6>
        <h5 class="product-title">{{ item.title }}</h5>
        <div class="rating">
          <el-rate v-model="item.total_ratings" :max="5" disabled />
        </div>
        <p    :class="['description', grid === 12 ? 'd-block' : 'd-none']" v-html="item.description"></p>
        <p class="price">$ {{ item.price }}</p>
      </div>
      <div class="action-bar position-absolute">
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
          <button class="border-0 bg-transparent">
            <img :src="addcart" alt="add to cart" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import wish from "../images/wish.svg";
import addedWish from "../images/wish-black.svg";
import productcompare from "../images/prodcompare.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

interface Product {
  id: number;
  image1: string;
  image2?: string; 
  brand: string;
  title: string;
  total_ratings: number;
  description: string;
  price: number;
}

const props = defineProps({
  data: {
    type: Array as () => Product[],
    required: true,
  },
  grid: {
      type: Number,
      required: true
  }
});

onMounted(()=>{
    console.log("data", props.data);
})

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
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
}
.product-card .product-image img {
  max-width: 100%;
  border-radius: 8px;
}
.action-bar {
  right: 15px;
  bottom: 15px;
}
</style>
