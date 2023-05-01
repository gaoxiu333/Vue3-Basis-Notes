<template>
    <header class="header">
        <slot name="header"></slot>
    </header>
    <section class="content">
        <slot name="content"></slot>
    </section>
</template>
<style scoped>
.header {
    font-size: 24px;
}

.content {
    border: 1px solid red;
}
</style>