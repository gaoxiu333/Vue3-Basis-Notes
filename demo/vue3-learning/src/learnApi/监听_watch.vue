<template>
    <h1>监听 Watch</h1>
    <main>
        <div><strong>source:</strong>{{ state.count }}</div>
        <div><strong>watch:</strong>{{ watchRef }}</div>
        <button @click="handleClick">click</button>
        <button @click="stopWatch">stop watch</button>
        <button @click="stopWatchScop">stop scope watch</button>
    </main>
</template>
<script lang="ts">
export default {
    inheritAttrs: false,
}
</script>
<script setup lang="ts">
import { useScopeDispose } from '@/hooks/useBase';
import { effectScope, getCurrentScope, onScopeDispose, onUnmounted, reactive, ref, toRaw, watch, watchEffect } from 'vue';

const useScope = useScopeDispose()
const state = reactive({ count: 0 })
const fooRef = ref('foo')
const barRef = ref('bar')

const watchRef = ref(0)

// 定义 effect 作用域
const watchScope = effectScope()

// 监听一个值为基本类型的属性
const unwatch = watch(
    () => state.count,
    (currCount, prevCount) => {
        console.log('watch: [state count]:', { currCount, prevCount })
        watchRef.value = currCount
    },
    {
        immediate: false,// 默认：false，
        deep: false,// 默认：false，来源是响应式对象时自动开启深层监听，该配置无效
        flush: 'pre', // 默认：'pre'，有三个值 'pre' | 'post' | 'sync'  分别为：dom渲染前执行，dom渲染后执行，立即执行
        // onTrack  被使用时的回调
        // onTrigger // 被修改时的回调
    }
)
watchScope.run(() => {
    /**
     * 直接监听一个源：默认开启深层监听，并且 deep 配置不再生效
     */
    watch(
        state,
        (curr, prev) => {
            console.log(curr === prev) // 相等
            console.log('watch: [state count]:', { curr: toRaw(curr), prev: toRaw(prev) })
        },
        {
            deep: false
        }
    )

    /**
     * 监听一个回调函数，返回一个对象
     */
    watch(
        state,
        (curr, prev) => {
            console.log(curr === prev) // 相等
            console.log('watch: [state count]:', { curr: toRaw(curr), prev: toRaw(prev) })
        },
        {
            deep: false,
        }
    )

    /**
     * 监听多个来源
     */
    watch([fooRef, barRef], ([currFoo, currBar], [prevFoo, prevBar]) => {
        /* ... */
    })

    /**
     *  不指定来源，追踪响应式依赖，依赖变化时执行
     *  watchPostEffect: flush: 'post' 别名
     *  watchSyncEffect: flush: 'sync' 别名
     */
    watchEffect(() => {
        console.log('watchEffect', state.count)
    },
        {
            flush: 'pre',// 同 watch
            // onTrack  被使用时的回调
            // onTrigger // 被修改时的回调
        }
    )
})


/**
 * 停止监听器
 */
const stopWatch = () => {
    unwatch()
}
/**
 * 停止 作用域内 所有的watch
 */
const stopWatchScop = () => {
    console.log('查看当前活跃的scop', getCurrentScope())
    watchScope.stop()
}
onUnmounted(()=>{
    console.log('watch 组件声明周期：onUnmounted')
})
onScopeDispose(() => {
    console.log('watch 组件 effect 作用域被取消')
})
const handleClick = () => {
    state.count++
}
</script>