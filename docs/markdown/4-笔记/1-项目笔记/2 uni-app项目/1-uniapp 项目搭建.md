# uniapp 项目搭建

## 创建新项目

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202405111038199.png)

## 根目录创建 package.json

```json
{
  "dependencies": {
    "animate.css": "^4.1.1",
    "vue-i18n": "^9.3.0-beta.24",
    "vuex-persist": "^3.1.3"
  },
  "devDependencies": {
    "rollup-plugin-javascript-obfuscator": "^1.0.4"
  }
}
```

创建完后执行命令

```sh
yarn install
```

## 根目录创建 vite.config.js

```js
import {defineConfig} from "vite"
import uni from "@dcloudio/vite-plugin-uni"

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g
const DRIVE_LETTER_REGEX = /^[a-z]:/i

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      "vue-i18n": "/node_modules/vue-i18n/",
    },
  },

  server: {
    hmr: true,
  },
  build: {
    assetsInlineLimit: 5120,
    cssCodeSplit: false,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        sanitizeFileName(name) {
          const match = DRIVE_LETTER_REGEX.exec(name)
          const driveLetter = match ? match[0] : ""
          return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
        },
      },
    },
  },
})
```

## pages.json 文件修改

```json
{
  "pages": [
    //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": ""
      }
    }
  ],
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "项目标题",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8",
    "dynamicRpx": true,
    "enablePullDownRefresh": false,
    "navigationStyle": "custom",
    "onReachBottomDistance": 100,
    "app-plus": {
      "bounce": "none",
      "pullToRefresh": {
        "color": "#e14e28" //下拉刷新的颜色
      }
    }
  },
  "uniIdRouter": {},
  "tabBar": {
    "backgroundColor": "#1d1c4e",
    "borderStyle": "white",
    "list": [
      {
        "pagePath": "pages/index/index"
      },
      {
        "pagePath": "pages/Second/Second"
      },
      {
        "pagePath": "pages/Second/Second"
      },
      {
        "pagePath": "pages/mine/mine"
      }
    ]
  }
}
```

## manifest.json 里面文件 h5 内容

```json
"h5" : {
        "optimization" : {
            "treeShaking" : {
                "enable" : true
            }
        },
        "router" : {
            "base" : "./"
        },
        "devServer" : {
            "port" : 6006
        },
        "async" : {
            //页面js异步加载配置
            "loading" : "AsyncLoadingNew", //页面js加载时使用的组件（需注册为全局组件）
            "error" : "AsyncErrorNew", //页面js加载失败时使用的组件（需注册为全局组件）
            "delay" : 0, //展示 loading 加载组件的延时时间（页面 js 若在 delay 时间内加载完成，则不会显示 loading 组件）
            "timeout" : 60000 //页面js加载超时时间（超时后展示 error 对应的组件）
        },
        "title" : ""//标题
    }
```

AsyncLoadingNew 和 AsyncErrorNew 组件在下面添加并且注册为全局

## 引入 vk-uview

插件地址：https://ext.dcloud.net.cn/plugin?id=6692

uni.scss 文件前面添加

```scss
@import "@/uni_modules/vk-uview-ui/theme.scss";
```

## main.js

```js
import App from "./App"

import store from "./store"
import Pub from "./utils/index.js"
import $http from "./utils/http.js"
import config from "./utils/config.js"

import i18n from "./locales/i18n.js"
import AsyncLoadingNew from "@/components/AsyncLoadingNew/AsyncLoadingNew"
import AsyncErrorNew from "@/components/AsyncErrorNew/AsyncErrorNew"

import "./utils/intercept.js"

// #ifdef APP-PLUS
import "./utils/exitApp.js"
// #endif

// #ifndef VUE3
import Vue from "vue"
import "./uni.promisify.adaptor"
Vue.config.productionTip = false
App.mpType = "app"
const app = new Vue({
  ...App,
})
app.$mount()
// #endif

// #ifdef VUE3

import {createSSRApp} from "vue"
import uView from "./uni_modules/vk-uview-ui"
export function createApp() {
  const app = createSSRApp(App)
  app.component("AsyncLoadingNew", AsyncLoadingNew)
  app.component("AsyncErrorNew", AsyncErrorNew)
  app.config.globalProperties.Pub = Pub
  app.config.globalProperties.$http = $http
  app.config.globalProperties.$config = config
  app.use(uView)
  app.use(i18n)
  app.use(store)
  return {
    app,
  }
}
// #endif
```

## App.vue

```vue
<script setup>
import {onLaunch, onShow, onHide} from "@dcloudio/uni-app"
import {ref, getCurrentInstance} from "vue"

const {proxy} = getCurrentInstance()

onLaunch(() => {
  console.log("App Launch")
  uni.hideTabBar()
  proxy.Pub.exitApp()
})
onShow(() => {
  getInit()
  console.log("App Show")
})
onHide(() => {
  console.log("App Hide")
})
</script>

<style>
@import "animate.css";

page {
  background-color: transparent;
  min-height: 100%;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
}
</style>
<style lang="scss">
/*每个页面公共css */
@import "@/uni_modules/vk-uview-ui/index.scss";
@import "@/styles/scss/global.scss";
@import "@/styles/scss/theme.scss";
@import "@/styles/scss/custom.scss";

view,
text {
  box-sizing: border-box;
}

input {
  background-color: transparent;
}

.arba {
  direction: rtl;
}

.bg-main {
  background: url("/static/images/img/bg_main.png") no-repeat;
  background-size: 100% auto;
  background-position: 50% 0;
  background-attachment: fixed;
}

.bg-lead {
  background: url("/static/images/img/bg_lead.png") no-repeat;
  background-size: 100% 100%;
  background-position: 50% 0;
  background-attachment: fixed;
}

.bg-login {
  background: url("/static/images/img/bg_login.png") no-repeat;
  background-size: 100% auto;
  background-position: 50% 0;
  background-attachment: fixed;
}

.bg-invite {
  background: url("/static/images/img/bg_invite.png") no-repeat;
  background-size: 100% auto;
  background-position: 50% 0;
  background-attachment: fixed;
}

@media (min-width: 540px) {
  .bg-main,
  .bg-lead,
  .bg-login,
  .bg-invite {
    background-attachment: scroll !important;
  }
}
</style>
```

## 创建目录： styles/scss

### global.scss

```scss
@mixin px2rpx($name, $px) {
  #{$name}: $px * 1rpx;
}

@mixin fontSize($px) {
  @include px2rpx(font-size, $px);
}

page {
  font-size: 24rpx;
}
@for $i from 0 through 60 {
  .font-#{$i * 2} {
    @include fontSize($i * 2);
  }
}

.font-bold {
  font-weight: 900;
}

.font-middle {
  font-weight: 600;
}

.font-normal {
  font-weight: normal;
}

.font-light {
  font-weight: 100;
}

.line-height-1 {
  line-height: 1;
}

@for $i from 375 through 0 {
  .w-#{$i * 2}px {
    @include px2rpx(width, $i * 2);
  }
  .h-#{$i * 2}px {
    @include px2rpx(height, $i * 2);
  }
}

.w-20 {
  width: 20%;
}
.w-25 {
  width: 25%;
}
.w-33 {
  width: 33%;
}
.w-50 {
  width: 50%;
}

.w-100 {
  width: 100% !important;
}
.h-100 {
  height: 100% !important;
}
.w-100vw {
  width: 100vw;
}
.h-100vh {
  height: 100vh;
}

@for $i from 50 through 0 {
  .left-#{$i * 2} {
    @include px2rpx(left, $i * 2);
  }
  .right-#{$i * 2} {
    @include px2rpx(right, $i * 2);
  }
  .top-#{$i * 2} {
    @include px2rpx(top, $i * 2);
  }
  .bottom-#{$i * 2} {
    @include px2rpx(bottom, $i * 2);
  }
}

@for $i from 60 through 0 {
  .pd-#{$i * 2} {
    @include px2rpx(padding-left, $i * 2);
    @include px2rpx(padding-right, $i * 2);
    @include px2rpx(padding-top, $i * 2);
    @include px2rpx(padding-bottom, $i * 2);
  }
  .pdl-#{$i * 2} {
    @include px2rpx(padding-left, $i * 2);
  }
  .pdr-#{$i * 2} {
    @include px2rpx(padding-right, $i * 2);
  }
  .pdt-#{$i * 2} {
    @include px2rpx(padding-top, $i * 2);
  }
  .pdb-#{$i * 2} {
    @include px2rpx(padding-bottom, $i * 2);
  }
  .mg-#{$i * 2} {
    @include px2rpx(margin-left, $i * 2);
    @include px2rpx(margin-right, $i * 2);
    @include px2rpx(margin-top, $i * 2);
    @include px2rpx(margin-bottom, $i * 2);
  }
  .mgl-#{$i * 2} {
    @include px2rpx(margin-left, $i * 2);
  }
  .mgr-#{$i * 2} {
    @include px2rpx(margin-right, $i * 2);
  }
  .mgt-#{$i * 2} {
    @include px2rpx(margin-top, $i * 2);
  }
  .mgb-#{$i * 2} {
    @include px2rpx(margin-bottom, $i * 2);
  }
}

@mixin border($name, $num, $color) {
  #{$name}: $num * 1rpx solid $color;
}
@mixin border-radius($val) {
  -webkit-border-radius: $val * 1rpx;
  border-radius: $val * 1rpx;
}

@for $i from 50 through 0 {
  .border-radius-#{$i * 2} {
    @include border-radius($i * 2);
  }
}

.bd-none {
  border: none !important;
}

.border-radius-half {
  border-radius: 50% !important;
  -webkit-border-radius: 50% !important;
}

@mixin transition {
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.transition {
  @include transition();
}

.translateY-50 {
  -webkit-transform: translateY(-50%) !important;
  transform: translateY(-50%) !important;
}

.translate-50 {
  -webkit-transform: translate3d(-50%, -50%, 0) !important;
  transform: translate3d(-50%, -50%, 0) !important;
  top: 50%;
  left: 50%;
}

// 文字超出省略号
@mixin text-overflow($num) {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: $num; // @num 行数
}

.text-overflow-1 {
  @include text-overflow(1);
}

.text-overflow-2 {
  @include text-overflow(2);
}

.text-line {
  text-decoration: underline;
}

.link {
  cursor: pointer;
}

.active-effect {
  cursor: pointer;

  &:active {
    opacity: 0.8;
  }
}

.grayscale {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  opacity: 0.5;
}

.grayscale-reduction {
  -webkit-filter: grayscale(0%);
  -moz-filter: grayscale(0%);
  -o-filter: grayscale(0%);
  filter: grayscale(0%);
  opacity: 1;
}

// 文字渐变
@mixin text-gradual-left-right($color1, $color2, $color3) {
  background-image: -webkit-linear-gradient(right, $color1, $color2, $color3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@mixin text-gradual-top-bottom($color1, $color2, $color3) {
  background-image: -webkit-linear-gradient(bottom, $color1, $color2, $color3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.content-box {
  box-sizing: content-box;
}

.overflow-y-auto {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.overflow-x-auto {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-visible {
  overflow: visible;
}

.hidden {
  opacity: 0;
}

.align-center {
  text-align: center;
}

.align-right {
  text-align: right;
}

.word-break {
  word-break: break-all;
}

.text-nowrap {
  white-space: nowrap;
}

.disabled {
  cursor: not-allowed !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  pointer-events: none;
  filter: grayscale(1);
  opacity: 0.5;
}

.btn-disabled {
  cursor: not-allowed !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  pointer-events: none;
  filter: grayscale(0.3);
  opacity: 0.5;
}

.inline-block {
  display: inline-block;
  vertical-align: middle;
}

.block {
  display: block;
}

/* 弹性布局盒模型 */
.flex {
  display: -webkit-box; // 老版本语法: Safari, iOS, Android browser, older WebKit browsers
  display: -moz-box; // 老版本语法: Firefox (buggy)
  display: -ms-flexbox; // 混合版本语法: IE 10
  display: -webkit-flex; // 新版本 语法： Chrome 21+
  display: flex; // 新版本语法： Opera 12.1, Firefox 22+
}

.inline-flex {
  display: -webkit-inline-flex;
  display: inline-flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-align-start {
  align-items: flex-start;
}

.flex-align-center {
  align-items: center;
}

.flex-align-end {
  align-items: flex-end;
}

.flex-justify-center {
  justify-content: center;
}

.flex-between {
  justify-content: space-between;
}

.flex-around {
  justify-content: space-around;
}

.flex-start {
  justify-content: flex-start;
}

.flex-end {
  justify-content: flex-end;
}

.flex-column {
  flex-direction: column;
}

.flex-1 {
  flex: 1;
}

.flex-2 {
  flex: 2;
}

.flex-3 {
  flex: 3;
}

.flex-4 {
  flex: 4;
}

.flex-5 {
  flex: 5;
}

.flex-6 {
  flex: 6;
}

.flex-7 {
  flex: 7;
}

.flex-8 {
  flex: 8;
}

.flex-none {
  flex: none;
}

.flex-auto {
  flex: auto;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.com-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  @include px2rpx(grid-column-gap, 24);
  @include px2rpx(grid-row-gap, 24);
  &.columns-3 {
    grid-template-columns: 1fr 1fr 1fr;
  }
  &.columns-4 {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @include px2rpx(grid-column-gap, 10);
    @include px2rpx(grid-row-gap, 10);
  }
}

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-contain {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.html-content {
  img,
  p,
  span,
  video {
    max-width: 100% !important;
  }

  img,
  video {
    height: auto !important;
  }
}

.shade-black {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.shade-white {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
}

.dialog-middle {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1002;
  transform: translate3d(-50%, -50%, 0) scale(0);
  -webkit-transform: translate3d(-50%, -50%, 0) scale(0);
  @include transition();
  opacity: 0;

  &.active {
    transform: translate3d(-50%, -50%, 0) scale(1);
    -webkit-transform: translate3d(-50%, -50%, 0) scale(1);
    opacity: 1;
  }
}

.dialog-top {
  position: fixed;
  top: -100%;
  left: 0;
  z-index: 1002;
  width: 100%;
  @include transition();
  &.active {
    top: 0;
  }
}

.dialog-bottom {
  position: fixed;
  bottom: -100%;
  left: 0;
  z-index: 1002;
  width: 100%;
  @include transition();
  &.active {
    bottom: 0;
  }
}

.position-sticky {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 101;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.position-fixed {
  position: fixed;
  z-index: 100;
  transform: translateZ(0) !important;
  -webkit-transform: translateZ(0) !important;
  @include transition();
}

.position-absolute {
  position: absolute;
  z-index: 100;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.position-relative {
  position: relative;
}

.z-index-0 {
  z-index: 0;
}

.z-index-1 {
  z-index: 1;
}

.z-index-3 {
  z-index: 3;
}

.z-index-5 {
  z-index: 5;
}

.z-index-9 {
  z-index: 9;
}

.z-index-10 {
  z-index: 10;
}

.z-index-11 {
  z-index: 11;
}

.z-index-99 {
  z-index: 99;
}

.z-index-100 {
  z-index: 100;
}

.z-index-101 {
  z-index: 101;
}

.z-index-102 {
  z-index: 102;
}

.z-index-999 {
  z-index: 999;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Segoe UI, Arial, Roboto, PingFang SC, miui, Hiragino Sans GB, Microsoft Yahei, sans-serif;
}

.click-effect {
  cursor: pointer;
  &:active {
    opacity: 0.8;
  }
}
.link {
  cursor: pointer;
}

@mixin com-btn($color, $bgc) {
  width: 600rpx;
  height: 70rpx;
  background-color: $bgc !important;
  font-size: 28rpx;
  color: $color !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12rpx;
  cursor: pointer;
  &.full {
    width: 100%;
  }
  &.round {
    border-radius: 80rpx;
  }
  &:active {
    opacity: 0.8;
  }
}

.btn-mini {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 50rpx;
  border-radius: 50rpx;
  padding-left: 20rpx;
  padding-right: 20rpx;
  cursor: pointer;
  min-width: 120rpx;
  &:active {
    opacity: 0.8;
  }
}
.bg-transparent {
  background: transparent !important;
}
```

### theme.scss

