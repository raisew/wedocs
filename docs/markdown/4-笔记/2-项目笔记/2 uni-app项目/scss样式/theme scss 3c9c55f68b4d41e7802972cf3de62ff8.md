# theme.scss

```scss
@mixin theme(
	$c-primary: #257def,
	$c-second: #ffaf36,
	$c-text-1: #000000,
	$c-text-2: #333333,
	$c-text-3: #666666,
	$c-text-4: #999999,
	$c-text-5: #bec3cf,
	$c-red: #e9423c,
	$c-green: #4ec372,
	$c-black: rgba(0, 0, 0, 1),
	$c-white: rgba(255, 255, 255, 1),
	$c-footer: #747e98,
	$c-success: #4ec372,
	$c-fail: #ff0000,
	$c-wait: #ffa500,
	$bgc-base: #f6f6f6,
	$bgc-primary: #ffffff,
	$bgc-header: rgba(255, 255, 255, 0.95),
	$bgc-footer: rgba(255, 255, 255, 0.95),
	$bgc-dialog: #ffffff,
	$bd-input: #d9e4ff,
	$bd-base: #eeeeee,
	$bd-tag: rgba(37, 125, 239, 0.4),
	$btn-1: rgba(37, 125, 239, 0.2),
	$btn-2: #f5f9ff
) {
	.c-primary {
		color: $c-primary !important;
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
	.c-text-4 {
		color: $c-text-4;
	}
	.c-text-5 {
		color: $c-text-4;
	}
	.c-red {
		color: $c-red;
	}
	.c-green {
		color: $c-green;
	}
	.c-black {
		color: $c-black;
	}
	.c-white {
		color: $c-white;
	}
	.c-success {
		color: $c-success;
	}
	.c-fail {
		color: $c-fail;
	}
	.c-wait {
		color: $c-wait;
	}
	.bgc-base {
		background-color: $bgc-base;
	}
	.bgc-primary {
		background-color: $bgc-primary;
	}
	.bgc-c-primary {
		background-color: $c-primary !important;
	}
	.bgc-c-second {
		background-color: $c-second !important;
	}
	.bgc-header {
		background-color: $bgc-header !important;
	}
	.bgc-footer {
		background-color: $bgc-footer !important;
	}
	.bgc-c-red {
		background-color: $c-red;
	}
	.bgc-c-green {
		background-color: $c-green;
	}
	.bgc-dialog {
		background-color: $bgc-dialog;
	}
	.bgc-btn-1 {
		background-color: $btn-1;
	}
	.bgc-btn-2 {
		background-color: $btn-2;
	}
	.bd-base {
		border: 1px solid $bd-base;
		border-color: $bd-base;
	}
	.bd-base-left {
		border-left: 1px solid $bd-base;
	}
	.bd-base-right {
		border-right: 1px solid $bd-base;
	}
	.bd-base-bottom {
		border-bottom: 1px solid $bd-base;
	}
	.bd-input {
		border: 1px solid $bd-input;
	}
	.bd-tag {
		border: 1px solid $bd-tag;
	}

	.btn-default {
		@include com-btn($c-primary, $btn-1);
	}

	.btn-primary {
		@include com-btn($c-white, $c-primary);
	}
	:deep(.uicon-arrow-right) {
		color: $c-text-4 !important;
	}
	:deep(.u-input) {
		background-color: transparent !important;
	}
	:deep(.u-search .u-action) {
		color: $c-text-3 !important;
	}
	:deep(.uni-input-placeholder) {
		color: $c-text-5 !important;
	}
	:deep(.u-hairline-border::after) {
		border: none !important;
	}
}

.theme-light {
	@include theme();
	color: #333;
	.box-shadow-footer {
		// -webkit-box-shadow: 0px 0px 4px rgba(157.68, 160.15, 168.94, 0.25);
		// box-shadow: 0px 0px 4px rgba(157.68, 160.15, 168.94, 0.25);
		box-shadow: 0 0 0.9375rem 0 rgba(0, 0, 0, 0.07);
	}
	.shadow-bg {
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 80%);
	}
	.box-shadow-bg {
		-webkit-box-shadow: 0px -20rpx 50rpx rgba(161.91, 192.68, 232.69, 0.25);
		box-shadow: 0px -20rpx 50rpx rgba(161.91, 192.68, 232.69, 0.25);
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
		border: 1px dashed #c0ccda;
	}
	.myinput {
		&:focus {
			border-color: #257def !important;
		}
	}
	$imgUrl: '/static/images/theme_light';
	.bg-home {
		background: url(#{$imgUrl}/img/bg_home.png) no-repeat;
		background-size: 100% auto;
	}
	.bg-bill {
		background: url(#{$imgUrl}/img/bg_bill.png) no-repeat;
		background-size: 100% 100%;
	}
	.bg-invite {
		background: url(#{$imgUrl}/img/bg_invite.png) no-repeat 50% 50%;
		background-size: cover;
	}
}
```