<template>
    <h1><span v-my-directive>{{ title }}</span></h1>
    <main>
        <p> 计数器：{{ count }}</p>
        <button @click="increment">点击计数</button>
        <hr>
        <div>
            <p>组件通信：</p>
            <p>props：{{ props }}</p>
            <p>
                点击给父组件一个值：<button @click="emit('change', `🍎`)">Emit </button>
            </p>
        </div>
        <hr>
        <div>
            <p>依赖注入：</p>
            <p>{{ injectRoot }}</p>
            <p>{{ injectParent }}</p>
        </div>
    </main>
</template>

<!-- script setup 只能有一个 -->
<script setup lang="ts">
import { getCurrentInstance, inject, onMounted, ref } from 'vue'

const count = ref(0)

const props = defineProps(['animal'])

const emit = defineEmits(['change'])

defineExpose({
    count
})

const injectRoot = inject('rootProvide')
const injectParent = inject('parentProvide')

const increment = () => {
    count.value++
}

onMounted(() => {
    console.log("onMounted")
    console.log('props', props)
    console.log('setup中访问组件实例', getCurrentInstance())
})

// 自定义指令：遵循 vNameOfDirective 命名规范
const vMyDirective = (el: any, binding: any) => {
    // `mounted` 和 `updated` 时都调用
    console.log('自定义指令', { el, binding })
    el.style.background = '-webkit-linear-gradient(315deg,#42d392 25%,#647eff)'
    el.style['-webkit-text-fill-color'] = 'transparent'
    el.style['-webkit-background-clip'] = 'text'

}

</script>
<script lang="ts">
/**
 * script 只会在组件注册时被执行，不会随着组件销毁和使用被执行
 */
console.log('普通script只会执行一次')

export default {
    //   inheritAttrs: false,
    //   customOptions: {}
    data() {
        return {
            title: 'Base'
        }
    },
    created() {
        console.log('create')
    },
}
</script>