```scss
@mixin theme($c-primary: rgb(240, 185, 11), $c-second: #5eba89, $c-price: #ff0000, $c-text-1: #fff, $c-text-2: #aaacb1, $c-text-3: #666666, $c-fall: #0fcb81, $c-rise: #e53343, $c-black: #000, $c-white: #fff, $bgc-base: #21252f, $bgc-primary: #2a303c, $bgc-header: #21252f, $bgc-footer: rgb(33, 37, 47), $bgc-input: #2a303c, $bd-base: #1b1d29, $bd-second: #999) {
  .c-primary {
    color: $c-primary !important;
  }
  .c-second {
    color: $c-second;
  }
  .c-text-1 {
    color: $c-text-1 !important;
  }
  .c-text-2 {
    color: $c-text-2;
  }
  .c-text-3 {
    color: $c-text-3;
  }
  .c-price {
    color: $c-price;
  }
  .c-fall {
    color: $c-fall;
  }
  .c-rise {
    color: $c-rise;
  }
  .c-black {
    color: $c-black;
  }

  .bgc-base {
    background-color: $bgc-base;
  }
  .bgc-primary {
    background-color: $bgc-primary !important;
  }
  .bgc-header {
    background-color: $bgc-header !important;
  }
  .bgc-footer {
    background-color: $bgc-footer !important;
  }
  .bgc-input {
    background-color: $bgc-input;
  }
  .bgc-c-primary {
    background-color: $c-primary !important;
  }

  .bd-base {
    border: 1px solid $bd-base;
    border-color: $bd-base;
  }
  .bd-base-left {
    border-left: 1px solid $bd-base;
    border-color: $bd-base;
  }
  .bd-base-bottom {
    border-bottom: 1px solid $bd-base;
    border-color: $bd-base;
  }
  .bd-base-top {
    border-top: 1px solid $bd-base;
    border-color: $bd-base;
  }
  .bd-second {
    border: 1px solid $bd-second;
    border-color: $bd-second;
  }
  .bd-second-bottom {
    border-bottom: 1px solid $bd-second;
    border-color: $bd-second;
  }

  .btn-primary {
    @include com-btn($c-black, $c-primary);
    color: $c-black;
  }

  :deep(.u-notice-text) {
    color: $c-text-1;
  }
  :deep(.uicon-nav-back) {
    color: $c-text-1 !important;
  }
  :deep(.u-title) {
    color: $c-text-1 !important;
  }
  :deep(.my-input .uni-input-placeholder) {
    color: #aaacb1 !important;
  }
  :deep(.my-input .uni-input-input) {
    color: $c-text-1 !important;
  }
  :deep(.u-dropdown__menu__item__text) {
    color: $c-text-1 !important;
  }
  :deep(.uicon-arrow-down-fill) {
    color: $c-text-1 !important;
  }
}

.theme-dark {
  @include theme();
  color: #fff;

  .com-box-shadow {
    -webkit-box-shadow: 0 0 10rpx 10rpx rgba(0, 0, 0, 0.13);
    box-shadow: 0 0 10rpx 10rpx rgba(0, 0, 0, 0.13);
  }
  .active-box-shadow {
    box-shadow: 1px 1px 5px 1px #949494;
    -webkit-box-shadow: 1px 1px 5px 1px #949494;
    border: 1px solid rgba(138, 133, 133, 0.3);
  }
  .bd-photo-dashed {
    border: 1rpx dashed #c0ccda;
  }

  $imgUrl: "/static/theme_dark";

  .bg-invite {
    background: url(#{$imgUrl}/img/Mask.png) no-repeat;
    background-size: 100% 100%;
  }
}

.theme-light {
  @include theme($c-primary: #1374ec, $c-text-1: #212121, $c-text-2: #333, $c-text-3: #666, $bgc-base: #e9f0f5, $bgc-primary: #fff, $bgc-header: #e9f0f5, $bgc-footer: #ffffff, $bgc-input: #fff, $bd-base: #dfdfdf, $bd-second: #ccc);
  color: #212121;
  .bgc-main {
    background-color: #e9f0f5;
  }

  .footer-shadow {
    box-shadow: 0px 0 4px rgba(158, 160, 169, 0.25);
  }

  .com-box-shadow {
    -webkit-box-shadow: 0 0 10rpx 10rpx rgba(0, 0, 0, 0.13);
    box-shadow: 0 0 10rpx 10rpx rgba(0, 0, 0, 0.13);
  }
  .active-box-shadow {
    box-shadow: 1px 1px 5px 1px #949494;
    -webkit-box-shadow: 1px 1px 5px 1px #949494;
    border: 1px solid rgba(138, 133, 133, 0.3);
  }
  .bd-photo-dashed {
    border: 1rpx dashed #c0ccda;
  }

  .btn-primary {
    color: #fff !important;
  }

  $imgUrl: "/static/theme_dark";

  .bg-invite {
    background: url(#{$imgUrl}/img/Mask.png) no-repeat;
    background-size: 100% 100%;
  }
}
```

### custom.scss

```scss
:deep(.u-size-medium) {
  padding-left: 40rpx !important;
  padding-right: 40rpx !important;
}
:deep(.u-input) {
  padding-left: 20rpx !important;
  padding-right: 20rpx !important;
}
:deep(.u-btn) {
  line-height: 1 !important;
}
:deep(uni-button:after) {
  border: none !important;
}
:deep(.my-dropdown .u-dropdown__menu__item) {
  justify-content: flex-start !important;
}
:deep(.u-dropdown__content__mask) {
  position: fixed !important;
}
:deep(.my-dropdown .u-dropdown__content__popup) {
  display: inline-block;
}
:deep(.u-dropdown__content) {
  height: 620rpx !important;
}

:deep(.between-dropdown .u-flex) {
  width: 100%;
  padding: 0 20rpx;
  justify-content: space-between !important;
}
:deep(.my-upload .file-picker__progress) {
  display: none !important;
}
:deep(.u-image__error) {
  background: transparent !important;
}
:deep(.u-image__loading) {
  background: transparent !important;
}
:deep(.uni-simple-toast__text) {
  word-break: normal !important;
}
::v-deep .uni-input-placeholder {
  white-space: normal;
  line-height: 1;
}
```

## 创建目录： components

然后创建组件->创建同名目录
![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202405111044728.png)

### AsyncLoadingNew.vue

```vue
<template>
  <mypage>
    <view class="w-100 h-100vh bgc-base flex flex-justify-center" style="padding-top: 15vh;" @click="reload">
      <view>
        <u-icon name="reload" size="80"></u-icon>
      </view>
    </view>
  </mypage>
</template>

<script setup>
const reload = () => {
  // #ifdef H5
  window.location.reload()
  // #endif
}
</script>

<style></style>
```

### AsyncLoadingNew.vue

```vue
<template>
  <mypage>
    <view class="w-100 h-100vh bgc-base flex flex-justify-center" style="padding-top: 15vh;">
      <u-loading mode="flower" size="80" v-show="isShow"></u-loading>
    </view>
  </mypage>
</template>

<script setup>
import {ref} from "vue"
const isShow = ref(false)
setTimeout(() => {
  isShow.value = true
}, 300)
</script>

<style></style>
```

### avatar-cropper

头像裁剪

`avatar-cropper.vue`

```vue
<template>
  <view class="content">
    <view class="cropper-wrapper" :style="{height: cropperOpt.height + 'px'}">
      <canvas class="cropper" :disable-scroll="true" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" :style="{width: cropperOpt.width, height: cropperOpt.height, backgroundColor: 'rgba(0, 0, 0, 0.8)'}" canvas-id="cropper" id="cropper"></canvas>
      <canvas
        class="cropper"
        :disable-scroll="true"
        :style="{
          position: 'fixed',
          top: `-${cropperOpt.width * cropperOpt.pixelRatio}px`,
          left: `-${cropperOpt.height * cropperOpt.pixelRatio}px`,
          width: `${cropperOpt.width * cropperOpt.pixelRatio}px`,
          height: `${cropperOpt.height * cropperOpt.pixelRatio}`,
        }"
        canvas-id="targetId"
        id="targetId"
      ></canvas>
    </view>
    <view class="cropper-buttons safe-area-padding" :style="{height: bottomNavHeight + 'px'}">
      <!-- #ifdef H5 -->
      <view class="upload" @tap="uploadTap">{{ $t("Select_Image") }}</view>
      <!-- #endif -->
      <!-- #ifndef H5 -->
      <view class="upload" @tap="uploadTap">{{ $t("reselect") }}</view>
      <!-- #endif -->
      <view class="getCropperImage" @tap="getCropperImage(false)">{{ $t("determine") }}</view>
    </view>
  </view>
</template>

<script>
import WeCropper from "./weCropper.js"
export default {
  props: {
    // 裁剪矩形框的样式，其中可包含的属性为lineWidth-边框宽度(单位rpx)，color: 边框颜色，
    // mask-遮罩颜色，一般设置为一个rgba的透明度，如"rgba(0, 0, 0, 0.35)"
    boundStyle: {
      type: Object,
      default() {
        return {
          lineWidth: 4,
          borderColor: "rgb(245, 245, 245)",
          mask: "rgba(0, 0, 0, 0.35)",
        }
      },
    },
    // // 裁剪框宽度，单位rpx
    // rectWidth: {
    // 	type: [String, Number],
    // 	default: 400
    // },
    // // 裁剪框高度，单位rpx
    // rectHeight: {
    // 	type: [String, Number],
    // 	default: 400
    // },
    // // 输出图片宽度，单位rpx
    // destWidth: {
    // 	type: [String, Number],
    // 	default: 400
    // },
    // // 输出图片高度，单位rpx
    // destHeight: {
    // 	type: [String, Number],
    // 	default: 400
    // },
    // // 输出的图片类型，如果发现裁剪的图片很大，可能是因为设置为了"png"，改成"jpg"即可
    // fileType: {
    // 	type: String,
    // 	default: 'jpg',
    // },
    // // 生成的图片质量
    // // H5上无效，目前不考虑使用此参数
    // quality: {
    // 	type: [Number, String],
    // 	default: 1
    // }
  },
  data() {
    return {
      // 底部导航的高度
      bottomNavHeight: 50,
      originWidth: 200,
      width: 0,
      height: 0,
      cropperOpt: {
        id: "cropper",
        targetId: "targetCropper",
        pixelRatio: 1,
        width: 0,
        height: 0,
        scale: 2.5,
        zoom: 8,
        cut: {
          x: (this.width - this.originWidth) / 2,
          y: (this.height - this.originWidth) / 2,
          width: this.originWidth,
          height: this.originWidth,
        },
        boundStyle: {
          lineWidth: uni.upx2px(this.boundStyle.lineWidth),
          mask: this.boundStyle.mask,
          color: this.boundStyle.borderColor,
        },
      },
      // 裁剪框和输出图片的尺寸，高度默认等于宽度
      // 输出图片宽度，单位px
      destWidth: 200,
      // 裁剪框宽度，单位px
      rectWidth: 200,
      // 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
      fileType: "jpg",
      src: "", // 选择的图片路径，用于在点击确定时，判断是否选择了图片
    }
  },
  onLoad(option) {
    let rectInfo = uni.getSystemInfoSync()
    this.width = rectInfo.windowWidth
    this.height = rectInfo.windowHeight - this.bottomNavHeight
    this.cropperOpt.width = this.width
    this.cropperOpt.height = this.height
    this.cropperOpt.pixelRatio = rectInfo.pixelRatio

    if (option.destWidth) this.destWidth = option.destWidth
    if (option.rectWidth) {
      let rectWidth = Number(option.rectWidth)
      this.cropperOpt.cut = {
        x: (this.width - rectWidth) / 2,
        y: (this.height - rectWidth) / 2,
        width: rectWidth,
        height: rectWidth,
      }
    }
    this.rectWidth = option.rectWidth
    if (option.fileType) this.fileType = option.fileType
    // 初始化
    this.cropper = new WeCropper(this.cropperOpt)
      .on("ready", ctx => {
        // wecropper is ready for work!
      })
      .on("beforeImageLoad", ctx => {
        // before picture loaded, i can do something
      })
      .on("imageLoad", ctx => {
        // picture loaded
      })
      .on("beforeDraw", (ctx, instance) => {
        // before canvas draw,i can do something
      })
    // 设置导航栏样式，以免用户在page.json中没有设置为黑色背景
    uni.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: "#000000",
    })
    uni.chooseImage({
      count: 1, // 默认9
      sizeType: ["compressed"], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
      success: res => {
        this.src = res.tempFilePaths[0]
        //  获取裁剪图片资源后，给data添加src属性及其值
        this.cropper.pushOrign(this.src)
      },
    })
  },
  methods: {
    touchStart(e) {
      this.cropper.touchStart(e)
    },
    touchMove(e) {
      this.cropper.touchMove(e)
    },
    touchEnd(e) {
      this.cropper.touchEnd(e)
    },
    getCropperImage(isPre = false) {
      if (!this.src) return this.$u.toast(this.Pub.t("Please_select_a_picture_before_cropping"))

      let cropper_opt = {
        destHeight: Number(this.destWidth), // uni.canvasToTempFilePath要求这些参数为数值
        destWidth: Number(this.destWidth),
        fileType: this.fileType,
      }
      this.cropper.getCropperImage(cropper_opt, (path, err) => {
        if (err) {
          uni.showModal({
            title: this.Pub.t("Kind_tips"),
            content: err.message,
          })
        } else {
          if (isPre) {
            uni.previewImage({
              current: "", // 当前显示图片的 http 链接
              urls: [path], // 需要预览的图片 http 链接列表
            })
          } else {
            uni.$emit("uAvatarCropper", path)
            this.$u.route({
              type: "back",
            })
          }
        }
      })
    },
    uploadTap() {
      const self = this
      uni.chooseImage({
        count: 1, // 默认9
        sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success: res => {
          self.src = res.tempFilePaths[0]
          //  获取裁剪图片资源后，给data添加src属性及其值

          self.cropper.pushOrign(this.src)
        },
      })
    },
  },
}
</script>

<style scoped lang="scss">
@mixin vue-flex($direction: row) {
  /* #ifndef APP-NVUE */
  display: flex;
  flex-direction: $direction;
  /* #endif */
}

.content {
  background: rgba(255, 255, 255, 1);
}

.cropper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
}

.cropper-buttons {
  background-color: #000000;
  color: #eee;
}

.cropper-wrapper {
  position: relative;
  @include vue-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #000;
}

.cropper-buttons {
  width: 100vw;
  @include vue-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 28rpx;
}

.cropper-buttons .upload,
.cropper-buttons .getCropperImage {
  width: 50%;
  text-align: center;
}

.cropper-buttons .upload {
  text-align: left;
  padding-left: 50rpx;
}

.cropper-buttons .getCropperImage {
  text-align: right;
  padding-right: 50rpx;
}
</style>
```

`weCropper.js`

