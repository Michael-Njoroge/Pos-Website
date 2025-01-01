<script setup>
import { useHead } from '@vueuse/head';

defineProps({
  title: {
    type: String,
    required: true,
  },
});

useHead({
  title: title,
  meta: [
    { charset: 'utf-8' },
    // Add other meta tags if needed
  ],
});
</script>
