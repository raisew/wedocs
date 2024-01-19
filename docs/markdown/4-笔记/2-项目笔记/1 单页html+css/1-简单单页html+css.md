# 简单单页 html + css

> 如单页落地页，下载页面之类的

## 1. html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover" />
    <title></title>
    <link rel="stylesheet" href="./css/style.css" />
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
  </head>

  <body></body>

  <script></script>
</html>
```

## 2. css

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 1.333333333333vw; /*10px=1rem;*/
}

@media screen and (min-width: 750px) {
  html {
    font-size: 6px;
  }
}
body {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Segoe
      UI, Arial, Roboto, PingFang SC, miui, Hiragino Sans GB, Microsoft Yahei, sans-serif;
  background: #eff5fb url("../images/bg.png") no-repeat;
  background-size: 100% auto;
  font-size: 2.4rem;
  color: #000000;
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
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
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
.flex-shrink-1 {
  flex-shrink: 1;
}
.flex-shrink-0 {
  flex-shrink: 0;
}

.flex-grow-0 {
  flex-grow: 0;
}
.flex-grow-1 {
  flex-grow: 1;
}

.align-center {
  text-align: center;
}
.align-right {
  text-align: right;
}

.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
}
.position-fixed {
  position: fixed;
}

.word-break {
  word-break: break-all;
}

.c-white {
  color: #fff;
}
.bgc-white {
  background-color: rgba(255, 255, 255, 0.5);
}

.w-100 {
  width: 100%;
}
.h-100 {
  height: 100%;
}

.pdt-4 {
  padding-top: 0.4rem;
}
.pdb-4 {
  padding-bottom: 0.4rem;
}

.pdl-8 {
  padding-left: 0.8rem;
}
.pdr-8 {
  padding-right: 0.8rem;
}

.pdl-12 {
  padding-left: 1.2rem;
}
.pdr-12 {
  padding-right: 1.2rem;
}

.pdl-14 {
  padding-left: 1.4rem;
}
.pdr-14 {
  padding-right: 1.4rem;
}

.pd-20 {
  padding: 2rem;
}

.pd-32 {
  padding: 3.2rem;
}
.pdl-32 {
  padding-left: 3.2rem;
}
.pdr-32 {
  padding-right: 3.2rem;
}
.pdt-32 {
  padding-top: 3.2rem;
}
.pdb-32 {
  padding-bottom: 3.2rem;
}
.mgt-18 {
  margin-top: 1.8rem;
}
.mgt-20 {
  margin-top: 2rem;
}
.mgt-28 {
  margin-top: 2.8rem;
}
.mgt-30 {
  margin-top: 3rem;
}

.pd-0 {
  padding: 0;
}
.pdt-0 {
  padding-top: 0;
}
.pdb-0 {
  padding-bottom: 0;
}
.mg-0 {
  margin: 0;
}

.font-middle {
  font-weight: 700;
}
.font-bold {
  font-weight: 900;
}

.font-22 {
  font-size: 2.2rem;
}

.font-24 {
  font-size: 2.4rem;
}

.font-26 {
  font-size: 2.6rem;
}

.font-28 {
  font-size: 2.8rem;
}

.font-34 {
  font-size: 3.4rem;
}

.bg-top {
  background: url(../images/bg_top.png) no-repeat;
  background-size: 100% auto;
}
.logo {
  border-radius: 6.4rem;
  background-color: #51a5eb;
  border: 6px solid rgba(255, 255, 255, 0.7);
  padding: 0.6rem 0.8rem;
}
.logo span {
  font-size: 3rem;
  color: #fff;
  padding-left: 1rem;
  padding-right: 1rem;
}
.job {
  width: 100%;
  background: url(../images/job_box.png) no-repeat;
  background-size: 100% 100%;
  padding: 2.4rem 2.4rem 7.6rem 1.2rem;
  margin-top: 1.2rem;
}
.job-icon {
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;
}

.btn-placeholder {
  width: 100%;
  height: 15rem;
}

.btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 0;
  padding-bottom: constant(safe-area-inset-bottom); /* 兼容 IOS<11.2 */
  padding-bottom: env(safe-area-inset-bottom); /* 兼容 IOS>=11.2 */
  background-color: #eff5fb;
  overflow: hidden;
}
.btn .btn-box {
  width: 60rem;
  height: 8rem;
  margin: 2.4rem auto;
  /* background: url(../images/bg_btn.png) no-repeat;
  background-size: 100% 100%; */
  background-color: #58b3ff;
  border: 6px solid rgba(81, 165, 235, 0.4);
  border-radius: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
  color: #fff;
}
.btn .btn-box:active {
  opacity: 0.8;
}
.btn .btn-box::before,
.btn .btn-box::after {
  content: "";
  display: block;
  width: 6.3rem;
  height: 2.6rem;
}
.btn .btn-box::before {
  background: url(../images/btn_left.png) no-repeat;
  background-size: 100% 100%;
  margin-right: 1.2rem;
}
.btn .btn-box::after {
  background: url(../images/btn_right.png) no-repeat;
  background-size: 100% 100%;
  margin-left: 1.2rem;
}
```
