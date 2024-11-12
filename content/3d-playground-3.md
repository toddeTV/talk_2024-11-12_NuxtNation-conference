---
layout: two-cols
---

# 3D Playground

::left::

<div class="text-sm baseColor opacity-40">1. Renderer</div>
<div class="text-xl baseColor opacity-60">2. World</div>
<div class="text-3xl baseColor">3. Canvas</div>

````md magic-move {lines: true}
```vue {*}
<script setup lang="ts">
</script>

<template>
</template>
```

```vue {2,6-8}
<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
</script>

<template>
  <TresCanvas clear-color="82DBC5">
    <!-- 3d scene here -->
  </TresCanvas>
</template>
```
````

<div v-click="1">
  Here "full screen", but can be any container in your DOM.
</div>

::right::

<BrowserWrapper max-height>
  <div class="h-full h-full bg-[#82DBC5]" v-click="1"></div>
</BrowserWrapper>
