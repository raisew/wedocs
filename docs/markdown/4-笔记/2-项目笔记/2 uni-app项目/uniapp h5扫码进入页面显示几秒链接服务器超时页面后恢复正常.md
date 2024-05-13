# uniapp h5扫码进入页面显示几秒链接服务器超时页面后恢复正常

**在manifest.json文件中引入**

![Untitled](uniapp%20h5%E6%89%AB%E7%A0%81%E8%BF%9B%E5%85%A5%E9%A1%B5%E9%9D%A2%E6%98%BE%E7%A4%BA%E5%87%A0%E7%A7%92%E9%93%BE%E6%8E%A5%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%B6%85%E6%97%B6%E9%A1%B5%E9%9D%A2%E5%90%8E%E6%81%A2%E5%A4%8D%E6%AD%A3%E5%B8%B8%20f7e738fc5f6b43c98682ac941b3f844d/Untitled.png)

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
components/AsyncLoadingNew/AsyncLoadingNew.vue

components/AsyncErrorNew/AsyncErrorNew.vue

import AsyncLoadingNew from "@/components/AsyncLoadingNew/AsyncLoadingNew"
import AsyncErrorNew from "@/components/AsyncErrorNew/AsyncErrorNew"

app.component('AsyncLoadingNew', AsyncLoadingNew)
app.component('AsyncErrorNew', AsyncErrorNew)

```

AsyncLoadingNew.vue

```jsx
<template>
	<mypage>
		<view class="w-100 h-100vh bgc-base flex flex-justify-center" style="padding-top: 15vh;">
			<u-loading mode="flower" size="80"></u-loading>
		</view>
	</mypage>

</template>

<script setup>

</script>

<style>

</style>
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