```js
/**
 * we-cropper v1.3.9
 * (c) 2020 dlhandsome
 * @license MIT
 */
"use strict"

var device = void 0
var TOUCH_STATE = ["touchstarted", "touchmoved", "touchended"]

function firstLetterUpper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function setTouchState(instance) {
  var arg = [],
    len = arguments.length - 1
  while (len-- > 0) arg[len] = arguments[len + 1]

  TOUCH_STATE.forEach(function (key, i) {
    if (arg[i] !== undefined) {
      instance[key] = arg[i]
    }
  })
}

function validator(instance, o) {
  Object.defineProperties(instance, o)
}

function getDevice() {
  if (!device) {
    device = uni.getSystemInfoSync()
  }
  return device
}

var tmp = {}

var ref = getDevice()
var pixelRatio = ref.pixelRatio

var DEFAULT = {
  id: {
    default: "cropper",
    get: function get() {
      return tmp.id
    },
    set: function set(value) {
      if (typeof value !== "string") {
        console.error("id：" + value + " is invalid")
      }
      tmp.id = value
    },
  },
  width: {
    default: 750,
    get: function get() {
      return tmp.width
    },
    set: function set(value) {
      if (typeof value !== "number") {
        console.error("width：" + value + " is invalid")
      }
      tmp.width = value
    },
  },
  height: {
    default: 750,
    get: function get() {
      return tmp.height
    },
    set: function set(value) {
      if (typeof value !== "number") {
        console.error("height：" + value + " is invalid")
      }
      tmp.height = value
    },
  },
  pixelRatio: {
    default: pixelRatio,
    get: function get() {
      return tmp.pixelRatio
    },
    set: function set(value) {
      if (typeof value !== "number") {
        console.error("pixelRatio：" + value + " is invalid")
      }
      tmp.pixelRatio = value
    },
  },
  scale: {
    default: 2.5,
    get: function get() {
      return tmp.scale
    },
    set: function set(value) {
      if (typeof value !== "number") {
        console.error("scale：" + value + " is invalid")
      }
      tmp.scale = value
    },
  },
  zoom: {
    default: 5,
    get: function get() {
      return tmp.zoom
    },
    set: function set(value) {
      if (typeof value !== "number") {
        console.error("zoom：" + value + " is invalid")
      } else if (value < 0 || value > 10) {
        console.error("zoom should be ranged in 0 ~ 10")
      }
      tmp.zoom = value
    },
  },
  src: {
    default: "",
    get: function get() {
      return tmp.src
    },
    set: function set(value) {
      if (typeof value !== "string") {
        console.error("src：" + value + " is invalid")
      }
      tmp.src = value
    },
  },
  cut: {
    default: {},
    get: function get() {
      return tmp.cut
    },
    set: function set(value) {
      if (typeof value !== "object") {
        console.error("cut：" + value + " is invalid")
      }
      tmp.cut = value
    },
  },
  boundStyle: {
    default: {},
    get: function get() {
      return tmp.boundStyle
    },
    set: function set(value) {
      if (typeof value !== "object") {
        console.error("boundStyle：" + value + " is invalid")
      }
      tmp.boundStyle = value
    },
  },
  onReady: {
    default: null,
    get: function get() {
      return tmp.ready
    },
    set: function set(value) {
      tmp.ready = value
    },
  },
  onBeforeImageLoad: {
    default: null,
    get: function get() {
      return tmp.beforeImageLoad
    },
    set: function set(value) {
      tmp.beforeImageLoad = value
    },
  },
  onImageLoad: {
    default: null,
    get: function get() {
      return tmp.imageLoad
    },
    set: function set(value) {
      tmp.imageLoad = value
    },
  },
  onBeforeDraw: {
    default: null,
    get: function get() {
      return tmp.beforeDraw
    },
    set: function set(value) {
      tmp.beforeDraw = value
    },
  },
}

var ref$1 = getDevice()
var windowWidth = ref$1.windowWidth

function prepare() {
  var self = this

  // v1.4.0 版本中将不再自动绑定we-cropper实例
  self.attachPage = function () {
    var pages = getCurrentPages()
    // 获取到当前page上下文
    var pageContext = pages[pages.length - 1]
    // 把this依附在Page上下文的wecropper属性上，便于在page钩子函数中访问
    Object.defineProperty(pageContext, "wecropper", {
      get: function get() {
        console.warn("Instance will not be automatically bound to the page after v1.4.0\n\n" + "Please use a custom instance name instead\n\n" + "Example: \n" + "this.mycropper = new WeCropper(options)\n\n" + "// ...\n" + "this.mycropper.getCropperImage()")
        return self
      },
      configurable: true,
    })
  }

  self.createCtx = function () {
    var id = self.id
    var targetId = self.targetId

    if (id) {
      self.ctx = self.ctx || uni.createCanvasContext(id)
      self.targetCtx = self.targetCtx || uni.createCanvasContext(targetId)
    } else {
      console.error("constructor: create canvas context failed, 'id' must be valuable")
    }
  }

  self.deviceRadio = windowWidth / 750
}

var commonjsGlobal = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {}

function createCommonjsModule(fn, module) {
  return (
    (module = {
      exports: {},
    }),
    fn(module, module.exports),
    module.exports
  )
}

var tools = createCommonjsModule(function (module, exports) {
  /**
   * String type check
   */
  exports.isStr = function (v) {
    return typeof v === "string"
  }
  /**
   * Number type check
   */
  exports.isNum = function (v) {
    return typeof v === "number"
  }
  /**
   * Array type check
   */
  exports.isArr = Array.isArray
  /**
   * undefined type check
   */
  exports.isUndef = function (v) {
    return v === undefined
  }

  exports.isTrue = function (v) {
    return v === true
  }

  exports.isFalse = function (v) {
    return v === false
  }
  /**
   * Function type check
   */
  exports.isFunc = function (v) {
    return typeof v === "function"
  }
  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  exports.isObj = exports.isObject = function (obj) {
    return obj !== null && typeof obj === "object"
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  var _toString = Object.prototype.toString
  exports.isPlainObject = function (obj) {
    return _toString.call(obj) === "[object Object]"
  }

  /**
   * Check whether the object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty
  exports.hasOwn = function (obj, key) {
    return hasOwnProperty.call(obj, key)
  }

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
   */
  exports.noop = function (a, b, c) {}

  /**
   * Check if val is a valid array index.
   */
  exports.isValidArrayIndex = function (val) {
    var n = parseFloat(String(val))
    return n >= 0 && Math.floor(n) === n && isFinite(val)
  }
})

var tools_7 = tools.isFunc
var tools_10 = tools.isPlainObject

var EVENT_TYPE = ["ready", "beforeImageLoad", "beforeDraw", "imageLoad"]

function observer() {
  var self = this

  self.on = function (event, fn) {
    if (EVENT_TYPE.indexOf(event) > -1) {
      if (tools_7(fn)) {
        event === "ready" ? fn(self) : (self["on" + firstLetterUpper(event)] = fn)
      }
    } else {
      console.error("event: " + event + " is invalid")
    }
    return self
  }
}

function wxPromise(fn) {
  return function (obj) {
    var args = [],
      len = arguments.length - 1
    while (len-- > 0) args[len] = arguments[len + 1]

    if (obj === void 0) obj = {}
    return new Promise(function (resolve, reject) {
      obj.success = function (res) {
        resolve(res)
      }
      obj.fail = function (err) {
        reject(err)
      }
      fn.apply(void 0, [obj].concat(args))
    })
  }
}

function draw(ctx, reserve) {
  if (reserve === void 0) reserve = false

  return new Promise(function (resolve) {
    ctx.draw(reserve, resolve)
  })
}

var getImageInfo = wxPromise(uni.getImageInfo)

var canvasToTempFilePath = wxPromise(uni.canvasToTempFilePath)

var base64 = createCommonjsModule(function (module, exports) {
  /*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
  ;(function (root) {
    // Detect free variables `exports`.
    var freeExports = "object" == "object" && exports

    // Detect free variable `module`.
    var freeModule = "object" == "object" && module && module.exports == freeExports && module

    // Detect free variable `global`, from Node.js or Browserified code, and use
    // it as `root`.
    var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal
    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
      root = freeGlobal
    }

    /*--------------------------------------------------------------------------*/

    var InvalidCharacterError = function (message) {
      this.message = message
    }
    InvalidCharacterError.prototype = new Error()
    InvalidCharacterError.prototype.name = "InvalidCharacterError"

    var error = function (message) {
      // Note: the error messages used throughout this file match those used by
      // the native `atob`/`btoa` implementation in Chromium.
      throw new InvalidCharacterError(message)
    }

    var TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    // http://whatwg.org/html/common-microsyntaxes.html#space-character
    var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g

    // `decode` is designed to be fully compatible with `atob` as described in the
    // HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
    // The optimized base64-decoding algorithm used is based on @atk’s excellent
    // implementation. https://gist.github.com/atk/1020396
    var decode = function (input) {
      input = String(input).replace(REGEX_SPACE_CHARACTERS, "")
      var length = input.length
      if (length % 4 == 0) {
        input = input.replace(/==?$/, "")
        length = input.length
      }
      if (
        length % 4 == 1 ||
        // http://whatwg.org/C#alphanumeric-ascii-characters
        /[^+a-zA-Z0-9/]/.test(input)
      ) {
        error("Invalid character: the string to be decoded is not correctly encoded.")
      }
      var bitCounter = 0
      var bitStorage
      var buffer
      var output = ""
      var position = -1
      while (++position < length) {
        buffer = TABLE.indexOf(input.charAt(position))
        bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer
        // Unless this is the first of a group of 4 characters…
        if (bitCounter++ % 4) {
          // …convert the first 8 bits to a single ASCII character.
          output += String.fromCharCode(0xff & (bitStorage >> ((-2 * bitCounter) & 6)))
        }
      }
      return output
    }

    // `encode` is designed to be fully compatible with `btoa` as described in the
    // HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa
    var encode = function (input) {
      input = String(input)
      if (/[^\0-\xFF]/.test(input)) {
        // Note: no need to special-case astral symbols here, as surrogates are
        // matched, and the input is supposed to only contain ASCII anyway.
        error("The string to be encoded contains characters outside of the " + "Latin1 range.")
      }
      var padding = input.length % 3
      var output = ""
      var position = -1
      var a
      var b
      var c
      var buffer
      // Make sure any padding is handled outside of the loop.
      var length = input.length - padding

      while (++position < length) {
        // Read three bytes, i.e. 24 bits.
        a = input.charCodeAt(position) << 16
        b = input.charCodeAt(++position) << 8
        c = input.charCodeAt(++position)
        buffer = a + b + c
        // Turn the 24 bits into four chunks of 6 bits each, and append the
        // matching character for each of them to the output.
        output += TABLE.charAt((buffer >> 18) & 0x3f) + TABLE.charAt((buffer >> 12) & 0x3f) + TABLE.charAt((buffer >> 6) & 0x3f) + TABLE.charAt(buffer & 0x3f)
      }

      if (padding == 2) {
        a = input.charCodeAt(position) << 8
        b = input.charCodeAt(++position)
        buffer = a + b
        output += TABLE.charAt(buffer >> 10) + TABLE.charAt((buffer >> 4) & 0x3f) + TABLE.charAt((buffer << 2) & 0x3f) + "="
      } else if (padding == 1) {
        buffer = input.charCodeAt(position)
        output += TABLE.charAt(buffer >> 2) + TABLE.charAt((buffer << 4) & 0x3f) + "=="
      }

      return output
    }

    var base64 = {
      encode: encode,
      decode: decode,
      version: "0.1.0",
    }

    // Some AMD build optimizers, like r.js, check for specific condition patterns
    // like the following:
    if (typeof undefined == "function" && typeof undefined.amd == "object" && undefined.amd) {
      undefined(function () {
        return base64
      })
    } else if (freeExports && !freeExports.nodeType) {
      if (freeModule) {
        // in Node.js or RingoJS v0.8.0+
        freeModule.exports = base64
      } else {
        // in Narwhal or RingoJS v0.7.0-
        for (var key in base64) {
          base64.hasOwnProperty(key) && (freeExports[key] = base64[key])
        }
      }
    } else {
      // in Rhino or a web browser
      root.base64 = base64
    }
  })(commonjsGlobal)
})

function makeURI(strData, type) {
  return "data:" + type + ";base64," + strData
}

function fixType(type) {
  type = type.toLowerCase().replace(/jpg/i, "jpeg")
  var r = type.match(/png|jpeg|bmp|gif/)[0]
  return "image/" + r
}

function encodeData(data) {
  var str = ""
  if (typeof data === "string") {
    str = data
  } else {
    for (var i = 0; i < data.length; i++) {
      str += String.fromCharCode(data[i])
    }
  }
  return base64.encode(str)
}

/**
 * 获取图像区域隐含的像素数据
 * @param canvasId canvas标识
 * @param x 将要被提取的图像数据矩形区域的左上角 x 坐标
 * @param y 将要被提取的图像数据矩形区域的左上角 y 坐标
 * @param width 将要被提取的图像数据矩形区域的宽度
 * @param height 将要被提取的图像数据矩形区域的高度
 * @param done 完成回调
 */
function getImageData(canvasId, x, y, width, height, done) {
  uni.canvasGetImageData({
    canvasId: canvasId,
    x: x,
    y: y,
    width: width,
    height: height,
    success: function success(res) {
      done(res, null)
    },
    fail: function fail(res) {
      done(null, res)
    },
  })
}

/**
 * 生成bmp格式图片
 * 按照规则生成图片响应头和响应体
 * @param oData 用来描述 canvas 区域隐含的像素数据 { data, width, height } = oData
 * @returns {*} base64字符串
 */
function genBitmapImage(oData) {
  //
  // BITMAPFILEHEADER: http://msdn.microsoft.com/en-us/library/windows/desktop/dd183374(v=vs.85).aspx
  // BITMAPINFOHEADER: http://msdn.microsoft.com/en-us/library/dd183376.aspx
  //
  var biWidth = oData.width
  var biHeight = oData.height
  var biSizeImage = biWidth * biHeight * 3
  var bfSize = biSizeImage + 54 // total header size = 54 bytes

  //
  //  typedef struct tagBITMAPFILEHEADER {
  //  	WORD bfType;
  //  	DWORD bfSize;
  //  	WORD bfReserved1;
  //  	WORD bfReserved2;
  //  	DWORD bfOffBits;
  //  } BITMAPFILEHEADER;
  //
  var BITMAPFILEHEADER = [
    // WORD bfType -- The file type signature; must be "BM"
    0x42,
    0x4d,
    // DWORD bfSize -- The size, in bytes, of the bitmap file
    bfSize & 0xff,
    (bfSize >> 8) & 0xff,
    (bfSize >> 16) & 0xff,
    (bfSize >> 24) & 0xff,
    // WORD bfReserved1 -- Reserved; must be zero
    0,
    0,
    // WORD bfReserved2 -- Reserved; must be zero
    0,
    0,
    // DWORD bfOffBits -- The offset, in bytes, from the beginning of the BITMAPFILEHEADER structure to the bitmap bits.
    54,
    0,
    0,
    0,
  ]

  //
  //  typedef struct tagBITMAPINFOHEADER {
  //  	DWORD biSize;
  //  	LONG  biWidth;
  //  	LONG  biHeight;
  //  	WORD  biPlanes;
  //  	WORD  biBitCount;
  //  	DWORD biCompression;
  //  	DWORD biSizeImage;
  //  	LONG  biXPelsPerMeter;
  //  	LONG  biYPelsPerMeter;
  //  	DWORD biClrUsed;
  //  	DWORD biClrImportant;
  //  } BITMAPINFOHEADER, *PBITMAPINFOHEADER;
  //
  var BITMAPINFOHEADER = [
    // DWORD biSize -- The number of bytes required by the structure
    40,
    0,
    0,
    0,
    // LONG biWidth -- The width of the bitmap, in pixels
    biWidth & 0xff,
    (biWidth >> 8) & 0xff,
    (biWidth >> 16) & 0xff,
    (biWidth >> 24) & 0xff,
    // LONG biHeight -- The height of the bitmap, in pixels
    biHeight & 0xff,
    (biHeight >> 8) & 0xff,
    (biHeight >> 16) & 0xff,
    (biHeight >> 24) & 0xff,
    // WORD biPlanes -- The number of planes for the target device. This value must be set to 1
    1,
    0,
    // WORD biBitCount -- The number of bits-per-pixel, 24 bits-per-pixel -- the bitmap
    // has a maximum of 2^24 colors (16777216, Truecolor)
    24,
    0,
    // DWORD biCompression -- The type of compression, BI_RGB (code 0) -- uncompressed
    0,
    0,
    0,
    0,
    // DWORD biSizeImage -- The size, in bytes, of the image. This may be set to zero for BI_RGB bitmaps
    biSizeImage & 0xff,
    (biSizeImage >> 8) & 0xff,
    (biSizeImage >> 16) & 0xff,
    (biSizeImage >> 24) & 0xff,
    // LONG biXPelsPerMeter, unused
    0,
    0,
    0,
    0,
    // LONG biYPelsPerMeter, unused
    0,
    0,
    0,
    0,
    // DWORD biClrUsed, the number of color indexes of palette, unused
    0,
    0,
    0,
    0,
    // DWORD biClrImportant, unused
    0,
    0,
    0,
    0,
  ]

  var iPadding = (4 - ((biWidth * 3) % 4)) % 4

  var aImgData = oData.data

  var strPixelData = ""
  var biWidth4 = biWidth << 2
  var y = biHeight
  var fromCharCode = String.fromCharCode

  do {
    var iOffsetY = biWidth4 * (y - 1)
    var strPixelRow = ""
    for (var x = 0; x < biWidth; x++) {
      var iOffsetX = x << 2
      strPixelRow += fromCharCode(aImgData[iOffsetY + iOffsetX + 2]) + fromCharCode(aImgData[iOffsetY + iOffsetX + 1]) + fromCharCode(aImgData[iOffsetY + iOffsetX])
    }

    for (var c = 0; c < iPadding; c++) {
      strPixelRow += String.fromCharCode(0)
    }

    strPixelData += strPixelRow
  } while (--y)

  var strEncoded = encodeData(BITMAPFILEHEADER.concat(BITMAPINFOHEADER)) + encodeData(strPixelData)

  return strEncoded
}

/**
 * 转换为图片base64
 * @param canvasId canvas标识
 * @param x 将要被提取的图像数据矩形区域的左上角 x 坐标
 * @param y 将要被提取的图像数据矩形区域的左上角 y 坐标
 * @param width 将要被提取的图像数据矩形区域的宽度
 * @param height 将要被提取的图像数据矩形区域的高度
 * @param type 转换图片类型
 * @param done 完成回调
 */
function convertToImage(canvasId, x, y, width, height, type, done) {
  if (done === void 0) done = function () {}

  if (type === undefined) {
    type = "png"
  }
  type = fixType(type)
  if (/bmp/.test(type)) {
    getImageData(canvasId, x, y, width, height, function (data, err) {
      var strData = genBitmapImage(data)
      tools_7(done) && done(makeURI(strData, "image/" + type), err)
    })
  } else {
    console.error("暂不支持生成'" + type + "'类型的base64图片")
  }
}

var CanvasToBase64 = {
  convertToImage: convertToImage,
  // convertToPNG: function (width, height, done) {
  //   return convertToImage(width, height, 'png', done)
  // },
  // convertToJPEG: function (width, height, done) {
  //   return convertToImage(width, height, 'jpeg', done)
  // },
  // convertToGIF: function (width, height, done) {
  //   return convertToImage(width, height, 'gif', done)
  // },
  convertToBMP: function (ref, done) {
    if (ref === void 0) ref = {}
    var canvasId = ref.canvasId
    var x = ref.x
    var y = ref.y
    var width = ref.width
    var height = ref.height
    if (done === void 0) done = function () {}

    return convertToImage(canvasId, x, y, width, height, "bmp", done)
  },
}

function methods() {
  var self = this

  var boundWidth = self.width // 裁剪框默认宽度，即整个画布宽度
  var boundHeight = self.height // 裁剪框默认高度，即整个画布高度

  var id = self.id
  var targetId = self.targetId
  var pixelRatio = self.pixelRatio

  var ref = self.cut
  var x = ref.x
  if (x === void 0) x = 0
  var y = ref.y
  if (y === void 0) y = 0
  var width = ref.width
  if (width === void 0) width = boundWidth
  var height = ref.height
  if (height === void 0) height = boundHeight

  self.updateCanvas = function (done) {
    if (self.croperTarget) {
      //  画布绘制图片
      self.ctx.drawImage(self.croperTarget, self.imgLeft, self.imgTop, self.scaleWidth, self.scaleHeight)
    }
    tools_7(self.onBeforeDraw) && self.onBeforeDraw(self.ctx, self)

    self.setBoundStyle(self.boundStyle) //	设置边界样式

    self.ctx.draw(false, done)
    return self
  }

  self.pushOrigin = self.pushOrign = function (src) {
    self.src = src

    tools_7(self.onBeforeImageLoad) && self.onBeforeImageLoad(self.ctx, self)

    return getImageInfo({
      src: src,
    })
      .then(function (res) {
        var innerAspectRadio = res.width / res.height
        var customAspectRadio = width / height

        self.croperTarget = res.path

        if (innerAspectRadio < customAspectRadio) {
          self.rectX = x
          self.baseWidth = width
          self.baseHeight = width / innerAspectRadio
          self.rectY = y - Math.abs((height - self.baseHeight) / 2)
        } else {
          self.rectY = y
          self.baseWidth = height * innerAspectRadio
          self.baseHeight = height
          self.rectX = x - Math.abs((width - self.baseWidth) / 2)
        }

        self.imgLeft = self.rectX
        self.imgTop = self.rectY
        self.scaleWidth = self.baseWidth
        self.scaleHeight = self.baseHeight

        self.update()

        return new Promise(function (resolve) {
          self.updateCanvas(resolve)
        })
      })
      .then(function () {
        tools_7(self.onImageLoad) && self.onImageLoad(self.ctx, self)
      })
  }

  self.removeImage = function () {
    self.src = ""
    self.croperTarget = ""
    return draw(self.ctx)
  }

  self.getCropperBase64 = function (done) {
    if (done === void 0) done = function () {}

    CanvasToBase64.convertToBMP(
      {
        canvasId: id,
        x: x,
        y: y,
        width: width,
        height: height,
      },
      done
    )
  }

  self.getCropperImage = function (opt, fn) {
    var customOptions = opt

    var canvasOptions = {
      canvasId: id,
      x: x,
      y: y,
      width: width,
      height: height,
    }

    var task = function () {
      return Promise.resolve()
    }

    if (tools_10(customOptions) && customOptions.original) {
      // original mode
      task = function () {
        self.targetCtx.drawImage(self.croperTarget, self.imgLeft * pixelRatio, self.imgTop * pixelRatio, self.scaleWidth * pixelRatio, self.scaleHeight * pixelRatio)

        canvasOptions = {
          canvasId: targetId,
          x: x * pixelRatio,
          y: y * pixelRatio,
          width: width * pixelRatio,
          height: height * pixelRatio,
        }

        return draw(self.targetCtx)
      }
    }

    return task()
      .then(function () {
        if (tools_10(customOptions)) {
          canvasOptions = Object.assign({}, canvasOptions, customOptions)
        }

        if (tools_7(customOptions)) {
          fn = customOptions
        }

        var arg = canvasOptions.componentContext ? [canvasOptions, canvasOptions.componentContext] : [canvasOptions]

        return canvasToTempFilePath.apply(null, arg)
      })
      .then(function (res) {
        var tempFilePath = res.tempFilePath

        return tools_7(fn) ? fn.call(self, tempFilePath, null) : tempFilePath
      })
      .catch(function (err) {
        if (tools_7(fn)) {
          fn.call(self, null, err)
        } else {
          throw err
        }
      })
  }
}

/**
 * 获取最新缩放值
 * @param oldScale 上一次触摸结束后的缩放值
 * @param oldDistance 上一次触摸结束后的双指距离
 * @param zoom 缩放系数
 * @param touch0 第一指touch对象
 * @param touch1 第二指touch对象
 * @returns {*}
 */
var getNewScale = function (oldScale, oldDistance, zoom, touch0, touch1) {
  var xMove, yMove, newDistance
  // 计算二指最新距离
  xMove = Math.round(touch1.x - touch0.x)
  yMove = Math.round(touch1.y - touch0.y)
  newDistance = Math.round(Math.sqrt(xMove * xMove + yMove * yMove))

  return oldScale + 0.001 * zoom * (newDistance - oldDistance)
}

function update() {
  var self = this

  if (!self.src) {
    return
  }

  self.__oneTouchStart = function (touch) {
    self.touchX0 = Math.round(touch.x)
    self.touchY0 = Math.round(touch.y)
  }

  self.__oneTouchMove = function (touch) {
    var xMove, yMove
    // 计算单指移动的距离
    if (self.touchended) {
      return self.updateCanvas()
    }
    xMove = Math.round(touch.x - self.touchX0)
    yMove = Math.round(touch.y - self.touchY0)

    var imgLeft = Math.round(self.rectX + xMove)
    var imgTop = Math.round(self.rectY + yMove)

    self.outsideBound(imgLeft, imgTop)

    self.updateCanvas()
  }

  self.__twoTouchStart = function (touch0, touch1) {
    var xMove, yMove, oldDistance

    self.touchX1 = Math.round(self.rectX + self.scaleWidth / 2)
    self.touchY1 = Math.round(self.rectY + self.scaleHeight / 2)

    // 计算两指距离
    xMove = Math.round(touch1.x - touch0.x)
    yMove = Math.round(touch1.y - touch0.y)
    oldDistance = Math.round(Math.sqrt(xMove * xMove + yMove * yMove))

    self.oldDistance = oldDistance
  }

  self.__twoTouchMove = function (touch0, touch1) {
    var oldScale = self.oldScale
    var oldDistance = self.oldDistance
    var scale = self.scale
    var zoom = self.zoom

    self.newScale = getNewScale(oldScale, oldDistance, zoom, touch0, touch1)

    //  设定缩放范围
    self.newScale <= 1 && (self.newScale = 1)
    self.newScale >= scale && (self.newScale = scale)

    self.scaleWidth = Math.round(self.newScale * self.baseWidth)
    self.scaleHeight = Math.round(self.newScale * self.baseHeight)
    var imgLeft = Math.round(self.touchX1 - self.scaleWidth / 2)
    var imgTop = Math.round(self.touchY1 - self.scaleHeight / 2)

    self.outsideBound(imgLeft, imgTop)

    self.updateCanvas()
  }

  self.__xtouchEnd = function () {
    self.oldScale = self.newScale
    self.rectX = self.imgLeft
    self.rectY = self.imgTop
  }
}

var handle = {
  //  图片手势初始监测
  touchStart: function touchStart(e) {
    var self = this
    var ref = e.touches
    var touch0 = ref[0]
    var touch1 = ref[1]

    if (!self.src) {
      return
    }
    setTouchState(self, true, null, null)

    // 计算第一个触摸点的位置，并参照改点进行缩放
    self.__oneTouchStart(touch0)
    // 两指手势触发
    if (Object.keys(e.touches).length >= 2) {
      self.__twoTouchStart(touch0, touch1)
    }
  },

  //  图片手势动态缩放
  touchMove: function touchMove(e) {
    var self = this
    var ref = e.touches
    var touch0 = ref[0]
    var touch1 = ref[1]

    if (!self.src) {
      return
    }

    setTouchState(self, null, true)

    // 单指手势时触发
    if (Object.keys(e.touches).length === 1) {
      self.__oneTouchMove(touch0)
    }
    // 两指手势触发
    if (Object.keys(e.touches).length >= 2) {
      self.__twoTouchMove(touch0, touch1)
    }
  },

  touchEnd: function touchEnd(e) {
    var self = this

    if (!self.src) {
      return
    }

    setTouchState(self, false, false, true)
    self.__xtouchEnd()
  },
}

function cut() {
  var self = this
  var boundWidth = self.width // 裁剪框默认宽度，即整个画布宽度
  var boundHeight = self.height
  // 裁剪框默认高度，即整个画布高度
  var ref = self.cut
  var x = ref.x
  if (x === void 0) x = 0
  var y = ref.y
  if (y === void 0) y = 0
  var width = ref.width
  if (width === void 0) width = boundWidth
  var height = ref.height
  if (height === void 0) height = boundHeight

  /**
   * 设置边界
   * @param imgLeft 图片左上角横坐标值
   * @param imgTop 图片左上角纵坐标值
   */
  self.outsideBound = function (imgLeft, imgTop) {
    self.imgLeft = imgLeft >= x ? x : self.scaleWidth + imgLeft - x <= width ? x + width - self.scaleWidth : imgLeft

    self.imgTop = imgTop >= y ? y : self.scaleHeight + imgTop - y <= height ? y + height - self.scaleHeight : imgTop
  }

  /**
   * 设置边界样式
   * @param color	边界颜色
   */
  self.setBoundStyle = function (ref) {
    if (ref === void 0) ref = {}
    var color = ref.color
    if (color === void 0) color = "#04b00f"
    var mask = ref.mask
    if (mask === void 0) mask = "rgba(0, 0, 0, 0.3)"
    var lineWidth = ref.lineWidth
    if (lineWidth === void 0) lineWidth = 1

    var half = lineWidth / 2
    var boundOption = [
      {
        start: {
          x: x - half,
          y: y + 10 - half,
        },
        step1: {
          x: x - half,
          y: y - half,
        },
        step2: {
          x: x + 10 - half,
          y: y - half,
        },
      },
      {
        start: {
          x: x - half,
          y: y + height - 10 + half,
        },
        step1: {
          x: x - half,
          y: y + height + half,
        },
        step2: {
          x: x + 10 - half,
          y: y + height + half,
        },
      },
      {
        start: {
          x: x + width - 10 + half,
          y: y - half,
        },
        step1: {
          x: x + width + half,
          y: y - half,
        },
        step2: {
          x: x + width + half,
          y: y + 10 - half,
        },
      },
      {
        start: {
          x: x + width + half,
          y: y + height - 10 + half,
        },
        step1: {
          x: x + width + half,
          y: y + height + half,
        },
        step2: {
          x: x + width - 10 + half,
          y: y + height + half,
        },
      },
    ]

    // 绘制半透明层
    self.ctx.beginPath()
    self.ctx.setFillStyle(mask)
    self.ctx.fillRect(0, 0, x, boundHeight)
    self.ctx.fillRect(x, 0, width, y)
    self.ctx.fillRect(x, y + height, width, boundHeight - y - height)
    self.ctx.fillRect(x + width, 0, boundWidth - x - width, boundHeight)
    self.ctx.fill()

    boundOption.forEach(function (op) {
      self.ctx.beginPath()
      self.ctx.setStrokeStyle(color)
      self.ctx.setLineWidth(lineWidth)
      self.ctx.moveTo(op.start.x, op.start.y)
      self.ctx.lineTo(op.step1.x, op.step1.y)
      self.ctx.lineTo(op.step2.x, op.step2.y)
      self.ctx.stroke()
    })
  }
}

var version = "1.3.9"

var WeCropper = function WeCropper(params) {
  var self = this
  var _default = {}

  validator(self, DEFAULT)

  Object.keys(DEFAULT).forEach(function (key) {
    _default[key] = DEFAULT[key].default
  })
  Object.assign(self, _default, params)

  self.prepare()
  self.attachPage()
  self.createCtx()
  self.observer()
  self.cutt()
  self.methods()
  self.init()
  self.update()

  return self
}

WeCropper.prototype.init = function init() {
  var self = this
  var src = self.src

  self.version = version

  typeof self.onReady === "function" && self.onReady(self.ctx, self)

  if (src) {
    self.pushOrign(src)
  } else {
    self.updateCanvas()
  }
  setTouchState(self, false, false, false)

  self.oldScale = 1
  self.newScale = 1

  return self
}

Object.assign(WeCropper.prototype, handle)

WeCropper.prototype.prepare = prepare
WeCropper.prototype.observer = observer
WeCropper.prototype.methods = methods
WeCropper.prototype.cutt = cut
WeCropper.prototype.update = update

export default WeCropper
```

