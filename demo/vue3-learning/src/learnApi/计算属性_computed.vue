<template>
    <h1>计算属性 computed</h1>
    <main>
        <p><strong>ref: </strong>{{ count }}</p>
        <p><strong>computed: </strong>{{ formatCount }}</p>
        <p><strong>computed set: </strong>{{ formatCountSet }}</p>

        <button @click="increment">count ++</button>
        <button @click="setComputed">计算属性重新赋值</button>

    </main>
</template>
<script lang="ts">
export default {
    inheritAttrs: false,
}
</script>
<script setup lang="ts">
import { computed, isReadonly, ref } from 'vue';

const count = ref(0)

// 只读计算属性
const formatCount = computed(() => {
    return `¥ ${count.value}`
})

// 可读可写计算属性
const formatCountSet = computed(
    {
        get() {
            return `¥ ${count.value}`
        },
        set(newVal) {
            console.log('computed set:', newVal)
        }
    },
    {   // 计算属性追踪
        onTrack(e) {
            console.log('计算属性被使用:', e)
        },
        onTrigger(e) {
            console.log('计算属性被修改:', e)
        }

    }
)

const increment = () => {
    count.value++
}
const setComputed = () => {
    formatCountSet.value = '计算属性重新赋值了'
}

/**
 * 判断是否为只读计算属性
 */
console.log('is computed:', isReadonly(formatCount))

</script>