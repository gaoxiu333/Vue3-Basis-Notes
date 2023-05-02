import { createApp } from 'vue'
import App from './App.vue'

import CatComponent from './components/CatComponent.vue'

// import './assets/main.css'

const app = createApp(App)
app.provide('rootProvide', '来自根组件注入的：🙀')
app.config.globalProperties.animal = '来自全局变量的：😼'

app.component('CatComponent', CatComponent)
app.mount('#app')