## 创建工程

使用 Vue CLI 创建 vue3 工程。

```bash
# 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version
# 安装或者升级你的@vue/cli
npm install -g @vue/cli
# 创建
vue create vue_test
# 启动
cd vue_test
npm run serve
```

> 注意：
>
> Vue CLI 创建Vue3 项目时，需要确保 CLI 的版本在`4.5.0`以上。

## 环境变量

Vue CLI 启动的项目，可以根据不同的模式配置不同的环境变量；有三个默认模式：

- `development`
- `production`
- `test`

```bash
vue-cli-service build --mode development # 通过--mode 指定模式
```

**配置新模式**

```bash
.env                # 默认环境变量，在所有环境中都存在
.env.local          # 同上，但是会被 git 忽略，也就是不会影响别人的环境变量
.env.[mode]         # 指定或者创建一个新的模式
.env.[mode].local   # 同上，会被 git 忽略
```

**配置环境变量**

配置`sit`模式

```bash
# .env.sit
# VUE_APP_ 开头定义需要在项目中使用的环境变量
VUE_APP_TITLE=foo

```

```bash
# 以 sit 模式启动
vue-cli-service build --mode sit # 通过--mode 指定sit模式
```

```js
// 项目中使用
console.log(process.env.VUE_APP_TITLE) // 'foo'
```



Vue Cli中有两个特殊变量：

- `NODE_ENV` - 当前模式的名称，用来判断处在什么模式下
- `BASE_URL` - vue.config.js 中的 `publicPath`的值，获取项目的基础路径

> 注意：
>
> 	-	以上两个特殊变量，可以修改，也可以在项目中通过`process.env`访问到
> 	-	只有`VUE_APP_*`开头的变量，才能在项目中访问到，所以新的环境变量需要在项目中使用要以`VUE_APP_*`开头

## 配置 `Vue-Router`

**使用 Vue CLI 安装：**

```bash
vue add router
```

Vue Cli 安装会根据模版在应用实例中自动引入，并创建一个简单的DEMO

**手动引入：**

```bash
# 当前最新版本为 v4.x 版本
npm i vue-router@4
```

**配置路由：**

```js
// router.js
import {createRouter,createWebHistory} from 'vue-router'
const routes = [
  {
    path:'page-a',
    name:'pageA',
    component:CompA
  },
  ....
]
// createRouter 方法接收路由配置参数，返回一个带install方法的对象，支持使用Vue.use,以安装插件的形式安装router
const route = createRouter({
  histry:createWWebHistroy(process.env.BASE_URL),
  routes
})
```

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

const app = createApp(App)
app.use(router) // 安装路由
app.mount('#app')
```

## 配置 Vuex

**安装**

```bash
npm install vuex@next --save #
```

**配置**

```js
// store.js
import { createStore } from 'vuex'

// createStore 方法返回一个 带 install 方法的实例
const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
export default store
```

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app  = createApp(App)

app.use(router)
app.use(store) // 安装 store 插件
app.mount('#app')
```

## 总结

- Vue CLI 是基于Webpack构建的项目，目前已经处于维护状态；
- 构建Vue 3应用程序时官方推荐`Vite`
- 如果项目很古老，能升级vite，建议尽早升级，不升级也问题不大（开发体验略有区别）
