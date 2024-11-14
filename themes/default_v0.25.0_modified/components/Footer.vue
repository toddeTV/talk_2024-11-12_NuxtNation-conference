<script setup lang="ts">
import { configs, useNav } from '@slidev/client'
import { computed } from 'vue'

// const { $slidev } = useSlideContext()
const { currentPage, total } = useNav()

const totalToUse = computed<number>(() => {
  if (configs.manipulateTotalSlideCountOnFooter) {
    return total.value + configs.manipulateTotalSlideCountOnFooter as number
  }
  return total.value
})

const pageProcess = computed(() => {
  const process = Math.round(((currentPage.value * 100) / totalToUse.value) * 100) / 100
  if (process < 0)
    return 0
  if (process > 100)
    return 100
  return process
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
        <span v-if="configs.themeConfig.showTotalPageCount"> / {{ totalToUse }}</span>
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
