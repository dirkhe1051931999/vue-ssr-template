# vue + koa2 + webpack4 实现服务端渲染

1. 具体细节：https://github.com/dirkhe1051931999/hjBlog/blob/master/blog-vue/lessons/16.md

2. demo 地址：https://github.com/dirkhe1051931999/common-demo/tree/master/vue-ssr-demo

## 执行

```bash

git clone https://github.com/dirkhe1051931999/vue-ssr-template.git
npm install
npm run build
npm start
```

## 项目结构

```txt
.
|-- README.md
|-- build
|   |-- dev.config.js # 自动打包，每当改变vue文件的时候，自动build
|   |-- webpack.base.config.js # output、extensions、rules
|   |-- webpack.client.config.js  # 打包客户端
|   `-- webpack.server.config.js #打包服务端
|-- dist # 构建结果
|   |-- static
|   |   `-- js
|   |       |-- 0.7ab44787c73419d738f9.js
|   |       |-- 1.0cc9ec1eed8e091c1d8b.js
|   |       `-- main.aee443fc09a7b0e11cce.js
|   |-- vue-ssr-client-manifest.json
|   `-- vue-ssr-server-bundle.json
|-- package.json
|-- server.js # koa服务器，是否缓存html
`-- src
    |-- App.vue
    |-- api # 接口
    |   `-- index.js
    |-- app.js # 为每个请求创建一个新的根vue实列
    |-- assets # 静态资源
    |   `-- vue.png
    |-- entry-client.js # 挂载客户端应用程序
    |-- entry-server.js # 挂载服务端应用程序
    |-- index.template.html # 页面模板
    |-- mixins # 修改页面标题
    |   `-- title-mixins.js
    |-- router.js # 路由
    |-- store # vuex
    |   `-- index.js
    |-- utils # 公共方法
    |   `-- axios.js
    `-- views # 页面
        |-- home.vue
        `-- item.vue
```
