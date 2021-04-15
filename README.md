# ABT：admin base template

> 你是否还在为启动前端项目的缓慢等待而焦急，为修改代码等代码编译看效果而烦恼...

> 是时候抛弃Webpack了,拥抱vite,开发环境秒开，修改代码秒更新不是梦...

> vite2 + vue3的开发，网上已有大量文章介绍。
但是我们原有项目不可能一上来就全部用vue3重构，那么能不能用vite2运行之前的vue2开发的项目呢? ——答案是：true

## 总览

本项目是一个admin后台系统的基础框架。基于vite2.0（esbuild）重新搭建（之前是webpack，vue-cli4.x版本）。

项目技术栈还是vue2+typescript+elementUI，目前已基于vite2改造完成，让vue2+ts的旧项目也享受到了vite2带来的秒开快感。

包含了 Element UI & Axios & Permission control & 国际化切换及配置，等后台必要的基础功能模块。

Mock 数据部分，通过 [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock)启动服务，通过vite.config.js配置并运行。

### 基础功能

- 登录/登出
- 权限控制
- 国际化：支持图片或其他资源同时切换(登录页切换示例)
- 一键换肤(右上角)，通过css 的var 无感切换
- 响应式布局
- mock数据(`mock/`文件夹下)
- 

### 安装依赖

```bash
npm install
```
### 启动本地开发环境（带热启动）

```bash
npm run dev
```
### 构建生产环境 (带压缩)

```bash
npm run build
```

### ToDo 

- [x] elementUI按需引入，并更改主题
- [ ] 路由根据目录自动生成
- [ ] Dashboard 

### 自定义 Vue 配置

看这里 [Configuration Reference](https://cli.vuejs.org/config/).

## 参考项目

https://coderthemes.com/greeva/layouts/vertical-dark/ui-buttons.html

[vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template/tree/minimal) 

Javascript 版本相关:

[PanJiaChen/vue-admin-template](https://github.com/PanJiaChen/vue-admin-template) (a vue2.0 minimal admin template)

[PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) (full features supported vue admin)
