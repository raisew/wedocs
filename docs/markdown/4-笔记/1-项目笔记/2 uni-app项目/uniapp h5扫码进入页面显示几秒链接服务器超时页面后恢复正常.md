# uniapp h5 扫码进入页面显示几秒链接服务器超时页面后恢复正常

**在 manifest.json 文件中引入**

![](https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202405140904158.png)

```jsx
"async": { //页面js异步加载配置
      "loading": "AsyncLoadingNew", //页面js加载时使用的组件（需注册为全局组件）
      "error": "AsyncErrorNew", //页面js加载失败时使用的组件（需注册为全局组件）
      "delay": 200, //展示 loading 加载组件的延时时间（页面 js 若在 delay 时间内加载完成，则不会显示 loading 组件）
      "timeout": 3000 //页面js加载超时时间（超时后展示 error 对应的组件）
  }
```

新建两个组件

```
components/AsyncLoadingNew/AsyncLoadingNew.vue

components/AsyncErrorNew/AsyncErrorNew.vue
```

然后全局注册

```jsx
components / AsyncLoadingNew / AsyncLoadingNew.vue

components / AsyncErrorNew / AsyncErrorNew.vue

import AsyncLoadingNew from "@/components/AsyncLoadingNew/AsyncLoadingNew"
import AsyncErrorNew from "@/components/AsyncErrorNew/AsyncErrorNew"

app.component("AsyncLoadingNew", AsyncLoadingNew)
app.component("AsyncErrorNew", AsyncErrorNew)
```

AsyncLoadingNew.vue

```vue
<template>
  <mypage>
    <view class="w-100 h-100vh bgc-base flex flex-justify-center" style="padding-top: 15vh;">
      <u-loading mode="flower" size="80"></u-loading>
    </view>
  </mypage>
</template>

<script setup></script>

<style></style>
```

AsyncErrorNew.vue

```jsx
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
		window.location.reload();
		// #endif
	}
</script>

<style>

</style>
```
