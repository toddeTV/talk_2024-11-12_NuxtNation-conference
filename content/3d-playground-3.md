---
layout: two-cols
---

# 3D Playground

::left::

<PlaygroundHeadlines :step="3" />

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
  <TresCanvas clear-color="E1F4FF">
    <!-- 3d scene here -->
  </TresCanvas>
</template>
```
````

<div v-click="1">
  Clear-color could be the sky.
</div>

<div v-click="1">
  Here "full screen", but can be any container in your DOM.
</div>

::right::

<BrowserWrapper max-height>
  <div class="h-full h-full bg-[#E1F4FF]" v-click="1"></div>
</BrowserWrapper>
