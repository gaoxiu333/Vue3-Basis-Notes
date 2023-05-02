<template>
    <hr>
    <p>我来自全局注册的组件，我是：🐈</p>
    <p>
        我得到了一个
        <slot></slot>，
        但是我想要
        <slot name="play" :want="want"></slot>
    </p>
    <hr>
</template>
<script setup lang="ts">
const want = ' 🐟'
</script>