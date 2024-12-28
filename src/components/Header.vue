<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

// Icons
import compareIcon from "../images/compare.svg";
import wishlistIcon from "../images/wishlist.svg";
import userIcon from "../images/user.svg";
import cartIcon from "../images/cart.svg";
import menuIcon from "../images/menu.svg";
// import { Search } from "@element-plus/icons-vue";

const router = useRouter();

// Dummy data
const dummyProducts = [
  { id: 1, title: "Laptop" },
  { id: 2, title: "Smartphone" },
  { id: 3, title: "Tablet" },
  { id: 4, title: "Smartwatch" },
  { id: 5, title: "Desktop Computer" },
  { id: 6, title: "Gaming Console" },
  { id: 7, title: "Wireless Headphones" },
  { id: 8, title: "Bluetooth Speaker" },
  { id: 9, title: "External Hard Drive" },
  { id: 10, title: "USB Flash Drive" },
  { id: 11, title: "Digital Camera" },
  { id: 12, title: "E-Reader" },
  { id: 13, title: "Action Camera" },
  { id: 14, title: "Drone" },
  { id: 15, title: "Portable Monitor" },
];

const dummyCart = {
  products: [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Smartphone" },
  ],
  cartTotal: 1200,
};

const dummyAuthState = {
  firstname: "Michael",
  isAuthenticated: true,
};

// State variables
// const paginate = ref(true);
const productOptions = ref([] as any);
// const language = ref("en");
// const currency = ref("USD $");

// Initialize cart and products
const cartState = ref(dummyCart);
const authState = ref(dummyAuthState as any);

onMounted(() => {
  // Populate product options with dummy data
  productOptions.value = dummyProducts.map((product) => ({
    id: product.id,
    name: product.title,
  }));
});

// Logout function
// const handleLogout = () => {
//   authState.value = null; // Clear auth state
//   router.push("/");
// };

// Handle language and currency changes
// const handleLanguageChange = (selectedLanguage: string) => {
//   language.value = selectedLanguage;
//   console.log(`Selected language: ${selectedLanguage}`);
// };

// const handleCurrencyChange = (selectedCurrency: string) => {
//   currency.value = selectedCurrency;
//   console.log(`Selected currency: ${selectedCurrency}`);
// };

const navigateToProduct = (selected: any) => {
  if (selected.length > 0) {
    router.push(`/product/${selected[0].id}`);
  }
};

const onInputEventHandler = (inputValue: string) => {
  console.log("Input value:", inputValue);
};

const onFocusEventHandler = () => {
  console.log("Input field focused");
};

const onBlurEventHandler = () => {
  console.log("Input field blurred");
};

const itemProjectionFunction = (item: any) => item.name;
</script>

<template>
  <header class="header-top-strip py-3">
    <div class="container-xxl">
      <div class="row d-flex justify-content-between">
        <div class="col-6">
          <p class="text-white mb-0">Free Shipping Over $100 & Free Returns</p>
        </div>
        <div class="col-6 d-flex gap-3 justify-content-end">
          <p class="text-end text-white mb-0">
            Hotline:
            <a class="text-white ms-1" href="tel:+254716002152">
              +254 716002152
            </a>
          </p>
          <select class="bg-transparent text-white border-0">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="de">Deutsch</option>
            <option value="fr">Français</option>
            <option value="ru">Русский</option>
            <option value="uk">Українська</option>
          </select>
          <select class="bg-transparent text-white border-0">
            <option value="USD">United States (USD $)</option>
            <option value="SAR">Saudi Arabia (SAR ر.س)</option>
            <option value="RUB">Russia (RUB ₽)</option>
            <option value="EUR">France (EUR €)</option>
          </select>
        </div>
      </div>
    </div>
  </header>
  <!-- Header Upper -->
  <header class="header-upper py-3">
    <div class="container-xxl">
      <div class="row align-items-center">
        <div class="col-2">
          <h2>
            <router-link to="/" class="text-white">Tech Mart</router-link>
          </h2>
        </div>
        <div class="col-5">
          <div class="input-group">
            <vue3-simple-typeahead
              id="typeahead_id"
              placeholder="Search for products here..."
              :items="productOptions"
              :minInputLength="1"
              :itemProjection="itemProjectionFunction"
              @selectItem="navigateToProduct"
              @onInput="onInputEventHandler"
              @onFocus="onFocusEventHandler"
              @onBlur="onBlurEventHandler"
            />
          </div>
        </div>
        <div class="header-upper-links col-5 d-flex justify-content-between">
          <!-- Compare Products -->
          <router-link
            to="/compare-products"
            class="d-flex align-items-center gap-2 text-white"
          >
            <img :src="compareIcon" alt="Compare" />
            <span
              >Compare <br />
              Products</span
            >
          </router-link>
          <!-- Wishlist -->
          <router-link
            to="/wishlist"
            class="d-flex align-items-center gap-2 text-white"
          >
            <img :src="wishlistIcon" alt="Wishlist" />
            <span
              >Favourite <br />
              Wishlist</span
            >
          </router-link>
          <!-- User Account -->
          <div>
            <router-link
              v-if="authState"
              to="#"
              class="d-flex align-items-center gap-2 text-white"
            >
              <img :src="userIcon" alt="User" />
              <span
                >Welcome <br />
                {{ authState.firstname }}</span
              >
            </router-link>
            <div v-else>
              <router-link to="/login" class="text-white">Log In</router-link>
              /
              <router-link to="/signup" class="text-white">Sign Up</router-link>
            </div>
          </div>
          <!-- Cart -->
          <router-link
            to="/cart"
            class="d-flex align-items-center gap-2 text-white"
          >
            <img :src="cartIcon" alt="Cart" />
            <div>
              <span class="badge bg-white text-dark">{{
                cartState?.products?.length || 0
              }}</span>
              <p class="mb-0">${{ cartState?.cartTotal || 0 }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </header>
  <!-- Header Bottom -->
  <header class="header-bottom py-3">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="menu-bottom d-flex align-items-center">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-15 align-items-center"
              >
                <img :src="menuIcon" alt="Menu" />
                <span class="me-5 d-inline-block">Shop Categories</span>
              </button>
              <ul class="dropdown-menu mt-2">
                <li>
                  <router-link to="" className="dropdown-item text-white"
                    >Action</router-link
                  >
                </li>
                <li>
                  <router-link to="" className="dropdown-item text-white"
                    >Another Action</router-link
                  >
                </li>
              </ul>
            </div>
            <nav class="menu-links">
              <div className="d-flex align-items-center gap-15">
                <router-link to="/">Home</router-link>
                <router-link to="/product">Our Store</router-link>
                <router-link to="/blogs">Blogs</router-link>
                <router-link to="/contact">Contact</router-link>
                <router-link v-if="authState" to="/my-orders"
                  >Orders</router-link
                >
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Add your styles here */
</style>
