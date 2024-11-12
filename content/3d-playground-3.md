---
layout: two-cols
---

# 3D Playground

::left::

<PlaygroundHeadlines :step="3" />

````md magic-move {lines: true}
```vue {*}
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

Thankfully, ThreeJS and TresJS do this for us when setting up a canvas.

::right::

<BrowserWrapper max-height background="#E1F4FF">
  <iframe width="100%" height="100%" src="//10.0.10.23:3000/game?world"></iframe>
</BrowserWrapper>
