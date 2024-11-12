<script setup lang="ts">
import { configs, useNav } from '@slidev/client'
import { computed } from 'vue'

// const { $slidev } = useSlideContext()
const { currentPage, total } = useNav()

const pageProcess = computed(() => {
  return Math.round(((currentPage.value * 100) / total.value) * 100) / 100
})
</script>

<template>
  <!-- infos: left website hyperlink and right the page number -->
  <footer class="absolute bottom-0 left-0 w-full px-14 pb-8 -z-1">
    <div class="w-full flex justify-between">
      <a
        v-if="configs.author.website"
        class="mb-0 baseColor !border-b-0"
        :href="`https://${configs.author.website}`"
        target="_blank"
      >
        <mdi-web class="baseColor mr-1" />
        {{ configs.author.website }}
      </a>
      <div class="baseColor">
        <span>{{ currentPage }}</span>
        <span v-if="configs.themeConfig.showTotalPageCount"> / {{ total }}</span>
      </div>
    </div>
  </footer>

  <!-- progress bar -->
  <div v-if="configs.themeConfig.showPageProcessBar" class="absolute bottom-0 left-0 w-full">
    <div class="w-full h-2">
      <div class="processColor h-2" :style="`width: ${pageProcess}%`" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.processColor {
  background-color: var(--slidev-theme-primary);
}
</style>
