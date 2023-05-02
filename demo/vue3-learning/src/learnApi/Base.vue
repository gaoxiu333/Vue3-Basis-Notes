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
            <p>组件上的v-modal：<input :value="props.val" @input="handleChange($event)" /></p>

        </div>
        <hr>
        <div>
            <p>依赖注入：</p>
            <p>{{ injectRoot }}</p>
            <p>{{ injectParent }}</p>
        </div>
        <div>

        </div>
    </main>
</template>

<!-- script setup 只能有一个 -->
<script setup lang="ts">
import { getCurrentInstance, inject, onMounted, ref } from 'vue'

const count = ref(0)

const props = defineProps(['animal', 'val'])

const emit = defineEmits(['change', 'update:val'])

defineExpose({
    count
})

const injectRoot = inject('rootProvide')
const injectParent = inject('parentProvide')

const increment = () => {
    count.value++
}

const handleChange = (event: any) => {
    emit('update:val', event.target.value)
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
    /** 组件名字 */
    // name:'Base',

    /** 模板编译器设置（更改模板的编译方式） */
    // compilerOptions

    /** 模板依赖项（模板中使用的资源） */
    // components
    // directives

    /** 组合（组合选项中的属性） */
    // extends
    // mixins
    // provide/inject

    /** 接口（组件接口） */
    // inheritAttrs
    // props
    // emits
    // expose

    /** Composition API 时的入口点 */
    // setup

    /** 本地状态 */
    // data
    // computed
    
    /** 事件和生命周期钩子 */
    // watch
    // beforeCreate
    // created
    // beforeMount
    // 其它钩子

    /** 方法 */
    // methods

    /** 渲染 */
    // template/render


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
