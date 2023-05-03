const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack: (config) => {
  //   /** 直接修改 webpack 配置 */
  //   return { ...config }
  // },
  // chainWebpack:config=>{
  //     // 通过 webpack-chain 修改配置
  // },
  // publicPath: 默认：'/'  src文件中所有引入路径的基础路径
  // outputDir: 默认：dist 出口文件，打包到哪个文件夹下
  // assetsDir: 默认： ''  静态资源存放目录，相对于 outputDir
  //... 
  devServer:{ // 合并到 webpack devscrver 选项
    port: 9000,
    // proxy:'http://localhost:3000' // 代理地址 基于  http-proxy-middleware，更多可以查看  http-proxy-middleware API
  }
})
