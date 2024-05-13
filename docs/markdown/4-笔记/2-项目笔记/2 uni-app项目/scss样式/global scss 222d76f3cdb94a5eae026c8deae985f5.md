# global.scss

```scss
@mixin px2rpx($name, $px) {
	#{$name}: $px * 1rpx;
}

@mixin fontSize($px) {
	@include px2rpx(font-size, $px);
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
	width: 33.33333333%;
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
	#{$name}: $num * 1px solid $color;
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
.border-radius-2em {
	border-radius: 2em !important;
	-webkit-border-radius: 2em !important;
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

.link {
	cursor: pointer;
}

.active-effect {
	cursor: pointer;
	&:active {
		opacity: 0.75;
	}
}
.click-effect {
	cursor: pointer;
	&:active {
		background-color: rgba(200, 200, 200, 0.15) !important;
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
.show {
	opacity: 1;
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
.text-underline {
	text-decoration: underline;
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
	align-items: flex-start !important;
}

.flex-align-center {
	align-items: center !important;
}

.flex-align-end {
	align-items: flex-end !important;
}

.flex-justify-center {
	justify-content: center !important;
}

.flex-between {
	justify-content: space-between !important;
}

.flex-around {
	justify-content: space-around !important;
}

.flex-start {
	justify-content: flex-start !important;
}

.flex-end {
	justify-content: flex-end !important;
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
	@include px2rpx(grid-column-gap, 20);
	@include px2rpx(grid-row-gap, 20);
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
	line-height: 1.8;
	letter-spacing: 0.05em;
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

.backdrop-blur {
	backdrop-filter: blur(0.625rem);
	-webkit-backdrop-filter: blur(0.625rem);
	transform: translate3d(0, 0, 0);
}
.will-change-transform {
	will-change: transform, opacity;
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

page {
	font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
	font-size: 24rpx;
}

.status-bar {
	width: 100%;
	height: var(--status-bar-height);
}
.safe-area-inset-bottom {
	padding-bottom: 0;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
}

@mixin com-btn($color, $bgc) {
	width: 600rpx;
	height: 80rpx;
	background-color: $bgc !important;
	font-size: 30rpx;
	color: $color !important;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 16rpx;
	cursor: pointer;
	overflow: hidden;
	&.full {
		width: 100%;
	}
	&.round {
		border-radius: 80rpx;
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