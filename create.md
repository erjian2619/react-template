# react 模版


yarn add html-webpack-plugin -D                 # 简化 HTML 文件创建以服务捆绑包的插件, 将js文件自动引进 html 文件中
yarn add chalk@4.1.2 -D                         # 终端字符串样式个性化自定义
yarn add detect-port-alt -D                     # 端口检测
yarn add ip -D                                  # 获取ip地址
yarn add copy-webpack-plugin -D                 # 将已存在的单个文件或整个目录复制到生成目录
yarn add css-minimizer-webpack-plugin -D        # 这个插件优化和压缩css
yarn add mini-css-extract-plugin -D             # 抽离css文件, 将css取到单独的文件中，为每个包含css的js件创建一个css文件。
yarn add fork-ts-checker-webpack-plugin -D      # 启动本地服务/打包错误提示, 单独的进程上运行 TypeScript 类型检查器。
yarn add error-overlay-webpack-plugin -D        # 这个插件将在你的应用程序中定位显示出错信息
yarn add terser-webpack-plugin -D               # 这个插件使用 terser 压缩 JavaScript
yarn add webpack-bundle-analyzer -D             # 使用交互式可缩放树形地图可视化 webpack 输出文件的大小
yarn add compression-webpack-plugin -D          # 静态资源压缩, 使用Content-Encoding为它们提供服务
yarn add webpackbar -D                          # 优雅的 Webpack 进度条和分析器
yarn add postcss-flexbugs-fixes -D              # 用于修复一些和 flex 布局相关的 bug
yarn add babel-loader -D


yarn add style-loader -D        # 将结果以style标签的方式插入DOM树中。style-loader将css-loader打包好的 CSS 代码以<style>标签的形式插入到 HTML 文件中
yarn add css-loader -D          # 主要是解析css文件中的@import和url语句，处理css-modules，并将结果作为一个js模块返回
yarn add less less-loader -D    # less预处理器处理
yarn add postcss-loader -D      # 进一步处理css文件，比如添加浏览器前缀，压缩 CSS 等
yarn add postcss-preset-env -D  # 最新的 CSS 语法转换为目标环境的浏览器能够理解的 CSS 语法，目的是使开发者不用考虑浏览器兼容问题。
yarn add autoprefixer  -D       # PostCSS 处理浏览器兼容问题



yarn add @babel/core  -D.                       # Babel 的核心功能
yarn add @babel/cli  -D                         # 一个能够从终端（命令行）使用的工具
yarn add @babel/preset-env  -D.                 # 根据 browserslist 中浏览器设定，进行 polyfill
yarn add @babel/preset-react -D                 # 预设集合: 转译jsx
yarn add @babel/plugin-transform-runtime  -D    # 按需转换api
yarn add @babel/runtime-corejs3 -D              # corejs: false 只对ES语法进行了转换, corejs：2 沙盒环境，不污染全局空间, 无法实例方法, corejs: 3 沙盒环境，不污染全局空间, 可以实例方法
