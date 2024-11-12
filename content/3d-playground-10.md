---
layout: two-cols
---

# 3D Playground

::left::

<PlaygroundHeadlines :step="10" />

````md magic-move {lines: true}
```vue {6-10}
<script setup lang="ts">
import modelLoader from '@/assets/models/Windmill.gltf'
const { scenes: { Windmill } } = await modelLoader
const { onBeforeRender } = useLoop()
onBeforeRender(({ elapsed }) => {
  // get windTurbine
  windTurbine.rotation.x += elapsed * 0.00015
})
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
    <iframe width="100%" height="100%" src="//10.0.10.23:3000/game?world&models&animations"></iframe>
</BrowserWrapper>
