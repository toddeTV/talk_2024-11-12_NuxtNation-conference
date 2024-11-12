---
layout: two-cols
---

# 3D Playground

::left::

<PlaygroundHeadlines :step="4" />

````md magic-move {lines: true}
```vue {*}
<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
</script>

<template>
  <TresCanvas clear-color="E1F4FF">
    <TresGridHelper />
  </TresCanvas>
</template>
```

```vue {3-8,13-15}
<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
/*
  no need to import
  - `TresPerspectiveCamera`
  - `TresGridHelper`
*/
</script>

<template>
  <TresCanvas clear-color="E1F4FF">
    <TresPerspectiveCamera :position="[-5, 2, 2]" />
    <OrbitControls />
    <TresGridHelper />
  </TresCanvas>
</template>
```
````

::right::

<BrowserWrapper max-height background="#E1F4FF">
  <CustomVClick :show-on-click="0">
    <iframe width="100%" height="100%" src="//10.0.10.23:3000/game?world"></iframe>
  </CustomVClick>
  <CustomVClick :show-on-click="1">
    <iframe width="100%" height="100%" src="//10.0.10.23:3000/game?camera"></iframe>
  </CustomVClick>
</BrowserWrapper>
