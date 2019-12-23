# vue-demo-010-helloworld

> vue helloworld 由vue-cli生成 本demo描述基本结构

## Build Setup 相关命令

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 目录结构

- build 项目构建webpack相关代码
- config 配置目录，端口等
- node_modules npm加载依赖项目，执行npm install会在该目录下下载相应的模块
- static 静态资源目录，图片、字体等
- test 测试目录
- .xxx 文件 配置文件，语法检查，git配置等
- index.html 入口文件，meta信息或同级代码可以加入
- package.json 项目配置文件
- src 开发目录，包含几个目录和文件
- src/assets 资源文件
- src/components 代码文件
- src/App.vue 项目入口文件
- src/main.js 项目核心文件
- src/router 使用vue-router才有，定义url路径路由到vue代码文件的关系

## 尝试修改

- 修改App.vue删除<img src="./assets/logo.png">
- 修改HelloWorld.vue中msg: 'Welcome World'

浏览器再次查看http://localhost:8080/ 已去掉原本的logo，并显示Hello world


## 参考
- https://www.runoob.com/vue2/vue-directory-structure.html


### 附
如果您喜欢本Vue Demo样例和样例代码，请[点赞Star](https://github.com/funsonli/vue-demo)
