# theme.less

```jsx
.theme(
	@c-primary: #56bf8f;
	@c-second: #79a293;
	@c-white: #ffffff;
	@c-white-light: rgba(255,255,255,0.6);
	@c-title: #171717;
	@c-desc: #a6a6a6;
	
	@bgc-base: #f5f5f5;
	@bgc-primary: #ffffff;
	@bgc-btn: #13e89c;
	@bgc-btn-dark: #07b481;
	@bgc-btn-light: #e7fdf5;
	
	@bd-base: #f5f6f7;
	
){
    .c-primary {
        color: @c-primary  !important;
    }
	.c-second{
		color: @c-second;
	}
	.c-white{
		color: @c-white;
	}
	.c-white-light{
		color: @c-white-light;
	}
	.c-title{
		color: @c-title;
	}
	.c-desc{
		color: @c-desc;
	}
	
	
	.bgc-base{
		background-color: @bgc-base;
	}
	.bgc-primary{
		background-color: @bgc-primary;
	}
	.bgc-btn{
		background-color: @bgc-btn;
	}
	.bgc-btn-dark{
		background-color: @bgc-btn-dark;
	}
	.bgc-btn-light{
		background-color: @bgc-btn-light;
	}
	
	
	.bd-base-bottom{
		.border(border-bottom, 1, @bd-base);
	}
	.bd-c-second{
		.border(border, 1, @c-second);
	}
	

}

// 默认
.theme-light {
    .theme();
	@imgUrl: '/static/images/theme_light';
	.line{
		background: ~"url(@{imgUrl}/icon/line.png)";
		background-repeat: repeat-x;
		background-position: 50%;
		background-size: auto 100%;
	}
	.bg-asset{
		background: ~"url(@{imgUrl}/img/tuoyuanbg.png)" no-repeat;
		background-size: 100% auto;
	}
	
}
```