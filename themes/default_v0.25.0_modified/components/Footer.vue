<script setup lang="ts">
import { configs, useNav, useSlideContext } from '@slidev/client'
import { computed } from 'vue'

// const { $slidev } = useSlideContext()
const { currentPage, total } = useNav()

const pageProcess = computed(() => {
  return Math.round(((currentPage.value * 100) / total.value) * 100) / 100
})
</script>

<template>
  <footer class="flex flex-col justify-between w-full mt-auto text-blue-500 dark:text-white">
    <!-- infos: left website hyperlink and right the page number -->
    <div class="flex justify-between w-full text-blue-500 dark:text-white">
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

    <!-- progress bar -->
    <div v-if="configs.themeConfig.showPageProcessBar" class="absolute bottom-0 left-0 w-full">
      <div class="w-full h-2">
        <div class="processColor h-2" :style="`width: ${pageProcess}%`" />
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped>
.processColor {
  background-color: var(--slidev-theme-primary);
}
</style>
