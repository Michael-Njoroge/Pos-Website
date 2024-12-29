<template>
  <section class="home-wrapper-1 py-5">
    <div class="container-xxl" style="max-width: 90%">
      <div class="row">
        <div class="col-6">
          <el-carousel
            :interval="5000"
            arrow="never"
            :pause-on-hover="true"
            height="600px"
          >
            <el-carousel-item
              v-for="(item, index) in carouselItems"
              :key="index"
            >
              <div class="main-banner position-relative">
                <img
                  :src="item.image"
                  alt="main-banner"
                  class="img-fluid rounded-3"
                />
                <div class="main-banner-content position-absolute">
                  <h4>{{ item.title }}</h4>
                  <h5>{{ item.subtitle }}</h5>
                  <p>{{ item.price }}</p>
                  <router-link class="button" to="/buy-now"
                    >BUY NOW</router-link
                  >
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="col-6">
          <div
            class="d-flex gap-10 flex-wrap justify-content-between align-items-center"
            style="cursor: pointer"
          >
            <div
              class="small-banner position-relative"
              v-for="(item, index) in catItems"
              :key="index"
            >
              <img
                :src="item.image"
                alt="small-banner"
                class="img-fluid rounded-3"
              />
              <div class="small-banner-content position-absolute">
                <h4>{{ item.title }}</h4>
                <h5>{{ item.subtitle }}</h5>
                <p>
                  {{ item.price1 }}<br />
                  {{ item.price2 }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="home-wrapper-2 py-5">
    <div class="container-xxl" style="max-width: 90%">
      <div class="row">
        <div class="col-12">
          <div
            class="services d-flex align-items-center justify-content-between"
          >
            <div
              class="d-flex align-items-center gap-15"
              v-for="(service, index) in services"
              :key="index"
            >
              <img :src="service.image" alt="services" />
              <div>
                <h6>{{ service.title }}</h6>
                <p class="mb-0">{{ service.tagline }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="home-wrapper-2 py-5">
    <div class="container-xxl" style="max-width: 90%">
      <div class="row">
        <div class="col-12">
          <div
            class="categories flex-wrap d-flex align-items-center align-items-center justify-content-between"
            style="cursor: pointer"
          >
            <div
              v-for="(category, index) in categories"
              :key="index"
              class="d-flex align-items-center"
            >
              <div>
                <h6>{{ category.title }}</h6>
                <p>{{ category.count }} Items</p>
              </div>
              <img :src="category.img" :alt="category.title" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="featured-wrapper home-wrapper-2 py-5">
    <div class="container-xxl" style="max-width: 90%">
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <h5 class="section-heading">Featured Collection</h5>
          <div class="d-flex gap-2 mt-3" style="color: #999999;cursor:pointer">
            <el-icon class="fs-6"><ArrowLeftBold /></el-icon>
            <el-icon class="fs-6"><ArrowRightBold /></el-icon>
          </div>
        </div>
        <ProductCard :data="featuredProducts" :grid="6" />
      </div>
    </div>
  </section>

  <section class="famous-wrapper home-wrapper-2 py-5">
    <div class="container-xxl" style="max-width: 90%">
      <div class="row">
        <div class="col-12">
          <h5 class="section-heading">Famous Collection</h5>
        </div>
        <div class="col-3">
          <div class="famous-card position-relative">
            <img
              src="../images/subbanner-01.webp"
              class="img-fluid"
              alt="famous"
            />
            <div class="famous-content position-absolute">
              <h5>Big Screen</h5>
              <h6>Smart Watch Series 7</h6>
              <p>From $399 or $16.69/mo. for 24 mo. *</p>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="famous-card position-relative">
            <img
              src="../images/subbanner-02.webp"
              class="img-fluid"
              alt="famous"
            />
            <div class="famous-content position-absolute">
              <h5 class="text-dark">Studio Display</h5>
              <h6 class="text-dark">600 nits of brightness</h6>
              <p class="text-dark">27-inch 5k Retina display</p>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="famous-card position-relative">
            <img
              src="../images/subbanner-03.webp"
              class="img-fluid"
              alt="famous"
            />
            <div class="famous-content position-absolute">
              <h5 class="text-dark">SmartPhones</h5>
              <h6 class="text-dark">SmartPhone 13 Pro</h6>
              <p class="text-dark">
                Now in green. From $999.00 or $41.64/mo. for 24 mo. Footnote*
              </p>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="famous-card position-relative">
            <img
              src="../images/subbanner-04.webp"
              class="img-fluid"
              alt="famous"
            />
            <div class="famous-content position-absolute">
              <h5 class="text-dark">Home Speakers</h5>
              <h6 class="text-dark">Room-filling sound</h6>
              <p class="text-dark">From $699 or $116.58/mo. for 12 mo.*</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="special-wrapper home-wrapper-2 py-5">
    <div class="container-xxl" style="max-width: 90%">
      <div class="row">
        <div class="col-12">
          <h5 class="section-heading">Special Offer</h5>
        </div>
        <SpecialProducts :data="specialProducts"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHead } from "unhead";
import {
  catItems,
  carouselItems,
  services,
  categories,
  featuredProducts,
  specialProducts
} from "../utils/Data";
import ProductCard from "../components/ProductCard.vue";
import { ArrowLeftBold, ArrowRightBold } from "@element-plus/icons-vue";
import SpecialProducts from "../components/SpecialProducts.vue";

useHead({ title: "Tech Mart | Home" });
</script>
