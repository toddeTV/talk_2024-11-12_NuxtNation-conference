---
layout: two-cols
---

# 3D Playground

::left::

<PlaygroundHeadlines :step="8" />

````md magic-move {lines: true}
```vue {99}
<script setup lang="ts">
// [...]
</script>

<template>
  <TresCanvas clear-color="E1F4FF">
    <!-- [...] -->
  </TresCanvas>
</template>
```
````

::right::

<BrowserWrapper max-height background="#E1F4FF">
    <iframe width="100%" height="100%" src="//localhost:3000/game?world"></iframe>
</BrowserWrapper>
