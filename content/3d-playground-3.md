---
layout: two-cols
---

# 3D Playground

::left::

<PlaygroundHeadlines :step="3" />

````md magic-move {lines: true}
```vue {7-8}
<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
</script>

<template>
  <TresCanvas clear-color="E1F4FF">
    <TresGridHelper />
    <TresAxesHelper />
  </TresCanvas>
</template>
```
````

Thankfully, ThreeJS and TresJS do this for us when setting up a canvas.

::right::

<BrowserWrapper max-height background="#E1F4FF">
  <ZligIframe url="?world" />
</BrowserWrapper>
