<template>
    <h1>组合式API</h1>
    <main>
        <p><strong v-my-directive>count: </strong>{{ count }}</p>
        <p><strong>optionsCount: </strong>{{ optionsCount }}</p>
        <button @click="increment">count ++</button>
    </main>
</template>
<script  lang="ts">
import { defineComponent, getCurrentInstance, onMounted, reactive, ref } from 'vue';
export default defineComponent({
    data() {
        return {
            optionsCount: 0,
        }
    },
    methods: {
        increment() { // 同名方法会被覆盖，被setup中的同名方法覆盖
            this.optionsCount++
        }
    },
    computed: {},
    watch: {},
    // 其他选项...

    /**
     * setup 内不能访问 data内定义的数据；
     * 如果真的需要 getCurrentInstance() 可以访问到当前组件实例，相当于 this
     */
    setup() {

        console.log('setup')
        const count = ref(0)

        const increment = () => {
            count.value++
        }

        // 与选项式生命周期的执行顺序按照定义的顺序执行，谁靠前就先执行谁
        onMounted(() => {
            console.log("onMounted")
            console.log(getCurrentInstance())
        })

       

        // ... 同样可以写完生命周期
        return {
            count,
            increment,
        }
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
    }
})

</script>