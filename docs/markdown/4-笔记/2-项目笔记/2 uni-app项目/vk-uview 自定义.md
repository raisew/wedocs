# vk-uview 自定义

## u-swiper

```jsx
// 修改选中点颜色

:deep(.u-indicator-item-round) {
		background-color: rgba(255, 255, 255, 0.4);
}

:deep(.u-indicator-item-round-active) {
		background-color: rgba(255, 255, 255, 1);
}
```

## vk-uview 在 `pages.json` 文件中写入 `easycom` 规则（插件市场导入方式无需写此规则）

```jsx
"easycom": {
	"autoscan": true,
	"custom": {
		"^u-(.*)": "vk-uview-ui/components/u-$1/u-$1.vue"
	}
},
```

u-button

```jsx
//scss样式重置
:deep(.u-hairline-border::after) {
	border: none !important;
}

//大按钮
<u-button ripple class="btn-primaryer full">
	<text>充值</text>
</u-button>

//小按钮
<view>
	<u-button ripple size="mini" shape="circle" class="bgc-c-primary-light"
		@click="Pub.toPage('/pages/index/lockDetail')">
		<text class="c-text-1 pdl-20 pdr-20">买入</text>
	</u-button>
</view>

```

底部悬浮

```jsx
<view class="position-fixed bottom-0 left-0 w-100 safe-area-inset-bottom bgc-base">
			<view class="pd-30">
				<u-button ripple class="btn-primary full">
					<text>购买</text>
				</u-button>
			</view>
		</view>
```