<script setup lang="ts">
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="bg-main slidev-layout flex flex-col h-full">
    <div class="mt-auto mb-auto flex-grow">
      <slot />
    </div>
    <Footer />
  </div>
</template>