### img-upload.vue

```vue
<template>
  <view class="u-upload" v-if="!disabled">
    <view
      v-if="showUploadList"
      class="u-list-item u-preview-wrap"
      v-for="(item, index) in lists"
      :key="index"
      :style="{
        width: $u.addUnit(width),
        height: $u.addUnit(height),
      }"
    >
      <view
        v-if="deletable"
        class="u-delete-icon"
        @tap.stop="deleteItem(index)"
        :style="{
          background: delBgColor,
        }"
      >
        <u-icon class="u-icon" :name="delIcon" size="20" :color="delColor"></u-icon>
      </view>
      <!-- <view
				v-if="item.progress >= 100"
				class="u-success-icon"
			>
				<u-icon class="u-icon" :name="successIcon" size="20" :color="successColor"></u-icon>
			</view> -->
      <u-line-progress v-if="showProgress && item.progress > 0 && item.progress != 100 && !item.error" :show-percent="false" height="16" class="u-progress" :percent="item.progress"></u-line-progress>
      <view @tap.stop="retry(index)" v-if="item.error" class="u-error-btn">点击重试</view>
      <image @tap.stop="doPreviewImage(item.url || item.path, index)" class="u-preview-image" v-if="!item.isImage" :src="item.url || item.path" :mode="imageMode"></image>
    </view>
    <slot name="file" :file="lists"></slot>
    <view style="display: inline-block;" @tap="selectFile" v-if="maxCount > lists.length">
      <slot name="addBtn"></slot>
      <view
        v-if="!customBtn"
        class="u-list-item u-add-wrap"
        hover-class="u-add-wrap__hover"
        hover-stay-time="150"
        :style="{
          width: $u.addUnit(width),
          height: $u.addUnit(height),
        }"
      >
        <u-icon name="plus" class="u-add-btn" size="40"></u-icon>
        <view class="u-add-tips">{{ uploadText }}</view>
      </view>
    </view>
  </view>
</template>

<script>
/**
 * upload 图片上传
 * @description 该组件用于上传图片场景
 * @tutorial https://www.uviewui.com/components/upload.html
 * @property {String} action 服务器上传地址
 * @property {String Number} max-count 最大选择图片的数量（默认99）
 * @property {Boolean} custom-btn 如果需要自定义选择图片的按钮，设置为true（默认false）
 * @property {Boolean} show-progress 是否显示进度条（默认true）
 * @property {Boolean} disabled 是否启用(显示/移仓)组件（默认false）
 * @property {String} image-mode 预览图片等显示模式，可选值为uni的image的mode属性值（默认aspectFill）
 * @property {String} del-icon 右上角删除图标名称，只能为uView内置图标
 * @property {String} del-bg-color 右上角关闭按钮的背景颜色
 * @property {String | Number} index 在各个回调事件中的最后一个参数返回，用于区别是哪一个组件的事件
 * @property {String} del-color 右上角关闭按钮图标的颜色
 * @property {Object} header 上传携带的头信息，对象形式
 * @property {Object} form-data 上传额外携带的参数
 * @property {String} name 上传文件的字段名，供后端获取使用（默认file）
 * @property {Array<String>} size-type original 原图，compressed 压缩图，默认二者都有（默认['original', 'compressed']）
 * @property {Array<String>} source-type 选择图片的来源，album-从相册选图，camera-使用相机，默认二者都有（默认['album', 'camera']）
 * @property {Boolean} preview-full-image	是否可以通过uni.previewImage预览已选择的图片（默认true）
 * @property {Boolean} multiple	是否开启图片多选，部分安卓机型不支持（默认true）
 * @property {Boolean} deletable 是否显示删除图片的按钮（默认true）
 * @property {String Number} max-size 选择单个文件的最大大小，单位B(byte)，默认不限制（默认Number.MAX_VALUE）
 * @property {Array<Object>} file-list 默认显示的图片列表，数组元素为对象，必须提供url属性
 * @property {Boolean} upload-text 选择图片按钮的提示文字（默认“选择图片”）
 * @property {Boolean} auto-upload 选择完图片是否自动上传，见上方说明（默认true）
 * @property {Boolean} show-tips 特殊情况下是否自动提示toast，见上方说明（默认true）
 * @property {Boolean} show-upload-list 是否显示组件内部的图片预览（默认true）
 * @event {Function} on-oversize 图片大小超出最大允许大小
 * @event {Function} on-preview 全屏预览图片时触发
 * @event {Function} on-remove 移除图片时触发
 * @event {Function} on-success 图片上传成功时触发
 * @event {Function} on-change 图片上传后，无论成功或者失败都会触发
 * @event {Function} on-error 图片上传失败时触发
 * @event {Function} on-progress 图片上传过程中的进度变化过程触发
 * @event {Function} on-uploaded 所有图片上传完毕触发
 * @event {Function} on-choose-complete 每次选择图片后触发，只是让外部可以得知每次选择后，内部的文件列表
 * @event {Function} on-list-change 当内部文件列表被加入文件、移除文件，或手动调用clear方法时触发
 * @event {Function} on-choose-fail 选择文件出错时触发，比如选择文件时取消了操作，只在微信和APP有效
 * @example <u-upload :action="action" :file-list="fileList" ></u-upload>
 */
export default {
  name: "u-upload",
  emits: ["update:file-list", "on-oversize", "on-list-change", "on-preview", "on-remove", "on-success", "on-change", "on-error", "on-progress", "on-uploaded", "on-choose-complete", "on-choose-fail"],
  props: {
    //是否显示组件自带的图片预览功能
    showUploadList: {
      type: Boolean,
      default: true,
    },
    // 后端地址
    action: {
      type: String,
      default: "",
    },
    // 最大上传数量
    maxCount: {
      type: [String, Number],
      default: 52,
    },
    //  是否显示进度条
    showProgress: {
      type: Boolean,
      default: true,
    },
    // 是否启用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 预览上传的图片时的裁剪模式，和image组件mode属性一致
    imageMode: {
      type: String,
      default: "aspectFill",
    },
    // 头部信息
    header: {
      type: Object,
      default() {
        return {}
      },
    },
    // 额外携带的参数
    formData: {
      type: Object,
      default() {
        return {}
      },
    },
    // 上传的文件字段名
    name: {
      type: String,
      default: "file",
    },
    // 所选的图片的尺寸, 可选值为original compressed
    sizeType: {
      type: Array,
      default() {
        return ["original", "compressed"]
      },
    },
    sourceType: {
      type: Array,
      default() {
        return ["album", "camera"]
      },
    },
    // 是否在点击预览图后展示全屏图片预览
    previewFullImage: {
      type: Boolean,
      default: true,
    },
    // 是否开启图片多选，部分安卓机型不支持
    multiple: {
      type: Boolean,
      default: true,
    },
    // 是否展示删除按钮
    deletable: {
      type: Boolean,
      default: true,
    },
    // 文件大小限制，单位为byte
    maxSize: {
      type: [String, Number],
      default: Number.MAX_VALUE,
    },
    // 显示已上传的文件列表
    fileList: {
      type: Array,
      default() {
        return []
      },
    },
    // 上传区域的提示文字
    uploadText: {
      type: String,
      default: "选择图片",
    },
    // 是否自动上传
    autoUpload: {
      type: Boolean,
      default: true,
    },
    // 是否显示toast消息提示
    showTips: {
      type: Boolean,
      default: true,
    },
    // 是否通过slot自定义传入选择图标的按钮
    customBtn: {
      type: Boolean,
      default: false,
    },
    // 内部预览图片区域和选择图片按钮的区域宽度
    width: {
      type: [String, Number],
      default: 200,
    },
    // 内部预览图片区域和选择图片按钮的区域高度
    height: {
      type: [String, Number],
      default: 200,
    },
    // 右上角关闭按钮的背景颜色
    delBgColor: {
      type: String,
      default: "#fa3534",
    },
    // 右上角关闭按钮的叉号图标的颜色
    delColor: {
      type: String,
      default: "#ffffff",
    },
    // 右上角删除图标名称，只能为uView内置图标
    delIcon: {
      type: String,
      default: "close",
    },
    // 右下角成功图标名称，只能为uView内置图标
    successIcon: {
      type: String,
      default: "checkbox-mark",
    },
    // 右下角成功的叉号图标的颜色
    successColor: {
      type: String,
      default: "#ffffff",
    },
    // 如果上传后的返回值为json字符串，是否自动转json
    toJson: {
      type: Boolean,
      default: true,
    },
    // 上传前的钩子，每个文件上传前都会执行
    beforeUpload: {
      type: Function,
      default: null,
    },
    // 移除文件前的钩子
    beforeRemove: {
      type: Function,
      default: null,
    },
    // 允许上传的图片后缀
    limitType: {
      type: Array,
      default() {
        // 支付宝小程序真机选择图片的后缀为"image"
        // https://opendocs.alipay.com/mini/api/media-image
        return ["png", "jpg", "jpeg", "webp", "gif", "image"]
      },
    },
    // 在各个回调事件中的最后一个参数返回，用于区别是哪一个组件的事件
    index: {
      type: [Number, String],
      default: "",
    },
  },
  mounted() {},
  data() {
    return {
      lists: [],
      isInCount: true,
      uploading: false,
    }
  },
  watch: {
    fileList: {
      immediate: true,
      handler(val) {
        let that = this
        let lists = JSON.parse(JSON.stringify(that.lists))
        val.map(value => {
          // 首先检查内部是否已经添加过这张图片，因为外部绑定了一个对象给fileList的话(对象引用)，进行修改外部fileList
          // 时，会触发watch，导致重新把原来的图片再次添加到this.lists
          // 数组的some方法意思是，只要数组元素有任意一个元素条件符合，就返回true，而另一个数组的every方法的意思是数组所有元素都符合条件才返回true
          let tmp = lists.some(val => {
            return val.url == value.url
          })
          // 如果内部没有这个图片(tmp为false)，则添加到内部
          if (!tmp) {
            lists.push({
              url: value.url,
              error: false,
              progress: 100,
            })
          }
        })
        that.lists = JSON.parse(JSON.stringify(lists))
      },
    },
    // 监听lists的变化，发出事件
    lists: {
      deep: true,
      handler(n) {
        this.$emit("update:file-list", n)
        this.$emit("on-list-change", n, this.index)
      },
    },
  },
  methods: {
    // 清除列表
    clear() {
      this.lists = []
    },
    // 重新上传队列中上传失败的所有文件
    reUpload() {
      this.uploadFile()
    },
    // 选择图片
    selectFile() {
      let that = this
      if (that.disabled) return
      const {name = "", maxCount, multiple, maxSize, sizeType, camera, compressed, maxDuration, sourceType} = that
      let chooseFile = null
      let lists = JSON.parse(JSON.stringify(that.lists))
      const newMaxCount = maxCount - lists.length
      // 设置为只选择图片的时候使用 chooseImage 来实现
      chooseFile = new Promise((resolve, reject) => {
        uni.chooseImage({
          count: multiple ? (newMaxCount > 9 ? 9 : newMaxCount) : 1,
          sourceType: sourceType,
          sizeType,
          success: resolve,
          fail: reject,
        })
      })
      chooseFile
        .then(res => {
          let file = null
          let listOldLength = that.lists.length
          res.tempFiles.map((val, index) => {
            // 检查文件后缀是否允许，如果不在that.limitType内，就会返回false
            if (!that.checkFileExt(val)) return

            // 如果是非多选，index大于等于1或者超出最大限制数量时，不处理
            if (!multiple && index >= 1) return
            if (val.size > maxSize) {
              that.$emit("on-oversize", val, that.lists, that.index)
              that.showToast("超出允许的文件大小")
            } else {
              if (maxCount <= lists.length) {
                that.$emit("on-exceed", val, that.lists, that.index)
                that.showToast("超出最大允许的文件个数")
                return
              }
              lists.push({
                url: val.path,
                progress: 0,
                error: false,
                file: val,
              })
            }
          })

          // 这样实现深拷贝会导致在H5中file为空对象
          // that.lists = JSON.parse(JSON.stringify(lists));
          this.deepClone(lists, that.lists)
          // 每次图片选择完，抛出一个事件，并将当前内部选择的图片数组抛出去
          that.$emit("on-choose-complete", that.lists, that.index)
          if (that.autoUpload) that.uploadFile(listOldLength)
        })
        .catch(error => {
          that.$emit("on-choose-fail", error)
        })
    },
    // 提示用户消息
    showToast(message, force = false) {
      if (this.showTips || force) {
        uni.showToast({
          title: message,
          icon: "none",
        })
      }
    },
    // 该方法供用户通过ref调用，手动上传
    upload() {
      this.uploadFile()
    },
    // 对失败的图片重新上传
    retry(index) {
      this.lists[index].progress = 0
      this.lists[index].error = false
      this.lists[index].response = null
      uni.showLoading({
        title: "重新上传",
      })
      this.uploadFile(index)
    },
    // 上传图片
    async uploadFile(index = 0) {
      if (this.disabled) return
      if (this.uploading) return
      // 全部上传完成
      if (index >= this.lists.length) {
        this.$emit("on-uploaded", this.lists, this.index)
        return
      }
      // 检查是否是已上传或者正在上传中
      if (this.lists[index].progress == 100) {
        if (this.autoUpload == false) this.uploadFile(index + 1)
        return
      }
      // 执行before-upload钩子
      if (this.beforeUpload && typeof this.beforeUpload === "function") {
        // 执行回调，同时传入索引和文件列表当作参数
        // 在微信，支付宝等环境(H5正常)，会导致父组件定义的customBack()函数体中的this变成子组件的this
        // 通过bind()方法，绑定父组件的this，让this.customBack()的this为父组件的上下文
        // 因为upload组件可能会被嵌套在其他组件内，比如u-form，这时this.$parent其实为u-form的this，
        // 非页面的this，所以这里需要往上历遍，一直寻找到最顶端的$parent，这里用了this.$u.$parent.call(this)
        // 明白意思即可，无需纠结this.$u.$parent.call(this)的细节
        let beforeResponse = this.beforeUpload.bind(this.$u.$parent.call(this))(index, this.lists)
        // 判断是否返回了promise
        if (!!beforeResponse && typeof beforeResponse.then === "function") {
          await beforeResponse
            .then(res => {
              // promise返回成功，不进行动作，继续上传
            })
            .catch(err => {
              // 进入catch回调的话，继续下一张
              return this.uploadFile(index + 1)
            })
        } else if (beforeResponse === false) {
          // 如果返回false，继续下一张图片的上传
          return this.uploadFile(index + 1)
        } else {
          // 此处为返回"true"的情形，这里不写代码，就跳过此处，继续执行当前的上传逻辑
        }
      }
      // 检查上传地址
      if (!this.action) {
        this.showToast("请配置上传地址", true)
        return
      }
      this.lists[index].error = false
      this.uploading = true
      // 创建上传对象
      const task = uni.uploadFile({
        url: this.action,
        filePath: this.lists[index].url,
        name: this.name,
        formData: this.formData,
        header: this.header,
        // #ifdef MP-ALIPAY
        fileType: "image",
        // #endif
        success: res => {
          // 判断是否json字符串，将其转为json格式
          let data = this.toJson && this.$u.test.jsonString(res.data) ? JSON.parse(res.data) : res.data
          if (![200, 201, 204].includes(res.statusCode)) {
            this.uploadError(index, data)
          } else {
            // 上传成功
            this.lists[index].response = data
            this.lists[index].progress = 100
            this.lists[index].error = false
            this.$emit("on-success", data, index, this.lists, this.index)
          }
        },
        fail: e => {
          this.uploadError(index, e)
        },
        complete: res => {
          uni.hideLoading()
          this.uploading = false
          this.uploadFile(index + 1)
          this.$emit("on-change", res, index, this.lists, this.index)
        },
      })
      task.onProgressUpdate(res => {
        if (res.progress > 0) {
          this.lists[index].progress = res.progress
          this.$emit("on-progress", res, index, this.lists, this.index)
        }
      })
    },
    // 上传失败
    uploadError(index, err) {
      this.lists[index].progress = 0
      this.lists[index].error = true
      this.lists[index].response = null
      this.$emit("on-error", err, index, this.lists, this.index)
      this.showToast("上传失败，请重试")
    },
    // 删除一个图片
    async deleteItem(index) {
      // 先检查是否有定义before-remove移除前钩子
      // 执行before-remove钩子
      if (this.beforeRemove && typeof this.beforeRemove === "function") {
        // 此处钩子执行 原理同before-remove参数，见上方注释
        let beforeResponse = this.beforeRemove.bind(this.$u.$parent.call(this))(index, this.lists)
        // 判断是否返回了promise
        if (!!beforeResponse && typeof beforeResponse.then === "function") {
          await beforeResponse
            .then(res => {
              // promise返回成功，不进行动作，继续上传
              this.handlerDeleteItem(index)
            })
            .catch(err => {
              // 如果进入promise的reject，终止删除操作
              this.showToast("已终止移除")
            })
        } else if (beforeResponse === false) {
          // 返回false，终止删除
          this.showToast("已终止移除")
        } else {
          // 如果返回true，执行删除操作
          this.handlerDeleteItem(index)
        }
      } else {
        // 如果不存在before-remove钩子，
        this.handlerDeleteItem(index)
      }
      // uni.showModal({
      // 	title: "提示",
      // 	content: "您确定要删除此项吗？",
      // 	success: async res => {
      // 		if (res.confirm) {
      // 			// 先检查是否有定义before-remove移除前钩子
      // 			// 执行before-remove钩子
      // 			if (this.beforeRemove && typeof this.beforeRemove === "function") {
      // 				// 此处钩子执行 原理同before-remove参数，见上方注释
      // 				let beforeResponse = this.beforeRemove.bind(this.$u.$parent.call(this))(index,
      // 					this.lists);
      // 				// 判断是否返回了promise
      // 				if (!!beforeResponse && typeof beforeResponse.then === "function") {
      // 					await beforeResponse
      // 						.then(res => {
      // 							// promise返回成功，不进行动作，继续上传
      // 							this.handlerDeleteItem(index);
      // 						})
      // 						.catch(err => {
      // 							// 如果进入promise的reject，终止删除操作
      // 							this.showToast("已终止移除");
      // 						});
      // 				} else if (beforeResponse === false) {
      // 					// 返回false，终止删除
      // 					this.showToast("已终止移除");
      // 				} else {
      // 					// 如果返回true，执行删除操作
      // 					this.handlerDeleteItem(index);
      // 				}
      // 			} else {
      // 				// 如果不存在before-remove钩子，
      // 				this.handlerDeleteItem(index);
      // 			}
      // 		}
      // 	}
      // });
    },
    // 执行移除图片的动作，上方代码只是判断是否可以移除
    handlerDeleteItem(index) {
      // 如果文件正在上传中，终止上传任务，进度在0 < progress < 100则意味着正在上传
      if (this.lists[index].progress < 100 && this.lists[index].progress > 0) {
        typeof this.lists[index].uploadTask != "undefined" && this.lists[index].uploadTask.abort()
      }
      this.lists.splice(index, 1)
      this.$forceUpdate()
      this.$emit("on-remove", index, this.lists, this.index)
      //this.showToast('移除成功');
    },
    // 用户通过ref手动的形式，移除一张图片
    remove(index) {
      // 判断索引的合法范围
      if (index >= 0 && index < this.lists.length) {
        this.lists.splice(index, 1)
        this.$emit("on-list-change", this.lists, this.index)
      }
    },
    // 预览图片
    doPreviewImage(url, index) {
      if (!this.previewFullImage) {
        this.$emit("on-preview", url, this.lists, this.index)
        return
      }
      const images = this.lists.map(item => item.url || item.path)
      uni.previewImage({
        urls: images,
        current: url,
        success: () => {
          this.$emit("on-preview", url, this.lists, this.index)
        },
        fail: () => {
          uni.showToast({
            title: "预览图片失败",
            icon: "none",
          })
        },
      })
    },
    // 判断文件后缀是否允许
    checkFileExt(file) {
      // 检查是否在允许的后缀中
      let noArrowExt = false
      // 获取后缀名
      let fileExt = ""
      const reg = /.+\./
      // 如果是H5，需要从name中判断
      // #ifdef H5
      fileExt = file.name.replace(reg, "").toLowerCase()
      // #endif
      // 非H5，需要从path中读取后缀
      // #ifndef H5
      fileExt = file.path.replace(reg, "").toLowerCase()
      // #endif
      // 使用数组的some方法，只要符合limitType中的一个，就返回true
      noArrowExt = this.limitType.some(ext => {
        // 转为小写
        return ext.toLowerCase() === fileExt
      })
      if (!noArrowExt) this.showToast(`不允许选择${fileExt}格式的文件`)
      return noArrowExt
    },
    // 深拷贝
    deepClone(obj, newObj) {
      for (let k in obj) {
        const value = obj[k]

        if (Array.isArray(value)) {
          newObj[k] = []
          this.deepClone(value, newObj[k])
        } else if (value !== null && typeof value === "object") {
          newObj[k] = {}
          this.deepClone(value, newObj[k])
        } else {
          newObj[k] = value
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin vue-flex($direction: row) {
  /* #ifndef APP-NVUE */
  display: flex;
  flex-direction: $direction;
  /* #endif */
}

.u-upload {
  @include vue-flex;
  flex-wrap: wrap;
  align-items: center;
}

.u-list-item {
  width: 200rpx;
  height: 200rpx;
  overflow: hidden;
  margin: 10rpx;
  background: rgb(244, 245, 246);
  position: relative;
  border-radius: 10rpx;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  align-items: center;
  justify-content: center;
}

.u-preview-wrap {
  border: 1px solid rgb(235, 236, 238);
}

.u-add-wrap {
  flex-direction: column;
  color: $u-content-color;
  font-size: 26rpx;
}

.u-add-tips {
  margin-top: 20rpx;
  line-height: 40rpx;
}

.u-add-wrap__hover {
  background-color: rgb(235, 236, 238);
}

.u-preview-image {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 10rpx;
}

.u-delete-icon {
  position: absolute;
  top: 6rpx;
  right: 6rpx;
  z-index: 10;
  background-color: $u-type-error;
  border-radius: 100rpx;
  width: 36rpx;
  height: 36rpx;
  @include vue-flex;
  align-items: center;
  justify-content: center;
}

.u-icon {
  @include vue-flex;
  align-items: center;
  justify-content: center;
}

.u-success-icon {
  position: absolute;
  bottom: 6rpx;
  right: 6rpx;
  z-index: 10;
  background-color: #5ac725;
  border-radius: 100rpx;
  width: 36rpx;
  height: 36rpx;
  @include vue-flex;
  align-items: center;
  justify-content: center;
}

.u-progress {
  position: absolute;
  bottom: 10rpx;
  left: 8rpx;
  right: 8rpx;
  z-index: 9;
  width: auto;
}

.u-error-btn {
  color: #ffffff;
  background-color: $u-type-error;
  font-size: 20rpx;
  padding: 4px 0;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  line-height: 1;
}
</style>
```

