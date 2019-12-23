# vue-demo-001-installation vue安装

> 本demo描述安装和使用vue-cli生成一个helloworld项目

## 安装NPM
安装npm和cpm

```
// 查看版本
npm -v
2.3.0

// 使用淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org

// 升级或安装 cnpm
npm install cnpm -g

// 升级 npm
cnpm install npm -g
```

## 安装VUE

执行如下命令
```
cnpm install vue
```

## 安装和应用vue-cli

安装vue-cli
```
# 全局安装 vue-cli
cnpm install --global vue-cli
```

使用vue init webpack vue-demo-010-helloworld 生成项目

```
D:\vue\vue-demo>vue init webpack vue-demo-010-helloworld

D:\vue\vue-demo>"node"  "C:\Users\i\AppData\Roaming\npm\\node_modules\vue-cli\bin\vue" init webpack vue-demo-010-helloworld

? Project name vue-demo-010-helloworld
? Project description vue helloworld
? Author funsonli <funsonli@163.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests Yes
? Pick a test runner jest
? Setup e2e tests with Nightwatch? Yes
? Should we run `npm install` for you after the project has been created? (recommended) npm

   vue-cli · Generated "vue-demo-010-helloworld".


# Installing project dependencies ...
# ========================

npm WARN deprecated extract-text-webpack-plugin@3.0.2: Deprecated. Please use https://github.com/webpack-contrib/mini-css-extract-plugin
npm WARN deprecated browserslist@2.11.3: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
npm WARN deprecated bfj-node4@5.3.1: Switch to the `bfj` package for fixes and new features!
npm WARN deprecated json3@3.3.2: Please use the native JSON object instead of JSON 3
npm WARN deprecated browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
npm WARN deprecated socks@1.1.10: If using 2.x branch, please upgrade to at least 2.1.6 to avoid a serious bug with socket data flow and an import issue introduced in 2.1.0
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm WARN deprecated left-pad@1.3.0: use String.prototype.padStart()

> chromedriver@2.46.0 install D:\vue\vue-demo\vue-demo-010-helloworld\node_modules\chromedriver
> node install.js

Current existing ChromeDriver binary is unavailable, proceding with download and extraction.
Downloading from file:  https://chromedriver.storage.googleapis.com/2.46/chromedriver_win32.zip
Saving to file: C:\Users\i\AppData\Local\Temp\2.46\chromedriver\chromedriver_win32.zip
Received 781K...
Received 1568K...
Received 2352K...
Received 3136K...
Received 3920K...
Received 4523K total.
Extracting zip contents
Copying to target path D:\vue\vue-demo\vue-demo-010-helloworld\node_modules\chromedriver\lib\chromedriver
Done. ChromeDriver binary available at D:\vue\vue-demo\vue-demo-010-helloworld\node_modules\chromedriver\lib\chromedriver\chromedriver.exe

> core-js@2.6.11 postinstall D:\vue\vue-demo\vue-demo-010-helloworld\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> uglifyjs-webpack-plugin@0.4.6 postinstall D:\vue\vue-demo\vue-demo-010-helloworld\node_modules\webpack\node_modules\uglifyjs-webpack-plugin
> node lib/post_install.js

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN ajv-keywords@2.1.1 requires a peer of ajv@^5.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 1739 packages from 1098 contributors and audited 32394 packages in 72.8s
found 92 vulnerabilities (69 low, 9 moderate, 13 high, 1 critical)
  run `npm audit fix` to fix them, or `npm audit` for details


Running eslint --fix to comply with chosen preset rules...
# ========================


> vue-demo-010-helloworld@1.0.0 lint D:\vue\vue-demo\vue-demo-010-helloworld
> eslint --ext .js,.vue src test/unit test/e2e/specs "--fix"


# Project initialization finished!
# ========================

To get started:

  cd vue-demo-010-helloworld
  npm run dev

Documentation can be found at https://vuejs-templates.github.io/webpack
```

## 运行项目

```
cd vue-demo-010-helloworld
npm install
npm run dev

浏览器访问 http://localhost:8080/

```



## 参考
- https://www.runoob.com/vue2/vue-install.html


### 附
如果您喜欢本Vue Demo样例和样例代码，请[点赞Star](https://github.com/funsonli/vue-demo)
