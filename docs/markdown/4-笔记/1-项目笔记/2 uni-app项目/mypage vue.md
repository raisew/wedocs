# mypage.vue

```jsx
<template>
	<view class="mypage" :class="`theme-${themeName}`">
		<view class="page bgc-base" :class="className">
			<slot></slot>
		</view>
	</view>
</template>

<script setup>
	import {
		useStore
	} from "vuex";
	import {
		computed
	} from "vue";
	const store = useStore();
	const themeName = computed(() => store.state.themeName);

	const props = defineProps({
		className: String
	})
</script>

<style lang="scss">
	.mypage {
		min-height: 100vh;
	}
</style>
```