### mypage.vue

```vue
<template>
  <view class="mypage" :style="{'min-height': winMinHeight + 'px'}" :class="`theme-${themeName}`">
    <view class="page bgc-base bg-main" :style="{'min-height': winMinHeight + 'px'}" :class="className">
      <slot></slot>
    </view>
  </view>
</template>

<script setup>
import {useStore} from "vuex"
import {ref, computed, onMounted, getCurrentInstance} from "vue"
import {onLoad, onReady, onShow, onHide, onPullDownRefresh, onReachBottom} from "@dcloudio/uni-app"

const {proxy} = getCurrentInstance()
const store = useStore()
const themeName = computed(() => store.state.themeName)
const props = defineProps({
  className: String,
})
const winMinHeight = ref(proxy.Pub.winInfo().windowHeight)
uni.onWindowResize(() => {
  winMinHeight.value = proxy.Pub.winInfo().windowHeight
})
onShow(() => {
  // #ifdef APP-PLUS
  if (themeName.value == "light") {
    uni.setNavigationBarColor({
      frontColor: "#000000",
      backgroundColor: "rgba(255,255,255,0)",
    })
  } else {
    uni.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: "rgba(255,255,255,0)",
    })
  }
  // #endif
})
</script>

<style lang="scss">
.mypage {
  min-height: 100vh;
}

.page {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  // -webkit-overflow-scrolling: touch;
}
</style>
```

### com-tabbar.vue

