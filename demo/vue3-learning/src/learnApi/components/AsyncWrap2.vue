<template>
    <div>
        <Child2 />
        <AsyncChild1 />
    </div>
</template>
<script lang="ts">

</script>
<script lang="ts">
import { h } from "vue";
import { defineAsyncComponent } from 'vue';

export default {
    name: 'baseComponents',
    // inheritAttrs
    components:{ // 组件注册
        Child2:defineAsyncComponent({ // 模拟异步加载组件，1s 后加载 child2 组件
            loader: () => new Promise((resolve,reject)=>{
                setTimeout(() => {
                    resolve(import('./Child2.vue'))
                }, 1000);
            }),
            suspensible:true, // 默认：true，是否需要 suspense 控制
        }),
        'TestVue':{
            setup(){},
            render(){
                return h('p','我是来自本地注册的组件')
            }
        }
    }
}
</script>
<script setup lang="ts">
import AsyncChild1 from './AsyncChild1.vue' // 组件注册
</script>