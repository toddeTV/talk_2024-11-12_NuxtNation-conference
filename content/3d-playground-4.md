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
  <iframe width="100%" height="100%" src="//10.0.10.23:3000/game?world&camera"></iframe>
</BrowserWrapper>