```vue
<template>
  <view>
    <view class="position-fixed  bottom-0 w-100" style="max-width: 540px; left: 50%; transform: translateX(-50%);">
      <view class="safe-area-inset-bottom">
        <view class="w-100 h-140px bgc-footer box-shadow-footer flex">
          <view class="flex-1 h-100 flex flex-column flex-align-center flex-justify-center position-relative" v-for="(item, index) in list" :key="`tabbar_${index}`" @click="changePage(item, index)">
            <u-icon :name="pageIndex == index ? item.selectedIconPath : item.iconPath" size="48" class="animate__animated position-relative z-index-3" :class="{animate__flipInX: pageIndex == index}"></u-icon>
            <text class="c-footer pdt-6" :class="{'c-primary': pageIndex == index}">{{ item.text }}</text>
            <!-- <view class="position-absolute w-100 z-index-0 top-0 flex flex-column flex-align-center align-center"
							style="left:50%;transform: translateX(-50%);" v-if="pageIndex == index">
							<view class="w-60px h-6px bgc-c-primary" style="border-radius: 0 0 6rpx 6rpx;"></view>
						</view> -->
          </view>
        </view>
      </view>
    </view>
    <view v-show="isPlaceholder">
      <view class="safe-area-inset-bottom">
        <view class="w-100 h-140px"></view>
      </view>
    </view>
  </view>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted, watch} from "vue"
const {proxy} = getCurrentInstance()
const props = defineProps({
  index: String | Number,
  isPlaceholder: {
    type: Boolean,
    default: true,
  },
})
const pageIndex = ref(props.index || 0)
const list = ref([
  {
    iconPath: "/static/images/tabbar/home.png",
    selectedIconPath: "/static/images/tabbar/home_active.png",
    text: "",
    customIcon: false,
    pagePath: "/pages/index/index",
  },
  {
    iconPath: "/static/images/tabbar/intro.png",
    selectedIconPath: "/static/images/tabbar/intro_active.png",
    text: "",
    customIcon: false,
    pagePath: "/pages/invest/invest",
  },
  {
    iconPath: "/static/images/tabbar/service.png",
    selectedIconPath: "/static/images/tabbar/service_active.png",
    text: "",
    customIcon: false,
    pagePath: "",
  },
  {
    iconPath: "/static/images/tabbar/mine.png",
    selectedIconPath: "/static/images/tabbar/mine_active.png",
    text: "",
    customIcon: false,
    pagePath: "/pages/mine/mine",
  },
])
const changePage = (item, index) => {
  if (props.index == index) return false
  if (index == 2) {
    let serviceLink = proxy.Pub.getStore("configData").im_link
    if (serviceLink) {
      return proxy.Pub.openLink(serviceLink)
    }
    return false
  }
  uni.switchTab({
    url: item.pagePath,
  })
}
watch(
  () => props.index,
  val => {
    pageIndex.value = val
  }
)
onMounted(() => {
  uni.hideTabBar()
})
</script>

<style lang="scss" scoped></style>
```

### myfooter.vue

```vue
<template>
  <view>
    <view class="myfooter safe-area-inset-bottom" style="max-width: 540px; left: 50%; transform: translateX(-50%);" id="myfooter" :style="{'z-index': zIndex}" :class="[className]">
      <slot></slot>
    </view>
    <view class="footer-placeholder safe-area-inset-bottom">
      <view :style="{height: myfooterH + 'px'}"></view>
    </view>
  </view>
</template>

<script setup>
import {ref, onMounted} from "vue"
const props = defineProps({
  zIndex: [String, Number],
  className: {
    type: String,
    default: "",
  },
})
const myfooterH = ref(0)
onMounted(() => {
  const query = uni.createSelectorQuery()
  query
    .select("#myfooter")
    .boundingClientRect(data => {
      myfooterH.value = data.height
    })
    .exec()
})
</script>

<style lang="scss" scoped>
.myfooter {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 998;
  width: 100%;
}
</style>
```

### mynavbar.vue

```vue
<template>
  <view class="">
    <view class="u-navbar" style="max-width: 540px; left: 50%; transform: translateX(-50%);" :style="[navbarStyle]" :class="[{'u-navbar-fixed': isFixed}, {'u-border-bottom': borderBottom}, headerClass]">
      <view class="u-status-bar" :style="{height: statusBarHeight + 'px'}"></view>
      <view class="u-navbar-inner" :style="[navbarInnerStyle]">
        <view class="u-back-wrap" v-if="isBack" @tap="goBack">
          <view class="u-icon-wrap">
            <u-icon :name="backIconName" :color="opacityIconColor" :size="backIconSize"></u-icon>
          </view>
          <view class="u-icon-wrap u-back-text u-line-1" v-if="backText" :style="[backTextStyle]">
            {{ backText }}
          </view>
        </view>
        <view class="u-navbar-content-title" v-if="title" :style="[titleStyle]">
          <view
            class="u-title u-line-1"
            :style="{
              color: opacityFontColor,
              fontSize: titleSize + 'rpx',
              fontWeight: titleBold ? '700' : 'normal',
              opacity: isOpacity ? opacityNum : 1,
            }"
          >
            {{ title }}
          </view>
        </view>
        <view class="u-slot-content">
          <slot></slot>
        </view>
        <view class="u-slot-right">
          <slot name="right"></slot>
        </view>
      </view>
    </view>
    <!-- 解决fixed定位后导航栏塌陷的问题 -->
    <view class="u-navbar-placeholder" v-if="isFixed && !immersive" :style="{width: '100%', height: Number(navbarHeight) + statusBarHeight + 'px'}"></view>
  </view>
</template>

<script>
// 获取系统状态栏的高度
let systemInfo = uni.getSystemInfoSync()
let menuButtonInfo = {}
// 如果是小程序，获取右上角胶囊的尺寸信息，避免导航栏右侧内容与胶囊重叠(支付宝小程序非本API，尚未兼容)
// #ifdef MP-WEIXIN || MP-BAIDU || MP-TOUTIAO || MP-QQ
menuButtonInfo = uni.getMenuButtonBoundingClientRect()
// #endif
/**
 * navbar 自定义导航栏
 * @description 此组件一般用于在特殊情况下，需要自定义导航栏的时候用到，一般建议使用uniapp自带的导航栏。
 * @tutorial https://www.uviewui.com/components/navbar.html
 * @property {String Number} height 导航栏高度(不包括状态栏高度在内，内部自动加上)，注意这里的单位是px（默认44）
 * @property {String} back-icon-color 左边返回图标的颜色（默认#606266）
 * @property {String} back-icon-name 左边返回图标的名称，只能为uView自带的图标（默认arrow-left）
 * @property {String Number} back-icon-size 左边返回图标的大小，单位rpx（默认30）
 * @property {String} back-text 返回图标右边的辅助提示文字
 * @property {Object} back-text-style 返回图标右边的辅助提示文字的样式，对象形式（默认{ color: '#606266' }）
 * @property {String} title 导航栏标题，如设置为空字符，将会隐藏标题占位区域
 * @property {String Number} title-width 导航栏标题的最大宽度，内容超出会以省略号隐藏，单位rpx（默认250）
 * @property {String} title-color 标题的颜色（默认#606266）
 * @property {String Number} title-size 导航栏标题字体大小，单位rpx（默认32）
 * @property {Function} custom-back 自定义返回逻辑方法
 * @property {String Number} z-index 固定在顶部时的z-index值（默认980）
 * @property {Boolean} is-back 是否显示导航栏左边返回图标和辅助文字（默认true）
 * @property {Object} background 导航栏背景设置，见官网说明（默认{ background: '#ffffff' }）
 * @property {Boolean} is-fixed 导航栏是否固定在顶部（默认true）
 * @property {Boolean} immersive 沉浸式，允许fixed定位后导航栏塌陷，仅fixed定位下生效（默认false）
 * @property {Boolean} border-bottom 导航栏底部是否显示下边框，如定义了较深的背景颜色，可取消此值（默认true）
 * @example <u-navbar back-text="返回" title="剑未配妥，出门已是江湖"></u-navbar>
 */
export default {
  name: "mynavbar",
  props: {
    // 导航栏高度，单位px，非rpx
    height: {
      type: [String, Number],
      default: "",
    },
    // 返回箭头的颜色
    backIconColor: {
      type: String,
      default: "#606266",
    },
    // 左边返回的图标
    backIconName: {
      type: String,
      default: "nav-back",
    },
    // 左边返回图标的大小，rpx
    backIconSize: {
      type: [String, Number],
      default: "44",
    },
    // 返回的文字提示
    backText: {
      type: String,
      default: "",
    },
    // 返回的文字的 样式
    backTextStyle: {
      type: Object,
      default() {
        return {
          color: "#606266",
        }
      },
    },
    // 导航栏标题
    title: {
      type: String,
      default: "",
    },
    // 标题的宽度，如果需要自定义右侧内容，且右侧内容很多时，可能需要减少这个宽度，单位rpx
    titleWidth: {
      type: [String, Number],
      default: "300",
    },
    // 标题的颜色
    titleColor: {
      type: String,
      default: "#606266",
    },
    // 标题字体是否加粗
    titleBold: {
      type: Boolean,
      default: true,
    },
    // 标题的字体大小
    titleSize: {
      type: [String, Number],
      default: 32,
    },
    isBack: {
      type: [Boolean, String],
      default: true,
    },
    // 对象形式，因为用户可能定义一个纯色，或者线性渐变的颜色
    background: {
      type: Object,
      default() {
        return {
          // background: '#ffffff'
        }
      },
    },
    bgc: {
      type: String,
      default: "255,255,255",
    },
    //是否设置不透明度
    isOpacity: {
      type: Boolean,
      default: false,
    },
    //不透明度最大值 0-1
    maxOpacity: {
      type: [Number, String],
      default: 1,
    },
    //背景透明 【设置该属性，则背景透明，只出现内容，isOpacity和maxOpacity失效】
    transparent: {
      type: Boolean,
      default: false,
    },
    //滚动条滚动距离
    scrollTop: {
      type: [Number, String],
      default: 0,
    },
    /*
			 isOpacity 为true时生效
			 opacity=scrollTop /windowWidth * scrollRatio
			*/
    scrollRatio: {
      type: [Number, String],
      default: 0.3,
    },
    // 导航栏是否固定在顶部
    isFixed: {
      type: Boolean,
      default: true,
    },
    // 是否沉浸式，允许fixed定位后导航栏塌陷，仅fixed定位下生效
    immersive: {
      type: Boolean,
      default: false,
    },
    // 是否显示导航栏的下边框
    borderBottom: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: [String, Number],
      default: "",
    },
    // 自定义返回逻辑
    customBack: {
      type: Function,
      default: null,
    },
    headerClass: {
      type: String,
      default: "bg-transparent",
    },
  },
  data() {
    return {
      menuButtonInfo: menuButtonInfo,
      statusBarHeight: systemInfo.statusBarHeight,
      top: 0,
      scrollH: 1, //滚动总高度,计算opacity
      opacity: 1, //0-1
    }
  },
  computed: {
    opacityNum() {
      let opa = this.scrollTop / (this.navbarHeight + this.statusBarHeight)
      if (opa > 1) {
        opa = 1
      }
      return opa
    },
    // 导航栏内部盒子的样式
    navbarInnerStyle() {
      let style = {}
      // 导航栏宽度，如果在小程序下，导航栏宽度为胶囊的左边到屏幕左边的距离
      style.height = this.navbarHeight + "px"
      // // 如果是各家小程序，导航栏内部的宽度需要减少右边胶囊的宽度
      // #ifdef MP
      let rightButtonWidth = systemInfo.windowWidth - menuButtonInfo.left
      style.marginRight = rightButtonWidth + "px"
      // #endif
      return style
    },
    // 整个导航栏的样式
    navbarStyle() {
      let style = {}
      style.zIndex = this.zIndex ? this.zIndex : this.$u.zIndex.navbar
      if (this.isOpacity) {
        var opa = this.opacityNum == 1 ? 0.95 : 0
        style.background = `rgba(${this.bgc},${opa})!important`
      } else {
        Object.assign(style, this.background)
      }
      // 合并用户传递的背景色对象
      return style
    },
    // 导航中间的标题的样式
    titleStyle() {
      let style = {}
      // // #ifndef MP
      // style.left = (systemInfo.windowWidth - uni.upx2px(this.titleWidth)) / 2 + 'px';
      // style.right = (systemInfo.windowWidth - uni.upx2px(this.titleWidth)) / 2 + 'px';
      // // #endif
      // // #ifdef MP
      // // 此处是为了让标题显示区域即使在小程序有右侧胶囊的情况下也能处于屏幕的中间，是通过绝对定位实现的
      // let rightButtonWidth = systemInfo.windowWidth - menuButtonInfo.left;
      // style.left = (systemInfo.windowWidth - uni.upx2px(this.titleWidth)) / 2 + 'px';
      // style.right = rightButtonWidth - (systemInfo.windowWidth - uni.upx2px(this.titleWidth)) / 2 +
      // 	rightButtonWidth +
      // 	'px';
      // // #endif
      style.width = uni.upx2px(this.titleWidth) + "px"
      style.left = "50%"
      style.transform = "translateX(-50%)"
      style.right = "auto"
      return style
    },
    // 转换字符数值为真正的数值
    navbarHeight() {
      // #ifdef APP-PLUS || H5
      return this.height ? this.height : 44
      // #endif
      // #ifdef MP
      // 小程序特别处理，让导航栏高度 = 胶囊高度 + 两倍胶囊顶部与状态栏底部的距离之差(相当于同时获得了导航栏底部与胶囊底部的距离)
      // 此方法有缺陷，暂不用(会导致少了几个px)，采用直接固定值的方式
      // return menuButtonInfo.height + (menuButtonInfo.top - this.statusBarHeight) * 2;//导航高度
      let height = systemInfo.platform == "ios" ? 44 : 48
      return this.height ? this.height : height
      // #endif
    },
    opacityIconColor() {
      if (this.isOpacity) {
        return this.opacityNum > 0.85 ? "#333" : "#fff"
      } else {
        return this.backIconColor
      }
    },
    opacityFontColor() {
      if (this.isOpacity) {
        return this.opacityNum > 0.85 ? "#333" : "#fff"
      } else {
        return this.titleColor
      }
    },
  },
  mounted() {
    this.title &&
      uni?.setNavigationBarTitle({
        title: this.title,
      })
  },
  methods: {
    goBack() {
      const pages = getCurrentPages()
      if (pages.length === 1) {
        history.back()
      } else {
        uni.navigateBack()
      }
      // 如果自定义了点击返回按钮的函数，则执行，否则执行返回逻辑
      // if (typeof this.customBack === 'function') {
      // 	// 在微信，支付宝等环境(H5正常)，会导致父组件定义的customBack()函数体中的this变成子组件的this
      // 	// 通过bind()方法，绑定父组件的this，让this.customBack()的this为父组件的上下文
      // 	this.customBack.bind(this.$u.$parent.call(this))();
      // } else {
      // 	uni.navigateBack();
      // }
    },
  },
}
</script>

<style scoped lang="scss">
@mixin vue-flex($direction: row) {
  /* #ifndef APP-NVUE */
  display: flex;
  flex-direction: $direction;
  /* #endif */
}

.u-navbar {
  width: 100%;
  transition: all 0.3s;
}

.u-navbar-fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 991;
}

.u-status-bar {
  width: 100%;
}

.u-navbar-inner {
  @include vue-flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
}

.u-back-wrap {
  @include vue-flex;
  align-items: center;
  flex: 1;
  flex-grow: 0;
  padding: 14rpx 14rpx 14rpx 24rpx;
}

.u-back-text {
  padding-left: 4rpx;
  font-size: 30rpx;
}

.u-navbar-content-title {
  @include vue-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: absolute;
  left: 0;
  right: 0;
  height: 60rpx;
  text-align: center;
  flex-shrink: 0;
}

.u-navbar-centent-slot {
  flex: 1;
}

.u-title {
  line-height: 60rpx;
  font-size: 32rpx;
  flex: 1;
}

.u-navbar-right {
  flex: 1;
  @include vue-flex;
  align-items: center;
  justify-content: flex-end;
}

.u-slot-content {
  flex: 1;
  @include vue-flex;
  align-items: center;
}
</style>
```

### mytabbar.vue

```vue
<template>
  <tabbar v-model="pageData.current" :list="pageData.list" :mid-button="false" :border-top="false" active-color="#257DEF" inactive-color="#747E98" :hide-tab-bar="true" className="box-shadow-footer bgc-footer"></tabbar>
</template>

<script setup>
import {reactive, getCurrentInstance} from "vue"
const {proxy} = getCurrentInstance()

const props = defineProps({
  index: [String, Number],
})
const pageData = reactive({
  list: [
    {
      iconPath: "/static/images/tabbar/home.png",
      selectedIconPath: "/static/images/tabbar/home_active.png",
      text: "",
      customIcon: false,
      pagePath: "/pages/index/index",
    },
    {
      iconPath: "/static/images/tabbar/intro.png",
      selectedIconPath: "/static/images/tabbar/intro_active.png",
      text: "",
      customIcon: false,
      pagePath: "/pages/index/index",
    },
    {
      iconPath: "/static/images/tabbar/assets.png",
      selectedIconPath: "/static/images/tabbar/assets_active.png",
      text: "",
      customIcon: false,
      pagePath: "/pages/index/index",
    },
    {
      iconPath: "/static/images/tabbar/service.png",
      selectedIconPath: "/static/images/tabbar/service_active.png",
      text: "",
      customIcon: false,
      pagePath: "/pages/index/index",
    },
    {
      iconPath: "/static/images/tabbar/mine.png",
      selectedIconPath: "/static/images/tabbar/mine_active.png",
      text: "",
      customIcon: false,
      pagePath: "/pages/index/index",
    },
  ],
  current: props.index || "",
})
</script>

<style lang="scss">
:deep(.u-tabbar__content__item__button) {
  top: 12rpx !important;
}

:deep(.u-tabbar__content__item__text) {
  bottom: 12rpx !important;
}
</style>
```

### num.vue

```vue
<template>
  <text v-if="num || num == 0" :class="className">{{ num }}</text>
  <u-loading mode="flower" v-else :class="className"></u-loading>
</template>

<script setup>
const props = defineProps({
  num: String | Number,
  className: String,
})
</script>

<style></style>
```

### pay-password.vue

