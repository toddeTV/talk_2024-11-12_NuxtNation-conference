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
  <ZligIframe url="?world" />
</BrowserWrapper>
