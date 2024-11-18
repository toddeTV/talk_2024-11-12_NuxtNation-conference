<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  url: string
}>()

const zligDemoBaseUrl = computed<string | undefined>(() => {
  if (import.meta
    && 'env' in import.meta
    && 'VITE_ZLIG_DEMO_BASE_URL' in import.meta.env) {
    return import.meta.env.VITE_ZLIG_DEMO_BASE_URL as string
  }
  return undefined
})
</script>

<template>
  <iframe
    v-if="zligDemoBaseUrl"
    height="100%"
    :src="`${zligDemoBaseUrl}${props.url}`"
    width="100%"
  />
  <div v-else>
    zlig demo base url is not set. Please set it in .env file.
  </div>
</template>

<style scoped>
</style>
