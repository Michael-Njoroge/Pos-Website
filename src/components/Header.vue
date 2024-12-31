<template>
  <header class="header-top-strip py-2">
    <div class="container-xxl" style="max-width: 90%">
      <div class="row d-flex justify-content-between">
        <div class="col-6">
          <p class="bar-title text-white mb-0">
            Free Shipping Over $100 & Free Returns
          </p>
        </div>
        <div class="col-6 d-flex gap-3 justify-content-end">
          <p class="bar-title text-end text-white mb-0">
            Hotline:
            <a class="text-white ms-1" href="tel:+254716002152">
              +254 716002152
            </a>
          </p>
          <select class="bar-title bg-transparent text-white border-0">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="de">Deutsch</option>
            <option value="fr">Français</option>
            <option value="ru">Русский</option>
            <option value="uk">Українська</option>
          </select>
          <select class="bar-title bg-transparent text-white border-0">
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
  <header class="header-upper py-2">
    <div class="container-xxl" style="max-width: 90%">
      <div class="row align-items-center">
        <div class="col-2">
          <h2>
            <router-link to="/" class="text-white">Tech Mart</router-link>
          </h2>
        </div>
        <div class="col-5">
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
          >
          <template #input>
          </template>
            <template #list-item-text="slot">
              <div class="typeahead-item col-8 d-flex">
                <img
                  :src="slot.item.image"
                  alt="Product"
                  class="typeahead-image img-fluid w-25 h-auto"
                />
                <div>
                  <span class="typeahead-title">{{ slot.item.name }}</span>
                  <p class="typeahead-prices">
                    <span class=""><strike>{{ slot.item.price }}</strike></span>
                    <span class="text-danger">{{ slot.item.price1 }}</span>
                    <span v-if="slot.item.oldPrice" class="old-price">{{
                      slot.item.oldPrice
                    }}</span>
                  </p>
                </div>
              </div>
            </template>
            <template #list-footer>
              <div class="d-flex justify-content-center align-items-center my-3" style="gap: 8rem;">
                <p class="mb-0">Search For: "{{ searchtTerm.input }}"</p>
                <el-icon class="fs-5 fw-500 mb-0" style="cursor: pointer;"><Right/></el-icon>
              </div>
            </template>
          </vue3-simple-typeahead>
        </div>
        <div class="header-upper-links col-5 gap-5 d-flex justify-content-end">
          <!-- Compare Products -->
          <router-link
            to="/compare-products"
            class="d-flex align-items-center gap-2 text-white"
            style="font-size: 13px"
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
            style="font-size: 13px"
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
              style="font-size: 13px"
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
              <p class="mb-0" style="font-size: 13px">
                ${{ cartState?.cartTotal || 0 }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </header>
  <!-- Header Bottom -->
  <header class="header-bottom py-2">
    <div class="container-xxl" style="max-width: 90%">
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

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

// Icons
import compareIcon from "../images/compare.svg";
import wishlistIcon from "../images/wishlist.svg";
import userIcon from "../images/user.svg";
import cartIcon from "../images/cart.svg";
import menuIcon from "../images/menu.svg";
import { dummyProducts } from "../utils/Data";
// import { Search } from "@element-plus/icons-vue";

const router = useRouter();
const searchtTerm = ref();

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
    price: product.price,
    price1: product.price1,
    image: product.image,
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
  searchtTerm.value=inputValue;
  console.log("Input value:", inputValue);
};

const onFocusEventHandler = () => {
  console.log("Input field focused");
};

const onBlurEventHandler = () => {
  console.log("Input field blurred");
};

const itemProjectionFunction = (item: any) => {
  return item.name || item?.value?.name || "";
};
</script>

<style scoped>
.search-bar {
  position: relative;
}

.typeahead-item {
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 15px;
}

.typeahead-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
}

.typeahead-title {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

.typeahead-prices {
  display: flex;
  gap: 8px;
  margin-top: 4px;
}

.price {
  font-size: 14px;
  font-weight: bold;
  color: #28a745;
}

.old-price {
  font-size: 12px;
  color: #dc3545;
  text-decoration: line-through;
}

</style>
