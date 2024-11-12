---
layout: two-cols
---

# 3D Playground

::left::

<PlaygroundHeadlines :step="7" />

````md magic-move {lines: true}
```vue {8,14}
<script setup lang="ts">
// [...]
</script>

<template>
  <TresCanvas clear-color="E1F4FF">
    <!-- [...] -->
    <TresMesh :position="[0, 1, 0]" cast-shadow>
      <TresBoxGeometry :args="[2, 2, 2]" />
      <TresMeshNormalMaterial />
    </TresMesh>
    <TresMesh
      :position="[0, 0, 0]"
      receive-shadow
    >
      <TresPlaneGeometry :args="[10, 10, 1]" />
      <TresMeshToonMaterial color="#fefefe" />
    </TresMesh>
    <!-- [...] -->
  </TresCanvas>
</template>
```
````

::right::

<BrowserWrapper max-height background="#E1F4FF">
    <iframe width="100%" height="100%" src="//10.0.10.23:3000/game?lights&meshes&shadows"></iframe>
</BrowserWrapper>
