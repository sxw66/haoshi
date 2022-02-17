# viewtest
项目配置了yarn 和npm都可
# 分支管理
yarn run sit 测试环境 测试人员测试环境
yarn run uat uat 环境 用户测试环境
yarn run prod 生产环境
- master 线上分支 目前都用这个分支的代码
后期环境会同步目前只有sit测试环境

# 交互规范

- 所有字段名和标题名每个单词首字母大写

```text
customerCode 这样写是错误的
Customer Code这样是正确

```

- 所有的提示语首字母写

```text
are you sure delelted?  错误写法
Are you sure deleted ? 正确写法
```

# 注意

- 不要上传 pack-lock.josn
- 不要上传 yarn.lock

## Project setup
```
npm install
yarn
```

### Compiles and hot-reloads for development
```
npm run serve
yarn serve

```

### Compiles and minifies for production
```
npm run build
yarn build


```

### Lints and fixes files
```
npm run lint
yarn lint
 
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
1、项目描述
1、此项目为一个前后端分离的 实战项目
2、采用了 Vue 全家桶+ES6+Webpack 等前端最新技术
3、项目包括商家、商品、用户、等多个功能子模块
4、采用模块化、组件化、工程化的模式开发

2、你能从此项目中学到什么？
2.1 项目开发流程及开发方法和思想
1、熟悉一个项目开发的流程
2、学会组件化、模块化、工程化的开发模式
3、掌握使用 vue-cli 脚手架初始化 vue.js 项目
4、学会 ES6+eslint 的开发方法
5、掌握一些项目的优化技巧

2.2 插件或第三方库
1、学会使用 vue-router 开发单页面
2、学会使用 axios 的封装和后端数据交互
3、学会使用 vuex 管理应用组件的状态
4、学会是使用 better-scroll 实现页面滑动效果
5、学会使用 vant-ui 组件库构建界面
6、学会使用 vue-lazyload 实现图片懒加载


项目文件
vue-cli3/4 的项目文件目录
目录/文件 说明
dist 项目打包后生成的文件
node_modules npm 加载的项目依赖模块
public 静态资源目录，如图片、字体、icon 图标 ，其中里面的 index.html 是模板，当运行 npm run build 打包的时候，就是以这里的 index.html 作为模板打包 输出 到 dist 文件夹下生成一个新的 index.html 文件
src 包含了如下几个目录及文件:
assest: 放置一些图片，如 logo 等
components: 这里我一般用来放置一些公共的组件
App.vue:应用组件，我们写的所有组件都是在这个组件之上运行的
main.js: 项目的核心文件，入口 js 文件
router: 路由文件夹，决定页面路由的跳转规则
store: vuex 的状态管理文件
network：自己创建的，用来存放项目中发起请求的 js 文件模块
pluginunit：自己创建的，用来存放项目中所使用到的 ui 插件的 js 文件
common: 存放一些公共的 js 文件 比如, rem.js 用来解决移动端适配问题的
package.json 项目的配置文件，以及一些插件依赖包的信息
package-lock.json 插件依赖的详细信息
babel.config.js 用来配置一些 ui 插件
README.md 项目的说明文档，markdown 格式
————————————————

