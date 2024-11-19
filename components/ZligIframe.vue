<script setup lang="ts">
import { computed } from 'vue'

const zligDemoBaseUrl = computed<string | undefined>(() => {
  const zligDemoBaseUrl = import.meta.env.VITE_ZLIG_DEMO_BASE_URL
  if (!zligDemoBaseUrl) {
    return undefined
  }
  return zligDemoBaseUrl
})
</script>

<template>
  <pre>{{ zligDemoBaseUrl }}</pre>
</template>

<style scoped>
</style>
