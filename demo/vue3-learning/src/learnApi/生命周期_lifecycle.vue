<template>
    <h1>生命周期</h1>
    <main>
        控制台查看生命周期执行顺序
    </main>
</template>
<script  lang="ts">
import { onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onMounted, onUnmounted, onUpdated } from 'vue'

export default {
    inheritAttrs:false,
    data() {
        return {
            count: 0,
        }
    },
    /**
     * 注意：
     *  同名生命周期不会被覆盖
     *  同名生命周期的执行顺序按照定义时的顺序执行
     *  setup 定义在前面，那么setup的中和选项式中同名的生命周期，setup的执行，因为setup定义的靠前
     */
    setup() {
        onBeforeMount(() => {
            console.log('onBeforeMount')
        })
        onMounted(() => {
            console.log('onMounted')
        })
        onBeforeUpdate(() => {
            console.log('onBeforeUpdate')
        })
        onUpdated(() => {
            console.log('onUpdated')
        })
        onBeforeUnmount(() => {
            console.log('onBeforeUnmount')
        })
        onUnmounted(() => {
            console.log('onUnmounted')
        })
        onActivated(() => {
            console.log('onActivated')
        })
        onDeactivated(() => {
            console.log('onDeactivated')
        })
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('create')
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    activated(){
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    },

}

</script>