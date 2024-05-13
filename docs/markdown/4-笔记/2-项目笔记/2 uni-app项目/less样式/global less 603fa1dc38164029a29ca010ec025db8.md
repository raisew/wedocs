# global.less

```jsx
.px2rpx(@name, @px) {
    @{name}: @px * 1rpx;
}
.fontSize(@px) {
    .px2rpx(font-size, @px);
}
.f(@i:6) when(@i<=60){
    .f(@i+1);
    @j:@i*2;
    .font-@{j}{
        .fontSize(@j);
    }
}
.f(6);

.font-bold{
  font-weight: 900;
}
.font-middle{
  font-weight: 600;
}
.font-normal{
  font-weight: normal;
}
.font-light{
    font-weight: 100;
}

.width(@i:0) when(@i <=375){
    .width(@i+1);
    @j:@i*2;
    .w-@{j}px{
				.px2rpx(width, @j);
      }
}
.width(0);
.height(@i:0) when(@i <=375){
    .height(@i+1);
    @j:@i*2;
    .h-@{j}px{
				.px2rpx(height, @j);
      }
}
.height(0);

.w-20{
	width: 20%;
}
.w-25{
	width: 25%;
}
.w-33{
	width: 33%;
}
.w-50{
	width: 50%;
}

.w-100{
	width: 100%;
}
.h-100{
	height: 100%;
}
.w-100vw{
	width: 100vw;
}
.h-100vh{
	height: 100vh;
}

.left(@i:0) when(@i <=50){
    .left(@i+1);
    @j:@i*2;
    .left-@{j}{
				.px2rpx(left, @j);
      }
}
.left(0);
.right(@i:0) when(@i <=50){
    .right(@i+1);
    @j:@i*2;
    .right-@{j}{
				.px2rpx(right, @j);
      }
}
.right(0);
.top(@i:0) when(@i <=50){
    .top(@i+1);
    @j:@i*2;
    .top-@{j}{
				.px2rpx(top, @j);
      }
}
.top(0);
.bottom(@i:0) when(@i <=50){
    .bottom(@i+1);
    @j:@i*2;
    .bottom-@{j}{
		.px2rpx(bottom, @j);
	}
}
.bottom(0);

.pd(@i:0) when (@i <= 60){
    .pd(@i+1);
    @j:@i*2;
    .pd-@{j}{
        .px2rpx(padding-left, @j);
        .px2rpx(padding-right, @j);
        .px2rpx(padding-top, @j);
        .px2rpx(padding-bottom, @j);
      }
      .pdl-@{j}{
          .px2rpx(padding-left, @j)!important;
      }
      .pdr-@{j}{
          .px2rpx(padding-right, @j)!important;
      }
      .pdt-@{j}{
          .px2rpx(padding-top, @j)!important;
      }
      .pdb-@{j}{
          .px2rpx(padding-bottom, @j)!important;
      }
}
.pd(0);
.mg(@i:0) when (@i <= 60){
    .mg(@i+1);
    @j:@i*2;
    .mg-@{j}{
        .px2rpx(margin-left, @j);
        .px2rpx(margin-right, @j);
        .px2rpx(margin-top, @j);
        .px2rpx(margin-bottom, @j);
      }
      .mgl-@{j}{
          .px2rpx(margin-left, @j)!important;
      }
      .mgr-@{j}{
          .px2rpx(margin-right, @j)!important;
      }
      .mgt-@{j}{
          .px2rpx(margin-top, @j)!important;
      }
      .mgb-@{j}{
          .px2rpx(margin-bottom, @j)!important;
      }
}
.mg(0);
.border(@name, @num, @color) {
    @{name}: @num * 1rpx solid @color;
}

.border-radius(@val) {
    -webkit-border-radius: @val * 1rpx;
    border-radius: @val * 1rpx;
}

.bdr(@i: 0) when (@i <=50) {
  .bdr(@i+1);
  @j: @i*2;

  .border-radius-@{j} {
    .border-radius(@j)
  }
}

.bdr(0);

.bd-none {
  border: none !important;
}

.border-radius-half {
  border-radius: 50% !important;
  -webkit-border-radius: 50% !important;
}

.transition {
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}

.translateY-50 {
    -webkit-transform: translateY(-50%)!important;
    transform: translateY(-50%)!important;
}

.translate-50 {
    -webkit-transform: translate3d(-50%, -50%, 0)!important;
    transform: translate3d(-50%, -50%, 0)!important;
	top: 50%;
	left: 50%;
}

// 文字超出省略号
.text-overflow(@num) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: @num; // @num 行数
}

.text-overflow-1 {
    .text-overflow(1);
}

.text-overflow-2 {
    .text-overflow(2);
}

.link{
  cursor: pointer;
}
.active-effect{
  cursor: pointer;
  &:active{
    opacity: 0.8;
  }
}

.grayscale{
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    opacity: .5;
}
.grayscale-reduction{
    -webkit-filter: grayscale(0%);
    -moz-filter: grayscale(0%);
    -o-filter: grayscale(0%);
    filter: grayscale(0%);
    opacity: 1;
}

// 文字渐变
.text-gradual-left-right(@color1, @color2, @color3) {
    background-image: -webkit-linear-gradient(right, @color1, @color2, @color3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.text-gradual-top-bottom(@color1, @color2, @color3) {
    background-image: -webkit-linear-gradient(bottom, @color1, @color2, @color3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.overflow-y-auto{
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
.overflow-x-auto{
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}
.overflow-hidden{
  overflow: hidden;
}
.overflow-visible{
	overflow: visible;
}
.hidden{
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
.text-nowrap{
	  white-space: nowrap;
}

.disabled {
    cursor: not-allowed!important;
    -webkit-box-shadow: none!important;
    box-shadow: none!important;
    pointer-events: none;
    filter: grayscale(1);
    opacity: 0.5;
}
.btn-disabled {
    cursor: not-allowed!important;
    -webkit-box-shadow: none!important;
    box-shadow: none!important;
    pointer-events: none;
    filter: grayscale(0.3);
    opacity: 0.5;
}

.inline-block{
  display: inline-block;
  vertical-align: middle;
}
.block{
  display: block;
}

/* 弹性布局盒模型 */
.flex {
    display: -moz-box;
    /* Firefox */
    display: -ms-flexbox;
    /* IE10 */
    display: -webkit-box;
    /* Safari */
    display: -webkit-flex;
    /* Chrome, WebKit */
    display: flexbox;
    display: flex;
}
.inline-flex{
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
.flex-none{
  flex: none;
}

.flex-auto{
  flex: auto;
}
.flex-shrink-0{
  flex-shrink: 0;
}

.com-list{
  display: grid;
  grid-template-columns: 1fr 1fr;
  .px2rpx(grid-column-gap, 20);
  .px2rpx(grid-row-gap, 20);
  &.columns-3{
    grid-template-columns: 1fr 1fr 1fr;
  }
  &.columns-4{
    grid-template-columns: 1fr 1fr 1fr 1fr;
    .px2rpx(grid-column-gap, 10);
    .px2rpx(grid-row-gap, 10);
  }
}

.img-cover{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.img-contain{
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.html-content {
    img,
    p,
    span,
    video {
        max-width: 100%!important;
    }
    img,video{
      height: auto!important;
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
.shade-white{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .1);
}

.dialog-middle {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1002;
    transform: translate3d(-50%, -50%, 0) scale(0);
    -webkit-transform: translate3d(-50%, -50%, 0) scale(0);
    .transition();
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
    .w-100();
    .transition();
    &.active {
        top: 0;
    }
}
.dialog-bottom {
    position: fixed;
    bottom: -100%;
    left: 0;
    z-index: 1002;
    .w-100();
    .transition();
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
.position-fixed{
  position: fixed;
  z-index: 100;
  transform:translateZ(0)!important;
  -webkit-transform: translateZ(0)!important;
  .transition();
}

.position-absolute{
  position: absolute;
  z-index: 100;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.position-relative{
  position: relative;
}

.z-index-0{
    z-index: 0;
}

.z-index-1{
  z-index: 1;
}

.z-index-3{
  z-index: 3;
}
.z-index-5{
  z-index: 5;
}
.z-index-9{
  z-index: 9;
}
.z-index-10{
  z-index: 10;
}
.z-index-11{
  z-index: 11;
}
.z-index-99{
  z-index: 99;
}
.z-index-100{
  z-index: 100;
}
.z-index-101{
    z-index: 101;
  }
.z-index-102{
  z-index: 102;
}
.z-index-999{
  z-index: 999;
}

.line-height-1{
	line-height: 1!important;
}

body{
	font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Segoe UI,Arial,Roboto,PingFang SC,miui,Hiragino Sans GB,Microsoft Yahei,sans-serif;
}

.page {
  width: 100%;
  min-height: 100vh;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
}

.click-effect{
	&:active{
		opacity: 0.8;
	}
}
```