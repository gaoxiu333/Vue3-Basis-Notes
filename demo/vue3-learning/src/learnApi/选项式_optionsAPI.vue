<template>
    <h1>组合式API</h1>
    <main>
        <p><strong>optionsCount: </strong>{{ optionsCount }}</p>
        <button @click="increment">count ++</button>
    </main>
</template>
<script  lang="ts">
export default {
    inheritAttrs:false,
    data() {
        return {
            optionsCount: 0,
        }
    },
    methods: {
        increment() {
            this.optionsCount++
        }
    },
    computed: {},
    watch: {},
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

}

</script>