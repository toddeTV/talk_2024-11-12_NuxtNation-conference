---
layout: cover
leftOrientation: center
---

<h1 class="!text-5xl">Playing with Nuxt in 3D</h1>

<div class="flex flex-col">
    <div>
        with Thorsten Seyschab
    </div>
    <div class="relative">
        <div
            class="absolute top-0 left-90 px-5 py-2 whitespace-nowrap flex flex-col gap-2"
            v-click="1"
            v-mark="{ at: 1, color: '#26ab7a', type: 'box' }"
        >
            <div class="flex">
                <mdi-github class="baseColor mr-2" />
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/toddeTV">toddeTV</a>
            </div>
            <div class="flex">
                <mdi-linkedin class="baseColor mr-2" />
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/toddetv/">toddeTV</a>
            </div>
            <div class="flex">
                <line-md-twitter-x class="baseColor mr-2" />
                <a rel="noopener noreferrer" target="_blank" href="https://x.com/toddeTV">toddeTV</a>
            </div>
            <div class="flex">
                <!-- TODO wrong discord URI? -->
                <mdi-discord class="baseColor mr-2" />
                <a rel="noopener noreferrer" target="_blank" href="https://discordapp.com/users/toddeTV">toddeTV</a>
            </div>
            <div class="flex">
                <mdi-email class="baseColor mr-2" />
                <a rel="noopener noreferrer" target="_blank" href="mailto:business@todde.tv">business@todde.tv</a>
            </div>
            <div class="flex">
                <mdi-web class="baseColor mr-2" />
                <a rel="noopener noreferrer" target="_blank" href="https://todde.tv/">https://todde.tv/</a>
            </div>
        </div>
        <div
            class="absolute top-30 left-0 px-5 py-2 whitespace-nowrap"
            v-click="2"
            v-mark="{ at: 2, color: '#26ab7a', type: 'box' }"
        >
            Computer Scientist and Web Engineer
        </div>
        <div
            class="absolute -top-50 left-50 px-5 py-2 whitespace-nowrap"
            v-click="3"
            v-mark="{ at: 3, color: '#26ab7a', type: 'box' }"
        >
            <mdi-school-outline class="baseColor mr-2" /> Master of Science in Computer Science
        </div>
        <div
            class="absolute -top-70 left-0 px-5 py-2 whitespace-nowrap"
            v-click="4"
            v-mark="{ at: 4, color: '#26ab7a', type: 'box' }"
        >
            <mdi-worker-outline class="baseColor mr-2"/> Fullstack developer, Self-Employed
        </div>
        <div
            class="absolute top-10 left-30 px-5 py-2 flex whitespace-nowrap"
            v-click="5"
            v-mark="{ at: 5, color: '#26ab7a', type: 'box' }"
        >
            based in Germany
            <!-- <div class="i-flag:de-4x3 w-1em h-1em mt-1 baseColor mx-2"></div> -->
        </div>
    </div>
</div>
