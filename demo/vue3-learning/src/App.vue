<template>
  <header>
    <nav>
      <a v-for="(item, key) in lists" @click="selectNav(key)">{{ item.name }}</a>
    </nav>
    <!-- <hr /> -->
  </header>
  <main>
    <p class="desc">子组件区域</p>
    <!-- 缓存 动态组件 -->
    <KeepAlive :include="['可以是正则匹配，可以是字符串，可以是数组']" :exclude="'和include参数类型一样'" :max="1">
      <component :is="currentComponent" v-model:val="modelVal" @change="onChildChange" :animal="currentVal.animal"
        ref="childRef"></component>
    </KeepAlive>
  </main>
  <hr />

  <main>
    <p class="desc">父组件操作面板</p>
    <p>
      查看子组件实例： <button @click="logChild">click</button>
    </p>
    <p>从子组件得到一个： {{ childVal }}</p>
    <p>v-model：{{ modelVal }}</p>
    <input :value="modelVal" @input="handleInput($event)">
  </main>
  <footer>
  </footer>
</template>

<script setup lang="ts">
import { computed, inject, provide, reactive, ref, toRaw, unref } from 'vue';
import Base from './learnApi/Base.vue';
import 定义响应式数据_refVue from './learnApi/定义响应式数据_ref.vue'
import 计算属性 from './learnApi/计算属性_computed.vue'
import WatchVue from './learnApi/监听_watch.vue'
import LifecycleHooks from './learnApi/生命周期_lifecycle.vue';
import OptionsAPI from './learnApi/选项式_optionsAPI.vue';
import CompositionAPI from './learnApi/组合式_compositionAPI.vue';
import baseComponents from './learnApi/组件基础_component.vue'
import 内置组件Vue from './learnApi/内置组件.vue';

const lists: any = [
  {
    name: '基本使用',
    component: Base
  },
  {
    name: '定义响应式',
    component: 定义响应式数据_refVue
  },
  {
    name: '计算属性',
    component: 计算属性
  },
  {
    name: '监听',
    component: WatchVue
  },
  {
    name: '生命周期钩子',
    component: LifecycleHooks
  },
  {
    name: '组合式API',
    component: CompositionAPI
  },
  {
    name: '选项式API',
    component: OptionsAPI
  },
  {
    name: '组件基础',
    component: baseComponents
  },
  {
    name: '内置组件',
    component: 内置组件Vue
  }
]

const currentKey: any = ref(0)
const childRef = ref(null) // 组件 ref
const childVal = ref(null) // 测试 emit 
const currentVal = reactive({ // 测试 props
  animal: '🐈'
})
const modelVal = ref('') // 测试 v-model
// 注入
provide('parentProvide', '来自父组件的：😿')
const selectNav = (key: any) => {
  currentKey.value = key
}

const currentComponent = computed(() => {
  return lists[currentKey.value].component
})

const logChild = () => {
  console.log('子组件实例:', childRef.value)
}
const onChildChange = (event: any) => {
  childVal.value = event
}
const handleInput = (event: any) => {
  modelVal.value = event.target.value
}
</script>
<style>
body {
  margin: 0;
  background: #82AAE3;
}
</style>
<style scoped >
header {
  padding: 1rem;
}

nav {
  padding: 0;
  margin: 0;
  text-align: center;
}

nav>a {
  padding: 1rem 2rem;
  cursor: pointer;
}

main {
  margin: 1em;
  border-radius: 8px;
  padding: 1rem;
  background: #EEF1FF;
}

footer {
  margin-top: 10rem;
}

.desc {
  margin-top: -1rem;
  margin-bottom: 0rem;
  text-align: right;
  color: #226089;
}
</style>
