// src/router/index.js or src/router.js
import { createRouter, createWebHistory } from 'vue-router';

// Define your routes
const routes = [
  { path: '/', component: () => import('../pages/HomeView.vue') },
  { path: '/login', component: () => import('../pages/LoginView.vue') },
  { path: '/signup', component: () => import('../pages/RegisterView.vue') },
  { path: '/forgot-password', component: () => import('../pages/ForgotPasswordView.vue') },
  { path: '/wishlist', component: () => import('../pages/WishlistView.vue') },
  { path: '/compare-products', component: () => import('../pages/CompareView.vue') },
  { path: '/contact', component: () => import('../pages/ContactView.vue') },
  { path: '/cart', component: () => import('../pages/CartView.vue') },
  { path: '/checkout', component: () => import('../pages/CheckoutView.vue') },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
