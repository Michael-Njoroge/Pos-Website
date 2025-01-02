<template>
  <header class="header-top-strip py-2">
    <div class="container-xxl" style="max-width: 95%">
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
    <div class="container-xxl" style="max-width: 95%">
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
            <template #input> </template>
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
                    <span class=""
                      ><strike>{{ slot.item.price }}</strike></span
                    >
                    <span class="text-danger">{{ slot.item.price1 }}</span>
                    <span v-if="slot.item.oldPrice" class="old-price">{{
                      slot.item.oldPrice
                    }}</span>
                  </p>
                </div>
              </div>
            </template>
            <template #list-footer>
              <div
                class="d-flex justify-content-center align-items-center my-3"
                style="gap: 8rem"
              >
                <p class="mb-0">Search For: "{{ searchtTerm.input }}"</p>
                <el-icon class="fs-5 fw-500 mb-0" style="cursor: pointer"
                  ><Right
                /></el-icon>
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
              v-if="authState && authState.isAuthenticated"
              to="#"
              class="d-flex align-items-center gap-2 text-white"
              style="font-size: 13px"
              @click.stop.prevent="toggleDropdown('userDropdown')"
            >
              <img :src="userIcon" alt="User" />
              <span>Welcome <br />{{ authState.firstname }}</span>
            </router-link>

            <div v-else>
              <router-link
                to="#"
                class="d-flex align-items-center gap-2 text-white"
                style="font-size: 13px"
                @click.stop.prevent="toggleDropdown('userDropdown')"
              >
                <img :src="userIcon" alt="User" />
                <span>Log In <br />My Account</span>
              </router-link>
            </div>

            <!-- Dropdown Menu -->
            <div
              v-if="
                isDropdownVisible === 'userDropdown' &&
                authState.isAuthenticated
              "
              class="dropdown-menu animate slideIn mt-3"
              @click.stop
            >
              <router-link to="/my-profile" class="dropdown-item"
                >Profile/Account</router-link
              >
              <div class="dropdown-divider"></div>
              <button
                class="dropdown-item border-0 bg-transparent"
                @click="handleLogout"
              >
                Logout
              </button>
            </div>

            <div
              v-if="
                isDropdownVisible === 'userDropdown' &&
                !authState.isAuthenticated
              "
              class="dropdown-menu animate slideIn mt-3"
            >
              <router-link to="/login" class="dropdown-item"
                >Sign In</router-link
              >
              <div class="dropdown-divider"></div>
              <router-link to="/signup" class="dropdown-item"
                >Sign Up</router-link
              >
            </div>
          </div>
          <!-- Cart -->
          <div
            class="d-flex align-items-center gap-2 text-white"
            style="cursor: pointer"
            @click="openDrawer"
          >
            <img :src="cartIcon" alt="Cart" />
            <div>
              <span class="badge bg-white text-dark">{{ total }}</span>
              <p class="mb-0" style="font-size: 13px">
                {{ calculatedCart }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Header Bottom -->
  <header class="header-bottom py-2">
    <div class="container-xxl" style="max-width: 95%">
      <div class="row">
        <div class="col-12">
          <div class="menu-bottom d-flex align-items-center">
            <div class="dropdown" style="position: relative">
              <button
                class="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-30 align-items-center"
                @click.stop="toggleDropdown('categoriesDropdown')"
              >
                <img :src="menuIcon" alt="Menu" />
                <span class="me-5 d-inline-block">Shop Categories</span>
              </button>
              <ul
                class="dropdown-menu mt-2"
                style="position: absolute; top: 100%; left: 0; z-index: 1000"
                v-if="isDropdownVisible === 'categoriesDropdown'"
              >
                <li
                  v-for="(category, index) in categoriesMenus"
                  :key="category.id"
                  class=""
                  @mouseenter="activeCategory = index"
                  @mouseleave="activeCategory = null"
                  style="position: relative"
                >
                  <router-link
                    :to="category.link"
                    class="dropdown-item text-white icon-container"
                  >
                    <div class="d-flex justify-content-between">
                      {{ category.name }}
                      <span v-if="[1, 2, 3].includes(index)" class="">
                        <el-icon class="icon-right"><ArrowRightBold /></el-icon>
                        <el-icon class="icon-left" style="display: none"
                          ><ArrowLeftBold
                        /></el-icon>
                      </span>
                    </div>
                  </router-link>

                  <!-- Submenu -->
                  <ul
                    v-if="activeCategory === index && [1, 2, 3].includes(index)"
                    class="submenu"
                    style="
                      position: absolute;
                      top: 0;
                      left: 100%;
                      z-index: 1000;
                      padding: 0;
                      list-style: none;
                    "
                  >
                    <el-card
                      style="
                        background-color: #fff;
                        border: 1px solid #ddd;
                        padding: 10px;
                        width: 440px;
                      "
                    >
                      <div class="d-flex justify-content-between">
                        <div class="d-flex flex-column gap-3">
                          <div class="">
                            <h5 class="submenu-heading">AirPods</h5>
                            <div class="submenu-list text-muted">
                              <p>Cameras & Videos</p>
                              <p>Cameras</p>
                              <p>Headphones</p>
                              <p>IPads</p>
                            </div>
                          </div>
                          <div class="">
                            <h5 class="submenu-heading">Ipads</h5>
                            <div class="submenu-list text-muted">
                              <p>Accessories</p>
                              <p>Headphones</p>
                              <p>Cameras</p>
                              <p>Mini Speaker</p>
                            </div>
                          </div>
                        </div>
                        <div class="d-flex flex-column gap-3">
                          <div class="">
                            <h5 class="submenu-heading">Headphones</h5>
                            <div class="submenu-list text-muted">
                              <p>Mini Speaker</p>
                              <p>Mobile & Tablets</p>
                              <p>Portable Speakers</p>
                              <p>Music & Gaming</p>
                            </div>
                          </div>
                          <div class="">
                            <h5 class="submenu-heading">Laptops</h5>
                            <div class="submenu-list text-muted">
                              <p>Smart Watches</p>
                              <p>Smart Television</p>
                              <p>Smart Phones</p>
                              <p>Computers & Laptops</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </el-card>
                  </ul>
                </li>
              </ul>
            </div>
            <nav class="menu-links" style="margin-left: 6rem">
              <div className="d-flex align-items-center gap-30">
                <router-link to="/">Home</router-link>
                <router-link to="/product">Our Store</router-link>
                <router-link to="/blogs">Blogs</router-link>
                <router-link to="/contact">Contact</router-link>
                <router-link v-if="authState.isAuthenticated" to="/my-orders"
                  >Orders</router-link
                >
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  <CartDrawer v-model="showDrawer" :data="cartProducts" />
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

// Icons
import compareIcon from "../images/compare.svg";
import wishlistIcon from "../images/wishlist.svg";
import userIcon from "../images/user.svg";
import cartIcon from "../images/cart.svg";
import menuIcon from "../images/menu.svg";
import { dummyProducts, categoriesMenus, cartProducts } from "../utils/Data";
import { ArrowLeftBold, ArrowRightBold } from "@element-plus/icons-vue";
import CartDrawer from "./CartDrawer.vue";
// import { Search } from "@element-plus/icons-vue";

const router = useRouter();
const searchtTerm = ref();
const total = computed(() => {
  return cartProducts.reduce((total, item) => total + item.quantity, 0);
});

const activeCategory = ref();

const dummyAuthState = {
  firstname: "Michael",
  isAuthenticated: false,
};

const isDropdownVisible = ref<string | null>(null);
const showDrawer = ref(false);
const openDrawer = () => {
  showDrawer.value = true;
};

// Toggling dropdown visibility
const toggleDropdown = (dropdownName: string) => {
  isDropdownVisible.value =
    isDropdownVisible.value === dropdownName ? null : dropdownName;
};

// State variables
// const paginate = ref(true);
const productOptions = ref([] as any);
// const language = ref("en");
// const currency = ref("USD $");

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
const handleLogout = () => {
  authState.value = null; // Clear auth state
  router.push("/");
};

const calculatedCart = computed(() => {
  return cartProducts.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
});

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
  searchtTerm.value = inputValue;
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

const handleClickOutside = (event: Event) => {
  const dropdownElements = document.querySelectorAll(".dropdown-menu");
  const isClickInside = Array.from(dropdownElements).some((dropdown) =>
    dropdown.contains(event.target as Node)
  );

  if (!isClickInside) {
    isDropdownVisible.value = null;
  }
};

document.addEventListener("click", handleClickOutside);
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
.dropdown-menu {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}

.icon-container:hover .icon-right {
  display: none !important;
}

.icon-container:hover .icon-left {
  display: inline-block !important;
}

.submenu {
  padding: 0;
  width: 100%;
  border-radius: 10px;
  margin-left: 2px;
}

.router-link-active {
  background-color: transparent !important;
}
li {
  list-style: none;
  border-bottom: none;
}
.submenu-heading {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
}
.submenu-list {
  font-size: 14px;
}
.demo-drawer {
  border: 2px solid red;
  z-index: 9999 !important;
  display: block !important;
}
</style>
