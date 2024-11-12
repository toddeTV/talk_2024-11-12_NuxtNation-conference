<!--
  Usage:
```md
---
layout: two-cols
---

# This is the headline

::left::

## Left

This shows on the left

::right::

## Right

This shows on the right
```
-->

<script setup lang="ts">
import Default from './default.vue'

const props = defineProps<{
  innerClass: string
}>()
</script>

<template>
  <Default class="two-columns">
    <h1 class="text-left">
      <slot />
    </h1>
    <div class="grid grid-cols-2">
      <div class="col-left" :class="props.innerClass">
        <slot name="left" />
      </div>
      <div class="col-right" :class="props.innerClass">
        <slot name="right" />
      </div>
    </div>
  </Default>
</template>
