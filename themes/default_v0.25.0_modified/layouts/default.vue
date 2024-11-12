<script setup lang="ts">
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="bg-main slidev-layout default flex flex-col h-full">
    <slot />
    <Footer />
  </div>
</template>
