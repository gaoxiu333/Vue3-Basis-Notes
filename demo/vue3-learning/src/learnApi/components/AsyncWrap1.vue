<template>
    <div>
        AsyncWrap1
        <slot />
    </div>
</template>
<script lang="ts">

</script>
<script setup lang="ts">

await new Promise(resolve => {
    setTimeout(() => {
        resolve('')
    }, 2000)
})
</script>