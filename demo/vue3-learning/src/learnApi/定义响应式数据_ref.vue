<template>
    <h1>定义响应式数据</h1>
    <main>
        <p><strong>ref: </strong>{{ count }}</p>
        <p><strong>reactive: </strong>{{ state.count }}</p>
        <p><strong>countToRef: </strong>{{ countToRef }}</p>
        <p><strong>countToRefs: </strong>{{ countToRefs }}</p>
        <p><strong>customRef: </strong><input v-model="customerfValue" /></p>
        <p><strong>customerfValue: </strong>{{ customerfValue }}</p>

        <button @click="increment">count ++</button>

    </main>
</template>
<script lang="ts">
export default {
    inheritAttrs: false,
}
</script>
<script setup lang="ts">
import { customRef, getCurrentScope, isProxy, isReactive, isReadonly, isRef, onMounted, reactive, ref, toRaw, toRef, toRefs, unref } from 'vue';
// 定义响应式数据

// ref 
const count = ref(0)
const stateRef = ref({ count: 0 })

// ref 解包工具
const countUnref = unref(count)
console.log(countUnref) // 不需要.value了

// reactive
const state = reactive({ count: 0 })

// toRef、toRefs => 使响应式数据的属性赋值给一个变量，还能保持响应式
const countToRef = toRef(state, 'count')
const { count: countToRefs } = toRefs(state)

// 自定义响应式 customRef
const customerfValue = customRef((track, trigger) => {
    let init = 'hello'
    let timeout: any
    let delay = 200
    return {
        get() {
            track() // customerfValue 被使用的时候收集依赖
            return init
        },
        set(newVal) {
            timeout && clearTimeout(timeout)
            timeout = setTimeout(() => {
                init = newVal
                trigger() // customerfValue 被修改执行，这里实现了防抖，是在200后执行，如果200内重新赋值，计时器被情况，直到没有customerfValue不再改变，200ms后触发响应式改变数据
            }, delay)
        }
    }
})


const increment = () => {
    count.value++
    state.count++
    console.log('ref: Object.defineProperty', count)
    console.log('reactive: Proxy', { state, stateRef: stateRef.value })
}

onMounted(() => {
    console.log("响应式数据 onMounted")
})

/**
 * 判断响应式数据 
 */
console.log('isRef', isRef(stateRef))
console.log('isProxy', isProxy(state))
console.log('isReactive', isReactive(stateRef)) // 判断不了只读的proxy
console.log('isReadonly', isReadonly(stateRef)) // 只能判断只读的proxy

/**
 * 响应式 工具函数
 */
console.log('返回响应式数据的原始数据', toRaw(state))
console.log('当前组件', getCurrentScope())
</script>