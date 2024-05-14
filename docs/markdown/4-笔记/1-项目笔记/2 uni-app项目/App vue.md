# App.vue

```jsx
<script setup>
	import {
		onLaunch,
		onShow,
		onHide,
	} from "@dcloudio/uni-app"
	import {
		getCurrentInstance
	} from "vue"
	const {
		proxy
	} = getCurrentInstance();

	onLaunch(() => {
		console.log('App Launch')
		proxy.Pub.exitApp();
	})
	onShow(() => {
		console.log('App Show')
	})
	onHide(() => {
		console.log('App Hide')
	})
</script>

<style>
	@import 'animate.css';

	page {
		background-color: transparent;
		min-height: 100%;
		--animate-duration: 1s;
		--animate-delay: 1s;
		--animate-repeat: 1s;
	}
</style>
<style lang="scss">
	/*每个页面公共css */
	@import "@/uni_modules/vk-uview-ui/index.scss";
	@import "@/styles/scss/global.scss";
	@import "@/styles/scss/theme.scss";

	view,
	text {
		box-sizing: border-box;
	}

	.u-page {
		padding-bottom: 120rpx;
	}

	input {
		background-color: transparent;
	}

	:deep(.cropper-buttons) {
		z-index: 1001 !important;
	}
</style>
```