---
layout: basic
---

<div class="flex flex-col gap-3 mt-6">

  <div
    class="flex flex-row justify-between items-center p-4 mx-20"
    v-mark="{ at: 2, color: '#26ab7a', type: 'box' }"
    v-click="2"
  >
    <div class="!w-35 shrink-0">
      <h1 class="!mb-0">TresJS</h1>
    </div>
    <div class="w-full pr-5">
      <ul>
        <li>VueJS framework using ThreeJS</li>
        <li>Enables declarative and reactive 3D graphics</li>
        <li>Vue components</li>
      </ul>
    </div>
    <div class="!w-30 shrink-0">
      <img src="/assets/logos/TresJS.png" class="" />
    </div>
  </div>

  <div
    class="flex flex-row justify-between items-center p-4 mx-10"
    v-mark="{ at: 1, color: '#26ab7a', type: 'box' }"
    v-click="1"
  >
    <div class="!w-45 shrink-0">
      <h1 class="!mb-0">ThreeJS</h1>
    </div>
    <div class="w-full pr-5">
      <ul>
        <li>High-level framework on WebGL</li>
        <li>Simplifies 3D objects, cameras, lighting</li>
        <li>Offers easier tools for animations, textures & scenes</li>
      </ul>
    </div>
    <div class="!w-40 shrink-0">
      <img src="/assets/logos/ThreeJS.png" class="w-22" />
    </div>
  </div>

  <div
    class="flex flex-row justify-between items-center p-4"
    v-mark="{ at: 0, color: '#26ab7a', type: 'box' }"
    v-click="0"
  >
    <div class="!w-55 shrink-0">
      <h1 class="!mb-0">WebGL</h1>
    </div>
    <div class="w-full pr-5">
      <ul>
        <li>Low-level API in the browser</li>
        <li>Direct GPU interaction</li>
        <li>complex (manual handling shaders, buffers, ...)</li>
      </ul>
    </div>
    <div class="!w-50 shrink-0">
      <img src="/assets/logos/WebGL.png" class="w-30" />
    </div>
  </div>

</div>
