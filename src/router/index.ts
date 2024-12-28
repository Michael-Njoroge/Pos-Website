// src/router/index.js or src/router.js
import { createRouter, createWebHistory } from 'vue-router';

// Define your routes
const routes = [
  { path: '/', component: () => import('../pages/HomeView.vue') },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
