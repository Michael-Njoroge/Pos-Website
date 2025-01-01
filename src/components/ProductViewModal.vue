<template>
  <el-dialog
    :model-value="visible"
    @update:model-value="(value: any) => $emit('update:visible', value)"
    width="900px"
    custom-class="custom-modal"
    :close-on-click-modal="true"
    :show-close="true"
    :center="true"
    align-center
    style="border-radius: 10px"
  >
    <template #default>
      <div class="modal-body py-0">
        <div class="d-flex align-items-center">
          <div class="flex-grow-1">
            <img :src="product.image" alt="product image" class="img-fluid" />
          </div>
          <div class="d-flex flex-column flex-grow-1">
            <h1
              class="mb-3"
              style="font-size: 22px; font-weight: 500; line-height: 30px"
            >
              {{ product.title }}
            </h1>
            <h5 class="mb-3">{{ product.price }}</h5>
            <p class="mb-3 d-flex gap-4">
              Size:
              <el-select v-model="selectedSize" clearable style="width: 250px">
                <el-option
                  v-for="(size, index) in product.size"
                  :key="index"
                  :label="Object.values(size)[0]"
                  :value="Object.values(size)[0]"
                />
              </el-select>
            </p>
            <p class="mb-3 d-flex gap-4">
              Color:
              <el-select v-model="selectedColor" clearable style="width: 250px">
                <el-option
                  v-for="(color, index) in product.color"
                  :key="index"
                  :label="Object.values(color)[0]"
                  :value="Object.values(color)[0]"
                />
                />
              </el-select>
            </p>
            <p class="mb-1 d-flex gap-4">
              Quantity:
              <el-input
                v-model="quantity"
                type="number"
                min="1"
                style="width: 250px"
              />
            </p>
            <div class="modal-footer border-0 mt-3 justify-content-start">
              <button
                class="button border-0 w-75 p-2"
                type="button"
                @click="handleAdd"
              >
                Add to Cart
              </button>
            </div>
            <div class="p-3 mt-4">
              <router-link
                class="text-dark underline-on-hover"
                :to="'/product/' + product.id"
              >
                View full product details
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ElNotification } from "element-plus";
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";

const quantity = ref<number>(1);

const props = defineProps<{
  visible: boolean;
  product: any;
  }>();

const product = props.product;

const selectedSize = ref<any | null>(null);
const selectedColor = ref<any | null>(null);

if (product.size.length > 0) {
  selectedSize.value = Object.values(product.size[0])[0];
}

if (product.color.length > 0) {
  selectedColor.value = Object.values(product.color[0])[0];
}

const emit = defineEmits(["update:visible"]);

// const closeModal = () => {
//   emit("update:visible", false);
// };

const handleAdd = () => {
  ElNotification({
    title: "Success",
    message: "Successfully added to cart",
    type: "success",
  });
};
</script>

<style scoped>
.custom-modal .el-dialog {
  max-width: 90%;
}
.el-dialog__close {
  color: aqua;
}
</style>
