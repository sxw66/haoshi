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
