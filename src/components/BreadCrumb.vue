<template>
     <div class="breadcrumb mb-0 py-4">
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <p class="text-center mb-0">
              <router-link to="/" class="text-dark">
                Home
              </router-link>
              / <span class="fw-bold">{{title}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
  title: {
    required: true,
  },
});
</script>