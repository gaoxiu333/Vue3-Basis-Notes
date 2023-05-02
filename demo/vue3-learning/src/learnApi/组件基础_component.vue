<template>
    <div>
        <div>
            <!-- 全局组件 -->
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
            <Child3 />
        </div>
        <div>
            <!-- 无渲染组件只传递数据，没有渲染的元素，vue 推荐使用 组合式函数实现 -->
            无渲染组件：这个组件似乎没什么用
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
    inheritAttrs:false,
    components:{ // 组件注册
        Child2,
        'Child3':{
            setup(){},
            render(){
                return h('p','我是来自本地注册的组件Child3')
            }
        }
    }
}
</script>
<script setup lang="ts">
import Child1 from './components/Child1.vue' // 组件注册
import MouseTracker from './components/MouseTracker.vue';
</script>