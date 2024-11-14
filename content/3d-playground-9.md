---
layout: two-cols
---

# 3D Playground

::left::

<PlaygroundHeadlines :step="9" />

````md magic-move {lines: true}
```vue {2-4,10-12}
<script setup lang="ts">
import modelLoader from '@/assets/models/Windmill.gltf'
const { scenes: { Windmill } } = await modelLoader
// [...]
</script>

<template>
  <TresCanvas clear-color="E1F4FF">
    <!-- [...] -->
    <primitive
      :object="Windmill"
    />
    <!-- [...] -->
  </TresCanvas>
</template>
```
````

::right::

<BrowserWrapper max-height background="#E1F4FF">
  <iframe width="100%" height="100%" src="//localhost:3000/game?world&models"></iframe>
</BrowserWrapper>