```vue
<template>
  <u-modal v-model="show" title="交易密码" show-confirm-button show-cancel-button blur="1" confirm-text="确认" cancel-text="取消" @cancel="$emit('close')" @confirm="clickConfirm">
    <view class="pd-32">
      <view class="com-border">
        <u-input type="password" placeholder="请输入交易密码"></u-input>
      </view>
    </view>
  </u-modal>
</template>

<script setup>
import {ref, watch} from "vue"
const props = defineProps({
  payVisible: Boolean,
})
const emits = defineEmits(["close", "confirm"])
const show = ref(false)
const password = ref("")

function clickConfirm() {
  if (!password.value) return proxy.Pub.msg("请输入交易密码")
  emits("confirm", password.value)
}
watch(
  () => props.payVisible,
  val => {
    show.value = val
  }
)
</script>

<style></style>
```

### seamless-scroll.vue

无缝向上滚动

```vue
<template>
  <view class="scroll-container" :style="{height: height + 'px'}">
    <view class="scroll-content" :style="{transform: 'translateY(-' + translateY + 'px)'}" ref="contentRef">
      <slot></slot>
    </view>
  </view>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from "vue"

const props = defineProps({
  height: {
    type: Number,
    default: 400,
  },
  speed: {
    type: Number,
    default: 100,
  },
})

const translateY = ref(0) // Y轴位移
let contentRef = ref(null)
let contentHeight = 0
let previousTime = null

let rafId

function startScroll() {
  function animateScroll(timestamp) {
    if (!previousTime) {
      previousTime = timestamp
    }
    const elapsedTime = timestamp - previousTime
    if (elapsedTime > 1000 / props.speed) {
      translateY.value += 1
      if (translateY.value >= contentHeight - props.height) {
        translateY.value = 0
      }
      previousTime = timestamp
    }
    rafId = requestAnimationFrame(animateScroll)
  }
  rafId = requestAnimationFrame(animateScroll)
}

onMounted(() => {
  contentHeight = contentRef.value.$el.scrollHeight
  startScroll()
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.scroll-container {
  overflow: hidden;
}
</style>
```

### status-bar.vue

```vue
<template>
  <view>
    <view class="position-fixed top-0 lef-0 status-bar bgc-header"></view>
    <view class="status-bar"></view>
  </view>
</template>

<script setup></script>

<style></style>
```

### tui-bubble-popup.vue

```vue
<template>
  <view :class="{'tui-flex-end': flexEnd}">
    <view class="tui-popup-list" :class="{'tui-popup-show': show, 'tui-z_index': position != 'relative'}" :style="{width: width, backgroundColor: backgroundColor, borderRadius: radius, color: color, position: position, left: left, right: right, bottom: bottom, top: top, transform: `translate(${translateX},${translateY})`}">
      <view
        class="tui-triangle"
        :style="{
          borderWidth: borderWidth,
          borderColor: `transparent transparent ${backgroundColor} transparent`,
          left: triangleLeft,
          right: triangleRight,
          top: triangleTop,
          bottom: triangleBottom,
        }"
        v-if="direction == 'top'"
      ></view>
      <view
        class="tui-triangle"
        :style="{
          borderWidth: borderWidth,
          borderColor: `${backgroundColor}  transparent transparent transparent`,
          left: triangleLeft,
          right: triangleRight,
          top: triangleTop,
          bottom: triangleBottom,
        }"
        v-if="direction == 'bottom'"
      ></view>
      <view
        class="tui-triangle"
        :style="{
          borderWidth: borderWidth,
          borderColor: `transparent  ${backgroundColor} transparent transparent`,
          left: triangleLeft,
          right: triangleRight,
          top: triangleTop,
          bottom: triangleBottom,
        }"
        v-if="direction == 'left'"
      ></view>
      <view
        class="tui-triangle"
        :style="{
          borderWidth: borderWidth,
          borderColor: `transparent transparent  transparent ${backgroundColor}`,
          left: triangleLeft,
          right: triangleRight,
          top: triangleTop,
          bottom: triangleBottom,
        }"
        v-if="direction == 'right'"
      ></view>
      <slot></slot>
    </view>
    <view @touchmove.stop.prevent="stop" class="tui-popup-mask" :class="{'tui-popup-show': show}" :style="{backgroundColor: maskBgColor}" v-if="mask" @tap="handleClose"></view>
  </view>
</template>
<script>
export default {
  name: "tuiBubblePopup",
  emits: ["close"],
  props: {
    //宽度
    width: {
      type: String,
      default: "300rpx",
    },
    //popup圆角
    radius: {
      type: String,
      default: "8rpx",
    },
    //popup 定位 left right top bottom值
    left: {
      type: String,
      default: "auto",
    },
    right: {
      type: String,
      default: "auto",
    },
    top: {
      type: String,
      default: "auto",
    },
    bottom: {
      type: String,
      default: "auto",
    },
    translateX: {
      type: String,
      default: "0",
    },
    translateY: {
      type: String,
      default: "0",
    },
    //背景颜色
    backgroundColor: {
      type: String,
      default: "#4c4c4c",
    },
    //字体颜色
    color: {
      type: String,
      default: "#fff",
    },
    //三角border-width
    borderWidth: {
      type: String,
      default: "12rpx",
    },
    //三角形方向 top left right bottom
    direction: {
      type: String,
      default: "top",
    },
    //定位 left right top bottom值
    triangleLeft: {
      type: String,
      default: "auto",
    },
    triangleRight: {
      type: String,
      default: "auto",
    },
    triangleTop: {
      type: String,
      default: "auto",
    },
    triangleBottom: {
      type: String,
      default: "auto",
    },
    //定位 relative absolute  fixed
    position: {
      type: String,
      default: "fixed",
    },
    //flex-end
    flexEnd: {
      type: Boolean,
      default: false,
    },
    //是否需要mask
    mask: {
      type: Boolean,
      default: true,
    },
    maskBgColor: {
      type: String,
      default: "rgba(0, 0, 0, 0.4)",
    },
    //控制显示
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClose() {
      if (!this.show) {
        return
      }
      this.$emit("close", {})
    },
    stop() {
      return false
    },
  },
}
</script>

<style scoped>
.tui-popup-list {
  z-index: 1;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
}

.tui-flex-end {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.tui-triangle {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  z-index: 997;
}

.tui-popup-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 995;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
}

.tui-popup-show {
  opacity: 1;
  visibility: visible;
}

.tui-z_index {
  z-index: 996;
}
</style>
```

## config.js

```js
import store from "../store"

// const modules = import.meta.globEager('/static/config.js');
// const config = modules['/static/config.js'].default;
const config = {
  apiUrl: "https://www.sinarmasland.vip",
  apiRoot: "/api",
  imgUrl: "https://www.sinarmasland.vip",
  lang: "id",
  langs: [
    {
      name: "English",
      lang: "en",
    },
    {
      name: "中文简体",
      lang: "zh",
    },
  ],
}
if (!store.state.lang) {
  store.commit("setLang", config.lang)
}

export default config
```

## 创建目录： api

封装 http 请求，并且整合 api 列表

### apis.js

```js
const apis = [
  {
    name: "config",
    url: "/config",
    method: "get",
  },
  {
    name: "index",
    url: "/index",
    method: "get",
  },
  {
    name: "login",
    url: "/login",
    method: "post",
    loading: true,
  },
  {
    name: "register",
    url: "/register",
    method: "post",
    loading: true,
  },
  {
    name: "uploadImg",
    url: "/uploadImg",
    method: "postFile",
    loading: true,
  },
  {
    name: "recharge",
    url: "/user/recharge",
    method: "post",
    loading: true,
  },
  {
    name: "rechargeRecord",
    url: "/user/recharge_record",
    method: "get",
    loading: false,
  },
  {
    name: "product",
    url: "/product",
    method: "get",
    loading: false,
  },
  {
    name: "productBuy",
    url: "/product/buy",
    method: "post",
    loading: true,
  },
  {
    name: "myProduct",
    url: "/user/myProduct",
    method: "get",
    loading: false,
  },
  {
    name: "myedit",
    url: "/user/myedit",
    method: "post",
    loading: true,
  },
  {
    name: "userIndex",
    url: "/user/index",
    method: "get",
    loading: false,
  },
  {
    name: "articlesIndex",
    url: "/articles/index",
    method: "get",
    loading: false,
  },
  {
    name: "getAccount",
    url: "/user/getAccount",
    method: "get",
    loading: false,
  },
  {
    name: "bankAdd",
    url: "/user/bankAdd",
    method: "post",
    loading: true,
  },
  {
    name: "withdraw",
    url: "/user/withdraw",
    method: "post",
    loading: true,
  },
  {
    name: "withdrawInfo",
    url: "/user/withdra_reminder",
    method: "get",
    loading: false,
  },
  {
    name: "withdrawRecord",
    url: "/user/withdraw_record",
    method: "get",
    loading: false,
  },
  {
    name: "getInvite",
    url: "/get_invite_link",
    method: "get",
    loading: false,
  },
  {
    name: "resetPwd",
    url: "/user/resetPwd",
    method: "post",
    loading: true,
  },
  {
    name: "payPwd",
    url: "/user/payPwd",
    method: "post",
    loading: true,
  },
  {
    name: "investRecord",
    url: "/invest_record",
    method: "get",
    loading: false,
  },
]

console.log("api数量", apis.length)

export default apis
```

### http.js

```js
import config from "../config/index.js"
import Pub from "../utils/index.js"
import store from "../store/index.js"
import sign from "../utils/sign.js"

import i18n from "@/locales/i18n.js"
const lang = i18n.global

const http = {
  interceptor: {
    request: config => {
      return config
    },
    response: response => {
      console.log(response)
      let {statusCode, errMsg, data} = response
      if (statusCode !== 200) {
        console.log(errMsg)
        return response
      }
      if (typeof data == "string") {
        data = JSON.parse(data)
      }
      return data
    },
  },
  request(options) {
    if (options.url && options.url.indexOf("http") == -1) {
      options.url = config.apiUrl + config.apiRoot + options.url
    }
    let header = {
      // "content-type": "application/json",
      "content-type": "application/x-www-form-urlencoded",
      // "token": store.state.token,
      // "lang": store.state.lang,
    }
    options.method = options.method || "GET"
    options.data = options.data || {}
    options.data.lastsession = store.state.token
    options.header = {
      ...options.header,
      ...header,
    }
    options.loading = !options.loading ? false : true
    options.requestTime = options.requestTime || 500
    options.dataType = options.dataType || "json"
    let loadingStatus = true
    if (loadingStatus && options.loading) {
      uni.showLoading({
        // title: "加载中",
        mask: true,
      })
    }
    return new Promise((resolve, reject) => {
      if (!this.interceptor.request(options)) {
        return
      }
      //请求接口日志记录
      _reqlog(options)
      uni.request({
        url: options.url,
        method: options.method,
        data: options.data,
        header: options.header,
        dataType: options.dataType,
        success: response => {
          let statusCode = response.statusCode
          let res = this.interceptor.response(response)
          if (statusCode == 200) {
            if (res.status != 1 && res.status != -1) {
              Pub.msg(res.msg)
            }
            if (res.status == -1) {
              uni.redirectTo({
                url: "/pages/startup/startup",
              })
            }
            //接口响应日志
            _reslog(res)
            resolve(res)
          }
        },
        fail(error) {
          Pub.msg(lang.t("Network_error"))
          console.log(error)
          resolve({})
        },
        complete(cpt) {
          if (loadingStatus && options.loading) {
            uni.hideLoading()
          }
          loadingStatus = false
          if (cpt.statusCode == 401) {
            Pub.setStore("rmStore")
            Pub.msg(cpt.data.msg).then(() => {
              Pub.toLogin()
            })
          } else if (cpt.statusCode == 818) {
            resolve(cpt.data)
          }
        },
      })
    })
  },
  get(url, data, options) {
    if (!options) options = {}
    options.url = url
    options.data = data
    options.method = "GET"
    return this.request(options)
  },
  delete(url, data, options) {
    if (!options) options = {}
    options.url = url
    options.data = data
    options.method = "DELETE"
    return this.request(options)
  },
  put(url, data, options) {
    if (!options) options = {}
    options.url = url
    options.data = data
    options.method = "PUT"
    return this.request(options)
  },
  post(url, data, options) {
    if (!options) options = {}
    options.url = url
    options.data = data
    options.header = options.header || {
      "content-type": "application/json;charset=UTF-8",
    }
    options.method = "POST"
    return this.request(options)
  },
  postForm(url, data) {
    return this.post(url, data, {
      header: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    })
  },
  postFile(file, params, url) {
    let _this = this
    uni.showLoading({
      // title: "加载中",
      mask: true,
    })
    let header = {
      // "Content-Type": "multipart/form-data",
      // "Authorization": "bearer " + store.state.token,
    }
    let fileParams = {}
    // #ifdef H5
    fileParams = {
      file: file,
    }
    // #endif
    // #ifndef H5
    fileParams = {
      filePath: file,
    }
    // #endif
    let data = params || {}
    data.lastsession = store.state.token
    return new Promise((resolve, reject) => {
      uni.uploadFile({
        url: `${config.apiUrl}${config.apiRoot}${url}`, //上传 // 后端上传接口地址
        // filePath: res2, // 需要上传的文件本地路径
        name: data.fileName || "file", // 后端接收的文件字段名
        ...fileParams,
        header: {
          ...header,
        },
        formData: data,
        success: function (response) {
          console.log(response)
          let statusCode = response.statusCode
          let res = _this.interceptor.response(response)
          if (statusCode == 200) {
            if (res.code != 1) {
              Pub.msg(res.msg)
            }
            //接口响应日志
            _reslog(res)
            resolve(res)
          } else {
            reject(res)
          }
        },
        fail: function (err) {
          console.log("upload failed", err)
          Pub.msg("上传失败,请重试")
          // reject(err);
        },
        complete: function (cpt) {
          uni.hideLoading()
          if (cpt.statusCode == 401) {
            Pub.setStore("rmStore")
            Pub.msg(cpt.data?.msg).then(() => {
              Pub.toLogin()
            })
          }
        },
      })
    })
  },
}

/**
 * 请求接口日志记录
 */
const _reqlog = req => {
  if (process.env.NODE_ENV === "development") {
    console.log("请求地址：" + req.url)
    if (req.data) {
      console.log("请求参数：" + JSON.stringify(req.data))
    }
  }
}
/**
 * 响应接口日志记录
 */
const _reslog = res => {
  let _statusCode = res.code
  if (process.env.NODE_ENV === "development") {
    console.log("响应结果：" + JSON.stringify(res))
  }
}

export default http
```

### index.js

```js
import http from "./http.js"
import apis from "./apis.js"
const apiFuns = {}
apis.forEach(item => {
  let obj = {}
  switch (item.method) {
    case "get":
      obj[item.name] = params => {
        return http.get(item.url, params, {
          loading: item.loading || false,
        })
      }
      break
    case "post":
      obj[item.name] = params => {
        return http.post(item.url, params, {
          loading: item.loading || false,
        })
      }
      break
    case "postFile":
      obj[item.name] = (file, params) => {
        return http.postFile(file, params, item.url)
      }
      break
    default:
      obj[item.name] = params => {
        return http.post(item.url, params, {
          loading: item.loading || false,
        })
      }
      break
  }
  Object.assign(apiFuns, obj)
})
console.log(apiFuns)

export default apiFuns
```

## 创建目录：hooks

### useNavFixed.js

```js
import {reactive, computed, getCurrentInstance, ref, nextTick} from "vue"
import {onShow, onLoad, onPageScroll} from "@dcloudio/uni-app"

function useNavFixed(el) {
  const {proxy} = getCurrentInstance()
  const isFixed = ref(false)
  const scrollTop = ref(0)
  const navHeight = ref(0)
  const getNavHeight = async () => {
    const data = await proxy.Pub.getNodeInfo(el)
    navHeight.value = data?.height
  }
  onLoad(() => {
    nextTick(() => {
      getNavHeight()
    })
  })

  onShow(() => {
    isFixed.value = false
    setTimeout(() => {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 0,
      })
    }, 0)
  })
  onPageScroll(e => {
    scrollTop.value = e.scrollTop
    if (scrollTop.value > navHeight.value) {
      isFixed.value = true
    } else {
      isFixed.value = false
    }
  })

  return {
    isFixed,
    scrollTop,
  }
}

export default useNavFixed
```

## 创建目录：locales

### 创建目录 `langs`

创建文件 `zh.js`

```js
export default {
  lang_name: "中文简体",
  confirm: "确认",
  cancel: "取消",
  hint: "提示",
  Copied_successfully: "复制成功",
  Press_again_to_exit_the_app: "再按一次退出应用",
  Network_error: "网络错误,请重试",
  Select_Image: "选择图片",
  Reselect: "重新选择",
  Sure: "确定",
  Please_select_the_picture_first_and_then_crop_it: "请先选择图片再裁剪",
}
```

### i18n.js

```js
import {createI18n} from "vue-i18n"
import messages from "./index"
import store from "../store"
const i18n = createI18n({
  legacy: false,
  locale: store.state.lang,
  globalInjection: true,
  fallbackLocale: "id",
  messages,
})
export default i18n
```

### index.js

```js
const modules = {}
const files = import.meta.glob("./lang/*.js", {
  import: "default",
  eager: true,
})
for (const path in files) {
  const moduleName = path.replace(/^\.\/lang\/(.*)\.js$/, "$1")
  const module = files[path]
  modules[moduleName] = module
}
export default modules
```

## 创建目录：store

### state.js

```js
const state = {
  token: "",
  lang: "",
  themeName: "light",
  assetVisible: false,
  configData: {},
  userinfo: {},
}
export default state
```

### mutations.js

```js
import state from "./state"

const mutations = {
  setTheme: (state, name) => {
    state.themeName = name
  },
  setToken: (state, data) => {
    state.token = data
  },
  setLang: (state, data) => {
    state.lang = data
  },
  setAssetVisible: (state, data) => {
    state.assetVisible = data
  },
  setConfigData: (state, data) => {
    state.configData = data
  },
  setUserinfo: (state, data) => {
    state.userinfo = data
  },
  rmStore: state => {
    state.token = ""
    state.userinfo = {}
  },
}
export default mutations
```

