<script setup lang="ts">
import { useNav } from '@slidev/client'

const props = defineProps<{
  showOnClick: number
}>()

const { clicks } = useNav()
</script>

<template>
  <slot v-if="clicks === props.showOnClick" />
</template>

<style scoped>
</style>
