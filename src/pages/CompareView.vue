<template>
  <BreadCrumb title="Compare" />
  <section class="compare-products-wrapper py-5 home-wrapper-2">
    <div class="container-xxl" style="max-width: 90%">
      <div class="row">
        <div v-for="(item, index) in compareItems" :key="index" class="col-2">
          <div class="compare-product-card position-relative">
            <img
              src="../images/cross.svg"
              alt="cross"
              class="position-absolute cross img-fluid"
            />
            <div class="product-card-image">
              <img :src="item?.images[0]?.file_url" alt="watch" />
            </div>
            <div class="compare-product-details">
              <h5 class="title">
                {{ item?.title }}
              </h5>
              <div class="d-flex gap-2">
                <h6 class="price mb-3 mt-3">
                  <span v-if="index === 2">
                    <strike>$ {{ item?.price }}</strike>
                  </span>
                </h6>
                <h6
                  :class="{ 'text-danger': index === 2 }"
                  class="price mb-3 mt-3"
                >
                  $ {{ item?.price1 }}
                </h6>
              </div>
              <div>
                <div class="product-detail">
                  <h5>{{ item?.brand?.title }}:</h5>
                  <p>{{ item?.brand?.description }}</p>
                </div>
                <div class="product-detail">
                  <h5>{{ item?.type.title }}:</h5>
                  <p>{{ item?.type?.description }}</p>
                </div>
                <div class="product-detail">
                  <h5>{{ item?.availability?.title }}:</h5>
                  <p>{{ item?.availability?.description }}</p>
                </div>
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
import { compareItems } from "../utils/Data";
useHead({ title: "Tech Mart | Compare" });
</script>
