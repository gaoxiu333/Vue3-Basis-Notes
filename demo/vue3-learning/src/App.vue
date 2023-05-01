<template>
  <Layout>
    <template #header>
      <h1>test</h1>
    </template>
    <template #content>

    </template>
  </Layout>
</template>
<script setup lang="ts">
import Layout from './components/Layout/index.vue'
import Base from './learnApi/Base.vue';
import CompositionAPI from './learnApi/CompositionAPI.vue';
const lists = [
  {
    name: 'base',
    component: Base
  },
  {
    name: 'base',
    component: CompositionAPI
  }
]
</script>
<style scoped></style>
