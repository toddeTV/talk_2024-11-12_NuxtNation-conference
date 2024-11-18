---
layout: two-cols
---

# 3D Playground

::left::

<PlaygroundHeadlines :step="4" />

````md magic-move {lines: true}
```vue {3,10-11}
<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
</script>

<template>
  <TresCanvas clear-color="E1F4FF">
    <TresGridHelper />
    <TresAxesHelper />
    <TresPerspectiveCamera :position="[-5, 2, 2]" />
    <OrbitControls />
  </TresCanvas>
</template>
```
````

::right::

<BrowserWrapper max-height background="#E1F4FF">
  <ZligIframe url="?world&camera" />
</BrowserWrapper>
