# myfooter.vue 自用悬浮底部组件

```jsx
<template>
	<view>
		<view class="myfooter safe-area-inset-bottom" ref="myfooter" :style="{'z-index': zIndex}" :class="[className]">
			<slot></slot>
		</view>
		<view class="footer-placeholder safe-area-inset-bottom">
			<view :style="{'height': myfooterH + 'px'}"></view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		computed,
	} from "vue"
	const props = defineProps({
		zIndex: [String, Number],
		className: String,
	})
	const myfooter = ref(null)
	const myfooterH = computed(() => {
		let h = myfooter.value?.$el.offsetHeight;
		return h;
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