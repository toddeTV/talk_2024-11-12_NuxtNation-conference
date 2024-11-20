---
layout: two-cols
---

# 3D Playground

::left::

<PlaygroundHeadlines :step="5" />

````md magic-move {lines: true}
```vue {12-15}
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
    <TresAmbientLight :intensity="0.5" />
    <TresDirectionalLight :intensity="1.2"
      :position="[-0.5, 3, 5]"
    />
  </TresCanvas>
</template>
```
````

::right::

<BrowserWrapper max-height background="#E1F4FF">
  <ZligIframe url="?world&camera&lights" />
</BrowserWrapper>
