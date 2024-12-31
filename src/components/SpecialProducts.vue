<template>
  <div v-for="(item, index) in specialProducts" :key="index" class="col-4 mb-3">
    <div class="special-product-card">
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
          <router-link :to="`/product/${item.id}`">
            <img :src="item.image" class="img-fluid" :alt="item.title" />
          </router-link>
          <span class="d-flex align-items-center flex-row gap-3">
            <el-icon
              @click="prev(item)"
              :disabled="!(currentPage[item.id] > 0)"
              class="fs-6"
              :style="{
                color: '#999999',
                cursor: currentPage[item.id] > 0 ? 'pointer' : 'not-allowed',
              }"
              ><ArrowLeftBold
            /></el-icon>
            <div v-for="image in currentImages(item)" :key="image">
              <img
                :src="image"
                class="img-fluid rounded"
                style="border: 1px solid #eaeaea; width: 100px"
                :alt="item.title"
              />
            </div>
            <el-icon
              @click="next(item)"
              :disabled="
                (currentPage[item.id] || 0) >=
                Math.ceil(item.images.length / itemsPerPage) - 1
              "
              class="fs-6"
              :style="{
                color: '#999999',
                cursor:
                  (currentPage[item.id] || 0) <
                  Math.ceil(item.images.length / itemsPerPage) - 1
                    ? 'pointer'
                    : 'not-allowed',
              }"
              ><ArrowRightBold
            /></el-icon>
          </span>
        </div>
        <div class="product-details col-6">
          <h6 class="brand">{{ item.brand }}</h6>
          <router-link :to="`/product/${item.id}`">
            <h5 class="title">{{ item.title }}</h5>
          </router-link>
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
          <router-link :to="`/product/${item.id}`" class="button px-4 py-2">
            View Item
          </router-link>
        </div>
        <div class="action-bar mt-3">
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
          </div>
        </div>
      </div>
    </div>
  </div>
  <ProductModal v-model:visible="isModalVisible" :product="singleProduct" />
</template>
<script setup lang="ts">
import { ArrowLeftBold, ArrowRightBold } from "@element-plus/icons-vue";
import { computed, defineProps, ref, type PropType } from "vue";
import wish from "../images/wish.svg";
import compareChecked from "../images/check.svg";
import addedWish from "../images/wish-black.svg";
import productcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import ProductModal from "../components/Modal.vue";
import { singleProduct } from "../utils/Data";

const props = defineProps({
  data: {
    type: [Array, Object, String] as PropType<any>,
    required: true,
  },
});

const isModalVisible = ref(false);

const currentPage = ref<{ [key: number]: number }>({});

const itemsPerPage = 2;

const currentImages = (item: any) => {
  const page = currentPage.value[item.id] || 0;
  const start = page * itemsPerPage;
  const flatImages = item.images.map((img: any) => Object.values(img)).flat();
  return flatImages.slice(start, start + itemsPerPage);
};

const prev = (item: any) => {
  const current = currentPage.value[item.id] || 0;
  if (current > 0) {
    currentPage.value[item.id] = current - 1;
  }
};

const next = (item: any) => {
  const current = currentPage.value[item.id] || 0;
  const totalPages = Math.ceil(item.images.length / itemsPerPage);
  if (current < totalPages - 1) {
    currentPage.value[item.id] = current + 1;
  }
};

const specialProducts = computed(() =>
  props.data.filter((item: any) => item.tags === "special")
);

const calculateProgress = (quantity: number, sold: number): number => {
  return (quantity / (quantity + sold)) * 100;
};

const wishlist = ref<number[]>([]);
const compare = ref<number[]>([]);

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
