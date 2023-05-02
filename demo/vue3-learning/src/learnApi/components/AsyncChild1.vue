<template>
    <h1>我是异步组件2s后才能显示出来</h1>
</template>
<script setup lang="ts">
const f = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('')
        }, 2000)
    })
}
await f()
</script>