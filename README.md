
## 功能描述

### 已经实现功能

- [x] 登录
- [x] 注册
- [x] 文章列表
- [x] 标签分类
- [x] 个人介绍
- [x] 点赞与评论
- [x] 留言
- [x] 时间轴
- [x] 项目展示
- [x] 发文（支持 MarkDown 语法）
- [x] 文章详情展示（支持代码语法高亮）
- [x] 移动端适配
- [x] 网站波浪效果(请看 https://biaochenxuying.cn/wave.html)
- [x] 第三方 github 授权登录
- [x] 文章归档
- [x] 文章详情的目录

### 待实现功能

- [ ] 无

## 前端技术

- react： ^16.8.4
- antd： ^3.15.0
- react-router:：^4.3.1
- webpack： 4.28.3
- axios：0.18.0
- redux: ^4.0.1
- highlight.js： ^9.15.6
- marked：^0.6.1

## 项目搭建

- 项目是按 antd 推荐的教程来搭建的：[antd 在 create-react-app 中使用](https://ant.design/docs/react/use-with-create-react-app-cn) , 实现了 按需加载组件代码和样式。

## 主要项目结构

```
- components
  - article 文章详情
  - articles 文章列表
  - comments 评论
  - loadEnd 加载完成
  - loading 加载中
  - login 登录
  - message 留言
  - nav 导航
  - project 项目
  - register 注册
  - slider 右边栏（博主 logo 、链接和标签等）
  - artchive 归档
  - timeLine 时间轴(历程)
- router 路由
- store redux 的状态管理
- utils 封装的常用的方法
- views 框架页面
```

## 注意点

- 关于 页面

对于 关于 的页面，其实是一篇文章来的，根据文章类型 type 来决定的，数据库里面 type 为 3
的文章，只能有一篇就是 博主介绍 ；达到了想什么时候修改内容都可以。

所以当 this.props.location.pathname === '/about' 时就是请求类型为 博主介绍 的文章。

```
type: 3, // 文章类型: 1：普通文章；2：是博主简历；3 ：是博主简介；
```

## Build Setup ( 建立安装 )

```
# install dependencies
npm install

# serve with hot reload at localhost: 3000
npm start 或者 yarn start

# build for production with minification
npm run build 或者 yarn run build
```
7. 注意点
7.1 打包的配置
因为项目是用了 react-app-rewired (一个对 create-react-app 进行自定义配置的社区解决方案) 来打包了，所以如果你想修改 webpack.config.dev.js 和 webpack.config.prod.js 的配置，打包后可能看不到想要的效果，因为 react-app-rewired 打包时，是根据根目录的 config-overrides.js 来进行打包，所以要修改 webpack 的配置的话，请修改 config-overrides.js 。

比如：关闭 sourceMap 和 支持装饰器

config.devtool = false; // 关闭 sourceMap 
config = injectBabelPlugin('babel-plugin-transform-decorators-legacy', config); // 支持装饰器

7.2 关于 页面
对于 关于 的页面，其实是一篇文章来的，根据文章类型 type 来决定的，数据库里面 type 为 3 的文章，只能有一篇就是 博主介绍 ；达到了想什么时候修改内容都可以。

所以当 this.props.location.pathname === '/about' 时就是请求类型为 博主介绍 的文章。

type: 3, // 文章类型: 1：普通文章；2：是博主简历；3 ：是博主简介；
8. Build Setup ( 建立安装 )
