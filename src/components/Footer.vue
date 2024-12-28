<template>
  <div>
    <!-- Newsletter Section -->
    <footer class="py-4">
      <div class="container-xxl">
        <div class="row align-items-center">
          <div class="col-5">
            <div class="footer-top-data d-flex gap-30 align-items-center">
              <img :src="newsletter" alt="newsletter" />
              <h2 class="mb-0 text-white">Sign Up For Newsletter</h2>
            </div>
          </div>
          <div class="col-7">
            <div class="input-group">
              <input
                type="text"
                class="form-control py-2"
                placeholder="Your Email Address"
                aria-label="Your Email Address"
                aria-describedby="basic-addon2"
              />
              <span class="input-group-text p-2 text-white" id="basic-addon2">
                Subscribe
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Main Footer Content -->
    <footer class="py-4">
      <div class="container-xxl">
        <div class="row">
          <!-- Contact Us -->
          <div class="col-3">
            <h4 class="text-white mb-4">Contact Us</h4>
            <address class="text-white fs-6">
              Hno: 277 Near Vill chopal,
              <br />
              Sonipat, Haryana
              <br />
              Pincode: 131103
            </address>
            <a href="tel:+254716002152" class="mt-3 d-block mb-1 text-white">
              +254716002152
            </a>
            <a
              href="mailto:mikethecoder12@gmail.com"
              class="mt-2 d-block mb-0 text-white"
            >
              mikethecoder12@gmail.com
            </a>
            <div class="social-icons d-flex align-items-center gap-30 mt-4">
              <a class="text-white" href="#">
                <el-icon class="fs-4"><CircleClose /></el-icon>
                <!-- <CircleClose class="fs-4" /> -->
              </a>
              <a class="text-white" href="#">
                <el-icon class="fs-4"><ChatRound /></el-icon>
              </a>
              <a class="text-white" href="#">
                <el-icon class="fs-4"><Share /></el-icon>
              </a>
              <a class="text-white" href="#">
                <el-icon class="fs-4"><Location/></el-icon>
              </a>
            </div>
          </div>

          <!-- Information Links -->
          <div class="col-4">
            <h4 class="text-white mb-4">Information</h4>
            <div class="footer-links d-flex flex-column">
              <router-link to="privacy-policy" class="text-white py-2 mb-1">
                Privacy Policy
              </router-link>
              <router-link to="refund-policy" class="text-white py-2 mb-1">
                Refund Policy
              </router-link>
              <router-link to="shipping-policy" class="text-white py-2 mb-1">
                Shipping Policy
              </router-link>
              <router-link
                to="terms-and-conditions"
                class="text-white py-2 mb-1"
              >
                Terms & Conditions
              </router-link>
              <router-link to="blogs" class="text-white py-2 mb-1">
                Blogs
              </router-link>
            </div>
          </div>

          <!-- Account Links -->
          <div class="col-3">
            <h4 class="text-white mb-4">Account</h4>
            <div class="footer-links d-flex flex-column">
              <router-link to="search" class="text-white py-2 mb-1"
                >Search</router-link
              >
              <router-link to="about-us" class="text-white py-2 mb-1"
                >About Us</router-link
              >
              <router-link to="faq" class="text-white py-2 mb-1"
                >FAQ</router-link
              >
              <router-link to="contact" class="text-white py-2 mb-1"
                >Contact</router-link
              >
              <router-link to="size-chart" class="text-white py-2 mb-1"
                >Size Chart</router-link
              >
            </div>
          </div>

          <!-- Quick Links -->
          <div class="col-2">
            <h4 class="text-white mb-4">Quick Links</h4>
            <div class="footer-links d-flex flex-column">
              <router-link to="accessories" class="text-white py-2 mb-1"
                >Accessories</router-link
              >
              <router-link to="laptops" class="text-white py-2 mb-1"
                >Laptops</router-link
              >
              <router-link to="headphones" class="text-white py-2 mb-1"
                >Headphones</router-link
              >
              <router-link to="tablets" class="text-white py-2 mb-1"
                >Tablets</router-link
              >
              <router-link to="smart-watches" class="text-white py-2 mb-1"
                >Smart Watches</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Footer Bottom -->
    <footer class="py-4">
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <p class="text-center mb-0 text-white">
              &copy; {{ new Date().getFullYear() }} Powered by Tech Mart
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import {
  CircleClose,
  ChatRound,
  Share,
  Location,
} from "@element-plus/icons-vue";
import newsletter from "../images/newsletter.png";
</script>

<style scoped>
/* Add your styles here */
</style>
