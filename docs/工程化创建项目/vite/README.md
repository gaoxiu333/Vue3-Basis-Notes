# Vite 创建项目

Vue3 推荐使用Vite创建项目

## 创建vue3 项目

使用Vite创建项目有很多中模版

**Vue3 官网推荐的模版**

```bash
 npm init vue@latest
```

> 根据命令提示，选择是否需要`typescript`、`JSC`、`Vue Router`、`Pinia`、`ESLint`、`Prettier`等开箱即用的支持。

**使用Vite的预设模版**

```bash
npm create vite@latest
```

预设模版仅提供了`TypeScript`的支持，更多开箱即用的模版可以查看Vite维护的[社区模版](https://github.com/vitejs/awesome-vite#templates)。

社区模版中比较推荐的：

- [vue-vben-admin](https://github.com/anncwb/vue-vben-admin) - 基于 Vue3、Ant-Design-Vue、TypeScript 的后台管理模板。
- [vue-pure-admin](https://github.com/xiaoxian521/vue-pure-admin) -基于 Vue3、TypeScript、Tailwind CSS、element-plus 的后台管理模板。

```bash
# 语法 用户名/仓库名#分支名
npx degit user/project#main my-project

# 安装 vu e-vben-admin 模版
 npx degit vbenjs/vue-vben-admin vue-admin
```