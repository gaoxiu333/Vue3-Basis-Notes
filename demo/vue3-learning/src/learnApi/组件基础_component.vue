<template>
    <div>
        <div>
            <CatComponent>
                <span>🍎</span>
                <!-- 具名插槽及作用域 -->
                <template #play="{ want }">
                    <span>{{ want }}</span>
                </template>
            </CatComponent>
        </div>
        <div>
            <Child1 />
        </div>
        <div>
            <Child2 />
        </div>
        <div>
            <TestVue />
        </div>
        <div>
            <!-- 无渲染组件只传递数据，没有渲染的元素，vue 推荐使用 组合式函数实现 -->
            无渲染组件：
            <MouseTracker v-slot="{ x, y }">
                鼠标坐标：{{ x }},{{ y }}
            </MouseTracker>
        </div>
    </div>
</template>
<script lang="ts">

</script>
<script lang="ts">
import { h } from "vue";
import Child2 from './components/Child2.vue'
export default {
    name: 'baseComponents',
    // inheritAttrs
    components:{ // 组件注册
        Child2,
        'TestVue':{
            setup(){},
            // template:`<p>我来自本地注册的组件</p>`
            render(){
                return h('p','我是来自本地注册的组件')
            }
        }
    }
}
</script>
<script setup lang="ts">
import Child1 from './components/Child1.vue' // 组件注册
import MouseTracker from './components/MouseTracker.vue';
</script>