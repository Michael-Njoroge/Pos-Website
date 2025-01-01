<template>
  <div
    v-for="(item, index) in data"
    :key="index"
    class="col-2"
    style="cursor: pointer"
  >
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
        <img :src="item.image1" alt="product" class="img-fluid mx-auto" />
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
        <p
          :class="['description', grid === 12 ? 'd-block' : 'd-none']"
          v-html="item.description"
        ></p>
        <p class="price">$ {{ item.price }}</p>
        <!-- <span class="ms-2 text-muted text-decoration-line-through">${{ item.price }}</span> -->
      </div>
      <div class="action-bar position-absolute">
        <div class="d-flex flex-column gap-15">
          <button
            @click="toggleCompare(item.id)"
            class="border-0 bg-transparent"
          >
            <img
              :src="
                isProductInCompare(item.id) ? compareChecked : productcompare
              "
              alt="compare"
            />
          </button>
          <button @click="showModal" class="border-0 bg-transparent">
            <img :src="view" alt="view" />
          </button>
          <button class="border-0 bg-transparent">
            <img :src="addcart" alt="add to cart" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <ProductModal v-model:visible="isModalVisible" :product="singleProduct" />
</template>

<script setup lang="ts">
import { ref, type PropType } from "vue";
import wish from "../images/wish.svg";
import addedWish from "../images/wish-black.svg";
import productcompare from "../images/prodcompare.svg";
import compareChecked from "../images/check.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import ProductModal from "../components/ProductViewModal.vue";
import { singleProduct } from "../utils/Data";
defineProps({
  data: {
    type: [Array, Object, String] as PropType<any>,
    required: true,
  },
  grid: {
    type: Number,
    required: true,
  },
});


const wishlist = ref<number[]>([]);
const compare = ref<number[]>([]);
const isModalVisible = ref(false);

const isProductInWishlist = (productId: number) =>
  wishlist.value.includes(productId);

const toggleWishlist = (productId: number) => {
  if (wishlist.value.includes(productId)) {
    wishlist.value = wishlist.value.filter((id) => id !== productId);
  } else {
    wishlist.value.push(productId);
  }
};

const isProductInCompare = (productId: number) =>
  compare.value.includes(productId);

const toggleCompare = (productId: number) => {
  if (compare.value.includes(productId)) {
    compare.value = compare.value.filter((id) => id !== productId);
  } else {
    compare.value.push(productId);
  }
};

const showModal = () => {
  isModalVisible.value = true;
};
</script>

<style scoped></style>
