<template>
    <button @click="switchSuspense">切换 Suspense 跟组件</button>
    <Suspense :timeout="100" @resolve="handleResolve" @pending="handlePending" @fallback="handleFallback">
        <template #default>
            <component :is="currentCom"></component>
        </template>
        <template #fallback>
            Loading...
        </template>
    </Suspense>
    <Teleport to="body">
        <div class="find">
            <p>我是谁？我在哪儿？</p>
        </div>
    </Teleport>
</template>
<script lang="ts">
export default {
    inheritAttrs: false,
}
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import AsyncWrap1 from './components/AsyncWrap1.vue';
import AsyncWrap2 from './components/AsyncWrap2.vue';

const currentKey = ref(0)
const currentCom = computed(() => {
    return currentKey.value % 2 === 0 ? AsyncWrap1 : AsyncWrap2
})
const switchSuspense = () => {
    currentKey.value++
}

const handleResolve = (e: any) => {
    console.log("suspense resolve", e)
}
const handleFallback = (e: any) => {
    console.log("suspense fallback", e)
}
const handlePending = (e: any) => {
    console.log("suspense pending", e)
}
</script>
<style>
.find {
    background: brown;
}
</style>