---
layout: two-cols
---

# 3D Playground

::left::

<PlaygroundHeadlines :step="5" />

````md magic-move {lines: true}
```vue {*}
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
      :position="[-3, 3, 5]"
    />
  </TresCanvas>
</template>
```
````

::right::

<BrowserWrapper max-height background="#E1F4FF">
  <CustomVClick :show-on-click="0">
    <iframe width="100%" height="100%" src="//10.0.10.23:3000/game?camera"></iframe>
  </CustomVClick>
  <CustomVClick :show-on-click="1">
    <iframe width="100%" height="100%" src="//10.0.10.23:3000/game?lights"></iframe>
  </CustomVClick>
</BrowserWrapper>
