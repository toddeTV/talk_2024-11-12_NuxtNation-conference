<script setup lang="ts">
// import { process } from 'node:process'
import { computed } from 'vue'

const props = defineProps<{
  url: string
}>()

// eslint-disable-next-line no-console
console.dir(1)
// eslint-disable-next-line no-console
console.dir(import.meta.env.VITE_ZLIG_DEMO_BASE_URL)
// eslint-disable-next-line no-console
console.dir(2)
// eslint-disable-next-line no-console
console.dir(process.env.VITE_ZLIG_DEMO_BASE_URL)

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