### actions.js

```js
const actions = {}
export default actions
```

### getters.js

```js
const getters = {}
export default getters
```

### index.js

```js
import {createStore} from "vuex"
import getters from "./getters"
import actions from "./actions"
import mutations from "./mutations"
import state from "./state"
import VuexPersistence from "vuex-persist"

const vuexLocal = new VuexPersistence({
  storage: {
    getItem: key => uni.getStorageSync(key),
    setItem: (key, value) => uni.setStorageSync(key, value),
    removeItem: key => uni.removeStorageSync(key),
  },
})
// 调用createStore
export default createStore({
  state,
  getters,
  actions,
  mutations,
  plugins: [vuexLocal.plugin],
})
```

## 创建目录：utils

### 创建目录 modules

`imageProcess.js`

```js
const compressImgH5 = file => {
  var fileSize = parseFloat(parseInt(file["size"]) / 1024 / 1024).toFixed(2)
  var read = new FileReader()
  read.readAsDataURL(file)
  return new Promise(function (resolve, reject) {
    read.onload = function (e) {
      var img = new Image()
      img.src = e.target.result
      img.onload = function () {
        // 默认按比例压缩
        var w = this.width
        var h = this.height
        // 生成canvas
        var canvas = document.createElement("canvas")
        var ctx = canvas.getContext("2d")
        var base64
        // 创建属性节点
        canvas.setAttribute("width", w)
        canvas.setAttribute("height", h)
        ctx.drawImage(this, 0, 0, w, h)
        if (fileSize < 1) {
          // 如果图片小于一兆 那么压缩0.5
          base64 = canvas.toDataURL("image/jpeg", 0.6)
        } else if (fileSize > 1 && fileSize < 2) {
          // 如果图片大于1M并且小于2M 那么压缩0.5
          base64 = canvas.toDataURL("image/jpeg", 0.4)
        } else {
          // 如果图片超过2m 那么压缩0.2
          base64 = canvas.toDataURL("image/jpeg", 0.2)
        }
        // 回调函数返回file的值（将base64编码转成file）
        var files = dataURLtoFile(base64, file.name) // 如果后台接收类型为base64的话这一步可以省略
        resolve(files)
      }
    }
  })
}
const comporessImgApp = file => {
  return new Promise(resolve => {
    uni.compressImage({
      src: file.path,
      quality: 20,
      width: "80%",
      format: "png",
      success: res => {
        resolve(res.tempFilePath)
      },
    })
  })
}

const compressImg = file => {
  // #ifdef H5
  return compressImgH5(file)
  // #endif
  // #ifndef H5
  return comporessImgApp(file)
  // #endif
}

// base64转码（压缩完成后的图片为base64编码，这个方法可以将base64编码转回file文件）
const dataURLtoFile = (dataurl, filename) => {
  var arr = dataurl.split(",")
  var mime = arr[0].match(/:(.*?);/)[1]
  var bstr = atob(arr[1])
  var n = bstr.length
  var u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, {
    type: mime,
  })
}
const compressBase64 = async (base64String, maxWidth, quality) => {
  const mimeType = base64String.match(/:(.*?);/)[1]
  const image = new Image()

  const promise = new Promise(resolve => {
    image.onload = resolve
    image.src = base64String
  })

  await promise

  let width = image.width
  let height = image.height

  if (Math.max(width, height) > maxWidth) {
    if (width > height) {
      height *= maxWidth / width
      width = maxWidth
    } else {
      width *= maxWidth / height
      height = maxWidth
    }
  }

  const canvas = document.createElement("canvas")
  canvas.width = width
  canvas.height = height

  const context = canvas.getContext("2d")
  context.clearRect(0, 0, width, height)
  context.drawImage(image, 0, 0, width, height)

  return canvas.toDataURL(mimeType, quality)
}

export {compressBase64, compressImg, dataURLtoFile}
```

`queryParams.js`

```js
/**
 * 对象转url参数
 * @param {*} data,对象
 * @param {*} isPrefix,是否自动加上"?"
 */
function queryParams(data = {}, isPrefix = true, arrayFormat = "comma") {
  let prefix = isPrefix ? "?" : ""
  let _result = []
  if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1) arrayFormat = "comma"
  for (let key in data) {
    let value = data[key]
    // 去掉为空的参数
    if (["", undefined, null].indexOf(value) >= 0) {
      continue
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case "indices":
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (let i = 0; i < value.length; i++) {
            _result.push(key + "[" + i + "]=" + value[i])
          }
          break
        case "brackets":
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(_value => {
            _result.push(key + "[]=" + _value)
          })
          break
        case "repeat":
          // 结果: ids=1&ids=2&ids=3
          value.forEach(_value => {
            _result.push(key + "=" + _value)
          })
          break
        case "comma":
          // 结果: ids=1,2,3
          let commaStr = ""
          value.forEach(_value => {
            commaStr += (commaStr ? "," : "") + _value
          })
          _result.push(key + "=" + commaStr)
          break
        default:
          value.forEach(_value => {
            _result.push(key + "[]=" + _value)
          })
      }
    } else {
      _result.push(key + "=" + value)
    }
  }
  return _result.length ? prefix + _result.join("&") : ""
}

export default queryParams
```

### index.js

```js
import store from "../store"
import queryParams from "./modules/queryParams.js"
import config from "../config/index.js"
import numCount from "./modules/numCount.js"
import {compressBase64, compressImg, dataURLtoFile} from "./modules/imageProcess.js"

import i18n from "@/locales/i18n.js"
const lang = i18n.global
const {locale, t, messages} = lang

class methods {
  static setLang(lang) {
    locale.value = lang
    store.commit("setLang", lang)
  }
  static t(text) {
    return lang.t(text)
  }
  static msg(title, icon = "none", duration = 1500) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        uni.showToast({
          title: title,
          icon: icon,
          duration,
          complete: function () {
            setTimeout(() => {
              resolve()
            }, duration)
          },
        })
      }, 0)
    })
  }
  static confirm(content, title = lang.t("hint")) {
    return new Promise((resolve, reject) => {
      uni.showModal({
        title: title,
        content: content,
        cancelText: lang.t("cancel"),
        confirmText: lang.t("confirm"),
        success: function (res) {
          if (res.confirm) {
            resolve()
          } else if (res.cancel) {
            console.log("cancel")
          }
        },
      })
    })
  }
  static alert(content, title = lang.t("hint")) {
    return new Promise((resolve, reject) => {
      uni.showModal({
        title: title,
        content: content,
        showCancel: false,
        confirmText: lang.t("confirm"),
        success: function (res) {
          if (res.confirm) {
            resolve()
          } else if (res.cancel) {
            console.log("cancel")
          }
        },
      })
    })
  }
  static setStore(name, params) {
    console.log(params)
    store.commit(name, params)
  }
  static getStore(name) {
    return store.state[name]
  }
  static getThemeImg(img) {
    const themeName = store.state.themeName
    return `/static/images/theme_${themeName}/${img}?v=10001`
    // return new URL(`@/static/images/theme_${themeName}/${img}`, import.meta.url).href
  }
  static getImgUrl(img) {
    if (img && img.indexOf("http") == -1 && img.indexOf("data:image/") == -1) {
      img = config.imgUrl + img
    }
    return img
  }
  static getUrl(url, params) {
    // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
    // 如果有url中有get参数，转换后无需带上"?"
    let query = ""
    if (!params) {
      return url
    }
    if (/.*\/.*\?.*=.*/.test(url)) {
      // object对象转为get类型的参数
      query = queryParams(params, false)
      // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
      return (url += "&" + query)
    } else {
      // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
      query = queryParams(params)
      return (url += query)
    }
  }
  static toBack(num) {
    const pages = getCurrentPages()
    if (pages.length === 1) {
      if (typeof num === "number") {
        history.go(-num)
      } else {
        history.back()
      }
    } else {
      uni.navigateBack({
        delta: num || 1,
      })
    }
  }
  static toPage(url, params) {
    if (!url || url.length == 0) return
    return uni.navigateTo({
      url: this.getUrl(url, params),
    })
  }
  static replacePage(url, params) {
    if (!url || url.length == 0) return
    return uni.redirectTo({
      url: this.getUrl(url, params),
    })
  }
  static toUserPage(url, params, isRedirect = false) {
    if (!store.state.token)
      return this.msg("请先登录").then(() => {
        uni.navigateTo({
          url: "/pages/login/login",
        })
      })
    if (!url || url.length == 0) return
    if (isRedirect) {
      return uni.redirectTo({
        url: this.getUrl(url, params),
      })
    }
    uni.navigateTo({
      url: this.getUrl(url, params),
    })
  }
  static toRootPage(url, params) {
    url &&
      uni.switchTab({
        url: url + queryParams(params),
      })
  }
  static relaunchPage(url, params) {
    url &&
      uni.reLaunch({
        url: url + queryParams(params),
      })
  }
  static toLogin() {
    let pages = getCurrentPages().reverse()
    console.log(pages)
    if (pages.length > 0) {
      let currentPage = pages[pages.length - 1]?.route
      console.log(currentPage)
      if (currentPage == "pages/login/login") {
        return
      }
    }
    uni.reLaunch({
      url: "/pages/login/login",
    })
  }
  static goRealname() {
    this.confirm("您还未完成实名认证，去认证？").then(() => {
      this.toPage("/pages/mine/realname")
    })
  }
  static checkRealname() {
    return new Promise(resolve => {
      if (store.state.userinfo.certification_status != 1) {
        this.goRealname()
      } else {
        resolve()
      }
    })
  }
  static copy(text, callback) {
    if (typeof text == "number") {
      text = text.toString()
    }
    uni.setClipboardData({
      data: text,
      success: function () {
        if (callback && typeof callback) {
          callback()
        } else {
          uni.showToast({
            icon: "success",
            title: lang.t("Copied_successfully"),
          })
        }
      },
    })
  }
  static formatAddress(address, ellipsis = "......") {
    if (address.length <= 12) {
      return address
    }
    const prefix = address.slice(0, 6)
    const suffix = address.slice(-6)
    return `${prefix}${ellipsis}${suffix}`
  }
  static formatIdCard(str) {
    return str?.replace(/^(.{4})(?:\d+)(.{4})$/, "$1 **** **** $2")
  }
  static formatBankCard(str) {
    if (str.length < 6) return str
    const lastFourDigits = str.slice(-3)
    const mask = "*".repeat(str.length - 3)
    return mask + lastFourDigits
  }
  static formatCard(str) {
    return str?.replace(/^(.{3})(?:\d+)(.{3})$/, "$1 **** **** $2")
  }
  static randomString(length) {
    let result = ""
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  static showAssetNum(num) {
    let text = ""
    if (store.state.assetVisible) {
      text = "****"
    } else {
      text = num
    }
    return text
  }

  static exitApp() {
    // #ifdef APP-PLUS
    let main = plus.android.runtimeMainActivity()
    //为了防止快速点按返回键导致程序退出重写quit方法改为隐藏至后台
    plus.runtime.quit = function () {
      main.moveTaskToBack(false)
    }
    //重写toast方法如果内容为 ‘再按一次退出应用’ 就隐藏应用，其他正常toast
    plus.nativeUI.toast = function (str) {
      if (str == "exit") {
        main.moveTaskToBack(false)
        return false
      } else {
        uni.showToast({
          title: lang.t("Press_again_to_exit_the_app"),
          icon: "none",
        })
      }
    }
    // #endif
  }

  static stickyTop() {
    // #ifdef APP-PLUS
    let systemInfo = uni.getSystemInfoSync()
    let pxNum = systemInfo.statusBarHeight + 44
    return (pxNum / systemInfo.windowWidth) * 750
    // #endif
    // #ifdef H5
    return 0
    // #endif
  }

  static getNodeInfo(node) {
    return new Promise((resolve, reject) => {
      try {
        const query = uni.createSelectorQuery()
        // #ifdef MP
        query.in(this)
        // #endif
        query
          ?.select(node)
          ?.boundingClientRect(data => {
            resolve(data)
          })
          .exec()
      } catch (err) {
        resolve({})
      }
    })
  }
  static getSystemInfo() {
    return uni.getSystemInfoSync()
  }
  static winInfo() {
    return uni.getWindowInfo()
  }
  static toNumber(str) {
    if (str?.indexOf(",") == -1) return str
    const numStr = str.replace(/,/g, "")
    const num = parseFloat(numStr)
    return isNaN(num) ? str : num
  }
  static formatNumber(val) {
    if (!val) {
      val = 0
    }
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }
  static tofix(value, ex, lt) {
    ex = typeof ex != "undefined" ? ex : ""
    lt = typeof lt != "undefined" ? lt : ""
    if (value < 1000) {
      return ex + Number((value / 1).toFixed(2)).toLocaleString() + " " + lt
    } else if (value < 1000000) {
      return ex + Number((value / 1000).toFixed(2)).toLocaleString() + "K " + lt
    } else {
      return ex + Number((value / 1000000).toFixed(2)).toLocaleString() + "M " + lt
    }
  }
  static html2text(cont) {
    if (cont != null && cont != "") {
      var re1 = new RegExp("<.+?>|&.+?;", "g") //匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
      var msg = cont.replace(re1, "") //执行替换成空字符
      msg = msg.replace(/\s/g, "") //去掉所有的空格（中文空格、英文空格都会被替换）
      msg = msg.replace(/[\r\n]/g, "") //去掉所有的换行符
      return msg.substr(0, 100) //获文本文字内容的前100个字符
    } else return ""
  }
  static openLink(url) {
    if (!url) return false
    // #ifdef APP-PLUS
    plus.runtime.openURL(url)
    // #endif
    // #ifdef H5
    let link = window.open(url, "_blank")
    if (!link) {
      window.location.href = url
    }
    // #endif
    // #ifdef MP
    this.copy(url)
    // #endif
  }
  static toDate(timestamp) {
    const date = new Date(timestamp * 1000) // 将时间戳转换为毫秒
    const year = date.getFullYear()
    const month = ("0" + (date.getMonth() + 1)).slice(-2) //月份从0开始，所以要加1
    const day = ("0" + date.getDate()).slice(-2)
    return `${year}-${month}-${day}`
  }
  static toDateTime(timestamp) {
    if (!timestamp) return ""
    const date = new Date(timestamp)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    return formattedTime
  }
  static getUrlParams(url) {
    const params = {}
    const paramStr = url.split("?")[1]
    if (paramStr) {
      const paramArr = paramStr.split("&")
      paramArr.forEach(param => {
        const [key, value] = param.split("=")
        params[key] = decodeURIComponent(value)
      })
    }
    return params
  }
  static compressBase64 = compressBase64
  static compressImg = compressImg
  static dataURLtoFile = dataURLtoFile
}

export default methods
```

### intercept.js

```js
import store from "../store/index.js"
const whiteList = ["/pages/index/index", "/pages/startup/startup", "/pages/login/login", "/pages/register/register"]
const isStringInArray = (str, array) => {
  const isInArray = array.includes(str)
  const isSubstringInArray = array.some(item => str.includes(item))
  return isInArray || isSubstringInArray
}
const noPermission = url => {
  if (!store.state.token && !isStringInArray(url, whiteList)) {
    return true
  }
  return false
}
const interceptRoute = () => {
  const list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"]
  list.forEach(item => {
    uni.addInterceptor(item, {
      invoke(args) {
        console.log(args)
        if (noPermission(args.url)) {
          return uni.reLaunch({
            url: "/pages/startup/startup",
          })
        }
      },
      success(args) {
        // console.log(args)
      },
      fail(err) {
        // console.log('interceptor-fail', err)
      },
      complete(res) {
        // console.log('interceptor-complete', res)
      },
    })
  })
}
interceptRoute()
```

### sign.js

```js
import md5Libs from "../uni_modules/vk-uview-ui/libs/function/md5.js"

export default function (res) {
  let lsRes = JSON.parse(JSON.stringify(res))
  let sign = ""
  let secrect = "edUuCnsNyspRRObmP22TlO0bGY7l4td6i4fQN1GbEb5mCc1pHb"
  let reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\/])+$/

  lsRes.client_key = 195265694483
  lsRes.time_stamp = parseInt(new Date().getTime() / 1000)

  Object.keys(lsRes)
    .sort()
    .forEach(key => {
      if (Array.isArray(lsRes[key])) {
        sign += key
        lsRes[key].forEach((item, index) => {
          if (!item) {
            lsRes[key].splice(index, 1)
          } else {
            if (item.constructor === Object) {
              Object.keys(item)
                .sort()
                .forEach(nestedKey => {
                  sign += nestedKey + item[nestedKey].toString().trim()
                })
            } else {
              sign += index === 0 ? "" : ","
              sign += typeof item === "string" ? item.trim() : item.toString()
            }
          }
        })
      } else {
        if (lsRes[key] === "") {
          delete lsRes[key]
        } else {
          sign += key + (typeof lsRes[key] === "string" ? lsRes[key].toString().trim() : lsRes[key].toString())
        }
      }
    })

  sign = secrect + sign + secrect
  lsRes.sign = md5Libs.md5(sign).toUpperCase()
  return lsRes
}
```

## 跟目录创建 AndroidManifest.xml

强制移除敏感权限

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" xmlns:tools="http://schemas.android.com/tools"
	package="io.dcloud.nativeresouce">
	<!--按下面方式配置需要移除的permissions-->
	<uses-permission android:name="android.permission.READ_PHONE_STATE" tools:node="remove" />

	<application>
		<!--meta-data-->
	</application>
</manifest>
```

## 根目录创建 .gitignore

git 过滤

```
.hbuilderx
node_modules
unpackage/cache
unpackage/dist
unpackage/release
yarn.lock
```
