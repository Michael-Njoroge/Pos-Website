<template>
  <BreadCrumb title="Wishlist" />
  <section class="wishlist-wrapper home-wrapper-2 py-5">
    <div class="container-xxl" style="max-width: 90%">
      <div class="row">
        <div class="col-2" v-for="(item, index) in wishlistItems" :key="index">
          <div class="wishlist-card position-relative">
            <img
              src="../images/cross.svg"
              alt="cross"
              class="position-absolute cross img-fluid"
              @click="removeFromWish(item?.id)"
            />
            <div class="wishlist-card-image bg-white">
              <img
                :src="item?.images[0]?.file_url"
                alt="watch"
                class="img-fluid w-100"
              />
            </div>
            <div class="py-3 px-3">
              <router-link
                to="#"
                class="text-dark border-0 bg-transparent underline-on-hover"
              >
                <h5 class="title">{{ item?.title }}</h5>
              </router-link>
              <div class="d-flex gap-2">
                <h6 v-if="index === 2" class="price">
                  $ <strike>{{ item?.price }}</strike>
                </h6>
                <h6 class="price" :class="{ 'text-danger': index === 2 }">
                  $ {{ item?.price1 }}
                </h6>
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
import { wishlistItems } from "../utils/Data";
useHead({ title: "Tech Mart | Wishlist" });

const removeFromWish = (id: any) => {
  console.log("id", id);
};
</script>
