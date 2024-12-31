<template>
  <div v-for="(item, index) in blogs" :key="index" class="blog-card" style="cursor:pointer;">
    <div class="blog-images">
      <img :src="item.image" alt="blog" class="img-fluid w-100" />
    </div>
    <div class="blog-content">
      <p class="date">{{ item.date }}</p>
      <h5 class="title">{{ item.title }}</h5>
      <p class="description">{{ item.description }}</p>
      <router-link :to="`/product/${item.id}`" class="button">
        READ MORE
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  blogs: {
    type: Array as () => any[],
    required: true,
  },
});
</script>
